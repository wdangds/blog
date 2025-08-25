---
title: Basics of probability theory
draft: false
tags:
  - probabiltiy
---
## Basics of Probability

This serves as a **collection of definitions** for readers who already have a background in probability or mathematical statistics.

### 1. Core Concepts of Probability
- **Set $(\Omega)$**: Any set.
- **Events (A, B, etc.)**: A class of subsets of $\Omega$, satisfying certain assumptions (e.g., closedness under basic set operation). For an event A, its **complements ($A^c$)** is defined as
$$
A^c=\{s\in \Omega: s\notin A\}
$$
- **Probability Measure (P)**: A function $P:\Sigma \rightarrow [0,1]$  (where $\Sigma$ is the class of events) satisfying:
  - $P(\varnothing)=0$
  - $P(A^c)=1-P(A)$ for every event A.
  - If A and B are **disjoint events** ($A\cap B=\varnothing$), then $P(A\cup B)=P(A)+P(B)$.
  - More generally, for a **countable sequence of disjoint events** $(A_1, A_2, ...)$:
$$
P(\bigcup_{i=1}^{\infty}A_i)=\sum_{i=1}^{\infty}P(A_i)
$$
- **Conditional probability P(A|B)**: If A and B are events and $P(B)>0$, the conditional probability of A given B is defined as:
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}
$$
This represents how likely event A is, given that event B has occurred.
- **Independence**:
	- **Two events (A and B)** are **independent** if $P(A\cap B) = P(A)P(B)$.
		- Note that if $P(B)>0$, independence between A and B is equivalent to having $P(A\mid B)= P(A)$, meaning that the occurrence of B does not affect the likelihood of A.
	- **Finite Sequence of Events $(A_1, ..., A_k)$**: They are independent if for any $l\leq k$ and any selection of $l$ distinct events $(A_{i1}, A_{i2}, ..., A_{il})$:
