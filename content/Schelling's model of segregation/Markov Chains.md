---
title: Markov Chains
draft: false
tags:
  - probabiltiy
  - Markov-Chains
---
## 1. Introduction to Markov Chains
Markov chains are mathematical models used to describe a sequence of events where the probability of each event depends only on the state attained in the previous event.
> [!example] Random Walker Example
> Consider a "random walker" navigating **four street-corner $(v_1, v_2, v_3, v_4)$** arranged as in Figure 1.
> - At **time 0**, the walker starts at $v_1$. $P(X_0=1) =1$.
> - At **time 1**, a fair coin is flipped: heads moves to $v_2$, tails moves to $v_4$. $P(X_1=2) = \frac{1}{2}, P(X_1=4)=\frac{1}{2}$.
> - From **time 2 onwards**, another coin flip decides the move: heads means one step **clockwise**, tails means one step **counterclockwise** to an adjacent corner.
> - $X_n$ denotes the street-corner at time $n$, forming a random process $(X_0, X_1,...)$ with values in $\{1,2,3,4\}$.

![[fig-1-random-walker.png]]
## 2. Key Properties of Markov Chains
- **Memoryless Property (Markov Property)**:
	- The **conditional distribution of $X_{n+1}$** (the next state) given the entire history of the process up to time $n$ $(X_0, X_1, ..., X_n)$ **depends only on the current state $X_n$**.
	- This means previous states $(X_0, ..., X_{n-1})$ provide no additional useful information for predicting the immediate future state.
> [!example]- Example
> $P(X_{n+1}=v_1 | X_0=i_0,...,X_n=v_2)=\frac{1}{2}$, because the coin flip for the next move is independent of all previous coin flips and states.
-  **Time Homogeneity (Homogeneity)**:
	- The **conditional distribution of $X_{n+1}$ given $X_n$ is the same for all $n$**.
	- This property holds because the mechanism determining the next move does not change over time.
## 3. Definitions and Core Components
### a. Homogeneous Markov Chain
> [!info] Definition 2.1.
> - A random process $(X_0, X_1,...)$ with a **finite state space $S=\{s_1,...,s_k\}$**
> - It is a (homogeneous) Markov chain with **transition matrix P** if, for all time steps $n$, and for any current state $s_i$ and potential next state $s_j$, the probability of moving from $s_i$ to $s_j$ depends only on $s_i$ and $s_j$, and not on previous states or the specific time $n$: 
> $$
> \begin{aligned}
> P(X_{n+1}=s_j|X_0=s_{i_0}, & X_1=s_{i_1},...,X_n=s_i)\\&=P(X_{n+1}=s_j|X_n=s_i)\\&=P_{i,j}
> \end{aligned}
> $$
> - The term "homogeneous" is often omitted, being implicitly understood for "Markov chains".
### b. Transition Matrix (P)
- A **$k\times k$ matrix** where its elements, $P_{i,j}$, are called **transition probabilities.**
- $P_{i,j}$ is the conditional probability of being in state $s_j$ "tomorrow" given that the process is in state $s_i$ "today".
> [!example]- Example (Random Walker)
 For the 4-corner random walker, the state space is $\{1,2,3,4\}$ and the transition matrix is:
$$
P=\begin{bmatrix}
 0 & \frac{1}{2} & 0 & \frac{1}{2}\\
 \frac{1}{2} & 0 & \frac{1}{2} & 0\\
 0 & \frac{1}{2} & 0 & \frac{1}{2}\\
 \frac{1}{2} & 0 & \frac{1}{2} & 0\\
\end{bmatrix}
$$
### c. Properties of Transition Matrices
- **Non-negativity**: $P_{i,j}\geq 0$ for all $i,j\in \{1,...,k\}$
- **Row sum to 0**: The sum of probability in each row must equal to 1 (from any given state $s_i$, the process must transition to some state):
$$
\sum_{j=1}^kP_{i,j}=1 \quad \forall i\in {1,...k}
$$
### d. Initial Distribution ($\mu^{(0)}$)
- A **row vector** that specifies the probability distribution of the Markov chain at time 0.
- $\mu^{(0)}= (P(X_0=s_1), P(X_0=s_2), ..., P(X_0=s_k))$
- The sum of its elements must be 1: 
$$
\sum_{i=1}^k\mu_i^{(0)}=1
$$
> [!example]- Example (Random Walker)
> Since the walker starts at $v_1$, $\mu^{(0)}=(1,0,0,0)$

### e. Distribution at Time $n$ ($\mu^{(n)}$)
- A **row vector** representing the probability distribution of the Markov chain at time $n$.
- $\mu^{(n)}=(P(X_n=s_1), P(X_n=s_2), ..., P(X_n=s_k))$
> [!example]- Example (Random Walker)
Based on initial moves, $\mu^{(1)}=(0, \frac{1}{2}, 0, \frac{1}{2})$
## 4. Computing Distributions Over Time
> [!summary] Theorem 2.1: Calculation of $\mu^{(n)}$
> *For a Markov chain $(X_0,X_1,...)$ with state space $\{s_1, ..., s_k\}$, initial distribution $\mu^{(0)}$ and transition matrix $P$, we have for any $n$ that the distribution $\mu^{(n)}$ at time $n$ satisfies:*
> $$
> \mu^{(n)} = \mu^{(0)}P^n
> $$
> $P^n$ represents the $n$th power of the transition matrix $P$.

>[!proof]- Proof
>WIP
- **Multiple-step Transition Probabilities:**
	- Following the same logic, the probability of transitioning from state $s_i$ to $s_j$ in $n$ steps, $P(X_{m+n}=s_j|X_m=s_i)$, is given by the $(i,j)$-th element of the matrix $P^{(n)}$
