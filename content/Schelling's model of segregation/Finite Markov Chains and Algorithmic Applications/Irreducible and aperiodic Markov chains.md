---
title: Irreducible and aperiodic Markov chains
draft:
tags:
  - Markov-Chains
  - probability
  - irreducible
  - aperiodic
---
In the study of [[Markov Chains|Markov chains]], certain conditions are imposed to yield significant theoretical results. These conditions need to be strong enough to product useful consequences while also being applicable to a wide range of examples. This note covers two of the most important conditions in Markov theory: **irreducibility** and **aperiodicity**. These concepts are crucial for understanding stationary distributions and are discussed in the context of **homogeneous Markov chains**, where transition probabilities do not change over time.

## 1. Irreducibility
The concept of irreducibility captures the idea that **"all states of the Markov chain can be reached from all others**.
### a. Communication Between States
To formalize this, we define how states relate to one another:
- **Communicates**: A state $s_i$ is said to *communicate* with state $s_j$ (written as $s_i\rightarrow s_j$) if there is a positive probability[^1] of eventually reaching $s_j$ starting from $s_i$. This means there exists some number of steps $n$ where the probability of being in state $s_j$ at time $m+n$, given the chain was in state $s_i$ at time $m$, is greater than zero. For a homogeneous Markov chain, this probability is given by $(P^n)_{i,j}>0$, where $P$ is the transition matrix.
$$
P(X_{m+n}=s_j\mid X_m=s_i)>0
$$
[^1]: Here and henceforth, by "positive probability", we always mean *strictly* positive probability.
- **Intercommunicates**: If state $s_i$ communicates with $s_j$ ($s_i\rightarrow s_j$) and $s_j$ also communicates with $s_i$ ($s_j\rightarrow s_i$), the two states are said to *intercommunicate* (written as $s_i \leftrightarrow s_j$).
### b. Definition of Irreducibility
> [!definition]
> *A Markov chain is ($X_0, X_1,...$) with state space $S=\{s_1,...,s_k\}$ and transition matrix $P$ is said to be **irreducible** if for all $s_i, s_j\in S$ we have that $s_i\leftrightarrow s_j$. Otherwise the chain is said to be **reducible**.*

An alternative way to state this is that a chain is irreducible if for any states $s_i$ and $s_j$, an integer $n$ can be found such that the entry $(P^n)_{i,j}$, in the $n$-step transition matrix is strictly positive. A practical way to check for irreducibility is to examine the chain's **transition graph** and confirm that there is a path of arrows from every state to every other state.

![[fig-irreducibility.png]]
>[!example]- Example 4.1.a: A reducible Markov chain
>Consider a Markov chain with state space $S=\{1,2,3,4\}$ and the transition matrix:
>$$
>P=\begin{bmatrix}
>0.5 & 0.5 & 0 & 0\\
>0.3 & 0.7 & 0 & 0\\
>0 & 0 & 0.2 & 0.8\\
>0 & 0 & 0.8 & 0.2 \\
>\end{bmatrix}
>$$
>This chain is **reducible** because if it starts in state 1 or 2, it can never reach states 3 or 4. Likewise, if it starts in state 3 or 4, it can never reach states 1 or 2.

A key feature of reducible chains is that their long-term analysis can be "reduced" to analyzing smaller, independent Markov chains.
> [!example]- Example 4.1.b
> In the example above:
> - If the chain starts in $\{1,2\}$, it behaves like a smaller chain with the state space $S=\{1,2\}$ and transition matrix
> $$
> \begin{bmatrix}
> 0.5 & 0.5 \\
> 0.3 & 0.7 \\
> \end{bmatrix}
> $$
> - If it starts in $\{3,4\}$, it behaves like a chain with state space $S=\{3,4\}$ and transition matrix
> $$
> \begin{bmatrix}
> 0.2 & 0.8\\
> 0.8 & 0.2\\
> \end{bmatrix}
> $$

