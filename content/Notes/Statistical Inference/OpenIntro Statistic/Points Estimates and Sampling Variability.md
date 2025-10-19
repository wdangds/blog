---
title: Points Estimates and Sampling Variability
tags:
  - statistics
  - data-sampling
  - uncertainty
draft:
date: 2025-10-19
---
Statistical inference fundamentally focuses on quantifying and understanding the uncertainty that exists in estimates of population parameters. Although the specific calculations vary across contexts, the essential foundations - using sample data to estimate, define a plausible range, and formally evaluate claims - remain constant throughout statistics.

The process begins by using a sample proportion, $\hat{p}$, collected from a poll or sample, as a **point estimate** for the entire-population. This entire-population proportion is referred to as the **parameter of interest**, $p$. 

The observed difference between $\hat{p}$ and $p$ is the **error in the estimate**, which comprises two components: **sampling error** (the natural, expected variation from sample to sample, which is quantifiable using the sample size $n$) and **bias** (a systematic tendency to over- or under-estimate, which is minimized through careful data collection).

## The Central Limit Theorem for Proportions

To characterize the behavior of the point estimate, we consider the **sampling distribution**, which is the distribution of sample proportions from many repeated samples. The standard deviation of this distribution is called the **standard error** $SE_{\hat{p}}$.

A larger sample size ($n$) inherently leads to a smaller standard error, resulting in a more precise point estimate.

> [!definition] Central Limit Theorem
> The [[Variability, Sampling Distributions, and Confidence Intervals#3. Central Limit Theorem (CLT)|central limit theorem]] states that when observations are independent (often satisfied by a simple random sample) and the sample size is sufficiently large, the sample proportion $\hat{p}$ tends to follow a normal distribution.

The condition for $n$ being sufficiently large is the [[Inference for a Single Proportion#^success-failure-condition|success-failure condition]]:
$$
np\geq 10 \quad \text{and}\quad n(1-p)\geq 10
$$

The theoretical center and spread of this normal sampling distribution are defined by the formulas:
$$
\text{Mean: }\mu_\hat{p}=p,\quad \text{Standard Error: }SE_\hat{p}=\sqrt{\frac{p(1-p)}{n}} 
$$

![[fig-5-2.png]]

Since the center of the distribution is always the true parameter $p$, the sample proportion $\hat{p}$ is considered an **unbiased** estimate when the data are independent. 

In real-world applications where $p$ is unknown, we employ the **plug-in principle**, using $\hat{p}$ as a proxy for $p$ when checking the success-failure condition and when calculating the estimated standard error: $SE_\hat{p}\approx \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$. If the success-failure condition is not met, the distribution of $\hat{p}$ maybe discrete, skewed, and poorly approximated by a normal curve.



