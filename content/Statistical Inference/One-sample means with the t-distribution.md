---
title: One-sample means with the t-distribution
draft:
tags:
  - hypothesis-test
  - inference
  - numerical
  - t-distribution
  - statistics
---
While the sample mean, $\overline{x}$ can be modeled using a normal distribution under certain conditions[^1], we will introduce the $t$-distribution, which is generally more suitable for this purpose.

## 1. The sampling distribution of $\overline{x}$
According to the [[Variability, Sampling Distributions, and Confidence Intervals#3. Central Limit Theorem (CLT)|Central Limit Theorem (CLT)]] for a sample mean, when we draw a sufficiently large sample (n) of independent observations from a population with a mean ($\mu$) and standard deviation ($\sigma$), the sampling distribution of $\overline{x}$ is approximately normal.
$$
\text{Mean}=\mu, \quad \quad \text{Standard Error (SE)}=\frac{\sigma}{\sqrt{n}}
$$
However, two challenges arise:
1. The conditions for using the normal model for $\overline{x}$ are more complex than for [[Inference for a Single Proportion|proportions]].
2. The population standard deviation ($\sigma$) is rarely known. We must estimate it with the sample standard deviation (s), which introduces extra uncertainty. To address this, we use the $t$-distribution.

## 2. Conditions for Modeling $\overline{x}$
To apply the Central Limit Theorem for a sample mean, two conditions must be met:
1. **Independence**: The sample observations must be independent. This is typically satisfied by taking a simple random sample from a population or if the data come from a random process.
2. **Normality**: The data should come from a nearly normally distributed population. This condition is especially important for small samples, but it can be relaxed for larger samples.
> [!note] Rules of Thumb for the Normality Check
> - $n<30$: if the sample size is less than 30, we assume the data come from a nearly normal distribution, provided there are **no clear outlier**.
> - $n\geq30$: if the sample size is 30 or more, the sampling distribution of $\overline{x}$ is considered nearly normal, provided there are **no particularly extreme outliers**.

> [!example]- Example: Checking conditions
> Consider the following two plots that come from simple random samples from different populations.
> 
> ![[fig-checking-conditions.png]]
>
> - **Sample 1 (n=15)**: The sample is a simple random sample, so independence is met. Since $n<30$, we check for clear outliers. There are no clear outliers, so the normality condition is reasonably met.
> - **Sample 2 (n=30)**: Independence is met. Since $n\geq30$, we look for extreme outliers. One outliers is roughly 5 times further from the center than the next furthest observation. This is a particularly extreme outlier, so the normality condition is not met.

## 3. The $t$-distribution
Since we rarely know the population standard deviation ($\sigma$), we estimate the standard error (SE) using the sample standard deviation (s).
$$
SE=\frac{\sigma}{\sqrt{n}}\approx\frac{s}{\sqrt{n}}
$$
Using s instead of $\sigma$ introduces extra uncertainty, especially with smaller samples. The $t$-distribution accounts for this by having thicker tails than the normal distribution, meaning observations are more likely to fall far from the mean.

![[fig-compare-t-normal.png]]
> [!definition] Key Properties of the $t$-distribution
> - It is bell-shaped and centered at zero.
> - It has a single parameter called [[Degree of Freedom|degree of freedom (df)]], which defines its shape. For one sample means, $df=n-1$.
> - As the degrees of freedom increase, the $t$-distribution more closely resembles the standard normal distribution. When df is 30 or more, they are nearly identical.

> [!example]- Example: Calculating Tail Area
> What proportion of a $t$-distribution with 2 degrees of freedom falls more than 3 units from the mean?
> 
> ![[fig-compare-t.png]]
>
> With such low degrees of freedom, the result (0.0955) is dramatically different from the normal distribution's value (approx. 0.003). This highlights the importance of using the $t$-distribution for small samples.

## 4. One-Sample t-Confidence Intervals
The formula for a confidence interval for a population mean is similar to that for a [[Inference for a Single Proportion#2. Confidence Intervals for a Proportion|proportion]], but it uses the $t$-distribution.
> [!definition] Confidence Interval for a Population Mean ($\mu$)
> $$
> \text{point estimate}\pm t^*_{df}\times SE \quad \rightarrow \quad \overline{x}\pm t^*_{df}\times \frac{s}{\sqrt{n}}
> $$

Here, $t^*_{df}$ is the critical value from the $t$-distribution for a given confidence level and degrees of freedom.

**Steps to Construct a Confidence Interval**:
1. *Prepare*: identify $\overline{x}$, $s$, $n$, and the desired confidence level.
2. *Check*: Verify the independence and normality conditions.
3. *Calculate*: Compute SE, find the appropriate $t^*_{df}$, and construct the interval.
4. *Conclude*: Interpret the interval in the context of the problem.

>[!example]- Example: Mercury in Dolphins
> A sample of 19 Risso's dolphin had a mean mercury content of $\overline{x}=4.4\mu\text{g/wet }g$ and a standard deviation of $s=2.3$. We want a 95% confidence interval for the average mercury content. 
>
> 1. *Prepare*: $\overline{x} = 4.4$, $s=2.3$, $n=19$, $CL=95\%$.
> 2. *Check*: The sample is random (independence) and there are no clear outliers (normality).
> 3. *Calculate*:
> 	- $df=n-1=18$
> 	- $SE=\frac{s}{\sqrt{n}}=\frac{2.3}{\sqrt{19}}=0.528$
> 	- For a 95% CI with $df=18$, $t^*_{df=18}=2.10$
> 	- Interval: $4.4\pm 2.1\times 0.528\rightarrow (3.29, 5.51)$
> 4. *Conclude*: We are 95% confident that the true average mercury content in Risso's dolphin is between 3.29 and 5.51 $\mu \text{g/wet } g$

## 5. One-Sample $t$-tests
A hypothesis test for a single mean follows the same logic as for a proportion, but uses a $t$-score (or $t$-statistic) and the $t$-distribution.
> [!definition] $t$-score Formula
> $$
> T=\frac{\text{point estimate}-\text{null value}}{SE}=\frac{\overline{x}-\mu_0}{\frac{s}{\sqrt{n}}}
> $$

**Steps for a Hypothesis Test**:
1. *Prepare*: State hypotheses ($H_0$ and $H_A$), and identify $\alpha$, $\overline{x}$, $s$, and $n$.
2. *Check*: Verify independence and normality conditions.
3. *Calculate*: Compute SE, the $t$-score, and the p-value using the $t$-distribution with $df=n-1$,
4. *Conclude*: Compare the p-value to $\alpha$ and state your conclusion in context.

> [!example]- Example: Cherry Blossom Race Times
> In 2006, the average race time was 93.29 minutes. A 2017 sample of 100 runners had a mean of $\overline{x}=97.32$ minutes and $s=16.98$. Is the average time different now?
> 
> ![[fig-cherry-blossom.png]]
>
> **Prepare**:
> - $H_0: \mu=93.29$ (average time has not changed)
> - $H_A: \mu \neq 93.29$ (average time has changed)
> - $\overline{x}=97.32$, $s=16.98$, $n=100$.
> 
> **Check**: the sample is random (independence), and with n=100, the histogram shows no extreme outliers (normality).
> 
> **Calculate**:
> - $SE=\frac{16.98}{\sqrt{100}}=1.70$
> - $T=\frac{97.32-93.29}{1.70}=2.37$
> - $df=100-1=99$
> - The two-tailed p-value is 0.02.
> 
> **Conclude**: Since the p-value (0.02) is less than 0.05, we reject $H_0$. There is strong evidence that the average run time in 2017 was different from 2006.




[^1]: see [[Inference for the Mean#a. Sampling Distribution of the Sample Mean ($ overline{X}$)|Sampling Distribution of the Sample Mean]]