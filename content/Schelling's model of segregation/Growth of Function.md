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
- **Usage for Running Time**: When we say an algorithm's running time is $\Omega(g(n))$, we mean that for any input of size $n$, the time is at least a constant times $g(n)$ for large $n$. This is equivalent to giving a lower bound on the **best-case running time**.
> [!example]-
The running time of insertion sort belongs to both $\Omega(n)$ and $O(n^2)$, as its performance falls between a linear and a quadratic function depending on the input.
### d. Relationship between $\theta$, $O$, and $\Omega$
A key theorem connects these three notations:
> [!theorem] Theorem 3.1
> For any two functions $f(n)$ and $g(n)$, $f(n)=\theta(g(n))$ **if and only if** $f(n)=O(g(n))$ and $f(n)=\Omega(g(n))$.

This theorem is often used to prove an asymptotically tight bound by first proving the upper and lower bounds separately.
### e. Little Notations: $o$ and $\omega$
These notations denote bounds that are **not asymptotically tight**.
- **$o$-notation (Little-o)**: Denotes an upper bound that is not tight.
> [!definition]
$f(n)=o(g(n))$ if for **any** positive constant $c>0$, there exists a constant $n_0>0$ such that $0\leq f(n) < c\times g(n)$ for all $n\leq n_0$.
- **Intuition:** $f(n)$ becomes insignificant relative to $g(n)$ as $n$ gets very large. This is equivalent to $\lim_{n\rightarrow \infty}[\frac{f(n)}{g(n)}]=0$.
- **Example**: $2n=o(n^2)$, but $2n^2\neq o(n^2)$.

- **$\omega$-notation (Little-omega)**: Denotes a lower bound that is not tight.
> [!definition]
$f(n)=\omega(g(n))$ if for **any** positive constant $c>0$, there exists a constant $n_0>0$ such that $0\leq c\times g(n) < f(n)$ for all $n\geq n_0$.

- **Intuition**: $f(n)$ becomes arbitrarily large relative to $g(n)$ as $n$ gets very large. This is equivalent to $\lim_{n\rightarrow \infty}[\frac{f(n)}{g(n)}]=\infty$.
- **Example**: $\frac{n^2}{2}=\omega(n)$, but $\frac{n^2}{2}\neq \omega(n^2)$.
### f. Comparing Functions
Asymptotic notations share several properties with real numbers, allowing for comparisons between functions.
- **Properties**: Transitivity, Reflexivity, Symmetry, and Transpose Symmetry all hold for asymptotic notations.
- **Analogy to Real Numbers**:
	- $f(n)=O(g(n))$ is like $a\leq b$.
	- $f(n)=\Omega(g(n))$ is like $a\geq b$.
	- $f(n)=\theta(g(n))$ is like $a=b$.
	- $f(n)=o(g(n))$ is like $a<b$.
	- $f(n)=\omega(g(n))$ is like $a>b$.
- **Failure of Trichotomy**: Unlike real numbers, not all functions are asymptotically comparable. For example, $n$ and $n^{(1+\sin(n))}$ cannot be compared using this notation because the exponent oscillates between 0 and 2.
### g. Asymptotic Notation in Equations
- **Anonymous Functions**: When asymptotic notation appears in a formula, it represents some anonymous function that we don't need to name it explicitly.
> [!example]-
$2n^2+3n+1=2n^2+\theta(n)$ means $2n^2+3n+1=2n^2+f(n)$ where $f(n)$ is some function in $\theta(n)$.
- **Notation on the Left-Hand Side**: An equation like $2n^2+\theta(n)=\theta(n^2)$ means that for any function $f(n)\in \theta(n)$, there is some function $g(n)\in \theta(n^2)$ such that $2n^2+f(n)=g(n)$. This implies the right-hand side provides a coarser level of detail.
## 3. Standard Notations and Common Functions
- **Monotonicity**: Defines monotonically increasing/decreasing and strictly increasing/decreasing functions.
- **Floors and Ceilings**: Standard definitions and properties for $\lfloor x \rfloor$ and $\lceil x \rceil$.
- **Polynomials**: A function $p(n)$ is a polynomial of degree $d$ if it is of the from $\sum_{i=0}^da_in^i$. An asymptotically positive polynomial $p(n)$ of degree $d$ has the property $p(n)=\theta(n^d)$. A function $f(n)$ is **polynomially bounded** if $f(n)=O(n^k)$ for some constant $k$.
- **Exponentials**: Any exponential function with a base strictly greater than 1 grows faster than any polynomial function ($n^b=o(a^n)$) for $a>1$.
- **Logarithms**:
	- **Notation**: $\lg n$ for $\log_2 n$, $\ln n$ for $\log_e n$.
	- **Growth**: Any positive polynomial function grows faster than any polylogarithmic function ($\lg^b n = o(n^a)$ for $a>0$). A function is **polylogarithmically bounded** if $f(n)=O(\lg^k n)$,
	- Because changing the base of a logarithm only changes its value by a constant factor, the base is often ignored within asymptotic notation (e.g., $O(\lg n)$).
- **Factorials**:
	- **Definition**: $n! = 1\times 2 \times ... \times n$.
	- **Properties**: $n!=o(n^n)$, $n!=\omega(2^n)$, and $\lg(n!)=\theta(n\lg n)$. Stirling's approximation provides a tight bound for $n!$
$$
n!=\sqrt{2\pi n}(\frac{n}{e})^n(1+\theta(\frac{1}{n}))
$$
- **Functional Iteration**: $f^{(i)}(n)$ denotes the function $f$ applied $i$ times to an initial value $n$.
- **Iterated Logarithm ($\lg^*n$)**: A very slowly growing function that counts how many times the $\lg$ function must be applied to $n$ to get a value less than or equal to 1. For any realistic input size $n$, $lg^*n$ is rarely larger than 5.
$$
\lg^*n= \min\{i\geq0:\lg^{(i)}n\leq 1\}
$$
- **Fibonacci Numbers**: Defined by the recurrence $F_i=F_{i-2}+F_{i-2}$ with $F_0=0$ and $F_1=1$. They are related to the golden ratio $\phi$ and grow exponentially.