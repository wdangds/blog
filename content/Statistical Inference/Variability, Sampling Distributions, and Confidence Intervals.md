---
title: Variability, Sampling Distributions, and Confidence Intervals
draft: false
tags:
  - statistics
---
## 1. Variability of Estimates and Parameter Estimation
When we want to understand characteristics of an entire **population**, it is often **difficult or impossible to collect data on the full population**. Instead, we rely on **samples** to make inferences about the population.
- **Population Mean ($\mu$)**: The average of all values in a population, calculated as the sum of all values divided by the population size (N).
$$
\mu=\frac{1}{N}(x_1+x_2+...+x_N)=\frac{1}{N}\sum_{i=1}^Nx_i
$$
- **Sample Mean ($\bar{x}$)**: The average of values in a sample, calculated as the sum of sample values divided by the sample size (n).
$$
\bar{x}=\frac{1}{n}(x_1+x_2+...+x_n)=\frac{1}{n}\sum_{i=1}^{n}x_i
$$
The **sample mean ($\bar{x}$) is a point estimate of the population mean ($\mu$)**. For a representative sample, this estimate should be close to the true population mean.
- **Population Variance ($\sigma^2$)**: A measure of the spread of data in a population, calculated as the sum of squared differences from the population mean, divided by N.
$$
\sigma^2=\frac{1}{N}\sum_{i=1}^N (x_i-\mu)^2
$$
- **Sample Variance ($s^2$)**: A measure of the spread of data in a sample, calculated as the sum of squared differences from the sample mean, divided by $(n-1)$.
$$
s^2=\frac{1}{n-1}\sum_{i=1}^n(x_i-\bar{X})^2
$$
The **sample variance ($s^2$) is a point estimate of the population variance ($\sigma^2$)**. For a decent sample, this should also be close to the population variance. 
###### Parameter Estimation:
- We are primarily interested in knowing about **population parameters** (like $\mu$ and $\sigma^2$).
- Since full population data is hard to collect, we use **sample statistics (e.g., $\bar{X}$, $s^2$) as point estimates** for unknown population parameters.
- An important consideration is that **sample statistics vary from sample to sample**.
- **Quantifying this variability helps estimate the margin of error** associated with our point estimates.
## 2. Sampling Distribution
To understand how much point estimates vary, we first look at their variability from sample to sample.
- **Definition**: A **sampling distribution is an empirical distribution of sample statistics** (e.g., sample means, $\bar{X}$). It shows the distribution of a statistic calculated from many different samples of the same size drawn from the same population.
- **Effect of Increasing Number of Samples:** If we increase the number of calculated sample means ($\bar{X}s$), the sampling distribution takes on a more defined shape.
[Example: Effect of Increasing Number of Samples](https://github.com/wdangds/blog/blob/v4/content/static/notebooks/example-num-sample.ipynb)
- **Effect of Increasing Sample Size (n)**: As the sample size (n) increases, the sampling distribution of $\bar{X}$ exhibits general patterns.
[Example: Effect of Increasing Sample Size](https://github.com/wdangds/blog/blob/v4/content/static/notebooks/example-sample-size.ipynb)
## 3. Central Limit Theorem (CLT)
The Central Limit Theorem is a cornerstone of statistical inference, describing the behavior of sample sums and averages
- **[[Basics of probability theory#2. Random Variables and Distributions|Independent and Identically Distributed (i.i.d) Random Variables:]]**
	- Let $X_1, X_2,...X_n$ be **i.i.d. random variables** (meaning they are drawn independently from the same distribution $D$).
	- Each variable has an **expected value $E(X_i)=\mu$** and a **variance $Var(X_i)=\sigma^2$**.
- **CLT for the Sum of i.i.d Random Variables ($S_n$)**:
	- If $S_n=X_1+X_2+..+X_n$, then for a large $n$, **the distribution of $S_n$ is approximately normal**.
	- $S_n\sim N(\mu=nE[X], \sigma^2=nVar(X))$ 
> [!example]- Example
If you flip a coin 100 times, and let $X_i=1$ if heads, $0$ if tails, then $S_{100}=\text{ total number of heads in 100 flips}$
- **CLT for the Average of i.i.d. Random Variables ($\bar{X}$)**
	- If $\bar{X}=\frac{S_n}{n}=\frac{1}{n}(X_1+X_2+...+X_n)$, then for a large $n$, **the distribution of $\bar{X}$ is approximately normal**.
	- $\bar{X}\sim N(\mu=E(X), \sigma^2=\frac{Var(X)}{N})$. This means the mean of the sampling distribution of $\bar{X}$ is the population mean ($\mu$), and its variance is the population variance divided by the sample size.
> [!example]- Example
With the same 100 coin flips, $\bar{X}_{100}=\frac{\text{\#heads}}{100}$, i.e., the proportion of heads.

[Example: Central Limit Theorem](https://github.com/wdangds/blog/blob/v4/content/static/notebooks/example-clt.ipynb)
- **Conditions for the CLT**: For the CLT to apply, certain conditions are required:
	- This is approximately true if **random sampling/assignment** is used and the **sample size (n) is less than 10% of the population size** (to prevent overlapping).
	- **Sample size/skew**: The population distribution must be **nearly normal, OR the sample size must be large**.
		- The less normal the population distribution, the larger the required sample size.
		- This is usually checked by assuming the sample distribution is similar to the population distribution.
## 4. Confidence Intervals
Using only a point estimate is like fishing with a spear; it's unlikely to hit the exact population parameter. A **confidence interval is like a fishing net**, providing a range of plausible values with a good chance of capturing the parameter.