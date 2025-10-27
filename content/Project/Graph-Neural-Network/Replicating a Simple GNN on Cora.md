---
title: Replicating a Simple GNN on Cora
draft:
tags:
  - GNN
  - Cora
  - machine-learning
  - neural-network
date: 2025-10-27
---
We're solving **node classification** on a [[Notes/Graph Theory/index|graph]]: each node (paper) has features (bag-of-words) and a label (topic). We want a model that predicts a node's label using both its features and graph's connections.

[[Introduction to Logistic Regression|Logistic regression]] or a [[The Basics of Decision Trees|decision tree]] uses **only the row's features**. But on graphs, who we're connected to matters (homophilly: connected nodes often share labels). A GNN layer explicitly *aggregates neighbor information* before classifying - so it's like "logistic regression on denoised/neighbor-aware features".

```python
import os, random, time, math, pathlib
import numpy as np

import torch
from torch import nn
from torch.nn import functional as F
from torch_geometric.datasets import Planetoid
from torch_geometric.nn import GCNConv

from sklearn.metrics import f1_score
import pandas as pd

from dataclasses import dataclass
```

```python
def set_seeds(seed=42):
	random.seed(seed)
	np.random.seed(seed)
	torch.manual_seed(seed)
	torch.cuda.manual_seed_all(seed)
	torch.backends.cudnn.deterministic = True
	torch.backends.cudnn.benchmark = False
	
DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")
set_seeds(42)
```

## 1.  Load Cora & inspect

```python
# Dataset root
root = str((pathlib.Path.cwd().parent if pathlib.Path.cwd().name=="notebooks" else pathlib.Path.cwd()) / "data")

dataset = Planetoid(root=root, name="Cora")
data = dataset[0].to(DEVICE)

print(dataset)
print(f"Nodes: {data.num_nodes}")
print(f"Edges (undirected): {data.num_edges//2}")
print(f"Node features (dim): {dataset.num_node_features}")
print(f"Num classes: {dataset.num_classes}")
print("Split sizes (train/val/test):",
	int(data.train_mask.sum()),
	int(data.val_mask.sum()),
	int(data.test_mask.sum()))
```

```output
Cora() 
Nodes: 2708 
Edges (undirected): 5278 
Node features (dim): 1433 
Num classes: 7 
Split sizes (train/val/test): 140 500 1000
```

> **Graph data structures**

`data.x` $\in \mathbb{R}^{n\times d}$: node feature matrix (n=nodes, d=features)

```python
print(data.x[0])
print(data.x.shape)
```

```output
tensor([0., 0., 0., ..., 0., 0., 0.,])
torch.Size([2708, 1433])
```
`data.y` $\in \{0,...,C-1\}^n$: node labels (C classes)

```python
print(data.y[0])
print(data.y.shape)
```

```output
tensor(3)
torch.Size([2708])
```

`data.edge_index` $\in \mathbb{N}^{2\times m}$: coordinate list edges, each column is an edge (source -> target)

```python
print(data.edge_index[:,0]) # first column
print(data.edge_index.shape) # 2 rows, 10556 columns
```

```output
tensor([633, 0])
torch.Size([2, 10556])
```

`train_mask`, `val_mask`, `test_mask` are boolean vectors of length $n$.

```python
print(data.train_mask.shape)
```

```output
torch.Size([2708])
```

## 2. Define a minimal GCN model
This is the core theory. A **GCN layer** takes current node representations and returns updated ones by **mixing neighbors' information**.
## a. Matrix view 
For an undirected graph with adjacency $A$ and degree matrix $D$, the (normalized) Laplacian is
$$
\mathcal{L}=I-D^{-\frac{1}{2}}AD^{-\frac{1}{2}}
$$
For a graph with (normalized) Laplacian, its **Eigendecomposition**:
$$
\mathcal{L}=U\Lambda U^\intercal
$$
where:
- $U\in \mathbb{R}^{n\times n}$ has orthonormal **eigenvectors** (graph Fourier basis).
- $\Lambda=\text{diag}(\lambda_1, \dots, \lambda_n)$ has **eigenvalues** (graph frequencies).

