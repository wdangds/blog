---
title: Connectivity and Paths
draft:
tags:
  - network-science
  - graph-theory
  - connectivity
  - path
date: 2026-12-16
---
## I. Path

> [!definition]
> A **path** is a sequence of vertices connected by edges.
> - **Length**: The number of edges traversed.
> - **Self-avoiding path**: A path that does not intersect itself.
> - **Geodesic Path (Shortest Path)**: A path between two vertices with the shortest possible length. Geodesic paths are always self-avoiding.
> - **Geodesic Distance (Shortest Distance)**: The length of the geodesic path.
> - **Diameter**: The length of the longest geodesic path between any pair of connected vertices in the network.

![[path.png]]
<small>Fig: A path of length three in a network</small>

## II. Path Counting and Eigenvalues

> [!definition] Number of paths of a given length
> The number of paths of a given length $r$ between vertices $j$ and $i$ is found using matrix multiplication:
> $$
> N_{ij}^{(r)}=[\mathbf{A}^r]_{ij}
> $$

> [!hint]- Proof
> **Base case** $r=1$.
> $$
> (\mathbf{A}^1)_{ij}=A_{ij}
> $$
> which by definition is exactly the number of length-1 walks (single edges) from $u$ to $v$.
>
> **Inductive step**. Assume the statement holds for some $r\geq 1$, i.e., $(\mathbf{A}^r)_{ik}$ equals the number of length-$r$ walks from $i$ to $k$. Consider $r+1$:
> $$
> \mathbf{A}^{r+1}=\mathbf{A}^r\mathbf{A}
> $$
> The $(i,j)$ entry of a product is
> $$
> (\mathbf{A}^{r+1})_{ij}=(\mathbf{A}^r\mathbf{A})_{ij}=\sum_{k}^n(\mathbf{A}^r)_{ik}A_{kj}
> $$
> Interpretation of each term:
> - $(\mathbf{A}^r)_{ik}=$ number of ways to walk from $i$ to $k$ in $r$ steps (induction hypothesis),
> - $A_{kj}=$ number of edges from $k$ to $j$ (ways to take the last step).
>
> So $(\mathbf{A}^r)_{ik}A_{kj}$ counts the number of length-$(r+1)$ walks from $i$ to $j$ whose **second-to-last** vertex is $k$. Summing over all $k$ counts all possible length-$(r+1)$ walks from $i$ to $j$. Thus $(\mathbf{A}^{r+1})_{ij}$ is the number of length-$(r+1)$ walks from $i$ to $j$.
>
> By induction, the claim holds for all $r\geq 1$.

> [!example]-
> Take the undirected path graph $1-2-3$. Its adjacency matrix is
> $$
> A=\begin{bmatrix}
> 0&1&0\\
> 1&0&1\\
> 0&1&0\\
> \end{bmatrix}
> $$
> Compute $A^2=AA$:
> $$
> A^2=\begin{bmatrix}
> 1&0&1\\
> 0&2&0\\
> 1&0&1\\
> \end{bmatrix}
> $$
> Now read entries as "# of length-2 walks":
> - $(A^2)_{1,3}=1$: exactly one length-2 walk from $1$ to $3$: $1\to2\to3$.
> - $(A^2)_{2,2}=2$: two length-2 walks from $2$ back to $2$: $2\to1\to2$ and $2\to3\to2$.
> - $(A^2)_{1,1}=1$: one length-2 walk from $1$ back to $1$: $1\to2\to1$.
> 
> We can also see the matrix-multiple county directly, e.g.
> $$
> (A^2)_{1,3}=\sum_{k=1}^3 A_{1k}A_{k3}=A_{12}A_{23}=1\cdot 1 =1,
> $$
> because the only possible middle vertex for a 2-step walk from $1$ to $3$ is $k=2$.

> [!definition] The total number of loops of given length
> The total number of loops (cycles) of length $r$ in the network is the trace of $A^r$:
> $$
> L_r=\sum_{i=1}^n[\mathbf{A}^r]_{ii}=\text{Tr}(\mathbf{A}^r)
> $$

This quantity can also be expressed in terms of the eigenvalues $\kappa_i$ of the adjacency matrix
$$
L_r=\sum_{i}\kappa_i^r
$$
## III. Special Paths

> [!definition] Eulerian Path
> A path that traverses each edge in the network exactly once.

> [!definition] Hamiltonian Path
> A path that visits each vertex exactly once (self-avoiding).

