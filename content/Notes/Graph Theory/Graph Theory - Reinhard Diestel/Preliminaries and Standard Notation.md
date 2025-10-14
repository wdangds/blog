---
title: Preliminaries and Standard Notation
tags:
  - preliminaries
  - notation
draft:
---
This section collects essential definitions and mathematical notations used throughout the study of graphs.

| Notation                              | Definition                                    | Example                                                                                    |
| ------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| $\mathbb{N}$                          | The set of *natural numbers, including zero*. |                                                                                            |
| $\mathbb{Z}_n=\mathbb{Z}/n\mathbb{Z}$ | The set of *integers modulo*.                 | For $n=5$, $\mathbb{Z}_5=\{0,1,2,3,4\}$                                                    |
| $\lfloor x \rfloor$                   | The *greatest integer less than or equal to*. | $\lfloor 3.7 \rfloor=3$                                                                    |
| $\lceil x \rceil$                     | The *least integer greater than or equal to*  | $\lceil 3.7 \rceil=4$                                                                      |
| $\log$                                | Logarithms taken at *base 2*.                 |                                                                                            |
| $\ln$                                 | The natural logarithm.                        |                                                                                            |
| $[A]^k$                               | The set of all *k-element subsets* of $A$     | If $A=\{a,b,c\}$, then $[A]_1=\{\{a\},\{b\},\{c\}\}$, $[A]_2=\{\{a,b\}, \{a,c\},\{b,c\}\}$ |

**Partitions**: A collection $\mathcal{A}=\{A_1, \dots, A_k\}$ of disjoint subsets of a set $A$ is a *partition* of $A$ if $A=\bigcup_{i=1}^k A_i$ and $A_i\neq 0$ for every $i$. A partition $\mathcal{A}'$ *refines* $\mathcal{A}$ if each $A_i'$ in $\mathcal{A}'$ is contained in some $A_j$ in $\mathcal{A}$.

> [!example] Partition Example
> Let's take 
> $$
> A=\{1, 2, 3, 4, 5, 6\}
> $$
> A **partition** of $A$ is a collection of *nonempty, disjoint subsets* whose union gives back $A$. For instance:
> $$
> \mathcal{A}=\{A_1, A_2, A_3\}
> $$
> where
> $$
> A_1=\{1, 2\}, \quad A_2=\{3, 4\}, \quad A_3=\{5, 6\}
> $$
> - They are *disjoint* (no overlap).
> - Their *union* is the full set $A$.
>
> So $\mathcal{A}$ is a *partition* of $A$.


> [!example] Refinement Example
> Let's:
> $$
> \mathcal{A}'=\{A_1', A_2', A_3', A_4'\}
> $$
> where
> $$
> A_1'=\{1\},\quad A_2'=\{2\},\quad A_3'=\{3,4\}, \quad A_4'=\{5,6\}
> $$
> Here:
> - $A_1'$ and $A_2'$ are both inside $A_1=\{1,2\}$
> - $A_3'$ is inside $A_2=\{3, 4\}$
> - $A_4'$ is inside $A_3=\{5,6\}$
>
> Each $A_i' \subseteq A_j$ for some $A_j \in \mathcal{A}$. Therefore, $\mathcal{A}'$ refines $\mathcal{A}$.


