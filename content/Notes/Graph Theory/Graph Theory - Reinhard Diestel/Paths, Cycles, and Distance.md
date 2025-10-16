---
title: Paths, Cycles, and Distance
tags:
  - "#path"
  - "#cycle"
  - "#distance"
  - "#graph"
draft:
date: 2025-10-14
---
Let's define a small connected graph:
$$
V(G)=\{A,B,C,D,E\}, \quad E(G)=\{\{A,B\},\{B,C\},\{C,D\},\{D,E\},\{B,E\}\}
$$

Visualization:

![[ex-1-4.1.svg]]

## 1. Paths and Walks

> [!definition] Walk
> A walk is a non-empty alternating sequence $v_0e_0v_1e_1\dots e_{k-1}v_k$ of vertices and edges. If $v_0=v_k$ the walk is **closed**.

Example walk: $A\rightarrow B \rightarrow C \rightarrow D \rightarrow E \rightarrow B \rightarrow A$

![[ex-1-4.2.svg]]


> [!definition] Path
> A non-empty graph $P=(V,E)$ defined by $V=\{x_0, \dots, x_k\}$ and $E=\{x_0x_1,\dots, x_{k-1}x_k\}$ where all vertices $x_i$ are distinct is called a **path**.
> - **Length**: $k$, the number of edges. A path of length $k$ is denoted by $P^k$. 
> - **Ends**: $x_0$ and $x_k$. **Inner vertices**: $x_1,\dots, x_{k-1}$.

Example path: $A\rightarrow B \rightarrow C \rightarrow D \rightarrow E$

![[ex-1-4.3.svg]]

> [!definition] A-B Path
> $P=\{x_0\dots x_k\}$ such that $V(P)\cap A=\{x_0\}$ and $V(P)\cap B=\{x_k\}$.

For $A=\{A\}$, $B=\{E\}$, the above is an $A-B$ path.

> [!definition] Independent Paths
> Paths where none contains an inner vertex of another.


## 2. Cycles, Girth, and Circumference

> [!definition] Cycle
> If $P=x_0\dots x_{k-1}$ is a path and $k\geq 3$, the graph $C:=P+x_{k-1}x_0$ is a *cycle*.
> - A cycle of length $k$ is a $k$-cycle and denoted $C_k$
> - *Odd Cycle*: A cycle of odd length.

Construct a path $B-C-D-E-B$ have length = 4 $\rightarrow C_4$. 

![[ex-1-4.4.svg]]
If we add edge $A-C$, we could have $A-B-C-A$, a 3-cycle ($C_3$) $\rightarrow$ odd cycle (length 3)

![[ex-1-4.5.svg]]
> [!definition] Girth and Circumference
> - **Girth** $g(G)$: The minimum length of a cycle in $G$ ($\infty$ if no cycles exist).
> - **Circumference** $c(G)$: The maximum length of a cycle in $G$ (0 if no cycles exist).

Our $G$ has 4-cycle ($B-C-D-E-B$), no 3-cycle $\rightarrow$ $g(G)=4$.

> [!definition] Chord
> An edge joining two vertices of a cycle that is not itself part of the cycle.

In our 4-cycle $B-C-D-E-B$, an extra edge $B-D$ would be a *chord*.

![[ex-1-4.6.svg]]

> [!definition] Induced Cycle
> A cycle that has no chords (forms an induced subgraph).

Our $B-C-D-E-B$ is *induced* since no $B-D$ or $C-E$ edges exists.
## 3. Distance and Diameter

> [!definition] Distance
> The length of a shortest $x-y$ path in $G$ ($\infty$ if no path exists).

| Pair | Shortest path | $d_G(x,y)$ |
| ---- | ------------- | ---------- |
| A, E | A-B-E         | 2          |
| B, D | B-C-D         | 2          |
| A, D | A-B-C-D       | 3          |

> [!definition] Diameter
> The greatest distance between any two vertices in $G$, denoted by $\text{diam}(G)$ 

The farthest are $A$ and $D$ $\rightarrow \text{diam}(G)=3$.

> [!definition] Radius
> The radius is the *minimum* value of $max_{y\in V(G)}d_G(x,y)$ over all $x\in V(G)$. $x$ achieving this minimum is a **central vertex**.

> Idea: Pick each vertex, find its maximum distance to others, then take the smallest of those values.

| Vertex | Farthest distance |
| ------ | ----------------- |
| A      | to D = 3          |
| B      | to D = 2          |
| C      | to E = 2          |
| D      | to A = 3          |
| E      | to C = 2          |

$\rightarrow \min=2 \Rightarrow \text{rad}(G)=2$. Central vertices = B, C, E.

> [!note] Distance Relations
> $$
> \text{rad}(G)\leq \text{diam}(G)\leq 2\text{rad}(G)
> $$

> [!important] Proposition 1.3.1 ([[The Degree of a Vertex#1. Local and Global Metrics|Minimum Degree]] and Paths/Cycles)
> Every graph $G$ contains a path of length $\delta(G)$ and a cycle of length at least $\delta(G)+1$ (if $\delta(G)\geq 2$)

> [!important] Proposition 1.3.2 (Minimum Degree and Paths/Cycles)
> Every graph $G$ containing a cycle satisfies $g(G)\leq 2\text{diam}(G)+1$.

> [!important] Proposition 1.3.3 (Radius, Max Degree, Order)
> A graph $G$ of radius at most $k$ and maximum degree at most $d$ has at most $1+kd^k$ vertices.


