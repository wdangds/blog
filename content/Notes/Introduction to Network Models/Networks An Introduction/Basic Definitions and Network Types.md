---
title: Basic Definitions and Network Types
date: 2025-12-12
draft:
tags:
  - graph-theory
  - network-science
---
## 1. Core Components and Notations
A **network** (or **graph** in mathematical literature) is a collection of vertices joined by edges.

| Component | Common Names         | Notation                                       |
| --------- | -------------------- | ---------------------------------------------- |
| Vertices  | Nodes, Sites, Actors | $n=\|V\|$: the number of vertices in a network |
| Edges     | Links, Bonds, Ties   | $m=\|E\|$: the number of edges in a network    |

> [!example]- Examples of Vertices and Edges
> 
> | Network | Vertex (Node) | Edge (Link) | 
> | :--- | :--- | :--- | 
> | Internet | Computer or router | Cable or wireless data connection | 
> | World Wide Web | Web page | Hyperlink | 
> | Friendship network | Person (Actor) | Friendship (Tie) | 
> | Power grid | Generating station or substation | Transmission line |

## II. Graph Classification

> **Self-edges (Self-loops)**

Edges that connect a vertex to itself.

[![File:Self-loop.png - Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/b/b4/Self-loop.png)

> **Multi-edge**

More than one edge between the same pair of vertices.

[![Multiple edges - Wikipedia](https://upload.wikimedia.org/wikipedia/commons/e/e7/Multiple_edges.png)![Multiple edges - Wikipedia](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSxRZt8pfntERNPAPdOTyP1zMdaQneSYIDA&s)](https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMultiple_edges&ved=0CBUQjRxqFwoTCOjmrpTjwpEDFQAAAAAdAAAAABAI&opi=89978449)

> **Simple Network (Simple Graph)** 

A network that has neither self-edges nor multi-edges.

[![Simple graph — NetworkX 3.6.1 documentation](https://networkx.org/documentation/stable/_images/sphx_glr_plot_simple_graph_001.png)
> **Multi-graph**

A network that includes multi-edges.

[![Multigraph - Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Multi-pseudograph.svg/1200px-Multi-pseudograph.svg.png)

### III. Directed Networks (Digraphs)
A **directed network** (or **digraph**) is a network where each edge has a specific direction, pointing *from* one vertex *to* another.
- **Representation**: Directed edges are typically shown with arrows.

> [!example]- 
> The World Wide Web, where hyperlinks points in one direction.





