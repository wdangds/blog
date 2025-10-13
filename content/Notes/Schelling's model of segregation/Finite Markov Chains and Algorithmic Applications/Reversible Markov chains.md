---
title: Reversible Markov chains
tags:
  - reversible
  - Markov-Chains
draft:
date: 2025-10-09
---
## 1. Introduction and Definition
Reversible Markov chains constitute a **special class of Markov chains**. They are characterized by the fact that they "look the same" regardless of whether time runs backwards or forwards. 

> [!definition] Reversible Distribution
> Let $(X_0, X_1,\dots)$ be a Markov chain with state space $S=\{s_1, \dots, s_k\}$ and transition matrix $P$. A probability distribution $\pi$ on $S$ is said to be **reversible** for the chain (or for the transition matrix $P$) if for all $i, j \in \{1, \dots, k\}$ we have:
> $$
> \pi_iP_{i,j}=\pi_jP_{j,i}
> $$
> The Markov chain is said to be reversible if there exists a reversible distribution for it.

**Interpretation of reversibility**: If the Markov chain is initiated using the reversible distribution $\pi$, the left-hand side of equation $\pi_iP_{i,j}$ can be understood as *the amount of probability mass flowing at time 1 from state $s_i$ to state $s_j$*. Similarly, the right-hand side, $\pi_j P_{i,j}$ represents *the probability mass flowing from $s_j$ to $s_i$*. This condition represents a strong form of equilibrium.

> [!example]- 
> Imagine cars moving between two cities A and B. If the average *flow of drivers per hour* from A to B equals the flow from B to A, the highway system is in *traffic equilibrium*. Even though individual cars move, the *net probability flux* is zero.

## 2. Relationship to Stationary Distribution
>[!theorem] 
> Let $(X_0, X_1, \dots)$ be a Markov chain with state space $S=\{s_1, \dots, s_k\}$ and transition matrix $P$. If $\pi$ is a reversible distribution for the chain, then it is also a stationary distribution for the chain.
> 

