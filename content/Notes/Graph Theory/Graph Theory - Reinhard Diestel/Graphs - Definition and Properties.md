---
title: "Graphs: Definitions and Properties"
tags:
  - graph
draft:
---
## 1. Fundamental Definitions
A *graph* $G$ is formally defined as a pair $G=(V,E)$ of sets, where $E\subseteq [V]^2$.
1. **Vertices ()**: The elements of $V$ are the *vertices* (or nodes, or points) of $G$.
2. **Edges ()**: The elements of $E$ are the *edges* (or lines) of $G$. Since $E\subseteq [V]^2$, edges are *2-elements subsets* of $V$.
3. **Visualization**: Graphs are typically visualized by drawing dots for vertices and lines joining the dots corresponding to an edge. The specific drawing is irrelevant; only the connections matter.
4. **Notation**: $V(G)$ denotes the vertex set and $E(G)$ denotes the edge set.

![[fig-1.1.1..png]]

## 2. Graph Size and Triviality
- **Order**: The number of vertices, denoted $|G|$.
- **Number of Edges**: Denoted $||G||$.

>[!example]-
>Let 
> $$
> V(G)=\{1,2,3,4\}, \quad E(G)=\{\{1,2\},\{2,3\},\{3,4\}\}
> $$
> Then 
> $$
> |G| = 4 \quad \text{(since there are 4 vertices)}, \quad||G|| = 3
> $$

- **Finite/Infinite**: Graphs are classified as finite or infinite based on their order; graphs discussed are typically assumed to be finite.

>[!example]- 
>Finite graph:
>$$
>V(G)=\{A,B,C,D\}, \quad E(G)=\{\{A,B\},\{B,C\},\{C,D\},\{D,A\}\}
>$$
>
> Infinite graph:
> $$
> V(G)=\{v_1,v_2,v_3,...\}, \quad E(G)=\{\{v_i,v_{i+1}\}:i\in \mathbb{N}\}
> $$

- **Trivial Graph**: A graph of order 0 or 1 is *trivial*. The empty graph is $(\emptyset, \emptyset)$, written $\emptyset$.

> [!example]-
> Order 0 (empty graph):
> $$
> G=(\emptyset, \emptyset)
> $$
> Order 1:
> $$
> V(G)=\{A\}, \quad E(G)=\emptyset
>$$
## 3. Incidence, Adjacency, and Special Edges
- **Incidence**: A vertex $v$ is *incident* with an edge $e$ if $v\in e$. Then $e$ is an *edge at* $v$.
- **Endvertices**: The two vertices incident with an edge are its *endvertices* or *ends*. An edge $\{x,y\}$ is often written as $xy$.
- **Edge Sets Notation**:
	- $E(X, Y)$: The set of all $X-Y$ edges (where $x\in X$, $y\in Y$).
	- $E(v)$: The set of all edges at a vertex $v$.
- **Adjacency (Vertices)**: Two vertices $x,y$ are *adjacent* (or *neighbours*) if $xy$ is an edge. $N_G(v)$  or $N(v)$ denotes the set of neighbours of $v$.
- **Adjacency (Edges)**: Two distinct edges $e\neq f$ are adjacent if they share a common end.
- **Independent**: Pairwise non-adjacent vertices or edges are called *independent* (or stable).

>[!example]-
>Let's work with a simple graph:
>$$
>V(G)=\{A,B,C,D\},\quad E(G)=\{\{A,B\},\{A,C\},\{B,C\},\{C,D\}\}
>$$
>1. Incidence
>	- Vertex A is incident with edges AB and AC.
>	- Vertex C is incident with edges AC, BC, and CD.
>So $E(A)=\{AB, AC\}$, $E(C)=\{AC,BC,CD\}$
>2. Endvertices
>	- Edge AB has envertices A and B.
>	- Edge CD has envertices C and D.
>3. Edge-set
>	- $X=\{A, B\}$, $Y=\{C, D\}$ $\longrightarrow E(X,Y)=\{AC,BC,CD\}$

## 4. Complete Graphs and Isomorphism
**Complete graph:** A graph $G$ where all vertices are pairwise adjacent.
- A complete graph on $n$ vertices is denoted as $K_n$
- $K_3$ is called a *triangle*.

