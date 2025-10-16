---
title: Contraction and Minors
draft:
tags:
  - contraction
  - minor
  - topology
---
## 1. Contraction and MX Graphs
> [!definition] Edge Contraction
> Given an edge $e=xy$, the graph $G/e$ is obtained by merging $x$ and $y$ into a new vertex $v_e$, which is adjacent to all former neighbours of $x$ and $y$.

![[fig-1-7-1.png]]

> [!example]-
> Let's define a graph $G=(V,E), V=\{A,B,C\}, E=\{\{A,B\},\{B,C\}\}$.
>
> Contract edge $B-C\Rightarrow$ merge $B$ and $C$ $\rightarrow$ new vertex $BC$. So $G/e=(V',E')=(\{A,BC\}, \{A-BC\})$.
> 

> [!definition] Minor Model and MX Graphs
> A graph $G$ is an $MX$ if we can partition $V(G)$ into connected **branch sets** $\{V_x|x\in V(X)\}$ such that edges exist between $V_x$ and $V_y$ in $G$ if and only if $xy \in E(X)$.

> [!important] Proposition 1.7.1
> $G$ is an $MX$ if and only if $X$ can be obtained from $G$ by a series of edge contractions, i.e., if and only if there are graphs $G_0, \dots, G_n$ and edges $e_i\in G_i$ such that $G_0=G$, $G_n\simeq X$, and $G_{i+1}=G_i/e_i$ for all $i<n$.

> [!example]- 
> Let's start with a square $A-B-C-D-A$. Contract $A-B\rightarrow$ merges into vertex $AB$. Now the graph is $AB-C-D-AB\rightarrow$ a triangle ($K_3$). So $K_3$ is the minor of the square $C_4$.

![[fig-1-7-2.png]]

## 2. Minor and Topological Minor

> [!definition] Minor Relation
> A graph $X$ is a *minor* of $Y$ if $X$ can be obtained from a **subgraph** of $Y$ by contracting edges.
> $$
> X \preccurlyeq Y
> $$

Every subgraph is trivially its own minor.

> [!example]-
> Take $Y$ = cube graph (8 vertices, 12 edges). Contract one pair of opposites faces $\rightarrow$ get $K_4$. So $K_4$ is a minor of the cube.

> [!definition] Subdivision
> A graph $G$ is a subdivision of $X$ if it's made by replacing each edge of $X$ with a *path* (possibly with a new vertices along it).

> [!example]- 
> Start with $X=K_3$ (triangle). We replace each edge with 2-edge path: 
> $$
> A-p-B-q-C-r-A
> $$
> New vertices $p,q,r$ are **subdivision vertices**.

> [!definition] Topological Minor
> $X$ is a **topological minor** of $Y$ if $Y$ contains a subdivision of $X$ ($Y\supseteq G=TX$).

> [!example]-
> $K_3$ (triangle) is a topological minor of a hexagon ($C_6$): if we skip every other vertex in the cycle, the remaining vertices plus connecting paths form $K_3$.

![[fig-1-7-3.png]]
**Intuitive Difference:**
- **Minor**: allows merging (edge contractions).
- **Topological minor**: allows *stretching* edges (subdivisions).

## 3. Relationships and Properties

> [!important] Proposition 1.7.2: Relationship
> 1. Every $TX$ is also an $MX$ (a topological minor is an ordinary minor).
> 2. If the maximum degree $\Delta(X)\leq 3$, then every $MX$ contains a $TX$ (an ordinary minor is a topological minor).

> Idea: For graphs with small degree ($\leq 3$), "stretching" and "merging" become equivalent ways of simplifying.

![[fig-1-7-4.png]]
> [!important]
> Both the minor relation ($\preccurlyeq$) and the topological-minor relation are **partial orderings** on the class of finite graphs (reflexive, antisymmetric, transitive).









