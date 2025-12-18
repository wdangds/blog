---
title: Adjacency Matrix
draft:
tags:
  - network
  - graph-theory
  - adjacency-matrix
date: 2025-12-16
---
The **adjacency matrix** ($A$) is the preferred mathematical representation of a network structure.

## I. Undirected Graphs
For a simple graph, the elements $A_{ij}$ are defined as
$$
A_{ij}=\begin{cases}
1&\text{if there is an edge between vertices }i\text{ and }j,\\
0 & \text{otherwise}.
\end{cases}
$$

> [!example]- 
>
>![[simple-graph.png]]
>
> The adjacency matrix of the above network is 
> $$
> A = \begin{bmatrix}
> 0&1&0&0&1&0\\
> 1&0&1&1&0&0\\
> 0&1&0&1&1&1\\
> 0&1&1&0&0&0\\
> 1&0&1&0&0&0\\
> 0&0&1&0&0&0\\
> \end{bmatrix}
> $$

> [!properties]
> The matrix is **symmetric** ($A_{ij}=A_{ji}$)
>
> If there are no self-edges, the diagonal elements $A_{ii}$ are all zero.
## II. Handling Non-Simple Undirected Graphs
> [!tip] Multi-edge
> A multi-edge is represented by setting the corresponding matrix element $A_{ij}$ equal to the multiplicity of the edge.

> [!tip] Self-edges
> A single self-edge for vertex $i$ is represented by setting the diagonal element $A_{ii}=2$.
> > [!warning]- Why 2 and not 1?
> > It is because every self-edge from $i$ to $i$ has two ends, both of which are connected to vertex $i$.

> [!example]- 
> 
> ![[multi-self-edge-network.png]]
>
> The adjacency matrix of the above network is:
> $$
> A = \begin{bmatrix}
> 0&1&0&0&3&0\\
> 1&2&2&1&0&0\\
> 0&2&0&1&1&1\\
> 0&1&1&0&0&0\\
> 3&0&1&0&0&0\\
> 0&0&1&0&0&2\\
> \end{bmatrix}
> $$

## III. Directed Graphs (Digraphs)
The adjacency matrix $A$ for a directed network uses a specific convention:
$$
A_{ij}=\begin{cases}
1&\text{if there is an edge from }j \text{ to }i,\\
0&\text{otherwise}.
\end{cases}
$$

> [!example]-
> 
> ![[directed-network.png]]
>
> The adjacency matrix of the above directed network is:
> $$
> A = \begin{bmatrix}
> 0&0&0&1&0&0\\
> 0&0&1&0&0&0\\
> 1&0&0&0&1&0\\
> 0&0&0&0&0&1\\
> 0&0&0&1&0&1\\
> 0&1&0&0&0&0\\
> \end{bmatrix}
> $$

>[!properties]
>The matrix is generally **asymmetric**.
>
> A single self-edge in a directed network is represented by $A_{ii}=1$.
>
>An undirected network can be viewed as a directed network where every undirected edge is replaced by two directed edges running in opposite directions, resulting in a symmetric $A$.

## IV. Weighted Networks
In a **weighted (or valued) network**, edges posses a strength, weight, or value (usually a real number). The elements of the adjacency matrix $A_{ij}$ are set equal to the weights of the corresponding connections.

> [!example]-
> The adjacency matrix 
> $$
> A=\begin{bmatrix}
> 0 & 2 & 1 \\
> 2 & 0 & 0.5 \\
> 1 & 0.5 & 0 \\
> \end{bmatrix}
> $$
> represents a weighted network in which the connection between vertices 1 and 2 is twice as strong as that between 1 and 3, which in turn is twice as strong as that between 2 and 3.