> [!proof]- 
> The proof requires demonstrating that for any $j \in \{1,\dots, k\}$,
> $$
> \pi_j=\sum_{i=1}^k\pi_iP_{i,j}
> $$
> since property (i) of [[Stationary distributions#^def-stationary-distribution|definition]] (the requirement that $\pi$ is a probability distribution) is immediate.
>
> The derivation is as follows:
> $$
> \pi_j=\pi_j \sum_{i=1}^k P_{i,j}=\sum_{i=1}^k \pi_j P_{j,i} = \sum_{i=1}^k \pi_i P_{i,j}
> $$

> [!example]- 
> A lake with steady inflow and outflow - water continuously circulates but water level stays constant.

## 3. Examples of Reversible Markov Chains
### a. Random Walks on Graphs
This example generalizes the basic [[Markov Chains#1. Introduction to Markov Chains|random walk]].

> [!definition] Graph Definition
> A graph $G=(V,E)$ consists of a vertex set $V=\{v_1, \dots, v_k\}$ and an edge set $E=\{e_1, \dots, e_l\}$. An edge connect two vertices, denoted $\langle v_i, v_j \rangle$. No two edges connect the same pair of vertices. Two vertices are **neighbors** if they share an edge.

![[fig-4-graph.png]]

**Transition Mechanism**: A random walk on $G$ is a Markov chain where the state space is $V$. If the random walker is at vertex $v_i$ at time $n$, it moves at time $n+1$ to one of $v_i$'s neighbors, chosen *with equal probability* for each neighbor.

**Transition Matrix ($P$)**: If $d_i$ is the number of neighbors of $v_i$ (its degree), the transition matrix elements are
$$
P_{i,j}=\begin{cases}
\frac{1}{d_i}, & \text{if } v_i\text{ and }v_j\text{ are neighbors}\\
0, & \text{otherwise}
\end{cases}
$$

**Reversibility and Distribution**: Random walks on graphs are *reversible Markov chains*. The reversible distribution $\pi$ is given by:
$$
\pi=\left(\frac{d_1}{d},\frac{d_2}{d},\dots,\frac{d_k}{d}\right)
$$
where $d=\sum_{i=1}^kd_i$ is the sum of the degrees of all vertices.
- If $v_i$ and $v_j$ are neighbors:
$$
\pi_i P_{i,j}=\frac{d_i}{d}\frac{1}{d_i}=\frac{1}{d}=\frac{d_j}{d}\frac{1}{d_j}=\pi_j P_{j,i}
$$
- If $v_i$ and $v_j$ are not neighbors, then $P_{i,j}=0$ and $P_{j,i}=0$, so $0=\pi_j P_{j,i}$ and $\pi_i P_{i,j}=0$, satisfying the condition.

For the graph in Figure above:
$$
\pi=\left(\frac{2}{24},\frac{3}{24},\frac{5}{24},\frac{3}{24},\frac{2}{24},\frac{3}{24},\frac{3}{24}, \frac{3}{24} \right)
$$
In equilibrium, the most likely vertex for the random walker is $v_3$ (with degree 5), while the least likely ones are $v_1$ and $v_5$ (both with degree 2)

> [!example]- Real-world analogy
> An internet "suffer" clicks random links between websites; pages with more links get visited more often. That's the *basis of PageRank*.
### b. Birth-and-Death Processes
A Markov chain $(X_0, X_1, \dots)$ with state space $S=\{s_1,\dots, s_k\}$ is often called a **birth-and-death process** if its transition matrix $P$ satisfies the following properties:
1. $P_{i,j}>0$ whenever $|i-j|=1$.
2. $P_{i,j}=0$ whenever $|i-j|\geq 2$.

![[fig-5-transition-graph.png]]

The transition graph for this type of chain is outlined above, noting that $P_{i,i}$ "loops" may or may not be present.

**Reversibility Construction**: Any Markov chain of this kind is reversible. To construct the reversible distribution $\pi$:
1. Start by setting a temporary value $\pi_1^*$ to an arbitrary strictly positive number $a$.
2. Use the reversibility condition for neighboring states to determine subsequent values:
	- For $i=1$ and $j=2$: $\pi_1^*P_{1,2}=\pi_2^*P_{2,1}$, forcing $\pi_2^*=a\frac{P_{1,2}}{P_{2,1}}$.
	- For $i=2$ and $j=3$: $\pi_3^*=\pi^*_2 \frac{P_{2,3}}{P_{3,2}}=a\frac{P_{1,2}{P_{2,3}}}{P_{2,1}P_{3,2}}$.
3. The general formula for $\pi_i^*$ is:
$$
\pi_i^*=\frac{a\prod_{l=1}^{i-1}P_{{i,l+1}}}{\prod_{l=1}^{i-1}P_{l+1,i}}, \quad \text{for each }i
$$
4. The vector $\pi^*=(\pi_1^*,\dots,\pi_k^*)$ satisfies the reversibility condition, but requires normalization to become a true probability distribution (since its entries may not sum to 1).
5. The final normalized reversible distribution:
$$
\pi=(\pi_1,\pi_2, \dots, \pi_k)=\left(\frac{\pi_1^*}{\sum_{i=1}^k\pi_i^*}, \frac{\pi_2^*}{\sum_{i=1}^k\pi_i^*},\dots, \frac{\pi_k^*}{\sum_{i=1}^k\pi_i^*} \right)
$$

> [!example]- Real-world analogy
> Queue length in a store: only increases (birth) or decreases (death) by one customer at a time.
> 
> The equilibrium line length reflects the balance of arrival vs. service rates.

## 4. Nonreversible Markov Chain
While it might appear that most Markov chains are reversible, this is not true.

Let us consider a [[Markov Chains#Problem 2.2 Modified Random Walk|modified version of the random walk]]. Suppose that the coin tosses are biased. At each integer time, the walker moves one step clockwise with probability $\frac{3}{4}$, and one step counterclockwise with probability $\frac{1}{4}$. This yield the transition graph below.

![[fig-6-transition-graph.png]]

**Stationary Distribution**: The distribution $\pi=\left(\frac{1}{4},\frac{1}{4}, \frac{1}{4}, \frac{1}{4} \right)$ is the stationary distribution for this chain. Because this chain is irreducible, this stationary is unique (by [[Stationary distributions#b. Uniqueness of the Stationary Distribution|theorem]]). 

**Reversibility Test Failure**: Due to [[#2. Relationship to Stationary Distribution|relationship to stationary distribution]], the unique stationary distribution $\pi$ *must* be reversible for the chain to be reversible. Testing for $i=1$ and $j=2$:
- $\pi_1 P_{1,2}=\frac{1}{4}\cdot \frac{3}{4}=\frac{3}{16}$
- $\pi_2 P_{2,1}=\frac{1}{4}\cdot\frac{1}{4}=\frac{1}{16}$. Since $\frac{3}{16}>\frac{1}{16}$, we have $\pi_1 P_{1,2}\neq \pi_2 P_{2,1}$, demonstrating that reversibility ails.

> [!tip] Explanation
> The chain is not reversible because the walker has a *tendency to move clockwise*. If a film of the walker were watched backwards, it would appear the walker favored counterclockwise movement, meaning the chain behaves differently in "backwards time" versus "forwards time".

> [!example]- Real-world analogy
> A one-way traffic circle - steady flow exists, but reversing the movie shows a different behavior (violates time-symmetry)

