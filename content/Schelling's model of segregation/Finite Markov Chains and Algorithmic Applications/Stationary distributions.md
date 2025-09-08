---
title: Stationary distributions
draft:
tags:
  - Markov-Chains
  - probability
---

## 1. The Concept of a Stationary Distribution
While the state of a Markov chain, $X_n$, will continue to fluctuate as time $n$ increases, the **distribution of $X_n$ can settle down to a limit**. This limiting distribution is known as the stationary distribution, which describes the chain's behavior after it has been running for a long time.
>[!definition]
A row vector $\pi=(\pi_1, ..., \pi_k)$ is a **stationary distribution** for a Markov chain with state space $\{s_1,...,s_k\}$ and [[Markov Chains#b. Transition Matrix (P)|transition matrix]] $P$ if it satisfies two conditions:
> 1.  **It is a probability distribution:**
>     - $\pi_i\geq 0$ for all states $i=1,...,k$.
>     - The sum of its components is 1: $\sum_{i=1}^k r_i=1$.
>  2.  **It is invariant under the transition matrix:**
> 	 - $\pi P = \pi$, which means $\sum_{i=1}^k \pi_i P_{i,j}=\pi_j$ for each state $j$

The second property implies that if the chain's initial distribution $\mu^{(0)}$ is the stationary distribution $\pi$, then the distribution at any future time $n$ will also be $\pi$ (i.e., $\mu^{(n)}=\pi$ for all $n$). This is why a stationary distribution also sometimes called an **invariant distribution** or **equilibrium distribution**.
> [!example]-
> Suppose 
> $$
> P=\begin{bmatrix}
> 0.9 & 0.1 \\
> 0.4 & 0.6 \\
> \end{bmatrix}
> $$
> We need to solve $\pi=(\pi_1,\pi_2)$ with $\pi=\pi P$, $pi_1+pi_2=1$, $pi_i\geq 0$.
> We will get $\pi=(0.8, 0.2)$. In the long run, about 80% of the time the chain is in state 1, 20% in state 2.
## 2. Existence and Uniqueness of Stationary Distributions
The existence and uniqueness of a stationary distribution are guaranteed under specific conditions, namely that the Markov chain is [[Irreducible and aperiodic Markov chains#1. Irreducibility|irreducible]] and [[Irreducible and aperiodic Markov chains#2. Aperiodicity|aperiodic]].
### a. Existence of a Stationary Distribution
> [!theorem] Theorem 5.1 (Existence of stationary distributions) ^theorem-5-1
> *For any irreducible and aperiodic Markov chain, there exists at least one stationary distribution.*

The proof of this theorem involves constructing a candidate distribution and verifying that it meets the required properties. This construction relies on the concept of **hitting times**:
- **Hitting Time ($T_{i,j}$)**: The first time $n\geq 1$ that the chain, starting in state $s_i$, reaches state $s_j$.
- **Mean Hitting Time ($\tau_{i,j}$)**: The expected value of the hitting time, $E[T_{i,j}]$. The special case $\tau_{i,i}$ is the **mean return time** for state $s_i$.