---
title: Degree, Density, and Regularity
draft:
date: 2025-12-16
tags:
  - network
  - network-science
  - graph-theory
  - degree
---
## I. Vertex Degree

> [!definition]
> The **degree** $k_i$ of vertex $i$ is the number of edges connected to it.

| Formula                | Description                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| Degree in terms of $A$ | For an undirected graph of $n$ vertices: $$k_i=\sum_{j=1}^n A_{ij}$$                                       |
| Total edges            | The number of ends of edges is also equal to the sum of the degree of all vertices:$$2m=\sum_{i=1}^nk_i $$ |
| Mean degree $c$        | The mean degree $c$ of a vertex is:$$c=\frac{1}{n}\sum_{i=1}^nk_i=\frac{2m}{n} $$                          |

> [!definition] Regular Graphs
> Networks where all vertices have the same degree $k$ are called $k$-regular graphs.

## II. Connectance and Density

>[!definition] Connectance (density)
>The **connectance** or **density** $\rho$ of a graph is the fraction of all possible edges that are actually present.
>$$
>\rho = \frac{m}{\binom{n}{2}}=\frac{2m}{n(n-1)}=\frac{c}{n-1}
>$$

> [!tip] Properties
> **Dense networks**: Networks where $\rho$ tends to a constant as $n\to\infty$.
>
>**Sparse networks**: Networks where $\rho\to 0$ as $n\to\infty$ (i.e., the mean degree $c$ tends to a constant). Most real-world networks studied are considered sparse.
>

> [!definition] Occasionally connectance
> Occasionally connectance is defined as 
> $$
> \rho = \frac{m}{n^2},
> $$
> which for large networks differs from the above equation about a factor of 2. With that definition,
> $$
> 0\leq\rho\leq \frac{1}{2}
> $$

## III. Degrees in Directed Networks
In a directed network, each vertex has two degrees:

| Measure                         | Definition                                      | Formula                               |
| ------------------------------- | ----------------------------------------------- | ------------------------------------- |
| In-degree ($k_i^{\text{in}}$)   | Number of edges pointing *to* vertex $i$        | $k_i^{\text{in}}=\sum_{j=1}^nA_{ij}$  |
| Out-degree ($k_j^{\text{out}}$) | Number of edges pointing *away* from vertex $j$ | $k_j^{\text{out}}=\sum_{i=1}^nA_{ij}$ |
> [!tip] Equality
> The total number of edges $m$ is equal to the sum of all in-degrees and the sum of all out-degrees. Consequently, the mean in-degree and mean out-degree are always equal 
> $$
> c^{\text{in}}=c^{\text{out}}=c
> $$

> [!definition] Mean degree (directed)
> $$
> c=\frac{m}{n}
> $$