> [!definition] Definition: Isomorphism
> $G$ and $G'$ are *isomorphic* ($G \cong G'$) if there is a bijection $\varphi:V\rightarrow V'$ such that $\forall x, y \in V, xy\in E \Leftrightarrow \varphi(x)\varphi(y)\in E'$. $\varphi$ is an *isomorphism*.

> [!tip]
> Rotating, flipping, or relabeling a network doesn't change its "graph essence". Isomorphism means *the wiring diagram is the same*, only the labels differ.
> 

**Graph Invariant**: A map that assigns equal values to isomorphic graphs (e.g, $|G|$ and $||G||$).

## 5. Subgraphs and Operations

Let's define two simple graphs:
$$
G=(V,E) \text{ where } V=\{1,2,3\}, E=\{\{1,2\},\{2,3\}\}
$$
$$
G'=(V',E') \text{ where } V'=\{2,3,4\}, E=\{\{2,3\},\{3,4\}\}
$$

| Operation    | Notation   | Definition             | Example                                                                                                  |
| ------------ | ---------- | ---------------------- | -------------------------------------------------------------------------------------------------------- |
| Union        | $G\cup G'$ | $(V\cup V', E\cup E')$ | Combine all vertices and all edges: $V(G\cup G')=\{1,2,3,4\}$, $E(G\cup G')=\{\{1,2\},\{2,3\},\{3,4\}\}$ |
| Intersection | $G\cap G'$ | $(V\cap V', E\cap E')$ | Keep only what both share: $V(G\cap G')=\{2,3\}$, $E(G\cap G')=\{\{2,3\}\}$                              |


![[fig-1-1-2.png]]


| Operation         | Notation        | Definition                                                                                                                | Example                                                                                                                            |
| ----------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Induced subgraph  | $G[U]$          | $G'$ is a subgraph on $V'=U\subseteq V$ containing all edges of $G$ with both ends in $U$. $V'$ *induces* or *spans* $G'$ | Let $U=\{1,2,3\}\rightarrow G[U]=G$. Let $U=\{1,3\}\rightarrow G[U]$ has no edges, because there's no edge between 1 and 3 in $G$. |
| Spanning subgraph |                 | $G'\subseteq G$ where $V'=V$                                                                                              | Let $H=(\{1,2,3\},\{1,2\})$ (delete the edge $\{2,3\}$) $\Rightarrow$ all vertices remain                                          |
| Subgraph          | $G'\subseteq G$ | $(V'\subseteq V, E'\subseteq E)$                                                                                          | Let $H=(\{1,2,3\}, \{\{1,2\}\})$. Then $H\subseteq G$.                                                                             |
| Vertex deletion   | $G-U$           | $G[V\backslash U$] (deleting vertices in $U$ and their incident edges). $G-v$ is the abbreviation for $G-\{v\}$.          | $G-\{2\}$: remove vertex 2 and any edge touching it. $V(G-\{2\})=\{1,3\}$, $E(G-\{2\})=\emptyset$                                  |
| Edge operations   | $G-F$, $G+F$    | Edge deletion and addition                                                                                                | $F=\{\{2,3\}\}\rightarrow G-F$ removes edge $2-3$, leaving only $\{1,2\}$.                                                         |

![[fig-1-1-3.png]]


| Operation  | Notation       | Definition                                                                                               | Example                                                                                                            |
| ---------- | -------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Joining    | $G*G'$         | Obtained from $G\cup G'$ (if disjoint) by adding all edges between $V(G)$ and $V(G')$.                   | $K_2*K_3=K_5$                                                                                                      |
| Complement | $\overline{G}$ | Graph on $V$ with edge set $[V]^2\backslash E$                                                           | $\overline{G}=(\{1,2,3\}, \{2,3\})$                                                                                |
| Line graph | $L(G)$         | Vertices are $E(G)$, two vertices in $L(G)$ are adjacent if the corresponding edges in $G$ share an end. | Vertices of $L(G): e_1=\{1,2\}, e_2=\{2,3\}$. $e_1$ and $e_2$ share vertex 2 in $G\Rightarrow$ connected in $L(G)$ |

![[fig-1-1-4.png]]

