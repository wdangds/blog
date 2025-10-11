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
> A row vector $\pi=(\pi_1, ..., \pi_k)$ is a **stationary distribution** for a Markov chain with state space $\{s_1,...,s_k\}$ and [[Markov Chains#b. Transition Matrix (P)|transition matrix]] $P$ if it satisfies two conditions: ^def-stationary-distribution
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
> We need to solve $\pi=(\pi_1,\pi_2)$ with $\pi=\pi P$, $\pi_1+\pi_2=1$, $pi_i\geq 0$.
> We will get $\pi=(0.8, 0.2)$. In the long run, about 80% of the time the chain is in state 1, 20% in state 2.
## 2. Existence and Uniqueness of Stationary Distributions
The existence and uniqueness of a stationary distribution are guaranteed under specific conditions, namely that the Markov chain is [[Irreducible and aperiodic Markov chains#1. Irreducibility|irreducible]] and [[Irreducible and aperiodic Markov chains#2. Aperiodicity|aperiodic]].
### a. Existence of a Stationary Distribution
> [!theorem] Theorem 5.1 (Existence of stationary distributions) ^theorem-5-1
> *For any irreducible and aperiodic Markov chain, there exists at least one stationary distribution.*

The proof of this theorem involves constructing a candidate distribution and verifying that it meets the required properties. This construction relies on the concept of **hitting times**:
- **Hitting Time ($T_{i,j}$)**: The first time $n\geq 1$ that the chain, starting in state $s_i$, reaches state $s_j$.
- **Mean Hitting Time ($\tau_{i,j}$)**: The expected value of the hitting time, $E[T_{i,j}]$. The special case $\tau_{i,i}$ is the **mean return time** for state $s_i$.

> [!lemma] Lemma 5.1
> For any irreducible aperiodic Markov chain with state space $S=\{s_1,\dots,s_k\}$, and transition matrix $P$, we have for any two states $s_i, s_j\in S$ that if the chain starts in state $s_i$, then
> $$
> \mathbf{P}(T_{i,j}<\infty)=1
> $$
> Moreover, the mean hitting time $\tau_{i,j}$ is finite, i.e.,
> $$
> E[T_{i,j}]<\infty
> $$

This lemma establishes that for an irreducible, aperiodic chain, any state $s_j$ will eventually be reached from any starting state $s_i$ with probability 1, and the mean hitting time $\tau_{i,j}$ is finite.

>[!proof]-
> The stationary distribution $\pi$ is then constructed as follows:
> $$
> \pi_i=\frac{\gamma_i}{\tau_{1,1}}
> $$
> where $\gamma_i$ is the expected number of visits to state $s_i$ before the chain returns to its starting state $s_1$. It can be shown that this construction satisfies $\pi P=\pi$ and $\sum \pi_i=1$.
>
> An important consequence is that the components of the stationary distribution are the reciprocals of the mean return times:
> $$
> \pi_i=\frac{1}{\tau_{i,i}}
> $$

### b. Uniqueness of the Stationary Distribution
> [!theorem] Uniqueness of the stationary distribution
> Any irreducible and aperiodic Markov chain has exactly one stationary distribution.

> [!proof]-
> The proof uses the convergence theorem (discussed next). If we assume there are two distinct stationary distributions, $\pi$ and $\pi'$, we can start a chain with the initial distribution $\mu(0)=\pi'$. Because $\pi'$ is stationary, the distribution at any time $n$ will remain $\mu(n)=\pi'$ . However, the convergence theorem states that $\mu(n)$ must converge to the stationary distribution $\pi$. This implies that $\pi'$ must be equal to $\pi$, proving uniqueness.

## 3. Convergence to the Stationary Distribution
The most significant result is that, under the right conditions, a Markov chain will "forget" its initial state and its distribution will converge to the unique stationary distribution.
### a. Measuring Convergence: Total Variation Distance
To formalize the concept of convergence between probability distributions, the **total variation distance** is used.
>[!definition]
>If $v^{(1)}=(v_1^{(1)},\dots, v_k^{(1)})$ and $v^{(2)}=(v_1^{(2)},\dots, v_k^{(2)})$ are the probability distributions on $S=\{s_1,\dots,s_k\}$, then we define the **total variation distance** between $v^{(1)}$ and $v^{(2)}$ as:
>$$
>d_{TV}(v^{(1)},v^{(2)})=\frac{1}{2}\sum_{i=1}^{k}\mid v_i^{(1)}-v_i^{(2)}\mid
>$$

This metric ranges from 0 (for identical distributions) to 1 (for completely disjoint distributions). It represents the maximum possible difference between the probabilities that the two distributions assign to any single event. A sequence of distributions $v^{(n)}$ converges to $v$ in the total variation if 
$$
\lim_{n\rightarrow\infty}d_{TV}(v^{(n)},v)=0
$$
### b. The Markov Chain Convergence Theorem
>[!theorem] The Markov chain convergence theorem
>Let $(X_0, X_1,\dots)$ be an irreducible aperiodic Markov chain with state space $S=\{s_1, \dots, s_k\}$, transition matrix P, and arbitrary initial distribution $\mu^{(0)}$. Then, for any distribution $\pi$ which is stationary for the transition matrix P, we have
>$$
>\mu^{(n)}\overset{TV}{\longrightarrow}\pi 
>$$

This means that for a sufficiently large $n$, the distribution of the chain will be arbitrarily close to $\pi$, regardless of the starting distribution. This process is often described as the Markov chain *approaching equilibrium*.

## 4. Importance of Irreducibility and Aperiodicity
The conditions of irreducibility and aperiodicity are essential for the uniqueness and convergence theorems.
- **Reducible Chains**: If a chain is reducible, it can have multiple stationary distributions. For example, a chain with two separate, non-communicating components can have a different stationary distribution for each component. In fact, if a chain has two different stationary distributions, it has infinitely many, as any weighted average of them is also a stationary distribution. For such chains, the uniqueness and convergence results fail.
- **Periodic Chains**: If a chain is irreducible but periodic, it still has a unique stationary distribution (the existence and uniqueness theorems can be adapted), but the distribution $\mu^{(n)}$ does not converge to it. Instead, the distribution may oscillate. For example, a knight making random moves on a chessboard will always be on a white square after an even number of moves and a black square after an odd number of moves (if started on a white square), so its distribution will never settle down. Therefore, the convergence theorem fails for periodic chains.

In summary, for any *irreducible and aperiodic* finite Markov chain, there is a *unique stationary distribution* $\pi$, and regardless of the starting state, the distribution of the chain over time will converge to $\pi$.


