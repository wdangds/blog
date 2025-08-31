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
