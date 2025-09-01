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
- **Standard Error (SE)**: The uncertainty of a sampling distribution, specifically its standard deviation, is given a special name: the **Standard Error**.
	- **$SE=\frac{Var(X)}{n}=\frac{SD(X)}{\sqrt{n}}$**. The SE measures the typical distance an estimate falls the from the population parameter.
- **Conditions for the CLT**: For the CLT to apply, certain conditions are required:
	- This is approximately true if **random sampling/assignment** is used and the **sample size (n) is less than 10% of the population size** (to prevent overlapping).
	- **Sample size/skew**: The population distribution must be **nearly normal, OR the sample size must be large**.
		- The less normal the population distribution, the larger the required sample size.
		- This is usually checked by assuming the sample distribution is similar to the population distribution.
## 4. Confidence Intervals
Using only a point estimate is like fishing with a spear; it's unlikely to hit the exact population parameter. A **confidence interval is like a fishing net**, providing a range of plausible values with a good chance of capturing the parameter.
- **Purpose**: To design a "net" with a reasonable chance of capturing the population mean ($\mu$) using a point estimate ($\bar{X}$).
- **Connection to CLT**:
	- The CLT states that **$\bar{X}$ is a sample from $N(\mu, \frac{\sigma}{\sqrt{n}})$**.
	- This implies that **95% of the time, a sample's mean ($\bar{X}$) will be within 2 Standard Error ($2\frac{\sigma}{\sqrt{n}}$) of $\mu$**.
	- Consequently, for 95% of samples, the population mean ($\mu$) will be within 2 Standard Error of $\bar{X}$.
> [!example] Example - Cardinals
*A transect was sampled 50 times by counting the number of cardinals seen when walking a 1 mile path in the Duke forest. The mean of these samples was 13.2. Estimate the true average number of cardinals along this path, assuming the population distribution is nearly normal with a population standard deviation of 1.74.*
$$
\begin{aligned}
&\bar{X}=13.2, \quad \sigma = 1.74, \quad SE = \frac{\sigma}{\sqrt{n}}=\frac{1.74}{\sqrt{50}}=0.25\\
& \Rightarrow \mu = 13.2 \pm 2\times 0.25 \Rightarrow \mu \in (12.7, 13.7)
\end{aligned}
$$
- **What does "95% confident" mean?**
	- If we were to take **many samples** and construct a confidence interval from each using the formula $\text{point estimate }\pm CV\times SE$, then **about 95% of those intervals would contain the true population mean ($\mu$)**.
- **General Confidence Interval Formula**:
	- $\text{point estimate }\pm CV \times SE$.
	- **Conditions** when the point estimate is $\bar{X}$:
		1. **Independence:** Observations must be independent (random sample/assignment, $n<10\%$ of population).
		2. **Normality:** Nearly normal population distribution or a large enough sample size.
		3. **Population Variance:** So far, it's assumed known, which is rarely true in practice.
- **Changing the Confidence Level:**
	- To change the confidence level, we adjust the **critical value (CV)** in the formula.
	- Common confidence levels are 90%, 95%, 98%, and 99%.
	- If CLT conditions are met, $CV= Z*$ (a Z-score from the standard normal distribution).
	- For a **95% confidence interval, $Z*=1.96$**. $Z*$ can be found using a Z table for any desired confidence level.
- **Width of an Interval**:
	- To be very certain of capturing the population parameter (i.e., **increase confidence level**), one should use a **wider interval**.
	- A drawback of a wider interval is that it provides **less precise information** about the parameter's exact location.
> [!example] Example - Sample size
*Coca-Cola wants to estimate the per capita number of Coke products consumed each year in the United States, in order to properly forecast market demands they need their margin of error to be 5 items at the 95% confidence level. From previous years they know that $\sigma \approx 30$. How many people should they survey to achieve the desired accuracy?*
$$
ME=z\times \frac{\sigma}{\sqrt{n}}\Rightarrow n = (\frac{z\times \sigma}{ME})^2=(\frac{1.96\times 30}{5})^2\approx 139
$$
## 5. Common Misconceptions about Confidence Intervals
Several misunderstandings about confidence intervals are prevalent.
1. **Misconception 1**: The confidence level is the probability that the interval contains the true population parameter.
	- **Correction**: In the frequentist paradigm, the **population parameter is fixed but unknown**. Therefore, any given confidence interval either *does* or *does not* contain the true value, meaning the probability is $0$ or $1$, not $95\%$. The $95\%$ refers to the success rate of the *method* over many samples.
2. **Misconception 2**: A narrower confidence interval is always better.
	- **Correction**: The **width of an interval is a function of both the confidence level (CV) and the standard error (SE)**. A narrower interval might come from a lower confidence level, which is not necessarily "better".
3. **Misconception 3**: A wider interval means less confidence.
	- **Correction**: **A wider interval generally indicates *more* confidence**, as it has a higher chance of capturing the true parameter. It is possible to make very precise statements with very little confidence, and vice versa.