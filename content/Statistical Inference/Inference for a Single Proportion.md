---
title: Inference for a Single Proportion
draft:
tags:
  - statistics
  - inference
  - hypothesis-test
aliases:
  - point estimates, confidence interval, hypothesis tests, choosing sample size
---
> [!summary]
> *This section reviews and expands upon inference methods for a single proportion, including **point estimates, confidence intervals, and hypothesis tests,** and introduces methods for **choosing an appropriate sample size**.*

## 1. Identifying when the Sample Proportion is Nearly Normal
A **sample proportion $\hat{p}$** can be modeled using a normal distribution under specific conditions.
> [!definition] Sampling Distribution of $\hat{p}$ conditions
> 1. **Independence**: The sample observations must be **independent**, typically achieved through a **simple random sample**. ^independence
> 2. **Succes-Failure condition:** We must expect the see at least 10 successes and 10 failures in the sample. This mean $np\geq 10$ and $n(1-p)\geq 10$. ^success-failure-condition

The sampling distribution of $\hat{p}$ is **nearly normal** with:
- **Mean** ($\mu\hat{p}$): $p$ (the true population proportion)
- **Standard Error** ($SE_\hat{p}$): $SE=\sqrt{\frac{p(1-p)}{n}}$
**Checking conditions**:
- For **confidence intervals**, the **sample proportion $\hat{p}$** is used to check the success-failure condition and compute the standard error.
- For **hypothesis test**, the **null value** ($p_0$) (the proportion claimed in the null hypothesis) is typically used in place of $p$.

## 2. Confidence Intervals for a Proportion
A **[[Variability, Sampling Distributions, and Confidence Intervals#4. Confidence Intervals|confidence interval]]** provides a range of plausible values for the true population proportion $p$. When $\hat{p}$ can be modeled normally, the confidence interval takes the form
$$
\hat{p}\pm z^* \times SE
$$
> [!definition] Step to Construct a One-Proportion Confidence Interval
> 1. **Prepare**: Identify $\hat{p}$ and $n$, and determine the desired confidence level.
> 2. **Check**: Verify conditions to ensure $\hat{p}$ is nearly normal. For CIs, use **$\hat{p}$ in place of $p$** for the [[#^success-failure-condition|success-failure condition]].
> 3. **Calculate**: If conditions hold, **compute [[Variability, Sampling Distributions, and Confidence Intervals#^4593b2|standard error]] using $\hat{p}$**, find the critical value $z^*$, and construct the interval.
> 4. **Conclude**: Interpret the confidence interval in the context of the problem.

> [!example]-
> For a sample of 826 payday loan borrowers where 70% supported new regulations ($\hat{p}=0.70$).
> - **Check**: Random sample ensures independence. Success-failure: $826\times 0.70=578$ (successes) and $826\times 0.3=248$ (failures). Both $\geq10$, so normal model is reasonable.
> - **Calculate**: $SE=\sqrt{\frac{0.7\times(1-0.7)}{826}}=0.016$. For a 95% CI, $z^*=1.96$.
> 	- CI: $0.70\pm 1.96\times 0.016=(0.669,0.731)$
> - **Conclude**: We are 95% confidence that the true population of payday borrowers who supported regulation was between 0.669 and 0.731.

### 3. Hypothesis Testing for a Proportion
Hypothesis tests for a proportion also require **[[#^success-failure-condition|independence]]** and **[[#^success-failure-condition|success-failure condition]]**.
> [!definition] Steps for Hypothesis Testing for a Single Proportion
> 1. **Prepare**: Identify the parameter, list **hypotheses ($H_0$ and $H_A$)**, identify the significance level ($\alpha$), and state $\hat{p}$ and $n$.
> 2. **Check**: Verify conditions (independence, success-failure using $p_0$).
> 3. **Calculate**: If conditions hold, compute SE (using $p_0$), compute the **Z-score**, and identify the **p-value**.
>     - $Z=\frac{\hat{p}-p_0}{SE}$
>  4. **Conclude**: Evaluate the test by comparing the p-value to $\alpha$, and provide a conclusion in context.

> [!example]-
> Testing if 51% support for regulation (n=826) is a majority ($H_0:p=0.50$, $H_A:p\neq 0.50$)
> - **Check:** independence (random sample) and success-failure ($np_0=826\times 0.5=413$, $n(1-p_0)=413$, both $\geq 10$) are met.
> - **Calculate**: $SE=\sqrt{\frac{0.5\times(1-0.5)}{826}}=0.017$
> 	- $Z=\frac{0.51-0.50}{0.017}=0.59$
> 	- Single tail area is $0.2776$, p-value (both tails) = 0.5552.
> - **Conclude**: Since p-value (0.5552) > $\alpha$ (0.05), we **do not reject $H_0$**. The poll does not provide convincing evidence of a majority support or opposition.

### 4. When One or More Conditions Aren't Met
If conditions are not met, the general ideas of CIs and hypothesis tests remain, but the specific techniques change.
- **Failure of Success-Failure Condition**:
	- **Hypothesis Test**: Stimulate the null distribution of $\hat{p}$ using the null value $p_0$.
	- **Confidence Interval:** Use methods like the [[Clopper-Pearson interval]].
- **Failure of Independence Condition**:
	- Requires understanding. For **cluster samples**, suitable methods exist but are more advanced.
	- For **convenience samples**, it's difficult to confidently apply any method due to inherent biases.
## 5. Choosing a Sample Size when Estimating a Proportion
When estimating a proportion, the goal is to choose a sample size ($n$) large enough to achieve a sufficiently small **margin of error (ME)**. The margin of error for a sample proportion is:
$$
ME = z^* \times \sqrt{\frac{p\times(1-p)}{n}}
$$
To find $n$, we solve for $n$ in the inequality ME < desired margin of error.
- **If no estimate of $p$ is available**: Use $p=0.5$ because this value maximizes $p(1-p)$, resulting in the largest possible margin of error, thus providing a conservative (largest) sample size estimate.
- **If an estimate of $p$ is available (e.g., from a prior survey)**: Use that estimate in place of 0.5.
- **Always round up** the calculated sample size ($n$) to ensure the desired margin of error is met or exceeded.

> [!example]-
> To ensure $ME<0.04$ with 95% confidence ($z^*=1.96$) and no prior $p$ estimate (use $p=0.5$):
> - $1.96\times \sqrt{\frac{0.5(1-0.5)}{n}}<0.04$
> - Solving for $n$: $n>600.25$
> - **Required sample size: 601 participants**

