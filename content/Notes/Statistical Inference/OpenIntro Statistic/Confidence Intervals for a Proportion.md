---
title: Confidence Intervals for a Proportion
tags:
  - statistics
  - estimation-theory
  - confidence-intervals
draft:
date: 2025-10-19
---
Because a point estimate is imperfect, it is better practice to report a [[Variability, Sampling Distributions, and Confidence Intervals#4. Confidence Intervals|confidence interval (CI)]], which is a range of plausible values likely to contain the true population proportion $p$. A wider interval is necessary to achieve a higher degree of certainty that the parameter is captured. When the [[Points Estimates and Sampling Variability#**The Central Limit Theorem for Proportions**|CLT]] conditions are met, the confidence interval is built around the point estimate $\hat{p}$ using the standard error.

The general formula for a confidence interval is:
$$
\text{Confidence Interval: } \text{point estimate} \pm z^*\times SE
$$
Here, $z^*$ is the **critical value** that corresponds to the desired confidence level, and the term $z^*\times SE$ is known as the **margin of error**. For a 95% confidence level, $z^*$ is 1.96, meaning 95% of a normal distribution falls within 1.96 standard deviations of mean. A 99% CI requires a wider interval, using $z^*=2.58$.

![[fig-5-7.png]]

The interpretation of a CI is defined by the confidence level: a 95% confidence level means that if the process of sampling and calculating the interval were repeated many times, approximately 95% of those resulting intervals would successfully capture the true population parameter $p$. Confidence intervals must be interpreted regarding the population parameter and reflect only sampling error, not bias.
