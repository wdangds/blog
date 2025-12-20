---
title: Introduction to Graph Theory
draft:
tags:
  - graph-theory
  - graph
  - network
  - introduction
date: 2025-12-12
---
## I. Basic Definitions and Components
### a. The Graph Structure
A **graph** is a mathematical model for specifying relationships among a collection of items. It consists of two sets: $G(V,E)$.
- **Vertices or Nodes** $(V)$: the set of objects in the graph, often represented by small circles.
- **Edges or Links** $(E)$: connections between pairs of vertices. Edges are typically drawn as lines connecting the nodes.

### b. Graph Types Based on Edge Direction
Graphs are categorized based on whether the relationships they model are symmetric or asymmetric.

| Graph Type               | Definition                                                                                                                                                                              | Edge Pairs                       | Example                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------- |
| Undirected Graph         | The relationship is symmetric; the edge simply connected the nodes to each other. Elements of $E$ are unordered pairs $(u,v)$.                                                          | $(u,v)=(v,u)$                    | Facebook friendships                                      |
| Directed Graph (DiGraph) | The relationship is asymmetric, meaning a link goes from one node *to* another, and direction matters. Elements of $E$ are ordered pairs $(u,v)$. By convention, $(u,v)$ points to $v$. | $(u,v)$ is distinct from $(v,u)$ | Twitter follower networks, who-calls-whom phone networks. |

![[directed-undirected-graph.png]]

<small>Fig: Two graphs: (a) an undirected graph, and (b) a directed graph.</small>


> **Mutual Edges**: In a directed graph, if both $(u,v)$ and $(v,u)$ are included in $E$, the edges are **mutual**.

### c. Graph Types Based on Edge Properties

> **Simple Graphs**

Graphs that do not contain self-loops (an edge connecting a node to itself) or multi-edges (multiple edges between the same two nodes). Most analysis focuses on simple graphs.

![[simple-graphs.png]]

<small>Fig: a simple graph</small>

> **Multi-graphs**

Graphs that may contain self-loops and/or multi-edges. Multi-edges are often encoded as edge weights (counts).

![[multi-graph.png]]

<small>Fig: a multi graph</small>

> **Weighted Graphs**

Graphs where edges are labeled with numerical values. The length of a path in a weighted graph is the sum of weighted of the traversed edges.

### d. Network Representations

| Network               | Graph Representations                           |
| --------------------- | ----------------------------------------------- |
| WWW                   | Directed multi-graph (with loops), unweighted   |
| Citation Network      | Directed, unweighted, acyclic                   |
| Collaboration Network | Undirected, unweighted                          |
| Mobile Phone Calls    | Directed, weighted                              |
| Protein Interaction   | Undirected multi-graph (with loops), unweighted |

## II. Local Connectivity and Degree
### a. Adjacency and Incidence
- **Adjacency (Vertices)**: Two vertices $u$ and $v$ are adjacent (or are **neighbors**) if they are joined by an edge in $E$.
- **Adjacency (Edges)**: Two edges $e_1$ and $e_2$ are adjacent if they share a common endpoint in $V$.
- **Incidence**: An edge $(u,v)$ is incident with the vertices $u$ and $v$.

![[adjacency.png]]

<small>In figure: Vertices 1 and 5 are adjacent; 2 and 4 are not. Edge (1,2) is adjacent to (1,5) but not to (4,6)</small>

### b. Vertex Degree
The **degree** $(d_v)$ of a vertex $v$ is its number of incident edges. High-degree vertices are often considered influential, central, or prominent.

![[degree.png]]
<small>In figure: vertex degrees shown in red, e.g., d1=2 and d5=3</small>

> [!definition] Neighborhood
> The **neighborhood** $\mathcal{N}_i$ of a node $i$ is the set of all its adjacent nodes.
>
> The size of the neighborhood is equal to the degree, i.e., $|\mathcal{N}_i|=d_i$.

### c. Degree formulas and properties (undirected graph)
The following properties hold for an undirected graph:

> [!important] Degree Range
> Degree values range from 0 up to $|V|-1$.

> [!important] Sum of Degrees
> The sum of the degrees of all vertices is exactly twice the size (number of edges) of the graph:
> $$
> \sum_{v=1}^{|V|}d_v=2|E|
> $$

>[!important] Odd Degree Count
>The number of vertices with an odd degree must be an even number.

### d. Degrees in Directed Graphs
In directed graphs (digraphs), vertices have two types of degrees:
- **In-degree** ($d_v^i$): the number of edges pointing *to* vertex $v$.
- **Out-degree** ($d_v^o$): the number of edges pointing *away* from vertex.

