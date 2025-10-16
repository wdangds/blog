---
title: Trees and forests
tags:
  - tree
  - forest
  - "#graph"
---
## 1. Definitions and Characterization
> [!definition] Acyclic Graph
> A graph not containing any cycles.
> > [!example] 
> > $A-B-C-D$: no loops, no closed paths.

> [!definition] Forest
> A *collection of disjoint trees,* i.e., an acyclic graph that may have several components.
> > [!example]
> > Component 1: $A-B-C$, component 2: $D-E$. Two trees side-by-side $\Rightarrow$ a forest.

> [!definition] Tree
> A *connected acyclic graph*. Tree are the simplest form of connection - like one path connecting everything without redundancy.

> [!definition] Leaves
> Vertices of degree 1 in a tree. Every non-trivial tree has at least two leaves.


![[fig-1-5-1.png]]

> [!important] Theorem 1.5.1: Tree Equivalences
> For a graph $T$, the following assertions are equivalents:
> 1. $T$ is a *tree*.
> 2. Any two vertices of $T$ are linked by a *unique path* (denoted $xTy$) in $T$.
> 3. $T$ is *minimally connected* (connected, but $T-e$ is disconnected for every edge $e\in T$).
> 4. $T$ is *maximally acyclic* (contains no cycle, but $T+xy$ does for any two non-adjacent vertices $x,y\in T$).

## 2. Spanning Trees and Edge Count
> [!definition] Spanning Tree
> A minimal connected spanning subgraph of a connected graph. Every connected graph contains one.

> Idea: A *tree that includes every vertex* of a connected graph. It's the "lightest" connected version of $G$ (no extra edges).

> [!example]-
> For graph $G=K_4$ (all edges between $A,B,C,D$): A possible spanning tree is $A-B, B-C, C-D$ (3 edges, 4 vertices $\rightarrow$ no cycles, still connected).

> [!quote]- Application
> - Network design: minimum wiring layout.
> - Computer networks: spanning-tree protocol (STP) prevents looping packets.
> - Transportation: design roads linking all towns without wasting materials.

> [!important] Corollary 1.5.2
> The vertices of a tree can always be enumerated, say as $v_1, \dots, v_n$, so that every $v_i$ with $i\geq 2$ has a unique neighbour in $\{v_1,\dots, v_{i-1}\}$.

> [!important] Corollary 1.5.3 (Edge Count Formula)
> A connected graph with $n$ vertices is a tree *if and only if* it has $n-1$ edges.
> $$
> |E|=|V|-1
> $$

> [!important] Corollary 1.5.4 (Subgraphs)
> If $T$ is a tree and $G$ is any graph with $\delta(G)\geq |T|-1$, then $G$ has a subgraph isomorphic to $T$ ($T\subseteq G$).

> Idea: If a graph is dense enough (minimum degree $\geq|T|-1$), then it contains a subgraph isomorphic to a tree $T$.

> [!quote]- Intuition
> High connected networks always contain simple hierarchical structures inside.

## 3. Rooted Trees and Normal Trees

> [!definition] Rooted Tree
> A tree with one specified vertex designated as the *root* $r$ is called a **rooted tree**.

![[EX-1.6.3.svg]]

> [!definition] Tree-Order
> The partial ordering defined by a root $r: x\leq y$ if $x\in rTy$. 

> [!example]- 
> In the tree above, $A\leq E$ because $A$ on the path $A-C-E$. But $B$ and $C$ are incomparable (same level, different branches).

> [!definition] Normal Spanning Tree (Depth-First Search Tree)
> A rooted tree $T$ contained in $G$ is *normal in* if the ends of every $T$-path in $G$ are comparable in the tree-order of $T$. If $T$ spans $G$, adjacent vertices in $G$ must be comparable in $T$'s tree-order.

> Idea: When we do a depth-first search (DFS), the tree we get preserves the exploration hierachy.

> [!example]-
> In a graph with extra edges ("back edges"), DFS generates a tree structure showing how the graph was explored.

![[fig-1-5-2.png]]

> [!important] Proposition 1.5.5
> Every connected graph contains a *normal spanning tree*, with any specified as its root.

