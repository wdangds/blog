---
title: Inference for Linear Regression
tags:
  - inference
  - hypothesis-test
  - linear-regression
draft:
date: 2025-10-04
---
> [!summary]
> *This section discusses how to determine if the relationship observed in our sample data provides convincing evidence of a real relationship in the larger population.*

## 1. Hypothesis Testing for the Slope ($\beta_1$)
We often want to test whether the explanatory variable is a significant predictor of the response variable. This is equivalent to testing if the true population slope ($\beta_1$) is different from zero.

> [!definition] Construct a hypothesis test for the slope $\beta_1$
> **Null Hypothesis** $H_0:\beta_1=0$. There is no linear relationship between $x$ and $y$.
>
> **Alternative Hypothesis**: $H_A:\beta_1\neq 0$. There is a linear relationship between $x$ and $y$.
>
> To perform the test, we use a **t-test** for the slope.
> $$
> T=\frac{b_1-0}{SE_{b_1}}
> $$
> where $b_1$ is the sample slope and $SE_{b_1}$ is its standard error.

Statistical software provides all the necessary components in a regression summary table.

> [!example]- Example: Midterm Elections and Unemployment
> 
> ![[fig-inference-slope.png]]
>
> |             | Estimate | Std. Error | t value | Pr(>\|t\|) |
> | ----------- | -------- | ---------- | ------- | ---------- |
> | (Intercept) | -7.3644  | 5.1553     | -1.43   | 0.1646     |
> | unemp       | -0.8897  | 0.8350     | -1.07   | 0.2961     |
> |             |          |            |         | df=27      |
> 
> The p-value (0.2961) is large. Therefore, we *do not reject $H_0$*. There is not convincing evidence that the unemployment rate is a significant predictor of the change in House seats for the President's party in midterm elections.

> [!example]- Example: [[Least Square Regression#^example-elmhurst|Elmhurst College Data]]
> From the software output for the Elmhurst aid data:
> 
> |               | Estimate | Std. Error | t value | Pr(>\|t\|) |
> | ------------- | -------- | ---------- | ------- | ---------- |
> | (Intercept)   | 24319.3  | 1291.5     | 18.83   | <0.0001    |
> | family_income | -0.0431  | 0.0108     | -3.98   | 0.0002     |
> |               |          |            |         | df=48      |
> 
> The p-value is very small (<0.05). We *reject $H_0$*. There is a strong evidence that family income is a significant predictor of gift aid at Elmhurst College.

## 2. Confidence Intervals for Coefficients
We can also construct a confidence interval for the true population slope $\beta_1$. This give us a plausible range of values for the slope.

> [!definition] Confidence Intervals for Coefficients
> Confidence intervals for model coefficients can be computed using the t-distribution:
> $$
> b_1\pm t^*_{df}\times SE_{b_1}
> $$
> where:
> - $b_1$: The point estimate for the slope.
> - $SE_{b_1}$: The standard error of the slope.
> - $t^*_{df}$: The critical t-value for the desired confidence level with the model's degrees of freedom ($df$). The $df$ is provided in the software output.

> [!example]- Example: Confidence Interval for the [[Least Square Regression#^example-elmhurst|Elmhurst Slope]].
> |               | Estimate | Std. Error | t value | Pr(>\|t\|) |
> | ------------- | -------- | ---------- | ------- | ---------- |
> | (Intercept)   | 24319.3  | 1291.5     | 18.83   | <0.0001    |
> | family_income | -0.0431  | 0.0108     | -3.98   | 0.0002     |
> |               |          |            |         | df=48      |
>
> For a 95% CI with $df=48$, $t^*\approx 2.01$:
>
> Interval: $-0.0431\pm2.01\times0.0108=-0.0431\pm0.0217=(-0.0648,-0.0214)$.
>
> *Interpretation*: We are 95% confident that for each additional dollar of family income, the average gift aid decreases by between 2.14 and 6.48 cents. Because this interval does not contain zero, it reinforces our conclusion from the hypothesis test that the slope is statistically significant.









