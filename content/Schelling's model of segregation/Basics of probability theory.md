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
> [!example]- **Example of i.i.d Random Variables**
> 🎲 **Rolling a fair six-sided die multiple times.**
>  -  Let $X_1, X_2, ..., X_n$ be the outcomes of each roll.
>  - Each $X_i$ can take values in $\{1, 2, 3, 4, 5, 6\}$.
>  - They are **identically distributed** because every roll follows the same uniform distribution:
> $$
> P(X_i=k)=\frac{1}{6}, \quad k=1,2,...,6
> $$
> - They are **independent** because the result of one roll does not affect the result of another.
> So if we roll the die 10 times, the sequence of outcomes can be modeled as 10 i.i.d random variables
- **Random Process (or Stochastic Process)**: A sequence of random variables $(X_1,X_2,...)$ often interpreted as the **evolution in time of some random quantity**, where $X_n$ is the quantity at the time $n$.
	- **Markov chains** are a special class of random processes.
### 3. Types of Real-Valued Random Variables
- **Discrete Random Variables**: Take values in some **finite or countable subset of $\mathbb{R}$**. In this text, they are often (or are contained in) $\{0, 1, 2\}$, referred to as **nonnegative integer-valued discrete random variables**.
- **Continuous Random Variables**:  
A random variable \(X\) for which there exists a **density function**  
$f_X: \mathbb{R} \rightarrow [0,\infty)$ such that  
$$
F_X(x) = P(X \leq x) = \int_{-\infty}^{x} f_X(t)\,dt, \quad \forall x \in \mathbb{R}.
$$

- [[Gaussian density function]] is a well-known example.  
- The only continuous random variables considered in this section are **uniform $([0,1])$ ones**:  
  - **Density function**:  
  $$
  f_X(x) =
  \begin{cases}
  1, & \text{if } x \in [0,1], \\
  0, & \text{otherwise}.
  \end{cases}
  $$  

  - **Distribution function**:  
  $$
  F_X(x) =
  \begin{cases}
  0, & \text{if } x \leq 0, \\
  x, & \text{if } x \in [0,1], \\
  1, & \text{if } x \geq 1.
  \end{cases}
  $$

> [!tip] **Intuition**
> X is **equally likely to take its value anywhere in the unit interval**. For any interval I of length $a$ inside, $P(X\in I)=a$.

### 4. Characteristics of Random Variables: Expectation and Variance
- **Expectation $(E[X])$ / Expected Value / Mean**:  
  In some sense, the **"average" value we expect from \(X\)**.
  - For a **continuous random variable with density function \(f_X(x)\)**:  
    $$
    E[X] = \int_{-\infty}^{\infty} x f_X(x)\,dx
    $$
  - For a **uniform random variable**:  
    $$
    E[X] = \int_{0}^{1} x \, dx = \tfrac{1}{2}
    $$
  - For a **nonnegative integer-valued random variable**:  
    $$
    E[X] = \sum_{k=1}^{\infty} k \, P(X=k)
    $$
    - This is equivalent to the alternative formula:  
      $$
      E[X] = \sum_{k=1}^{\infty} P(X \geq k)
      $$
> [!note]- **Proof**
> We want to show:
> $$
> E[X]=\sum_{k=1}^{\infty}kP(X=k) \equiv E[X]=\sum_{k=1}^{\infty}P(X\geq k)
> $$
> **Step 1:** *Expand the first formula*
> $$
> \sum_{k=1}^{\infty}kP(X=k)
> $$
> Notice that $k$ can be written as a sum of 1's:
> $$
> k = \sum_{j=1}^k 1
> $$
> So,
> $$
> kP(X=k)=(\sum_{j=1}^k 1)P(X=k)=\sum_{j=1}^k P(X=k)
> $$
> **Step 2:** *Swap the order of summation*
> Now substitute back:
> $$
> \sum_{k=1}^{\infty}kP(X=k)=\sum_{k=1}^{\infty}\sum_{j=1}^k P(X=k) = \sum_{j=1}^{\infty}\sum_{k=j}^{\infty}P(X=k)
> $$
> **Step 3**: *Interpret the inner sum*
> $$
> \sum_{k=j}^{\infty}P(X=k)=P(X\geq j)
> $$
> **Step 4:** *Final formula*
> Thus,
> $$
> \sum_{k=1}^{\infty}kP(X=k)=\sum_{j=1}^{\infty}P(X\geq j)
> $$
> which proves the equivalence.

> [!warning] **Important Note**
> The expectation $E[X]$ can be **infinite**, even if X itself only takes finite values.
> > [!example]- **Example: [[The St. Petersburg Paradox]]**
> > In a game where one is paid $2^X$ roubles (X being the number of heads before the first tail), $E[Y] (\text{where }Y=2^X)$ is infinite, despite $X$ always being finite. This shows a flaw in the classical theory of hazard games in such cases.	
- **Variance $(Var[X])$**: Another important characteristic, defined by:
  $$
  Var[X]=E[(X-\mu)^2], \quad \text{where } \mu=E[X]
  $$
	- It is the **mean square deviation of X from its expectation**.
	- **Steiner's formula**:
  $$
  Var[X]=E[X^2]-(E[X])^2
  $$
- **Linearity Rules**:
	- **Expectations**:
		- $E[X_1+...+X_n]=E[X_1]+...+E[X_n]$
		- $E[cX]=cE[X]$ for a constant $c$. 
	- **Variances**:
		- $Var[cX] = c^2Var[X]$
		- If $X_1, ..., X_n$ are **independent**, then $Var[X_1 +...+X_n]=Var[X_1]+...+Var[X_n]$. (This fails in general without independence)
### 5. Examples of Random Variables and Their Characteristics
#### a. Bernoulli (p) Random Variable
- Given that $p \in [0,1]$, such an X is defined as:
$$
X = \begin{cases}
1, & \text{with probability }p\\
0, & \text{with probability }1-p
\end{cases}
$$
- $E[X] = p$
- $Var[X]=p(1-p)$
#### b. Binomial (n, p) Random Variable
- Defined as **Y = the sum of *n* independent Bernoulli (p) random variables** (e.g., number of heads in $n$ coin tosses with heads-probability $p$).
- $E[Y]=E[X_1]+...+E[X_n]=np$
- $Var[Y]=Var[X_1]+...+Var[X_n]=np(1-p)$
### 6. Important Theorems
>[!info] **Theorem 1.1: Chebyshev's inequality**
>*Let X be a random variable with mean $\mu$ and variance $\sigma^2$. For any $a>0$, we have that the probability $P[|X-\mu|\geq a]$ of a deviation from the mean of at least $a$, satisfies:*
>$$
>P(|X-\mu|\geq a)\leq \frac{\sigma ^2 }{a^2}
>$$
>

> [!note]- **Proof**
> WIP

**Purpose**: Useful for **bounding the probability that a random variable deviates by a large amount from its mean**.

>[!info] **Theorem 1.2: The Law of Large Number**
>*Let $X_1, X_2,...$ be i.i.d random variables with finite mean $\mu$ and finite variance $\sigma^2$. Let $M_n$ denote the average of the first $n$ $X_i$'s, i.e., $M_n=\frac{1}{n}(X_1+...+X_n)$. Then, for any $\epsilon>0$, we have:*
>$$
>lim_{n\rightarrow\infty}P(|M_n-\mu|\geq \epsilon)=0
>$$

> [!note]- **Proof**
> WIP


