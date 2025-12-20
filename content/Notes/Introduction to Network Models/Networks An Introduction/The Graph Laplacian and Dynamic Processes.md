---
title: The Graph Laplacian and Dynamic Processes
date: 2025-12-18
draft:
tags:
  - graph-theory
  - graph
  - graph-laplacian
  - eigenvalues
  - random-walk
  - stationary-distribution
  - resistor-networks
---
## I. The Graph Laplacian

> [!definition] Graph Laplacian
> The **graph Laplacian** $\mathbf{L}$ is a symmetric matrix closely related to the adjacency matrix. It is central to modeling diffusion and random walks on networks.
> $$
> \mathbf{L}=\mathbf{D}-\mathbf{A}
> $$
> where $\mathbf{D}$ is the diagonal matrix of vertex degrees ($D_{ii}=k_i$), and $\mathbf{A}$ is the adjacency matrix.

Written out in full, the elements of the Laplacian matrix are
$$
L_{ij}=\begin{cases}
k_i&\text{if }i=j,\\
-1& \text{if }i\neq j \text{ and there is an edge } (i,j),\\
0&\text{otherwise}.
\end{cases}
$$
so it has the degrees of the vertices down its diagonal and a $-1$ element for every edge.

> [!tip] Application - Diffusion
> The time evolution of the amount of a commodity $\psi_i$ at vertex $i$ undergoing diffusion is modeled by:
> $$
> \frac{\mathrm{d}\psi}{\mathrm{d}t}+C\mathbf{L}\psi=0
> $$

We can solve the diffusion equation by writing the vector $\psi$ as a linear combination of the eigenvector $\mathbf{v}_i$ of the Laplacian thus:
$$
\psi(t)=\sum_ia_i(t)\mathbf{v}_i
$$
with the coefficients $a_i(t)$ varying over time. Substituting this from into the diffusion equation and making use of $\mathrm{L}\mathbf{v}_i=\lambda_i\mathbf{v}_i$, where $\lambda_i$ is the eigenvalue corresponding to the eigenvector $\mathbf{v}_i$, we get
$$
\sum_i\left(\frac{\mathrm{d}a_i}{\mathrm{d}t}+C\lambda_ia_i\right)\mathbf{v}_i=0
$$
for all $i$, which has the solution 
$$
a_i(t)=a_i(0)e^{-C\lambda_it}
$$
Given an initial condition for the system, as specified by the quantities $a_i(0)$, therefore, we can solve for the state at any later time, provided we know the eigenvalues and eigenvectors of the graph Laplacian.

## II. Laplacian Eigenvalues

The Laplacian is a symmetric matrix with real eigenvalues $\lambda_i$.

> [!tip] Properties
> Non-negativity: All eigenvalues of $\mathbf{L}$ are non-negative ($\lambda_i\geq 0$).
>
> Lowest eigenvalue: The lowest eigenvalue is always zero, $\lambda_1=0$, with the eigenvector $\mathbf{1}=(1,1,\dots)$.
>
> Number of zero eigenvalues: The number of zero eigenvalues is equal to the number of connected components $(c)$ in the network.
>
> Algebraic connectivity: The second eigenvalue $\lambda_2$ is called the *algebraic connectivity*. It is non-zero if and only if the network is connected.

### III. Random Walks

> [!definition]
> A **random walk** is a path where, at each step, an edge is chosen uniformly at random from those attached to the current vertex.

> [!tip] Stationary Distribution (Long-time limit)
> On a connected network, the probability $p_i$ that a random walk is found at vertex $i$ is proportional to its degree:
> $$
> p_i=\frac{k_i}{\sum_jk_j}=\frac{k_i}{2m}
> $$

**First passage time**: the mean first passage time $\tau$ for a random walk from vertex $u$ to vertex $v$ can be calculated using the inverse of the reduced Laplacian $\mathbf{L}'$.

## IV. Resistor Networks
The flow of current in a network where edges are identical resistors and vertices are junctions is governed by Kirchoff's current law, which can be expressed using the Laplacian
$$
\mathbf{LV}=R\mathbf{I}
$$
where $\mathbf{V}$ is the voltage vector, $R$ is the resistance, and $\mathbf{I}$ is the vector of injected external currents. Since $\mathbf{L}$ is singular (zero eigenvalue), this equation is typically solved using the inverse of the reduced Laplacian $\mathbf{L}'$.