A **graph Fourier transform (GFT)** of a signal $x\in \mathbb{R}^n$ is:
$$
\hat{x}=U^\intercal x, \qquad x=U\hat{x}
$$
- Intuition: each column $u_k$ of $U$ is a "frequency mode" on the graph; projecting onto it gives the amplitude at that "frequency".

For **node features** $X\in \mathbb{R}^{n\times d}$ ($d$ channels):
$$
\widehat{X}=U^\intercal X \quad\text{(apply per column)}, \qquad X=U\widehat{X}
$$
On graph, the notion of "shifting" a signal is tied to an operator that encodes the graph's structure (e.g, $\mathcal{L}$ or $A$). A **linear, shift-invariant** graph filter is one that **commutes** with $\mathcal{L}$ and (equivalently) is a **function of $\mathcal{L}$**: 
$$
g_\theta * X=U\, g_\theta(\Lambda)U^\intercal X
$$
where:
- $U^\intercal X$: graph Fourier transform (to spectral domain)
- $g_\theta(\Lambda)$: **diagonal** matrix; the $k$-th diagonal entry is $g_\theta(\lambda_k)$. This **scales each frequency independently**.
- $U(\cdot)$: inverse GFT (back to nodes).

If we keep one feature channel, we can view $g_\theta(\Lambda)$ as a length-$n$ vector of learnable gains, one per eigenvalue/frequency.

Computing $U$ (full eigenvectors) is $O(n^3)$ - too expensive for large graphs. We need a version that avoids explicit eigendecomposition.

Approximate $g_\theta(\lambda)$ by a **low-degree polynomial**:
$$
g_\theta(\lambda)\approx \sum_{k=0}^K\theta_k T_k(\tilde{\lambda})
$$
where $T_k$ are Chebyshev polynomials (or simply powers) of the **rescaled** eigenvalues $\tilde{\lambda}$.

Because $U f(\Lambda)U^\intercal=f(\mathcal{L})$, this implies:
$$
g_\theta *X \approx \sum_{k=0}^K\theta_k\mathcal{L}^kX
$$
**Key payoff**: $\mathcal{L}^k X$ mixes information over **k-hop neighborhoods** without eigenvectors. So a **polynomial in** $\mathcal{L}$ is a **localized** filter.

The **GCN** uses a **first-order** approximation ($K=1$) and a stabilizing **renormalization** with self-loops:
$$
\hat{A}=A+I, \quad \hat{D}_{ii}=\sum_j\hat{A}_{ij}
$$
Then the **GCN layer** becomes:
$$
H^{(l+1)}=\sigma(\underbrace{\hat{D}^{-\frac{1}{2}}\hat{A}\hat{D}^{-\frac{1}{2}}}_{\text{normalized neighbor averaging}}H^{(l)}W^{(l)})
$$
where:
- $H^{(0)}=X$,
- $W^{(l)}$ are trainable weights,
- $\sigma$ is a nonlinearity (ReLU)

> [!tip] Intuition vs. logistic regression
> - Logistic regression: $\hat{y}=\text{softmax}(xW)$ on each node separately.
> - GCN: first cheaply **smooths** each node's features by its neighborhood (the normalized $\hat{A}$ term), then applies a linear transform and nonlinearity. We can think of it as learning on **context-aware features**.

### b. Message-passing view
For each node $i$, let $\mathcal{N}(i)$ be its neighbors (including $i$ itself with self-loop). A simplified per-node cartoon:
1. **Message from neighbor $j$ to $i$**:
$$
m_{j\to i}^{(l)}=\frac{1}{\sqrt{\hat{d}_i\hat{d}_j}}h^{(l)}_j
$$
2. **Aggregate messages (sum/avg)**:
$$
\tilde{h}_i^{(l)}=\sum_{j\in \mathcal{N}(i)}m^{(l)}_{j\to i}
$$
3. **Update with learnable transform + nonlinearity**:
$$
h_i^{(l+1)}=\sigma(\tilde{h}_i^{(l)}W^{(l)})
$$

