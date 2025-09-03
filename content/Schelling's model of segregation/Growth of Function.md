---
title: Growth of Function
draft:
tags:
  - function
---
## 1. Introduction to Asymptotic Efficiency
The **order of growth** of an algorithm's running time provides a simple way to characterize its efficiency and compare it with other algorithms. For large enough input sizes, multiplicative constants and lower-order terms in an exact running time become less significant compared to the effect of the input itself.

When we focus on how an algorithm's running time increases with the input size *in the limit* (as the input size grows without bound), we are studying its **asymptotic efficiency**. Typically, an algorithm that is asymptotically more efficient is  the best choice for all but very small inputs.
## 2. Asymptotic Notation
Asymptotic notation is used to describe the running time of algorithms. While the notation applies to functions in general, its primary use in this context is to characterize aspects of algorithms, like running time or space usage. These notations are formally defined for functions whose domains are the set of natural number $\mathbb{N}=\{0, 1, 2,...\}$

When discussing running time, it's important to specify whether we mean the worst-case, best-case, or a blanket statement that covers all inputs.
### a. $\theta$-Notation
$\theta$-notation provides an **asymptotic tight bound** for a function.
> [!definition]
> For a function $g(n)$, $\theta(g(n))$ is the set of functions $f(n)$ for which there exist positive constants $c_1$, $c_2$ and $n_0$ such that for all $n\geq n_0$, the inequality $0\leq c_1\times g(n) \leq f(n) \leq c_2\times g(n)$ holds.

- **Intuition**: A function $f(n)$ is in $\theta(g(n))$ if, for sufficiently large $n$, it can be "sandwiched" between $c_1\times g(n)$ and $c_2\times g(n)$. This means $f(n)$ is equal to $g(n)$ to within a constant factor.
![[fig3-1-notation.png]]
- **Usage**: Instead of writing $f(n)\in \theta(g(n))$, it is common to write $f(n)=\theta (g(n))$.
- **Example**: To show that $\frac{1}{2}n^2-3n=\theta(n^2)$, we can find constants such as $c_1=\frac{1}{14}$, $c_2=\frac{1}{2}$, and $n_0=7$ that satisfy the definition.
- **Properties**:
	- For any polynomial $p(n)$ of degree $d$ where the leading coefficient is positive, $p(n)=\theta(n^d)$.
	- Lower-order terms and the leading coefficient can be ignored when determining the asymptotically tight bound.
	- Any constant function can be written as $\theta(1)$.
### b. O-Notation (Big-O Notation)
O-notation provides as **asymptotic upper bound**.
> [!definition] 
> For a function $g(n)$, $O(g(n))$ is the set of functions $f(n)$ for which there exists positive constants $c$ and $n_0$ such that for all $n\geq n_0$, the inequality $0\leq f(n)\leq c\times g(n)$.

- **Intuition**: $f(n)$ is in $O(g(n))$ if, for sufficiently large $n$, its value is on or below some constant multiple of $g(n)$. This bound may or may not be tight.
- **Relationship with $\theta$-notation**: If a function is $\theta(g(n))$, it is also $O(g(n))$. In set terms, $\theta(g(n))\subseteq O(g(n))$. For instance, any quadratic function is $O(n^2)$, and any linear function is also $O(n^2)$.
- **Usage for Running Time**: An $O$-notation bound on the *worst-case* running time of an algorithm implies an upper bound on its running time for **every input**. When we say "the running time of insertion sort is $O(n^2)$", we mean its worst-case running time is $O(n^2)$, which bounds the running time for any input of size $n$.
### c. $\Omega$-Notation (Big-Omega Notation)
$\Omega$-notation provides an **asymptotic lower bound**.
>[!definition]
>For a function $g(n)$, $\Omega(g(n))$ is the set of functions $f(n)$ for which there exist positive constants $c$ and $n_0$ such that for all $n\geq n_0$, the inequality $0\leq c\times g(n)\leq f(n)$ holds.

- **Intuition**: $f(n)$ is in $\Omega(g(n))$ if for sufficiently large $n$, its value is on or above some constant multiple of $g(n)$.
- **Usage for Running Time**: When we say an algorithm's running time is $\Omega(g(n))$, we mean that for any input of size $n$, the time is at least a constant times $g(n)$ for large $n$