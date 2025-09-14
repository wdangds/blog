---
title: Difference of Two Proportions
draft:
tags:
  - inference
  - hypothesis-test
  - statistics
---
> [!summary]
> *This section extends inference methods to analyze the **difference in two population proportions ($p_1-p_2$)**. The **point estimate** for this difference is $\hat{p}_1-\hat{p}_2$*.

## 1. Sampling Distributions of the Difference of Two Proportions
The difference $\hat{p}_1-\hat{p}_2$ can be modeled using a normal distribution under [[Inference for a Single Proportion#1. Identifying when the Sample Proportion is Nearly Normal|these conditions]]:
- **Independence, Extended**: Data must be independent **within and between** the two groups. This is typically met with two independent random samples or a randomized experiment.
- **Success-Failure Condition**: The success-failure condition (at least 10 successes and 10 failures) must hold for **both groups separately**.

> [!definition] Standard Error of $\hat{p}_1-\hat{p}_2$
> $$
> SE=\sqrt{\frac{p_1(1-p_1)}{n_1}+\frac{p_2(1-p_2)}{n_2}}
> $$

## 2. **Confidence Intervals for $p_1-p_2$**
The generic confidence interval formula for the difference of two proportions is:
$$
\hat{p}_1-\hat{p}_2\pm z^*\times SE
$$
**Steps:** Similar to the [[Inference for a Single Proportion#2. Confidence Intervals for a Proportion|one-proportion case]] (Prepare, Check, Calculate, Conclude).
- For confidence intervals, the **sample proportions ($\hat{p}_1$ and $\hat{p}_2$** are used in the SE formula.

> [!example]-
> Compare survival rates (treatment $\hat{p}_t=0.35$, control $\hat{p}_c=0.22$) with $n=40$ and $n=50$, respectively, for a 90% CI ($z^*=1.645$).
> - **Check**: Randomized experiment ensures independence. Success-failure met (counts are 14, 26, 11, 39; all $\geq 10$).
> - **Calculate:**
> 	- Point estimate $=0.35-0.22=0.13$
> 	- $SE=\sqrt{\frac{0.35(1-0.35)}{40}+\frac{0.22(1-0.22)}{50}}=0.095$
> 	- CI: $0.13\pm 1.645\times 0.095 = (-0.026, 0.286)$
> - **Conclude**: We are 90% confident that blood thinners have a difference of -2.6% to +28.6% percentage point impact on survival rate. Because **0% is contained in the interval**, there is "not enough information to say whether blood thinners help or harm".

## 3. Hypothesis Tests for the Difference
Hypothesis tests for the difference of two proportions are common, especially when testing if $p_1-p_2=0$ (i.e, $p_1=p_2$).
> [!definition] **Pooled Proportion ($\hat{p}_{pooled}$)**
> - When the null hypothesis is $H_0: p_1=p_2$, we assume the true proportions are equal. To estimate this common proportion, we use a **pooled proportion** from both samples.
> - $\hat{p}_{pooled}=\frac{\text{\# of "successes"}}{\text{\# of cases}} = \frac{\hat{p}_1n_1+\hat{p}_2n_2}{n_1+n_2}$
> - This pooled proportion is used for **both cheking the success-failure condition** and **computing the standard error**.

**Checking Conditions (when $H_0: p_1=p_2$)**:
- Independence (within and between groups).
- Success-failure for each group: $n\hat{p}_{pooled}\geq{10}$ and $n(1-\hat{p}_{pooled})\geq 10$ for both groups.

> [!definition] Standard Error (when $H_0:p_1=p_2$)
>$$
> \sqrt{\frac{\hat{p}_{pooled}(1-\hat{p}_{pooled})}{n_1}+\frac{\hat{p}_{pooled}(1-\hat{p}_{pooled})}{n_2}}
> $$

> [!definition] Test Statistic (Z-score)
> $$
> Z=\frac{\hat{p}_1-\hat{p}_2 - \text{null value}}{SE}
> $$

> [!example]- Example: Mammogram study
> **Death from breast cancer?**
>
> |                |  Yes |     No |
> |:---------------|-----:|-------:|
> | Mammogram      |  500 | 44,425 |
> | Control        |  505 | 44,405 |
> Test $H_0: p_{mgm} = p_{ctrl}$ vs. $H_A: p_{mgm}\neq p_{ctrl}$
> - **Check:** Randomized patients, so independence holds. Pooled proportion $\hat{p}_{pooled}=\frac{500+505}{44925_55910}=0.0112$. Success-failure with $\hat{p}_{pooled}$ for each group are satisfied.
> - **Calculate**:
> 	- Point estimate $=\frac{500}{500+44425}-\frac{505}{44910}=-0.00012$
> 	- $SE=\sqrt{\frac{0.0112(1-0.0112)}{500+44425}+\frac{0.0112(1-0.0112)}{505+44405}}=0.00070$
> 	- $Z=\frac{-0.00012-0}{0.00070}=-0.17$
> 	- P-value (two-tailed) $=2\times P(Z<-0.17)=0.865$
> - **Conclude**: Since p-value > $\alpha$ (0.865>0.05), we **do not reject $H_0$**. The difference in breast cancer death rates is reasonably explained by chance, and we do not observe benefits or harm from mammograms relative to a regular breast exam.

**Important Considerations**: Not rejecting $H_0$ means insufficient evidence of an effect. It doesn't mean there's *no effect*, but if an effect exists, it's likely small. Other factors like cost and **overdiagnosis** should be considered in medical recommendations.

## 4. More on 2-Proportion Hypothesis Tests
In rare cases, the null hypothesis might be $H_0: p_1-p_2= \text{some value other than 0}$ (e.g., $p_1-p_2=0.1$). In such contexts, the **sample proportions ($\hat{p}_1$ and $\hat{p}_2$)** are generally used to check the success-failure condition and construct the standard error, **not a pooled proportion**.

> [!example]- Example: Rotor Blade Company
> A quadcopter company is considering a new manufacturer for rotor blades. The new manufacturer would be more expensive, but they claim their higher-quality blades are more reliable, with 3% more blades passing inspection than their competitor. The quality control engineer collects a sample of blades, examining 1000 blades from each company, and she finds that 899 blades pass inspection from the current supplier and 958 pass inspection from the prospective supplier. Using these data, evaluate the hypotheses with a significance level of 5%.
> 
> Test $H_0: p_{highQ} - p_{standard}=0.03$ vs. $H_A: p_{highQ}-p_{standard}\neq 0.03$
> - **Check**: Assumed independence. Success-failure holds for each sample using their respective $\hat{p}$ (e.g., 958 successes, etc.)
> - **Calculate:**
> 	- Point estimate $=0.958-0.899=0.059$
> 	- $SE=\sqrt{\frac{0.958(1-0.958)}{1000}+\frac{0.899(1-0.899)}{1000}}=0.0114$
> 	- $Z=\frac{0.059-0.03}{0.0114}=2.54$
> 	- P-value (two-tailed) $=2\times P(Z>2.54) =0.012$
> - **Conclude**: Since p-value < $\alpha$, we **reject $H_O$**. We have statistically significant evidence that the higher-quality blades pass inspection more than 3% as often as the currently used blades.

## 5. Examining the Standard Error Formula
The standard error formula for the difference of two proportions can be derived from the probability principles (variability of the sum of two random variables).
- The variance of the difference of two independent random variables X and Y is $\sigma^2(X-Y)=\sigma^2(X)+\sigma^2(Y)$.
- Similarly, the **squared standard error** of the difference in sample proportions is the sum of the squared standard errors of the individual sample proportions:
$$
SE_{\hat{p}_1-\hat{p}_2}=\sqrt{SE_{\hat{p}_1}^2+SE^2_{\hat{p_2}}}=\sqrt{\frac{p_1(1-p_1)}{n_1}+\frac{p_2(1-p_2)}{n_2}}
$$