![[degree-digraph.png]]

<small>In figure, vertex in-degree shown in red, out-degrees in blue</small>

## III. Global Connectivity and Paths
### a. Movement in a Graph
- **Path**: A consecutive sequence of distinct vertices $\{v_0, v_1, \dots, v_l\}$ such that $v_i$ and $v_{i+1}$ are adjacent. The length of the path is $l$.
- **Walk:** A sequence of vertices where the vertices do *not* have to be distinct.
- **Circuit**: A closed walk where the starting and ending vertices are the same ($v_0=v_1$).
- **Cycle**: A closed path.
These definition generalize naturally to directed graphs.

![[movement-graph.png]]
### b. Distance and Diameter
- **Length of a Path**: In a weighted graph, this is the sum of the weights of the traversed edges.
- **Distance (between nodes $i$ and $j$)**: The length of the shortest path linking $i$ and $j$. If no such path exists, the distance is $\infty$.
- **Diameter**: The value of the largest distance between any two nodes in the graph.

Efficient algorithms exists to compute distances, including Dijkstra, Floyd-Warshall, and Johnson.

### c. Connectivity
- **Reachable**: Vertex $v$ is reachable from vertex $u$ if a $u-v$ path exists.

> [!definition] Connected Graphs (Undirected)
> A graph is connected if every vertex is reachable from every other vertex. Removing a "bridge edge" (an edge whose removal increases the number of connected components) can disconnect the graph.

![[connected-graph.png]]
<small>If <font color="green">bridge edges</font> are removed, the graph becomes disconnected</small>

> [!definition] Connected component
> A **component** is a maximally connected subgraph. A maximal subgraph is one where adding any other vertex would ruin the connectivity. Disconnected graphs have two or more components.

![[connected-component.png]]

<small>In figure, components are <font color="blue">{1,2,5,7}</font>, <font color="red">{3,6}</font>, and <font color="green">{4}</font>. Subgraph {3,4,6} not connected, {1,2,5} not maximal.</small>

> [!definition] Giant Component
> Disconnected graphs have 2 or more components, largest component often called giant component. Large real-world networks often exhibit one giant component.

> [!question]- Why do we expect to find a single giant component?
> It only takes one edge to merge two giant components.

### d. Connectivity in Directed Graphs
Connectivity is more complex in directed graphs and has two main notions
1. **Strongly connected**: A digraph is strongly connected if for every pair of vertices $u$ and $v$, $u$ is reachable from $v$ (via a directed path) and $v$ is reachable from $u$. 
2. **Weakly connected**: A digraph is weakly connected if it remains connected after disregarding the edge directions (i.e., its underlying undirected graph is connected). Strongly connectivity implies weak connectivity.

![[connectivity-directed-graph.png]]

<small>Above graph is weakly connected but not strongly connected</small>

## IV. Specialized Graph Structures
### a. Complete Graphs and Cliques

> [!definition] Complete graph $K_n$
> A complete graph of order $n$ has all possible edges between its $n$ vertices.

![[complete-graph.png]]

> [!question]- How many edges does $K_n$ have?
> The number of edges is equal to the number of vertex pairs:
> $$
> \text{Number of edges in }K_n=\binom{n}{2}=\frac{n(n-1)}{2}
> $$

> [!definition] Clique
> A clique is a complete subgraph. This represents an extreme notion of cohesive subgroups or communities in network analysis.

### b. Regular graphs

> [!definition] Regular graphs
> A $d$-regular graph is one where all vertices have an equal degree, $d$.

![[regular-graph.png]]

> [!example]-
> The complete graph $K_n$ is $(n-1)$-regular. Cycles are $2$-regular subgraphs.

Regular graphs frequently arise in the study of crystal structures (physics/chemistry), pixel adjacency models in image processing (geo-spatial settings), and modeling opinion formation or information cycles.

### c. Trees and Acyclic Graphs

> [!definition] Tree
> A connected graph that is acyclic (contains no cycles)

> [!definition] Forest
> A collection of trees.
> 

> [!definition] Directed Tree
> A digraph whose underlying undirected graph is a tree. It is considered "rooted" if paths exist from one vertex (the root) to all others.

> [!definition] Directed Acyclic Graph (DAG)
> A directed graph that contains no directed cycles. The underlying graph of a DAG need not be a tree.

![[Notes/Introduction to Network Models/Networks, Crowds, and Markets/fig/tree.png]]

> [!example]-
> River networks, information cascades in Twitter, and citation networks.

