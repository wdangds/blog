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

<small>Fig: The in- and out- components of a vertex A in 
