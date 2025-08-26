---
title: Basics of probability theory
draft: false
tags:
  - probabiltiy
---

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
	- **Finite Sequence of Events $(A_1, ..., A_k)$**: They are independent if for any $l\leq k$ and any selection of $l$ distinct events $(A_{i_1}, A_{i_2}, ..., A_{i_l})$:
  $$
  P(A_{i_1}\cap A_{i_2}\cap ... \cap A_{i_l})=\prod_{n=1}^{l}P(A_{i_n})
  $$
  - **Infinite Sequence of Events $(A_1, A_2,...)$** : They are independent if any finite subsequence $A_1,..., A_k$ is independent for any $k$.

### 2. Random Variables and Distributions
- **Random Variable (X)**: Thought of as a **random quantity that depends on chance**.
	- Usually **real-valued** ($X: \Omega \rightarrow \mathbb{R}$), but can also be more general ($X:\Omega \rightarrow S$, where $S$ is any set).
- **Event Defined in Terms of a Random Variable**: An event A is defined in terms of X if its occurrence can be determined from the value of X. Examples:
$$
A=\{X\leq 4.7\}=\{\omega\in\Omega: X(\omega)\leq 4.7\}
$$
or
$$
B=\{X \text{ is an even integer}\}
$$
- **Independence of Random Variables**:
	- **Two random variables (X and Y)**: They are independent if whenever each $A$ is defined in terms of $X$ and event $B$ in terms of $Y$, $A$ and $B$ are independent.
	- **Finite Sequence ($X_1, ..., X_k$)**: They are independent if events $A_1, ..., A_k$ are independent whenever each $A_i$ is defined in terms of $X_i$.
	- **Infinite Sequence ($X_1, X_2,...$)**: They are independent if for any sequence of events $A_1, A_2,...$, where each $A_i$ is defined in terms of $X_i$.
- **Distribution**: This is **the same thing as a probability measure**.
	- **Distribution of a Real-Valued Random Variable ($\mu X$)**: The probability measure on $\mathbb{R}$ satisfying $\mu X(A)=P(X\in A)$ for appropriate $A\subseteq \mathbb{R}$.
	- **Distribution Function ($F_X$)**: A real-valued random variable's distribution is characterized by its distribution function $F_X: \mathbb{R} \rightarrow [0,1]$ defined by $F_X(x)=P(X\leq x)$ for all $x\in \mathbb{R}$.
	- **Distribution on a Finite Set $S=\{s_1,...,s_k\}$**: Often represented as a vector $(\mu_1,...,\mu_k)$, where $\mu_i=\mu(s_i)$, with $\mu_i\in [0,1]$ and $\sum_{i=1}^{k}\mu_i=1$.
- **i.i.d. Random Variables**: Short for **independent and identically distributed**. A sequence of random variable $X_1, X_2,...$ is **i.i.d.** if they:
	1. Are **independent**.
	2. Have the **same distribution function**, i.e., $P(X_i\leq x)=P(X_j\leq x)$ for all $i$, $j$, and $x$.
> [!example]- **Example**
> 🎲 Rolling a fair six-sided die multiple times.
>  -  Let $X_1, X_2, ..., X_n$ be the outcomes of each roll.
>  - Each $X_i$ can take values in $\{1, 2, 3, 4, 5, 6\}$.
>  - They are **identically distributed** because every roll follows the same uniform distribution:
> $$
> P(X_i=k)=\frac{1}{6}, \quad k=1,2,...,6
> $$
> - They are **independent** because the result of one roll does not affect the result of another.
> So if we roll the die 10 times, the sequence of outcomes can be modeled as 10 i.i.d random variables
- **Random Process (or Stochastic Process)**: A sequence of random variables $(X_1)
