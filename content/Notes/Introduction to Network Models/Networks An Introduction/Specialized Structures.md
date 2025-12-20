---
title: Specialized Structures
draft:
date: 2025-12-18
tags:
  - graph-theory
  - tree
  - planar
  - hypergraph
  - bipartite
---
## I. Hypergraphs and Bipartite Networks

> [!definition] Hypergraph
> A network where hyperedges join more than two vertices at once (e.g., membership in a family group).

> [!definition] Bipartite Network
> A network with two distinct types of vertices, where edges only run between vertices of unlike types (e.g., film actors and films).

![[hypergraph-bipartite-graph.png]]

<small>Fig: A hypergraph and corresponding bipartite graph. These two networks show the same information - the membership of five vertices in four different groups. (a) The hypergraph representation in which the groups are represented as hyperedges, denoted by the loops circling sets of vertices. (b) The bipartite representation in which we introduce four new vertices (open circles) representing the four groups, with edges connecting each vertex to the groups to which it belongs.</small>

> [!tip] Incidence Matrix
> The equivalent of the adjacency matrix for a bipartite network is the **incidence matrix $B$**. If $n$ is the number of participants and $g$ is the number of groups, $B$ is a $g\times n$ matrix defined as:
> $$
> B_{ij}=\begin{cases} 
> 1&\text{if vertex }j\text{ belongs to group }i,\\
> 0& \text{otherwise}.
> \end{cases}
> $$

> [!example]-
> The $4\times 5$ incidence matrix of the network shown in above network is:
> $$
> B=\begin{pmatrix}
> 1&0&0&1&0\\
> 1&1&1&1&0\\
> 0&1&1&0&1\\
> 0&0&1&1&1\\
> \end{pmatrix}
> $$

> [!tip] One-Mode Projection
> This technique creates a network of only one type of vertex (e.g., actors) by connecting them if they share a common group (e.g., appeared in the same film).

![[two-one-mode-projections.png]]

<small>Fig: The two one-mode projections of a bipartite network. The central portion of this figure shows a bipartite network with four vertices of one type (open circles labeled A to D) and seven of another (filled circles, 1 to 7). At the top and bottom we show the one-mode projections of the network onto the two sets of vertices.</small>

> [!tip] Weighted Projection Matrix
> The projection can be written in terms of the incidence matrix $B$.
> $$
> P_{ij}=B^\intercal B
> $$
> - The off-diagonal element $P_{ij}$ equals the number of common groups shared by $i$ and $j$.
> - The diagonal element $P_{ii}$ equals the number of groups to which vertex $i$ belongs.

## II. Trees and Planar Networks

> [!definition] Tree
> A *tree* is a connected, undirected network that contains no closed loops.

![[Notes/Introduction to Network Models/Networks An Introduction/fig/tree.png]]

<small>Fig: Two sketches of the same tree. The two panels here show two different depictions of a tree, a network with no closed loops. In (a) the vertices are positioned on the page in any convenient position. In (b) the tree is a laid out in a "rooted" fashion, with a root node at the top and branches leading down to "leaves" at the bottom.</small>

>[!tip] Properties
>There is exactly one path between any pair of vertices. A tree with $n$ vertices always has exactly $m=n-1$ edges.

Trees are often drawn in a *rooted* manner, with a *root node* at the top and a branching structure going down. The vertices at the bottom that are connected to only one other vertex are called *leaves*. 

> [!definition] Forest
> A network in which all components are trees.

> [!definition] Planar Network
> A network that can be drawn on a plane without any edges crossing.

![[planar-network.png]]

<small>Fig: Two drawings of a planar graph. (a) A small planar graph with four vertices and six edges. It is self-evident that the graph is planar, since in this depiction it has no edge that cross. (b) The same graph redrawn with two of its edges crossing. Even though the edges cross, the graph is still planar - a graph is planar if it <i>can</i> be drawn without crossing edges.</small>

> [!warning] Kuratowski's Theorem
> *A network is non-planar if and only if it contains a subgraph that is an expansion of $K_5$ (complete graph on 5 vertices) or $UG$ (utility graph: complete bipartite graph on two group of 3 vertices).*
> 
> ![[kuratowski-theorem.png]]


