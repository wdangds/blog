---
title: Hypothesis Testing for a Proportion
tags:
  - hypothesis-test
  - inference
  - statistics
draft:
date: 2025-10-19
---
Hypothesis testing is a formal framework used to evaluate competing claims about a population parameter. It involves setting up two statements: the **null hypothesis ($H_0$)**, which usually represents a skeptical position or "no difference" (e.g., $p=p_0$), and the **alternative hypothesis ($H_A$)**, which represents the claim being tested (e.g., $p\neq p$). We only reject $H_0$ if there is strong supporting evidence for $H_A$.

> **Testing Methods and Errors**

One method for evaluation is checking if the **null value** ($p_0$) falls within a confidence interval. If $p_0$ is plausible (inside the CI), we **fails to reject $H_0$**; if it is outside, we **reject $H_0$**. 

> **Types of Error**

Since testing uses sample data, errors are possible. A [[Inference for the Mean#6. Decision Errors in Hypothesis Testing|Type I error]] occurs if $H_0$ is rejected when it is actually true, while a [[Inference for the Mean#b. Factors Affecting Type II Error ($ beta$) and Power|Type II error]] occurs if $H_0$ is not rejected when $H_A$ is true. The [[Inference for the Mean#^1f7b5f|significance level]] ($\alpha$), typically set at 0.05, defines the acceptable probability of making the Type I error. Decreasing one type of error generally increases the other.

The standard approach uses the [[Inference for the Mean#^ddf350|p-value]], which is the probability of observing data at least as favorable to $H_A$ as the current data set, assuming $H_0$ is true. For this formal test, the **null distribution** is established by using the null value ($p_0$) for the success-failure condition check and for computing the standard error:
$$
SE_{\hat{p},H_0}=\sqrt{\frac{p_0(1-p_0)}{n}}
$$
The point estimation $\hat{p}$ is converted to a $Z$-score based on the null distribution:
$$
Z=\frac{\hat{p}-p_0}{SE_{\hat{p},H_0}}
$$
For a two-sided test ($H_A:p\neq p_0$), the $p$-value is the doubled tail area corresponding to the $Z$-score. If the **p-value is less than $\alpha$**, we **reject $H_0$**; otherwise, we **do not reject $H_0$**.

![[fig-5-8.png]]

Hypothesis testing distinguishes between [[Inference for the Mean#5. Statistical vs. Practical Significance|statistical significance]] (a difference detected by the data) and **practical significance** (a difference large enough to be meaningful in the real world); very large sample sizes can detect minute differences that lack practical value. 

> **One-side Hypothesis tests**

One-side hypothesis tests (e.g., $H_A:p<p_0$) are reserved for cases where only a difference in one specific direction is of interest, requiring only a single tail area for the $p$-value, but they must be selected carefully before viewing the data.

