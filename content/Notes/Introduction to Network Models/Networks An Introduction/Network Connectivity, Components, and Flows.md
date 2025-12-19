---
title: Network Connectivity, Components, and Flows
date: 2025-12-17
draft:
tags:
  - network-science
  - components
  - flows
  - connectivity
---
## I. Components

> [!definition] Connected Network
> A network where a path exists between every vertex.

> [!definition] Disconnected Network
> A network where no path exists between certain pairs of vertices. 


![[connected-disconneted-graph.png]]

<small>Fig: Connected Graph and Disconnected Graph</small>

> [!definition] Component
> A *maximal subset* of vertices such that there is a path between every pair within that subset.

![[component.png]]

<small>Fig: A network with two components. This undirected network contains two components of three and four vertices respectively. There is no path between pairs of vertices like A and B that lie in different components.</small>

The adjacency matrix of a network with more than one component can be written in block diagonal form, meaning that the non-zero elements of the matrix are confined to square blocks along the diagonal of the matrix, with all other elements being zero:
$$
A=\begin{pmatrix}
\boxed{\rule{0pt}{1.6em}\rule{1.6em}{0pt}}&0&\cdots\\
0&\boxed{\rule{0pt}{1.6em}\rule{1.6em}{0pt}}&\cdots\\
\vdots&\vdots&\ddots\\
\end{pmatrix}
$$
## II. Components in Directed Networks

> [!definition] Weakly Connected Component
> Defined by paths in the network when edge direction are ignored.

> [!definition] Strongly Connected Component
> A maximal subset of vertices where there is a directed path in *both* directions between every pair in the subset.

![[connected-directed.png]]

<small>Fig: Components in a directed network. This network has two weakly connected components of four vertices each, and five strongly connected components (shaded).</small>

> [!definition] Out-component
> The set of vertices reachable via directed paths starting at a specified vertex A.

![[out-component.png]]

<small>Fig: Out-components in a directed network. (a) The out-component of vertex A, which is the subset of vertices reachable by directed paths from A. (b) The out-component of vertex B. Vertices X and Y belong to both out-components.</small>

> [!definition] In-component
> The set of all vertices from which there is a directed path to a specified vertex A.

![[in-out-component.png]]

<small>Fig: The in- and out- components of a vertex A in a small directed network.</small>


## III. Acyclic Directed Networks (DAGs)

> [!definition]
> An **acyclic directed network** or **DAG** has no cycles (closed loops where arrows point the same way).

> [!tip] Structure
> They contain no self-edge.

![[dags.png]]

<small>Fig: An acyclic directed network. In this network the vertices are laid out in such a way that all edges point downward. Networks that can be laid out in this way are called acyclic, since they possess no closed cycles of edges. An example of an acyclic network is a citation network of citations between papers, in which the vertical axis would represent date of publication, running up the figure, and all citations would necessarily point from later papers to earlier ones.</small>

>[!tip] Matrix Structure
>If the vertices are labeled in a specific order (such that all edges point from higher to lower labels), the adjacency matrix $A$ will be **strictly upper triangular** (non-zero elements only above the diagonal).

> [!example]-
> The adjacency matrix of the above network is: 
> $$
> A=\begin{pmatrix}
> 0&0&1&0&1&0&0&0&0\\
> 0&0&1&0&0&1&0&0&0\\
> 0&0&0&0&0&1&0&0&0\\
> 0&0&0&0&1&0&0&1&0\\
> 0&0&0&0&0&0&1&0&1\\
> 0&0&0&0&0&0&1&0&0\\
> 0&0&0&0&0&0&0&1&1\\
> 0&0&0&0&0&0&0&0&0\\
> 0&0&0&0&0&0&0&0&0\\
> \end{pmatrix}
> $$

> [!tip] Eigenvalue Property
> A directed network is acyclic if and only if all eigenvalues of its adjacency matrix are zero. Such matrices are called **nilpotent matrices**.

## IV. Independent Paths and Cut Sets

> [!definition] Edge-independent paths
> Paths between a pair of vertices that share no edges.

> [!definition] Vertex-independent paths (Node-independent)
> Paths between a pair of vertices that share no vertices other than the starting and ending ones.

![[independent-paths.png]]
<small>Fig: Edge independent paths. (a) There are two edge-independent paths from A to B in this figure, as denoted by the arrows, but there is only one vertex-independent path, because all paths must pass through the center vertex C. (b) The edge-independent paths are not unique; there are two different ways of choosing two independent paths from A to B in this case.</small>

> [!definition] Connectivity
> The number of independent paths between a pair of vertices.

>[!example]-
> The vertices A and B above have edge connectivity 2 but vertex connectivity 1.

>[!definition] Cut Set
>A set of vertices (vertex cut set) or edges (edge cut set) whose removal disconnects a specified pair of vertices.

>[!example]-
>The central vertex C in above network forms a cut set of size 1 for vertices A and B.

>[!definition] Minimum cut set
>A *minimum cut set* is the smallest cut set that will disconnect a specified pair of vertices.

A minimum cut set need not be unique. For instance, there is a variety of minimum vertex sets of size two between the vertices A and B in this network:
```tikz
\begin{document}
\begin{tikzpicture}[
  scale=1,
  dot/.style={circle, fill=black, inner sep=1.6pt}
]
  \node[dot,label=above:$W$] (W) at (-1,  1) {};
  \node[dot,label=above:$X$] (X) at ( 1,  1) {};
  \node[dot,label=left:$A$]  (A) at (-2,  0) {};
  \node[dot,label=right:$B$] (B) at ( 2,  0) {};
  \node[dot,label=below:$Y$] (Y) at (-1, -1) {};
  \node[dot,label=below:$Z$] (Z) at ( 1, -1) {};

  \draw (A)--(W)--(X)--(B)--(Z)--(Y)--(A);
\end{tikzpicture}
\end{document}
```

{W,Y}, {W,Z}, {X,Y}, and {X,Z} are all minimum cut sets for this network. Of course all the minimum cut sets must have the same size.

> [!warning] Menger's theorem
> *If there is no cut set of size less than $n$ between a given pair of vertices, then there are at least $n$ independent paths between the same vertices.*

The Menger's theorem states that the size of the minimum vertex cut set that disconnects a given pair of vertices is equal to the vertex connectivity of the same pair. This theorem also applies to edges.

> [!warning] Max-Flow/Min-Cut Theorem
> This theorem relates connectivity to capacity flows:
> - **Unweighted**: The maximum flow between vertices (assuming edge capacity is 1) is equal to the edge connectivity, which is equal to the size of the minimum edge cut set.
> - **Weighted (General case)**: The maximum flow between a given pair of vertices in a weighted network is equal to the sum of the weights on the edges of the minimum edge cut set that separates those two vertices.


