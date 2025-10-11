---
title: Markov Chains Monte Carlo
draft: false
tags:
  - probabiltiy
  - Markov-Chains
  - "#monte-carlo"
  - "#mcmc"
date: 2025-10-10
---
## 1. Introduction to Markov Chain Monte Carlo (MCMC)
The central problem addressed by Markov Chain Monte Carlo (MCMC) is **simulating a random object with a given probability distribution $\pi$ on a state space $S=\{s_1,...,s_k\}$**. This method becomes particularly useful when direct simulation is computationally infeasible.
### a. Motivating Example: The Hard-Core Model
The **hard-core model** on a graph $G=(V,E)$ involves assigning values of $0$ or $1$ to each vertex.
- **Configurations** are assignments of 0s and 1s to vertices.
- **Feasible configurations** are those where no two adjacent vertices (sharing an edge) both take the value 1.
- The model defines a probability measure $\mu_G$ where each feasible configuration is chosen with equal probability ($\frac{1}{Z_G}$, where $Z_G$ is the total number of feasible configurations), and non-feasible configurations have probability $0$.
$$
\mu_G(\xi)=\begin{cases}
\frac{1}{Z_G}, & \text{if }\xi \text{ is feasible},\\
0, & \text{otherwise}.
\end{cases}
$$
- This model captures behaviors in **statistical physics** (e.g., gas particles with non-negligible radii) and **telecommunications** (occupied nodes disabling neighbors).

![[fig-7-feasible-configuration.png]]
- A common question is: **What is the expected number of 1s in a random configuration chosen according to $\mu_G$?**
	- This expected value, $E[n(X)]$, is a sum over all configurations, which is **computational infeasible for large graphs** because the number of configurations grows exponentially. For example, an $8\times 8$ grid has $2^{64}$ configurations ($\approx 1.8\times 10^{19}$), and even the number of non-zero terms (feasible configurations) grows exponentially. Calculating $Z_G$ is also nontrivial.
$$
E[n(X)]=\sum_{\xi\in\{0,1\}^V}n(\xi)\mu_G(\xi)=\frac{1}{Z_G}\sum_{\xi \in \{0,1\}^V}n(\xi)\mathbb{1}_{\{\xi \text{ is feasible}\}}
$$
- When exact calculations are beyond computational resources, a good approach is to **revert to simulations**. By simulating many random configurations with distribution $\mu_G$, $E[n(X)]$ can be estimated by the average number of 1s observed. [[Basics of probability theory#6. Important Theorems|The Law of Large Number]] ensures this estimate converges to the true value as the number of simulations increases.
### b. Limitations of Direct Simulation
In principle, simulating a random variable $X$ with distribution $\pi$ involves enumerating states and mapping a uniform random variable to these states based on their cumulative probabilities. However, this approach is **infeasible for large state spaces** because evaluating the mapping function becomes too time-consuming. This is precisely the kind of situation where MCMC method is useful.
### c. MCMC as a Solution and Historical Context
The MCMC method **originates in physics in the 1950s** and later saw significant booms in **image analysis (1980s)** and **Bayesian statistics (1990s)**. It is argued that MCMC methods made the Bayesian approach computationally feasible.

## 2. MCMC Method Fundamentals
