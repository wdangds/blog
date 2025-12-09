---
title: Baseline vs Random Walk in Logistic Regression
draft:
tags:
  - random-walk
  - logistic-regression
  - "#graph"
  - "#GNN"
  - classification
---
> [!summary]
> Our goal is to test whether adding random-walk (RW) features (return probabilities + hitting times to "anchor" nodes) significantly improves a simple classifier vs. attributes alone.
> 
> **Plan**:
> - Baseline: Logistic Regression (LR) on attributes
> - Treatment: LR on attributes + RW features.
> - Repeat over several random seeds; test $\delta$ (treatment - baseline) with paired tests.

## 1. Load graph

```python
import os, pathlib
import numpy as np
import networkx as nx
import pandas as pd
from dataclasses import dataclass

from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, f1_score
from scipy.stats import ttest_rel, wilcoxon

from torch_geometric.datasets import Planetoid
```

```python
@dataclass
class GraphData:
	X: np.ndarray
	y: np.ndarry
	G: nx.Graph
	train_mask: np.ndarray
	val_mask: np.ndarray
	test_mask: np.ndarray
	
def load_planetoid(name="Cora") -> GraphData:
	root = str((pathlib.Path.cwd().parent if pathlib.Path.cwd().name = "notebooks" else pathlib.Path.cwd()) / "data")
	dataset = Planetoid(root = root, name = name)
	data = dataset[0]
	
	X = data.x.cpu().numpy().astype(np.float32)
	y = data.y.cpu().numpy()
	N = X.shape[0]
	G = nx.Graph()
	G.add_nodes_from(range(N))
	edges = data.edge_index.t().cpu().numpy()
	G.add_edges_from(map(tuple, edges))
	train = data.train_mask.cpu().numpy()
	val = data.val_mask.cpu().numpy()
	test = data.test_mask.cpu().numpy()
	return GraphData(X, y, G, train, val, test)
```

The detail about Cora dataset has been discussed [[Replicating a Simple GNN on Cora#1. Load Cora & inspect|here]].

## 2. Random-walk feature
## a. Matrix (Markov) view
Let $A$ be adjacency, $D=\text{diag}(d_i)$ degrees, we defines the *row-stochastic* transition:

> [!define] Row-stochastic transition
> $$
> P=D^{-1}A, \quad P_{i,j}=\text{Pr}(X_{t+1}=j|X_t=i)=\frac{A_{ij}}{d_i}
> $$ 
> *Interpretation*: A (simple) **random walk** at node $i$ picks a **uniform** neighbor at the next step. If $i$ has $d_i$ neighbors, each neighbor is picked with probability $\frac{1}{d_i}$.

For **undirected, connected, non-bipartite** graphs, $P$ has a **unique [[Stationary distributions|stationary distribution]] $\pi$** with
$$
\pi_i=\frac{d_i}{\sum_v d_v}, \quad \pi^\top P =\pi^\top
$$

> [!definition] Return Probability
> Let $RP_k(i)$ be the **probability** that a walker started at $i$ is **back at** $i$ **after** $k$ **steps**.
> $$
> RP_k(i)=(P^k)_ii
> $$


> 