Stacking 2 layers lets information flow **two hops** away, etc.

> [!example] 
> Suppose node $i$ has neighbors $j$ and $k$ (plus itself). Current 3-dim features:
> $$
> h_i^{(l)}=[1,0,0],\quad h_j^{(l)}=[0,1,0],\quad h_k^{(l)}=[0,0,1]
> $$
> If degrees are similar, the normalized aggregate is roughly the **average**:
> $$
> \tilde{h}_i^{(l)}\approx \frac{h_i^{l}+h_j^{l}+h_k^(l)}{3}=[\frac{1}{3},\frac{1}{3},\frac{1}{3}]
> $$
> Then multiply by $W^{(l)}$ and apply ReLU.
>
> **Takeaway**: even if $i$'s own features miss a signal, the **neighbors inject signal** that improves classification.


> [!info] Why self-loops and normalization?
> **Self-loops** (adding $I$) ensure our own feature also contributes every layer (we don't "forget ourself" when averaging).
> 
> **Symmetric normalization** $\hat{D}^{-\frac{1}{2}}\hat{A}\hat{D}^{-\frac{1}{2}}$ prevents high-degree nodes from overwhelming their low-degree neighbors and keeps the operator well-scaled (helps convergence and stability).

```python
class GCN(nn.Module):
	def __init__(self, in_dim, hidden_dim, out_dim, dropout=0.5, num_layers=2):
		super().__init__()
		assert num_layers in [2,3], "For this trial, keep it 2 or 3 layers."
		self.convs = nn.ModuleList()
		self.convs.append(GCNConv(in_dim, hidden_dim))
		if num_layers == 3:
			self.convs.append(GCNConv(hidden_dim, hidden_dim))
		self.convs.append(GCNConv(hidden_dim, out_dim))
	self.dropout = dropout
	
	def forward(self, x, edge_index):
		for i, conv in enumerate(self.convs):
			x = conv(x, edge_index) # message passing + linear transform
			if i < len(self.convs) -1: # not on the last layer
				x = F.relu(x)
				x = F.dropout(x, p = self.dropout, training=self.training)

		return x # logits (one score per class)
```

## 3. Training utilities and early stopping

```python
@dataclass
class TrainCfg:
	hidden_dim: int = 64 # width of hidden embedding per node
	lr: float = 0.01 # adam learning rate
	weight_decay: float = 5e-4 # L2 reg; combats overfitting on small graphs
	dropout: float = 0.5 # dropout prob between GCN layers
	num_layers: int = 2 # 2 (or 3) GCN layers
	max_epochs: int = 500 # training budget
	patience: int = 50 # stop if val accuracy doesn't improve
```

Here we introduce a L2 regularization `weight_decay`: it adds $\lambda ||W||_{2}^2$ to the objective $\rightarrow$ reduces variance/overfit.

We then train/evaluate on **subsets** of nodes (train/val/test) without mixing them.

```python
def accuracy_from_logits(logits, y, mask):
	pred = logits.argmax(dim = -1) # choose highest logit per node
	return (pred[mask]==y[mask]).float().mean().item()
```

### a. Build model and optimizer
```python
def train_one(cfg: TrainCfg, data):
	set_seeds(42)
	model = GCN(
		in_dim = data.num_node_features, # feature dimension
		hidden_dim = cfg.hidden_dim, 
		out_dim = int(data.y.max().item()) + 1, # (num classes)
		dropout = cfg.dropout,
		num_layers = cfg.num_layers
	).to(DEVICE)
```

```python ln:10

```