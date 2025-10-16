---
title: Bipartite Graphs
tags:
  - bipartite
  - graph
draft:
---
## 1. Definitions and Types
> [!definition] *r*-partite graph
> A graph $G=(V,E)$ is $r-$partite if we can split the vertex set $V$ into $r$ disjoint classes $V_1,V_2, \dots, V_r$ so that **no edge connects vertices in the same class** - edges go only between *different classes*.

> [!example]- Example
> $$
> V_1=\{A,B\}, V_2=\{1,2,3\}, \quad E=\{\{A.1\},\{A,2\},\{B,2\},\{B,3\}\}
> $$
> All edges join one vertex from $V_1$ to one from $V_2$. This is a **bipartite graph.** ($r=2$).
> 
> Visualization:
> 
>![[ex.1.6.1.svg]]

Bipartite graphs naturally model *relationships between two different types of entities*, such as:
- Students $\leftrightarrow$ courses.
- Jobs $\leftrightarrow$ Applicants.
- Users $\leftrightarrow$ Movies.

![[fig-1.6.1.png]]

> [!definition] Complete $r-$Partitie Graph
> An $r$-partite graph where every two vertices from different partition classes are adjacent.
> 
> Notation: $K_{n_1,\dots, n_r}$. If $n_1=\dots=n_r=s$, we write $\mathbf{K}_s^r$.


![[fig-1.6.2.png]]

> [!definition] Star
> A special bipartite graph with one central node connected to $n$ outer nodes.
> 
> ![[ex-star-k-1-3.svg]]
> 
> This is $K_{1,3}$

> Application:
> - Computer network with one central server and $n$ clients.
> - Tree branch structure (hub-and-spoke model).
> - Solar system metaphor - one hub, many satellites.

## 2. Characterization by Cycles

A bipartite graph can **never contain an odd cycle**.

> [!important] Proposition 1.6.1: Bipartite Characterization
> A graph is **bipartite if and only if it contains no odd cycle**.