## 2. Aperiodicity
Aperiodicity is another key property of Markov chains related to the timing of returns to a state.
### a. Period of a State
>[!definition]
>The **period** of a state $s_i$, denoted $d(s_i)$, is defined as the **greatest common divisor (gcd)** of the set of all possible return times to that state.
>$$
>d(s_i)=\gcd\{n\geq 1: (P^n)_{i,j}>0\}
>$$

- In simpler terms, it's the gcd of all number of steps $n$ for which there is a positive probability of returning to state $s_i$ after starting there.
- A state $s_i$ is called **aperiodic** if its period $d(s_i)= 1$.
### b. Definition of Aperiodicity
A Markov chain is defined as **aperiodic** if all of its state are aperiodic. If any state has a period greater than 1, the chain is considered **periodic**.
> [!example]- Example: Aperiodic chain
> The weather examples ([[Markov Chains#5. Examples of Homogeneous Markov Chains|Gothenburg and Los Angeles]]) are aperiodic because for any state (rain or sun), the probability of having the same weather $n$ days later is positive for all $n$. This means $(P^n)_{i,i}>0$ for all $n$ and all states $s_i$, so the gcd is 1.

> [!example]- Example: Periodic Chain
> A random walk on the corners of a square is periodic. If the walker starts at corner $v_1$, it can only return to $v_1$ in an even number of steps $(2, 4, 6,...)$. Therefore, the set of possible return items is $\{2,4,6\}$ and $\gcd\{2,4,6,...\}=2$. The chain is periodic with a period of 2.

### c. A Key Consequence of Aperiodicity
Aperiodicity is useful because of the following theorem:
> [!theorem] Theorem 4.1 
> *Suppose that we have an aperiodic Markov chain $(X_0, X_1, ...)$ with state space $S=\{s_1, ..., s_k\}$ and transition matrix $P$. Then there exists an $N<\infty$ such that:* ^theorem-4-1
> $$
> (P^n)_{i,i}>0
> $$

To prove this result, we shall borrow the following lemma from number theory.
> [!lemma] Lemma 4.1
> Let $A=\{a_1, a_2,...\}$ be a set of positive integers which is::
> 1. nonlattice, meaning that $\gcd\{a_1, a_2,...\}=1$, and
> 2. closed under addition, meaning that if $a\in A$ and $a'\in A$, then $a+a' \in A$.
> 
> Then there exists an integer $N<\infty$ such that $n\in A$ for all $n\geq N$.

>[!proof]-
>WIP

## 3. Combining Irreducibility and Aperiodicity
When a Markov chain possesses both properties, we get a powerful result that is fundamental to proving long-term convergence.
>[!corollary 4.1]
>Let $(X_0, X_1,...)$ be an irreducible and aperiodic Markov chain with state space $S=\{s_1,...,s_k\}$ and transition matrix $P$. Then there exists an $M<\infty$ such that $(P^n)_{i,j}>0$ for all $i,j\in \{1,...,k\}$ and all $n\geq M$.

>[!proof sketch]
>The proof combines [[#^theorem-4-1|theorem 4.1]] with the definition of irreducibility.
>- From aperiodicity, we know there is an $N$ such that for $n\geq N$, $(P^n)_{i,i}>0$ for any state $i$.
>- From irreducibility, for any pair of states $s_i$ and $s_j$, there exists some number of steps $n_{i,j}$ where the transition is possible, i.e., $(P^{n_{i,j}})_{i,j}>0$.
>- By combining these, we can construct a path from $s_i$ to $s_j$ of any length $m$ greater than $N+n_{i,j}$. The path involves going from $s_i$ back to $s_i$ in $m-n_{i,j}$ steps (which is possible since $m-n_{i,j}\geq N$) and then from $s_i$ to $s_j$ in $n_{i,j}$ steps.
>- By taking the maximum of these path lengths over all possible pairs of states, we find the integer $M$.



