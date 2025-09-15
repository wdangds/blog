---
title: Testing for independence in two-way tables
draft:
tags:
  - categorical
  - chi-square
  - statistics
  - hypothesis-test
  - inference
---
> [!summary]
> This section focuses on testing for a relationship (or **independence**) between two categorical variables presented in a **two-way table**.
> - **One-way table**: Describes counts for outcomes in a single variable.
> - **Two-way table**: Describes counts for combinations of outcomes for two variables.
> 	- The question is: "Are these variables related in any way?"


## 1. Expected Count in Two-Way Tables
To test for independence, we compare observed counts to expected counts if the variables were independent.
> [!definition] Expected Count Formula
> $$
> \text{Expected Count}_{\text{row }i,\text{ col }j}=\frac{\text{row i total}\times \text{col j total}}{\text{table total}}
> $$

*Rationale*: If variables are independent, the proportion in a cell is the product of its marginal row and column proportions.

![[fig-expected-count.png]]

## 2. The Chi-Square Test for Two-Way Tables
The **[[Testing for goodness of fit using chi-square|chi-square test statistic]]($\chi^2$)** for a two-way table is calculated using the **same formula** as for one-way tables:
$$
\chi^2=\sum\frac{(\text{Observed count}-\text{Expected count})^2}{\text{Expected count}}
$$

> [!definition] Degrees of Freedom (df) for a Two-Way Table
> $$
> df = (\text{Number of rows} - 1)\times(\text{Number of columns}-1)
> $$

> [!definition] **Conditions for the Chi-Square Test**:
> 1. **Independence:** Each case must be independent.
> 2. **Sample size / distribution**: Each **expected count** must be **at least 5**.

**When to use other methods**: When analyzing **2-by-2 contingency tables**, it is generally recommended to use the [[Difference of Two Proportions|two-proportion methods]].

> [!example]- Example (iPod Study)
> Test if question type (General, Positive Assumption, Negative Assumption) affects disclosure of an iPod problem.
> 
> |                  | General | Positive Assumption | Negative Assumption | Total |
> | ---------------- | ------- | ------------------- | ------------------- | ----- |
> | Disclose Problem | 2       | 23                  | 36                  | 61    |
> | Hide Problem     | 71      | 50                  | 37                  | 158   |
> | Total            | 73      | 73                  | 73                  | 219   |
>
> **Hypotheses**:
> - $H_0$: There is no difference in the effectiveness of the question types (i.e., question type is independent of disclosure)
> - $H_A$: There is some difference in effectiveness (i.e., question type is dependent on disclosure)
>
> **Check**: Assume independence of observations. Expected counts calculated using the formula (e.g., for General/Disclosure: $\frac{61\times73}{219}=20.33$). All expected counts are $\geq5$.
> 
> **Calculate**: $\chi^2=\frac{(2-20.33)^2}{20.33}+\frac{(23-20.33)^2}{20.33}+\cdots+\frac{(37-52.67)^2}{52.67}=40.13$
> - $df=(2 \text{ rows} -1)\times (3\text{ columns}-1)=1\times 2 = 2$
>
> **P-value**: For $\chi^2=40.13$ with $df=2$, the p-value is extremely small, approximately 0.000000002 (or < 0.001 from a table).
>
> **Conclude**: Since p-value < $\alpha$, we **reject $H_0$**. The data provide convincing evidence that the question asked did affect a seller's likelihood to tell the truth about problems with the iPod.



