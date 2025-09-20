---
title: Comparing Many Means with ANOVA
draft:
tags:
  - ANOVA
  - f-distribution
  - inference
  - numerical
  - statistics
---
When we want to compare the means of more than two groups, conducting multiple two-sample t-tests is inappropriate because it inflates the [[Inference for the Mean#a. Types of Errors|Type 1 error rate]] (the probability of finding a significant result just by chance). **Analysis of Variance (ANOVA)** is a method that uses a single test to determine if there is evidence that at least one group mean is different from the others.

**Hypotheses for ANOVA**:
- $H_0$: the mean outcome is the same across all groups ($\mu_1=\mu_2=\cdots=\mu_k$).
- $H_A$: at least one mean is different.

> [!note] Conditions for ANOVA
> 1. The observations are **independent** within and across groups.
> 2. The data within each group are **nearly normal** (check for major outliers, especially in small samples)
> 3. The **variability (variance) across the groups is about equal**.

## 1. The $F$-test and the $F$-statistic
ANOVA works by comparing the variability *between* the groups to the variability *within* the groups.
- **Mean Square Between Groups (MSG)**: A measure of the variability between the sample means of the groups. If $H_0$ is true, any variation is due to chance.
$$
MSG=\frac{1}{df_G}SSG=\frac{1}{k-1}\sum_{i=1}^kn_i(\overline{x}_i-\overline{x})^2
$$
- **Mean Square Error (MSE)**: A pooled variance estimate that measures the variability within the groups.
$$
MSE=\frac{1}{df_E}SSE=\frac{1}{df_E}(SST-SSG)=\frac{1}{df_E}(\sum_{i=1}^n(x_i-\overline{x})^2-SSG)
$$
- **The $F$-statistic**: The ratio of these two measures of variance.
$$
F=\frac{MSG}{MSE}
$$

> [!definition] The $F$ statistic and the $F$-test
> A large $F$-statistic indicates that the variability between groups is large relative to the variability within groups, providing evidence against $H_0$. The p-value is calculated from an **$F$-distribution**, which has two degrees of freedom parameters: $df_1=k-1$ and $df_2=n-k$, where $k$ is the number of groups and $n$ is the total sample size. The upper tail of the $F$ distribution is used to represent the p-value.

> [!example] Example: Batting Performance (OBP) by MLB Position
> We want to know if the mean on-base percentage (OBP) differs for outfielders (OF), infielders (IF), and catchers (C).
> 
|          |     name     |   team   | position |    AB    |    H     |    HR    |   RBI    |   AVG    |   OBP    |
| :------: | :----------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
|    1     |   Abreu, J   |   CWS    |    IF    |   499    |   132    |    22    |    78    |  0.265   |  0.325   |
|    2     | Acuna JR., R |   ATL    |    OF    |   433    |   127    |    26    |    64    |  0.293   |  0.366   |
|    3     |  Adames, W   |    TB    |    IF    |   288    |    80    |    10    |    34    |  0.278   |  0.348   |
| $\vdots$ |   $\vdots$   | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ |
|   429    |   Zunio, M   |   WSH    |    C     |   373    |    75    |    20    |    44    |  0.201   |  0.259   |
>
> Summary statistics of on-base percentage, split by player position
> 
> |                                |  OF   |  IF   |   C   |
| :----------------------------: | :---: | :---: | :---: |
|      Sample size ($n_i$)       |  160  |  205  |  64   |
| Sample mean ($\overline{x}_i$) | 0.320 | 0.318 | 0.302 |
|       Sample SD ($s_i$)        | 0.043 | 0.038 | 0.038 |
>
> **Hypotheses**:
> - $H_O: \mu_{OF}=\mu_{IF}=\mu_{C}$
> - $H_A$: At least one mean OBP is different.
>
> **ANOVA Results:**
>
> |           | Df  | Sum Sq | Mean Sq | F value | Pr(>F) |
| :-------: | :-: | :----: | :-----: | :-----: | :----: |
| position  |  2  | 0.0161 | 0.0080  | 5.0766  | 0.0066 |
| Residuals | 426 | 0.6740 | 0.0016  |         |        |
>
> **Conclusion:** Since $p(0.0066)<0.05$, we reject $H_0$. The data provide strong evidence that the average on-base percentage varies by the player's position.

## 2. Multiple Comparisons
If ANOVA yields a significant result (i.e., we reject $H_0$), we can then perform pairwise comparisons to find out which specific groups are different from each other. To control the [[Inference for the Mean#a. Types of Errors|Type I error]] rate when performing multiple test, we use a more stringent significant.

> [!definition] Bonferroni Correction
> Use a modified significance level, $\alpha^*=\frac{\alpha}{K}$, where $K$ is the number of comparisons being made. For $k$ groups:
> $$
> K=\frac{k(k-1)}{2}
> $$

> [!warning] Reject $H_0$ with ANOVA but find no differences in group means
> It is possible to reject the null hypothesis using ANOVA and then to not subsequently identify differences in the pairwise comparisons. However, *this does not invalidate the ANOVA conclusion*. It only means we have not been able to successfully identify which specific groups differ in their means.



