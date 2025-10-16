---
title: Connectivity
draft:
tags:
  - graph
---
## 1. Connectedness and Components
A non-empty graph $G$ is **connected** if any two of its vertices are linked by a path.

> [!important] Proposition 1.4.1.
> The vertices of a connected graph $G$ can always be enumerated, say as $v_1,\dots, v_n$, so that $G_i:=G[v_1,\dots,v_i]$ is connected for every $i$.

> [!example]-
> $$
> V=\{A,B,C,D\},\quad E=\{\{A,B\},\{B,C\},\{C,D\}\}
> $$
> There's a path from any vertex to any other.

> [!definition] Component
> A *maximal connected subgraph* of $G$ is called a *component* of $G$.


![[fig-1-4-1.png]]

## 2. Separating Sets
A set $X\subseteq V\cup E$ **separates** sets $A$ and $B$ if every $A-B$ path contains an element of $X$. $X$ is a **separating set** if it separates two vertices of $G-X$ in $G$. 

>[!example]-
>In $A-B-C-D$, take $X=\{B\}$. Then $B$ is a separating set for $A$ and $D$, because every $A-D$ path goes through $B$.

> [!definition] Cutvertex
> A vertex that separates two other vertices of the same component.

>[!definition] Bridge
>An edge that separates its ends. A bridge is an edge that does not lie on any cycle.

![[fig-1.4.2.png]]

## 3. Connectivity Measures
A graph $G$ is *$k$-connected* if $|G|>k$ and $G-X$ is connected for every set $X\subseteq V$ with $|X|<k$.

> [!example]-
> - A triangle $A-B-C$ ($K_3$) is 2-connected: removing one vertex leaves an edge (still connected).
> - A square $A-B-C-D$ with diagonals ($K_4$) is 3-connected: removing any two vertices still leaves a connected piece.

> Application: "How many nodes can fail before the network breaks?"

> [!definition] Connectivity
> The greatest integer $k$ such that $G$ is $k$-connected is the *connectivity* $\kappa(G)$ of $G$. $\kappa(G)=0$ if $G$ is disconnected or $K_1$, and $\kappa(K_n)=n-1$ for $n\geq 1$

| Graph | $\kappa(G)$ | Why                                                  |
| ----- | ----------- | ---------------------------------------------------- |
| $K_1$ | 0           | single vertex (trivial)                              |
| $K_3$ | 2           | remove $\leq1$ vertex $\rightarrow$ still connected  |
| $K_4$ | 3           | remove $\leq 2$ vertex $\rightarrow$ still connected |


> [!definition] $l$-edge-connected
> A graph $G$ is $l$-edge-connected if $|G|>1$ and $G-F$ is connected for every set $F\subseteq E$ of fewer than $l$ edges.

> [!definition] Edge-Connectivity
> The greatest integer $l$ such that $G$ is $l$-edge-connected is called *edge-connectivity* $\lambda(G)$ of $G$. $\lambda(G)=0$ if $G$ is disconnected.


![[fig-1-4-3.png]]

> [!important] Relationship Formula
> For every non-trivial graph $G$:
> $$
> \kappa(G)\leq \lambda(G) \leq \delta(G)
> $$
> This means high connectivity requires a large minimum degree.

> [!example]- Network Reliability
> - $\kappa(G)$: how many *nodes* must fail to break communication.
> - $\lambda(G)$: how many *links* must fail to break it.
> - $\delta(G)$: how many links each node has on average.
> 
> Use cases:
> - In *internet backbone design*, engineers ensure $\kappa(G)\geq 2$ so that removing any router still keeps the network functional.
> - In *road systems*, $\lambda(G)=2$ means at least two independent roads connect every pair of regions - safer against one bridge collapse.

> [!theorem] Theorem: Mader 1972
> *Every graph of average degree at least $4k$ has a $k$-connected subgraph.*

