---
title: Algebraic Representations of Networks
date: 2025-12-24
draft:
tags:
  - bipartite
  - affiliation-networks
  - adjacency-matrix
  - path
  - triangles
  - incidence-matrix
---
> [!tip] Recap
> A network (graph) is $G=(V,E)$, with node set $V$ and edge set $E$. We will use:
> - $n=|V|$, $m=|E|$.
> - For a node $i$, its (undirected) neighbor set is $N(i)=\{j:(i,j)\in E\}$.
> - Degree $d_i=|N(i)|$ (or weighted versions later).
> - For directed networks, we distinguish **out-neighbors** and **in-neighbors**.
> 
> Throughout, we move between two "languages":
> 1. **Algebraic/spectral language** (matrices, powers, traces), which lets us count and compute.
> 2. **Social-mechanism language** (closure, homophily, weak ties), which explains why patterns form.
> 
> A theme we should keep in mind:
> > Many "macro" patterns (clustering, segregation, communities) can arise from simple "micro" rules (closure preferences, context, mild thresholds).

## I. Bipartite graphs and affiliation networks

> [!definition] Bipartite graphs
> A graph is [[Bipartite graphs|bipartite]] if its node can be partitioned into two disjoint sets $V_1, V_2$ such that every edge connects a node in $V_1$ to a node in $V_2$. There are **no edges within** $V_1$ or within $V_2$.

```tikz
\begin{document}
\begin{tikzpicture}[
  every node/.style={circle, draw, minimum size=7mm},
  lab/.style={draw=none, font=\bfseries}
]
% --- V1 (left) ---
\node (u1) at (0,  1.6) {$u_1$};
\node (u2) at (0,  0.0) {$u_2$};
\node (u3) at (0, -1.6) {$u_3$};

% --- V2 (right) ---
\node (v1) at (3.2,  1.0) {$v_1$};
\node (v2) at (3.2, -0.6) {$v_2$};
\node (v3) at (3.2, -2.2) {$v_3$};

% Labels for the partitions
\node[lab] at (0,  2.6) {$V_1$};
\node[lab] at (3.2, 2.6) {$V_2$};

% Optional: light boxes around each partition (visual partitioning)
\draw[dashed, rounded corners] (-0.8, 2.2) rectangle (0.8, -2.2);
\draw[dashed, rounded corners] ( 2.4, 2.2) rectangle (4.0, -2.8);

% Edges: only between V1 and V2 (bipartite)
\draw (u1) -- (v1);
\draw (u1) -- (v2);
\draw (u2) -- (v2);
\draw (u2) -- (v3);
\draw (u3) -- (v1);

% (Intentionally NO edges like u1--u2 or v1--v2)
\end{tikzpicture}
\end{document}
```
In social network analysis, bipartite graphs often represent **affiliation networks**.

> [!definition] Affiliation networks
> An **affiliation network** is a specific type of bipartite graph used to represent the participation of a set of people in a set of social "foci".
> - **Nodes**: One set of nodes represents individuals (people), while the other set represents **foci**.
> - **Foci**: These are "focal points" of social interaction, defined as social, psychological, legal, or physical entities around which joint activities are organized. Examples include *workplaces, voluntary organizations, clubs, or even shared hobbies.*
> - **Edges**: An edge exists between person $A$ and focus $X$ if and only if **person $A$ participates in focus $X$.**

A common example of an affiliation network is the study of **corporate boards of directors**. In this network, nodes represent individual directors and the companies they serve; an edge connects a person to a board they belong to. This structure reveals "interlocking" memberships, where one person sits on multiple boards, creating potential conduits for information to flow between different companies.

The concept can be expanded into a **social-affiliation network**, which contains both person-to-person edges (representing social ties like friendship) and person-to-focus edges (representing participation). This dual representation allows researchers to see how social ties and affiliations co-evolve.

```tikz
\begin{document}
\begin{tikzpicture}[
  person/.style={circle, draw, minimum size=8mm},
  focus/.style={rectangle, draw, rounded corners=2pt, minimum width=16mm, minimum height=8mm},
  social/.style={thick},                 % person-person edge
  affiliation/.style={thick, dashed},    % person-focus edge
  lab/.style={draw=none, font=\bfseries}
]

% ---------------------------
% Persons (left side)
% ---------------------------
\node[person] (a) at (0,  2.0) {A};
\node[person] (b) at (0,  0.7) {B};
\node[person] (c) at (0, -0.6) {C};
\node[person] (d) at (0, -1.9) {D};

\node[lab] at (0, 2.9) {Persons};

% ---------------------------
% Foci / affiliations (right side)
% ---------------------------
\node[focus] (club)  at (4,  1.6) {Club};
\node[focus] (class) at (4,  0.0) {Class};
\node[focus] (gym)   at (4, -1.6) {Gym};

\node[lab] at (4, 2.9) {Foci};

% ---------------------------
% Person-to-person edges (social ties)
% ---------------------------
\draw[social] (a) -- (b);
\draw[social] (b) -- (c);
\draw[social] (c) -- (d);
\draw[social, bend right=45] (a) to (c);

% ---------------------------
% Person-to-focus edges (participation / affiliation)
% ---------------------------
\draw[affiliation] (a) -- (club);
\draw[affiliation] (b) -- (club);
\draw[affiliation] (b) -- (class);
\draw[affiliation] (c) -- (class);
\draw[affiliation] (c) -- (gym);
\draw[affiliation] (d) -- (gym);

% ---------------------------
% Legend
% ---------------------------
\node[draw=none, anchor=west] (L1) at (0, -3.1) {};
\draw[social] (0.2, -3.1) -- (1.4, -3.1);
\node[draw=none, anchor=west] at (1.6, -3.1) {social tie (person--person)};

\draw[affiliation] (0.2, -3.5) -- (1.4, -3.5);
\node[draw=none, anchor=west] at (1.6, -3.5) {participation (person--focus)};

\end{tikzpicture}
\end{document}
```

Why bipartite structure is powerful:
- It makes "context" explicitly: ties may form because people share foci, not just because of existing friendships.
- It naturally leads to **projection**: two people can be connected in a derived person-person graph is they share a focus.

> [!info] Derived Structures and Evolution
> Affiliation networks often lead to the creation of a **projected graph** (or derived network). In a projected graph of people, two individuals are joined by an edge if they **share at least one common focus** in the underlying affiliation network.
> 

![[projected-graph.png]]

While useful for simplifying data, information can be "lost" during this projection because the specific focus that connected the individuals is no longer explicitly represented.

> [!example]- 
> If Anna and Bob both belong to "Karate Club", then even if they weren't friends before, repeated co-presence raises the chance that they become friends.

## II. Triangles, trace identities, and motif counting
