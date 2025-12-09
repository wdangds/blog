---
title: Multiple Linear Regression
draft:
date: 2025-10-23
tags:
  - multiple-regression
  - multiple-linear-regression
  - additive-model
  - linear-regression
  - predictive-modeling
---
Multiple linear regression extends simple regression to accommodate **multiple predictors**.

It is insufficient to run separate simple linear regressions for each predictor because:
1. It is unclear how to combine them into a single prediction, and 
2. separate models ignore potential correlations among predictors, leading to misleading coefficient estimates.

> [!definition] Model Equation ^model-equation
> If we have $p$ distinct predictors $(X_1, X_2, \dots, X_p)$, the multiple linear regression model is
> $$
> Y=\beta_0+\beta_1X_1+\beta_2X_2+\dots+\beta_pX_p+\epsilon
> $$
> The coefficient $\beta_j$ is interpreted as the **average effect on $Y$ of a one-unit increase in $X_j$, holding all other predictors fixed**.

> [!example]-
> For the *advertising* data using all three media:
> $$
> \text{sales}=\beta_0+\beta_1\times \text{TV}+\beta_2\times\text{radio}+\beta_3\times\text{newspaper}+\epsilon
> $$

## 1. Estimating the Regression Coefficients

The unknown coefficients are estimated by minimizing the sum of squared residuals using the least squares approach.

> [!definition] RSS Minimization
> $$
> RSS=\sum_{i=1}^n(y_i-\hat{y}_i)^2=\sum_{i=1}^n(y_i-\hat{\beta}_0-\hat{\beta}_1x_{i1}-\dots-\hat{\beta}_px_{ip})^2
> $$

> [!example]-
> In the multiple regression, the estimated coefficient for *newspaper* is $\hat{\beta}_{\text{newspaper}}\approx -0.001$, which is close to zero and has a non-significant p-value (0.8599). This suggests newspaper advertising is not associated with sales when TV and radio expenditures are held fixed.
> 
> ![[table-3-4.png]]
> 
> This contrasts sharply with the simple linear regression of sales onto newspaper, where the coefficient (0.555) was positive and significant (p-value 0.0015). 
> 
> ![[table-3-3.png]]
>
> This difference occurs because newspaper advertising is correlated with radio advertising (correlation of 0.35). In the simple regression, newspaper received "credit" for the sales increase actually caused by radio, acting as a **surrogate** for radio advertising.
> 
> ![[table-3-5.png]]

## 2. Some Important Questions

> **Is there a Relationship between the Response and Predictors**?

In multiple regression, we test whether *at least one* predictor is useful by checking if all slope coefficients are zero:
- **Null Hypothesis** $H_0$: $\beta_1=\beta_2=\dots=\beta_p=0$.
- **Alternative Hypothesis** $H_A$: at least one $\beta_j$ is non-zero.

This is tested using the **F-statistic** ([[Comparing Many Means with ANOVA|ANOVA]]):
$$
F=\frac{\frac{TSS-RSS}{p}}{\frac{RSS}{n-p-1}}
$$
If $H_0$ is true (no relationship), the F-statistic is expected to be close to 1. If $H_A$ is true, $F$ is expected to be greater than 1. A large F statistic suggests that at least one predictor is related to the response. The p-value associated with the F-statistic determines whether $H_0$ is rejected.

> [!example]-
> For the *advertising* data multiple regression, the F-statistic is 570, which is far larger than 1, resulting in a p-value of essentially zero, providing extremely strong evidence of a relationship.

To test if a subset of $q$ coefficients are zero (e.g., $H_0:\beta_{p-q+1}=\dots=\beta_p=0$), we fit a reduced model ($RSS_0$), and use a modified F-statistic:
$$
F=\frac{\frac{RSS_0-RSS}{q}}{\frac{RSS}{n-p-1}}
$$
The t-statistic and p-value for an individual predictor are exactly equivalent to the F-test that omits only that single variable (where $q=1$). We need the overall F-statistic, especially when $p$ is large, because individual p-value risk **false discoveries** due to chance (multiple testing problem). The F-statistic adjusts for the number of predictors.

> **Deciding on Important Variables (Variable Selection)**

**Variable selection** is the task of determining the subset of predictors associated with the response to fit a model using only those variables. Since trying all $2^p$ possible models is often infeasible, especially when $p$ is large, classical automated approaches are used:
- **Forward selection**: starts with the **null model** (intercept only). Sequentially adds the variable that results in the lowest RSS until a stopping rule is satisfied.
- **Backward selection**: starts with all $p$ variables. Sequentially removes the variable with the largest (least significant) p-value until a stopping rule is reached (e.g., all remaining variables are significant). This cannot be used if $p>n$.
- **Mixed selection**: A combination where variables are added (forward step), but variables already in the model may be removed if their p-value rises above a certain threshold (backward step)

> **Model Fit (RSE and $R^2$)**

The RSE and $R^2$ quantify model fit just as in simple linear regression.

In multiple linear regression, $R^2$ is equal to $Cor(Y,\hat{Y})^2$, the square of the correlation between the response and the fitted linear model, and the fitted model maximizes this correlation.

> [!warning] Note on $R^2$
> $R^2$ will always increase when more variables are added to the model because adding a variable always decreases the RSS on the training data. A small increase in $R^2$ when adding a non-significant variable (like newspaper advertising to the TV + radio model) suggests the variable should be dropped to avoid overfitting.


> [!warning] Note on RSE
> RSE can increase even when $R^2$ increases slightly, because RSE accounts for the number of predictors $p$.
> $$
> RSE = \sqrt{\frac{1}{n-p-1}RSS}
> $$


> **Predictions and Uncertainty**

Predictions are made using [[#^model-equation|equation (*)]]. There are three sources of uncertainty associated with predictions:
1. **Inaccuracy in Coefficient Estimates**: The least squares plane ($\hat{Y}$) is only an estimate of the true population regression plane $f(X)$. This relates to [[What is Statistical Learning?#^b0f52c|reducible error]].
2. **Model Bias**: Assuming a linear model is often an approximation of reality, introducing potentially reducible error.
3. **Irreducible Error ($\epsilon$)**: Even if $f(X)$ were known, the random error term $\epsilon$ prevents perfect prediction. This is the [[What is Statistical Learning?#^0573ae|irreducible error]].

**Confidence Intervals (CI)** quantify the uncertainty surrounding the **average response $f(X)$** over a large number of samples.