$$
P(X_{m+n}=s_j|X_m=s_i)=(P^{n})_{i,j}
$$
## 5. Examples of Homogeneous Markov Chains
> [!example]- Example 2.1: The Gothenburg weather
> It is sometimes claimed that the best way to predict tomorrow's weather is simply to guess that it will be the same tomorrow as it is today. If we assume that this claim is correct, then it is natural to model the weather as a Markov chain. For simplicity, we assume that there are only two kinds of weather: rain and sunshine. If the above predictor is correct 75% of the time (regardless of whether today's weather is rain or sunshine), then the weather forms a Markov chain with state space $S = \{s_1, s_2\}$ (with $s_1=$ "rain" and $s_2=$ "sunshine") and transition matrix:
> $$
> P=\begin{bmatrix}
> 0.75 & 0.25\\
> 0.25 & 0.75\\
> \end{bmatrix}
> $$

> [!example]- Example 2.2: The Los Angeles Weather
> Note that in Example above, there is a perfect symmetry between "rain" and "sunshine", in the sense that the probability that today's weather will persist tomorrow is the same regardless of today's weather. This may be reasonably realistic in Gothenburg, but not in Los Angeles where sunshine is much more common than rain. A more reasonable transition matrix for the Los Angeles weather might therefore be (still with $s_1=$ "rain" and $s_2=$ "sunshine")
> $$
> P=\begin{bmatrix}
> 0.5 & 0.5\\
> 0.1 & 0.9\\
> \end{bmatrix}
> $$

> [!example]- Example 2.3: The Internet as a Markov chain
> - Models a user surfing the internet, clicking on a hyperlink chosen at random (uniformly) from the current page.
> - **State space**: $S=$ the set of all webpage on the Internet.
> - **Transition matrix $P_{i,j}$**:
> 	- $\frac{1}{d_i}$ if page $s_i$ has a link to page $s_j$ (where $d_i$ is the number of links from page $s_i$).
> 	- $0$ otherwise.
> 	- If a page $s_i$ has no links, $P_{ii}=1$ (the user gets "stuck")
> - **Limitation**: If "back buttons" are considered, the process **ceases to be a Markov chain** because the next state would depend on the browsing history $(X_0, ..., X_{n-1})$, not just the current page $X_n$.

## 6. Transition Graphs
- **Definition**: A **visual representation** of a Markov chain.
- **Components**:
	- **Nodes:** Represent the **states** of the Markov chain.
	- **Arrows**: Represent the **transition probabilities** between states.
![[fig-2-transition-graph.png]]
## 7. Inhomogeneous Markov Chain
**Motivation**: In situations where the transition rule (or mechanism) for the Markov chain changes with time, an inhomogeneous model is necessary.
>[!info] Definition 2.2
>- A random process $(X_0, X_1,...)$ with finite state space $S=\{s_1,...,s_k\}$.
>- It is an **inhomogeneous Markov chain** with a sequence of **transition matrices** $P^{(1)}, P^{(2)}$.
>- Each matrix $P^{(n)}$ must satisfy the standard properties (non-negativity and row sums to 1).
>- The transition probability depends on the specific time step $n$:
>$$
>\begin{aligned}
>P(X_{n+1}=s_j|&X_0=s_{i_0},X_1=s_{i_1},..., X_{n-1}=s_{i_{n-1}}, X_n= s_i)\\
>&=P(X_{n+1}=s_j|X_n=s_i)\\
>&=P_{i,j}^{n+1}
>\end{aligned}
>$$

> [!example]- Example 2.4: A Refined Model for the Gothenburg Weather
> - Account for **seasonal changes** by using different transition matrices for different periods.
> - **State space:** $S=\{s_1= \text{ "rain" }, s_2= \text{ "sunshine" }, s_3=\text{ "snow"}\}$
> - **$P_{summer}$**: Used for May-September (e.g., transition matrix without snow as a common outcome).
> $$
> P_{summer}=\begin{bmatrix}
> 0.75&0.25&0\\
> 0.25&0.75&0\\
> 0.5&0.5&0\\
> \end{bmatrix}
> $$
> - **$P_{winter}$**: Used for October-April (e.g., transition matrix with probabilities for snow)
> $$
> P_{winter}=\begin{bmatrix}
> 0.5&0.3&0.2\\
> 0.15&0.7&0.15\\
> 0.2&0.3&0.5\\
> \end{bmatrix}
> $$

>[!summary] Theorem 2.2: Calculation of $\mu^{(n)}$ for Inhomogeneous Chains
>*Suppose that $(X_0, X_1,...)$ is an inhomogeneous Markov chain with state space $\{s_1,...,s_k\}$, initial distribution $\mu^{(0)}$ and transition matrices $P^{(1)}, P^{(2)},...$ For any $n$, we then have that:*
>$$
>\mu^{(n)}=\mu^{(0)}P^{(1)}P^{(2)}...P^{(n)}
>$$

## 8. Problems and Advanced Concepts
### Problem 2.1: Interpretation of $P^2$
WIP
### Problem 2.2: Modified Random Walk
WIP
### Problem 2.3: Limit Behavior of $\mu^{(n)}$
WIP
### Problem 2.4: Stationary Distribution (Equilibrium)
WIP
### Problem 2.5: Multi-step Transition Probabilities
WIP
### Problem 2.6: Functions of Markov Chains are Not Always Markov Chains
WIP
### Problem 2.7: Sampling Markov Chains
WIP






