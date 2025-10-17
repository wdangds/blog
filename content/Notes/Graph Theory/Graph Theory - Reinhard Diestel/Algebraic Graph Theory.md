---
title: Algebraic Graph Theory
draft:
date: 2025-10-16
tags:
  - linear-algebra
  - graph
---
We treat a graph as if it were made of "binary vectors" - everything happens over the field
$$
\mathbb{F}_2=\{0,1\}
$$
where addition means **XOR**.

## 1. Vertex Space and Edge Space
Let $G$ have $n$ vertices and $m$ edges.

> [!definition] Vertex Space
> The vertex space is the space of functions $V\rightarrow \mathbb{F}_2$. Elements correspond to subsets of $V$. 
> $$
> \text{dim }V(G)=n
> $$

> [!example]-
> Let $G$ have $V=\{A,B,C\}$ and $E=\{AB, BC, CA\}$. The vector space can make each vertex to be *on* (1) or *off* (0). Vertex space is like a "state vector" telling which nodes in a network are active.

> [!definition] Edge Space
> The space of function $E\rightarrow F_2$. Elements correspond to subsets of $E$.
> $$
> \text{dim }E(G)=m
> $$

In both spaces, vector addition corresponds to **symmetric difference** of sets.

## 2. Cycle Space C(G)

> [!definition] Cycle Space
> The cycle space is the subspace of $E(G)$ spanned by the edge sets of all cycles in $G$. Its dimension is the **cyclomatic number**.
> 


