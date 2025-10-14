---
title: The Degree of a Vertex
tags:
  - degree
  - vertex
  - graph
draft:
date: 2025-10-14
---
Let's define a simple graph:
$$
G=(V,E),\quad V=\{A,B,C,D,E\}, E=\{\{A,B\},\{A,C\},\{B,C\},\{B,D\},\{C,E\}\}
$$

Visualization:

![[ex-1.3.1.svg]]
## 1. Local and Global Metrics
> [!definition] Degree
> The **degree** (or **valency**) of a vertex $v$ is the number of edges touching it.
>
> Notation: $d(v)=|E(v)|$


| Vertex | Edges at $v$ | $d(v)$ |
| ------ | ------------ | ------ |
| A      | AB, AC       | 2      |
| B      | BA, BC, BD   | 3      |
| C      | CA, CB, CE   | 3      |
| D      | DB           | 1      |
| E      | EC           | 1      |

>[!definition] Isolated Vertex
>A vertex with degree 0.

Here, we don't have any isolated vertex - every vertex has at least one edge. If we added $F$ with no connections, $d(F)=0$ and $F$ would be *isolated*.

> [!definition] Minimum and Maximum Degree
> $$
> \delta(G):=\min\{d(v)|v\in V\}, \quad \Delta(G):=\max\{d(v)|v\in V\}
> $$

$\delta(G)=\min\{d(v)\}=1$, $\Delta(G)=\max\{d(v)\}=3$.

> [!definition] Regular Graph
> A graph where all vertices have the same degree $k$ is called a $k$-regular graph.
> > [!example]
> > - $K_3$: triangle $\rightarrow$ each vertex has a degree 2 $\rightarrow$ 2-regular.
> > - Cube graph $\rightarrow$ each vertex degree 3 $\rightarrow$ 3-regular (cubic graph)

Our graph *is not regular* because degrees differ.

## 2. Average Degree and Edge Count
> [!definition] Average Degree
> $$
> \overline{d}(G)=\frac{1}{|v|}\sum_{v\in V}d(v)
> $$
> Relationship: $\delta(G)\leq \overline{d}(G)\leq \Delta(G)$

$\overline{d}(G)=\frac{1}{|v|}\sum_{v\in V}d(v)=\frac{2+3+3+1+1}{5}=\frac{10}{5}=2\Rightarrow$ Average degree = 2.

> [!definition] Edge Density Ratio
> $$
> \epsilon (G)=\frac{|E|}{|V|}=\frac{1}{2}\overline{d}(G)
> $$

$\epsilon(G)=\frac{|E|}{|V|}=\frac{5}{5}=1=\frac{1}{2}\overline{d}(G)$

> [!definition] Handshaking Lemma
> Summing all vertex degrees counts every edge exactly twice.
> $$
>|E|=\frac{1}{2}\sum_{v\in V}d(v)=\frac{1}{2}d(G)\cdot|V|
> $$


## 3. Key Propositions on Degree
> [!important] Proposition 1.2.1 (Odd Degree Vertices)
> The number of vertices of odd degree in a graph is **always even**.

Odd degrees here: B(3) and C(3) $\rightarrow$ 2 odd-degree vertices (even number).

If we added vertex $F$ with degree 1, we'd need another vertex of degree 1 or 3 to keep the total even.

> [!important] Proposition 1.2.2 (Dense Subgraphs)
> Every graph $G$ with at least one edge has a subgraph $H$ such that $\delta(H) > \epsilon(H)\geq \epsilon (G)$

> Explanation: This subgraph $H$ is constructed by iteratively deleting vertices $v$ whose degree $d(v)$ is less than or equal to the current average degree $\epsilon (G_i)$. This process ensures the edge density ratio ($\epsilon$) does not decrease, and the resulting graph $H$ must have a minimum degree strictly greater than its own average degree.

Here $\epsilon(G)=1$. Let's find a subgraph $H$ with $\delta(H)>1$.

Consider $H$ on vertices $\{A,B,C\}$, edges = $\{AB, AC, BC\}$. Then degrees in $H=(2,2,2)\rightarrow \delta(H)=2>\epsilon(G)=1$.

