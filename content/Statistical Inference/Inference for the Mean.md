---
title: Inference for the Mean
draft:
tags:
  - statistics
---
## 1. Inference for a Single Mean
Statistical inference involves making conclusions about a population based on sample data. Two primary methods are [[Variability, Sampling Distributions, and Confidence Intervals#4. Confidence Intervals|confidence intervals]] and [[#3. Hypothesis Testing for the Mean|hypothesis testing]].
### a. Sampling Distribution of the Sample Mean ($\overline{X}$)
The sample mean ($\overline{X}$) is approximately normally distributed around the true population mean ($\mu$) with a standard deviation of $\frac{\sigma}{\sqrt{n}}$ (standard error, SE), for sufficiently large sample sizes ([[Variability, Sampling Distributions, and Confidence Intervals#3. Central Limit Theorem (CLT)|Central Limit Theorem]])

> [!formula]
> $$
>\overline{X} \sim N(\mu, \frac{\sigma^2}{n})$
>$$

**Standardized Sample Mean**:
- If the population standard deviation ($\mu$) is known, the standardized sample mean follows a standard normal distribution: 
$$
\frac{\overline{X}-\mu}{\frac{\sigma}{\sqrt{n}}}\sim N(0,1)
$$
- If the population standard deviation ($\mu$) is unknown and estimated by the sample standard deviation (s), the test statistic follows a t-distribution with $n-1$ degrees of freedom (df):
$$
\frac{\overline{X}-\mu}{\frac{s}{\sqrt{n}}}\sim t_{df =n-1}
$$

- The t-distribution has heavier tails than the normal distribution, especially for smaller degrees of freedom (smaller sample sizes), reflecting greater uncertainty. As the degrees of freedom increase, the t-distribution approaches the normal distribution.
![[fig-normal-t.png]]
## 2. Confidence Intervals for the Mean
A **[[Variability, Sampling Distributions, and Confidence Intervals#4. Confidence Intervals|confidence interval]]** provides a range of plausible values for the population mean ($\mu$) based on sample data.
> [!formula] Formula (when $\sigma$ is known)
> $$
> \overline{X}\pm z* \times \frac{\sigma}{\sqrt{n}}
> $$

> [!formula] Formula (when $\sigma$ is unknown)
> $$
> \overline{X}\pm t* \times \frac{s}{\sqrt{n}}
> $$

$t*$ is the critical t-value determined by the desired confidence level and the degrees of freedom ($df=n-1$). For example, for a 95% confidence interval with $df=9$, $t*=2.26$.
> [!example]- Example Calculation
> For $\overline{X}=3.4$, $s=0.8$, $n=49$, and a crtical value of $t*=2.09$ (for a certain confidence level):
> - $3.4\pm 2.09\times\frac{0.8}{\sqrt{49}}=3.4\pm 0.238$
> - This results in a confidence interval of $(3.16, 3.64)$
## 3. Hypothesis Testing for the Mean
**Hypothesis testing** is a formal procedure to determine if there is enough statistical evidence to reject a null hypothesis in favor of an alternative hypothesis.
### a. Components of a Hypothesis Test
- **Null Hypothesis ($H_0$)**: A statement of no effect or no difference, typically representing the status quo or a specific population parameter value (e.g., $\mu=8$, etc.)
- **Alternative Hypothesis ($H_A$ or $H_1$)**: A statement that contradicts the null hypothesis, suggesting an effect or difference. It can be one-sided (e.g., $\mu<8$) or two-sided (e.g., $\mu \neq 8$).
- **Test Statistic**: A value calculated from sample data that is used to evaluate the null hypothesis.
	- **Z-statistic ($\sigma$ known)**: $Z=\frac{\overline{X}-\mu_{H_0}}{\frac{\sigma}{\sqrt{n}}}$
	- **T-statistic ($\sigma$ unknown)**: $T=\frac{\overline{X}-\mu_{H_0}}{\frac{s}{\sqrt{n}}}$
		- $\mu_{H_0}$ is the population mean value specified in the null hypothesis.
- **P-value**: The probability of observing a test statistic as extreme as, or more extreme than, the one calculated from the sample data, assuming the null hypothesis is true.
- **Significance Level ($\alpha$)**: A pre-determined threshold (e.g., 0.05). If the p-value is less than $\alpha$, the null hypothesis is rejected.
### b. Decision Rule
- **If p-value < $\alpha$**: Reject $H_0$ (e.g., if p-value is 0.043 and $\alpha$ is 0.05, reject $H_0$)
- **If p-value > $\alpha$**: Fail to reject $H_0$.
- **Critical Value Approach**: Reject $H_0$ if the test statistic falls into the rejection region defined by critical values (e.g., $t>t*$ or $t<-t*$).
> [!example]-
> - **Scenario**: $H_0:\mu=3.4$, $H_A=\mu > 3.4$.
> - **Sample data**: $\overline{X}=3.6$, $s=0.8$, $n=49$.
> - **Test Statistic Calculation**: $T=\frac{3.6-3.4}{\frac{0.8}{\sqrt{49}}}=\frac{0.2}{\frac{0.8}{7}}=1.75$
> - **P-value**: $P(T>1.75)$ with $df=48$. This could be 0.043.
> - **Conclusion (assuming $\alpha=0.05$)**: Since $0.043<0.05$, we **reject $H_0$**.
## 4. Inference for Two Means
When comparing two population means, the focus is on the difference between them ($\mu_1-\mu_2$).
### a. Sampling Distribution of the Difference in Sample Means ($\overline{X_1}-\overline{X_2}$)
If $\overline{X_1}\sim N(\mu_1,\frac{\sigma_1^2}{n_1})$ and $\overline{X_2}\sim N(\mu_2, \frac{\sigma_2^2}{n_2})$, then the difference $\overline{X_1}-\overline{X_2}$ is also normally distributed.
- **Mean of the Difference**: $E(\overline{X_1}-\overline{X_2})= E(\overline{X_1})-E(\overline{X_2})=\mu_1-\mu_2$
- **Variance of the Difference**: $Var(\overline{X_1}-\overline{X_2})=Var(\overline{X_1})+Var(\overline{X_2})=\frac{\sigma^2_1}{n_1}+\frac{\sigma_2^2}{n_2}$ (assuming independence).
- Thus, $(\overline{X_1}-\overline{X_2})\sim N(\mu_1-\mu_2,\frac{\sigma_1^2}{n_1}+\frac{\sigma_2^2}{n_2})$
### b. Confidence Intervals for the Difference of Two Means
> [!formula]
> $$
> (\overline{X_1}-\overline{X_2})\pm t* \times \sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}
> $$

- $s_1$ and $s_2$ are sample standard deviations, $n_1$ and $n_2$ are sample sizes.
- The degrees of freedom for $t*$ can be approximated (e.g., using a conservative approach like $\min(n_1-1, n_2-2)$) or a more complex Welch-Satterthwaite equation.
> [!example]-
> Given $\overline{X_1}=3.4$, $\overline{X_2}=3.6$, $s_1=0.8$, $n_1=49$, $s_2=0.8$, $n_2=49$.
> - **Standard Error** $SE=\sqrt{\frac{0.8^2}{49}+\frac{0.8^2}{49}}=\sqrt{0.0136+0.0136}=\sqrt{0.02612}\approx 0.1616$
> - For a 95% confidence level, $t*=1.96$ (assuming large enough degrees of freedom to approximate normal).
> - **Confidence Interval:** $(3.4-3.6)\pm 1.96 \times 0.161 = -0.2 \pm 0.3167$
> - Resulting interval: $(-0.5167,0.1167)$

### c. Hypothesis Testing for the Difference of Two Means
- **Hypotheses**:
	- $H_0:\mu_1=\mu_2$ (or $\mu_1-\mu_2=0$)
	- $H_A: \mu_1 \neq \mu_2$ (or $\mu_1<\mu_2$, $\mu_1>\mu_2$)
- **Test Statistic (t-value)**:
	- $t=\frac{(\overline{X_1}-\overline{X_2})-(\mu_1-\mu_2)_{H_0}}{\sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}}}$ 
	- $(\mu_1-\mu_2)_{H_0}$ is the hypothesized difference, often $0$.
## 5. Statistical vs. Practical Significance
- **Statistical Significance**: Indicates that an observed difference is unlikely to have occurred by chance. It is easier to detect differences with larger sample sizes because the standard error decreases, leading to larger test statistics and smaller p-values.
- **Practical Significance**: Refers to whether the observed difference is meaningful or important in a real-world context.
- **Importance Consideration**: Large samples can lead to statistical significance even for very small **effect sizes** (differences) that may not be practically meaningful. Researchers should focus on finding results that are both statistically significant and practically important.

## 6. Decision Errors in Hypothesis Testing
Hypothesis tests, like confidence intervals, can lead to incorrect conclusions. This is analogous to a court system where innocent people are sometimes wrongly convicted, and guilty people sometimes walk free. However, statistical inference allows us to quantify and adjust the frequency of these errors.
### a. Types of Errors
There are two competing hypotheses: the null ($H_0$) and the alternative ($H_A$).

| decision             | $h_0$ IS TRUE               | $h_A$ is true               |
| -------------------- | --------------------------- | --------------------------- |
| Fail to Reject $H_0$ | Correct ($1-\alpha$)        | **Type II Error ($\beta$)** |
| Reject $H_0$         | **Type I Error ($\alpha$)** | Correct (Power, $1-\beta$)  |
- **Type I Error ($\alpha$): Rejecting the null hypothesis when $H_0$ is actually true**.
	- The probability of a Type I error is denoted by $\alpha$, which is the chosen significance level.
	- For example, if $\alpha= 0.05$
