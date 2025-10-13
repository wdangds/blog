---
title: Difference of Two Means
draft:
tags:
  - statistics
  - independent
  - hypothesis-test
  - inference
  - numerical
---
> [!tip] Note
> *This section covers comparing the means of two independent groups, where the data are not [[Paired data|paired]]*
## 1. Confidence Interval for a Difference of Means
The point estimate is the difference between the two sample means, $\overline{x}_1-\overline{x}_2$.
> [!definition] Using the $t$-distribution for a difference in Means
> **Conditions for using the $t$-distribution**:
> 1. *Independence (Extended)*: The data must be independent *within* each group and *between* the two group. This is met with independent random samples or a randomized experiment.
> 2. *Normality*: The normality (outlier) condition must be checked for each group separately.
> 
> **Standard Error for Difference of Means**:
> $$
> SE=\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}
> $$
> 
> **Degrees of Freedom (df)**: The calculation is complex, so we typically use software. If using a table, a conservative approach is to use the smaller of $(n_1-1)$ and $(n_2-1)$.

> [!example]- Example: Stem Cell Treatment for Sheep
> After a heart attack, 9 sheep were treated with stem cells (ESCs) and 9  were in a control group. We want a 95% CI for the difference in heart pumping capacity change.
> 
> ![[fig-stem-cell.png]]
>
> **Data:**
> - ESC group: $n_{\text{esc}}=9$, $\overline{x}_{\text{esc}}=3.50$, $s_{\text{esc}}=5.17$.
> - Control group: $n_{\text{ctrl}}=9$, $\overline{x}_{\text{ctrl}}=-4.33$, $s_{\text{ctrl}}=2.76$.
>
> **Point Estimate**: $\overline{x}_{\text{esc}}-\overline{x}_{\text{ctrl}}=3.50-(-4.33)=7.83$
>
>**Conditions**: Sheep were randomized (independence) and there are no clear outliers in either group (normality).
>
> **Calculations**:
> - $SE=\sqrt{\frac{5.17^2}{9}+\frac{2.76^2}{9}}=1.95$
> - $df=\min(9-1,9-1)=8$
> - For a 95% CI with $df=8$, $t^*_{8}=2.31$
> - Interval: $7.83\pm 2.31\times 1.95 \rightarrow (3.32, 12.34)$
>
> **Conclusion**: We are 95% confident that ESCs improve heart pumping function by 3.32% to 12.34% compared to the control.

## 2. Hypothesis Tests for the Difference of Two Means
The process is nearly identical to other hypothesis tests. The test statistic is a $t$-score calculated from the difference in sample means.

|          |   fage   |   mage   |  weeks   |  weight  |   sex    |   smoke   |
| :------: | :------: | :------: | :------: | :------: | :------: | :-------: |
|    1     |    NA    |    13    |    37    |   5.00   |  female  | nonsmoker |
|    2     |    NA    |    14    |    36    |   5.88   |  female  | nonsmoker |
|    3     |    19    |    15    |    41    |   8.13   |   male   |  smoker   |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$  |
|   150    |    45    |    50    |    36    |   9.25   |  female  | nonsmoker |
> [!example]- Example: Smoking and Birth Weight
> Does maternal smoking affect newborn birth weight? A random sample of 150 North Carolina births is used.
>
>![[fig-hypotheses-two-mean.png]]
>
> **Hypotheses**:
> - $H_0:\mu_{n}-\mu_{s}=0$ (No difference in average birth weight)
> - $H_A: \mu_n-\mu_s \neq 0$ (There is a difference)
>
> **Data**:
> - Nonsmokers: $n_n=100, \overline{x}_{n}=7.18, s_n=1.6$
> - Smokers: $\mu_s=50, \overline{x}_s=6.78, s_s=1.43$
>
> **Calculations**:
> - Point Estimate: $\overline{x}_n-\overline{x}_s=7.18-6.78=0.40$
> - $SE=\sqrt{\frac{1.60^2}{100}+\frac{1.43^2}{50}}=0.26$
> - $T=\frac{0.40-0}{0.26}=1.54$
> - $df=\min(100-1, 50-1)=49$
> - The p-value is 0.135.
>
> **Conclusion**: Since $p(0.135>0.05)$, we do not reject $H_0$. There is insufficient evidence to conclude that there is a difference in average birth weights between these two groups in this sample.

## 3. Pooled standard deviation estimate
The **pooled standard deviation** of two groups is a way to use data from both samples to better estimate the standard deviation and standard error. If $s_1$ and $s_2$ are the standard deviations of groups 1 and 2 and there are very good reasons to believe that the population standard deviations are equal, then we can obtain an improved estimate of the group variances by pooling their data:
$$
s^2_{pooled}=\frac{s_1^2\times(n_1-1)+s_2^2\times(n_2-1)}{n_1+n_2-2}
$$
where $n_1$ and $n_2$ are the sample sizes, as before. To use this new statistic, we substitute $s_{pooled}^2$ in place of $s_1^2$ and $s_2^2$ in the standard error formula, and we use an updated formula for the degrees of freedom:
$$
df=n_1+n_2-2
$$

> [!warning]
> A pooled standard deviation is only appropriate when background research indicates the population standard deviations are nearly equal. When the sample size is large and the condition may be adequately checked with data, the benefits of pooling the standard deviations greatly diminishes.

