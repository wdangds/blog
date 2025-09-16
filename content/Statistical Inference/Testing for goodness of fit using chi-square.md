---
title: Testing for goodness of fit using chi-square
draft:
tags:
  - categorical
  - chi-square
  - statistics
  - inference
  - hypothesis-test
---
> [!summary] 
> *This section introduces the **chi-square test** method for assessing a null model when data are **binned into categories**. It is commonly used to:*
> 1. *Determine if a **sample is representative** of a general population (e.g., jury composition vs. population demographics).*
> 2. *Evaluate whether data **resemble a particular distribution** (e.g., normal, geometric)*.

## 1. Creating a Test Statistic for One-Way Tables
When analyzing count data in categories, we compare **observed counts** to **expected counts** under a null hypothesis.
> [!example] Juror Example
> Twelve percent of the population is Hispanic and 9% represent other races. How many of the 275 jurors would we expect to be Hispanic or from another race?
> 
> | Race            | White | Black | Hispanic | Other | Total |
> | --------------- | ----- | ----- | -------- | ----- | ----- |
> | Observed data   | 205   | 26    | 25       | 19    | 275   |
> | Expected counts | 198   | 19.25 | 33       | 24.75 | 275   |
> 
> The sample proportion represented from each race among the 275 jurors was not a precise match for any ethnic group. While some sampling variation is expected, we would expect the sample proportions to be fairly similar to the population proportions if there is no bias on juries. We need to test whether the differences are strong enough to provide convincing evidence that the jurors are not a random sample.

**Hypotheses for Representativeness**:
- $H_0$: The jurors are a random sample (no racial bias), and observed counts reflect natural sampling fluctuation.
- $H_A$: The jurors are not randomly sampled (racial bias exists).

**Expected counts**: The number of cases expected in each category if the null hypothesis were true.
- *Calculation: (Population proportion for category) $\times$ (Total sample size)*

## 2. The Chi-Square Test Statistic
The **chi-square ($\chi^2$) test statistic** quantifies how strongly observed counts deviate from expected counts. It is constructed by:
1. Computing the **difference between observed and expected counts** for each category.
2. **Standardizing** each difference (using the square root of the null count as the standard error for a count)
3. **Squaring** standardized differences to make them positive and to amplify larger deviations.
4. **Summing** these squared, standardized differences across all categories.

> [!definition] Chi-Square Test Statistic Formula
> $$
> \chi^2=\sum \frac{(\text{Observed count}-\text{Expected count})^2}{\text{Expected count}}
> $$
## 3. The Chi-Square Distribution and Finding Areas
The **chi-square distribution** is used to obtain p-values for the $\chi^2$ statistic.
![[fig-chi-square.png]]
- **Properties**: Always positive and typically **right-skewed**.
- **Parameter**: Has one parameter called **[[Degree of Freedom|degree of freedom (df)]]**
- **Effect of df**: As df *increases*, the distribution becomes **more symmetric**, its **center moves to the right** (mean = df), and its **variability increases**.
- **Finding p-values**: Involves finding the area in the **upper tail** of the chi-square distribution, typically using software, graphing calculators, or tables.
## 4. Finding a p-value for a Chi-square Distribution
- If the null hypothesis is true, the **$\chi^2$ statistic follows a chi-square distribution with k-1 degrees of freedom**, where *k* is the number of bins (categories).
- The **p-value** for this test statistic is found by looking at the **upper tail** of the chi-square distribution, as larger $\chi^2$ values provide greater evidence against $H_0$.

> [!conditions] Conditions for the Chi-Square Test
> 1. **Independence**: Each case contributing a count to the table must be independent of all other cases.
> 2. **Sample size/distribution**: Each **expected count** (cell count) must be **at least 5**.

**When to use other methods**: When a table has **just two bins**, use the [[Inference for a Single Proportion|one-proportion methods]].

> [!example] Juror Example (continue)
> | Race            | White | Black | Hispanic | Other | Total |
> | --------------- | ----- | ----- | -------- | ----- | ----- |
> | Observed data   | 205   | 26    | 25       | 19    | 275   |
> | Expected counts | 198   | 19.25 | 33       | 24.75 | 275   |
>
> $\chi^2=\frac{(205-198)^2}{198} + \frac{(26-19.25)^2}{19.25} +\frac{(25-33)^2}{33}+\frac{(19-24.75)^2}{24.75}=5.89$ with $df=3$
> - **P-value**: Upper tail area = **0.1171**
> - **Conclusion**: Since p-value (0.1171) > $\alpha$ (e.g. 0.05), we **do not reject $H_0$**. The data do not provide convincing evidence of racial bias in juror selection.

## 5. Evaluating Goodness of Fit for a Distribution
The chi-square framework can assess if a statistical model fits a dataset.
> [!example] Stock Market Example
> **Hypotheses**:
> - $H_0$: The stock market being up or down on a given day is independent from all other days (i.e., waiting time until an "Up" day follows a [[geometric distribution]])
> - $H_A$: The stock market being up or down on a given day is not independent from all other days (i.e., deviations from a geometric distribution).
> 
> **Expected Counts**: Determined by identifying the **null proportion** (from the hypothesized distribution) associated with each bin and multiplying by the total count.
> - *Geometric Distribution Example*: $P(D)=(1-p)^{D-1}(p)$, where $p$ is the probability of success (Up day).
> 
> **Binning**: If necessary, bin categories (e.g., 7+ days) to ensure all **expected counts are at least 5**.
> 
> | Days     | 1   | 2   | 3   | 4   | 5   | 6   | 7+  | Total |
> | -------- | --- | --- | --- | --- | --- | --- | --- | ----- |
> | Observed | 717 | 369 | 155 | 69  | 28  | 14  | 10  | 1362  |
> | Expected | 743 | 338 | 154 | 70  | 32  | 14  | 12  | 1362  |
> 
> Distribution of the waiting time until a positive trading day.
> 
> $\chi^2=4.61$ with $df=6$ ($k=7$ categories).
> - **P-value**: Upper tail area $=0.5951$
> - **Conclusion**: Since p-value (0.5951) > $\alpha$ (e.g., 0.05), we **do not have sufficient evidence to reject $H_0$**. We cannot reject the notion that trading days are independent and that wait times follow a geometric distribution. This suggests that dependence between days, if any, is very weak.




