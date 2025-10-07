---
title: Checking Model Conditions Using Graphs
draft:
tags:
  - select-model
  - graph
  - regression
  - linear-regression
date: 2025-10-06
---
[[Introduction to Multiple Regression|Multiple regression]] relies on four key conditions:
1. **Nearly Normal Residuals**: The residuals of the model are nearly normal (though less critical for large data sets).
2. **Constant Variability**: The variability of the residuals is nearly constant.
3. **Independent Residuals**: The residuals are independent.
4. **Linearity**: Each variable is linearly related to the outcome.
Diagnostic plots are used to check these conditions. We use the simplified [[Introduction to Multiple Regression#^example-lending-club-loans|Lending Club loan model]] (excluding `issued`) for diagnostics.
## 1. Diagnostic Plots
### a. Histogram of Residuals (Normality/Outliers)
Used to check if the residual distribution is nearly normal and to identify extreme outliers. For the large loans dataset, only particularly extreme observations would be concerning. If prediction intervals were to be constructed, stricter normality would be required. 

![[fig-histogram-of-the-residuals.png]]

### b. Absolute Values of Residuals vs. Fitted Values (Constant Variance)
This plot displays the absolute value of residuals against their fitted values ($\hat{y}_i$). A violation is observed in the loan data, as there is *more evident variability for larger fitted values*.

![[fig-absolute-value-of-residuals.png]]
### c. Residuals in Order of Data Collection (Independence)
Useful when observations are collected sequentially to detect connections between nearby cases. This was not a concern for the loan data.

### d. Residuals Against Each Predictor Variable (Linearity/Constant Variance)
Used to check for notable changes in variability between groups (categorical variables) or patterns/trends (numerical predictors).

![[fig-residual-against-each-predictor-variable.png]]

> [!note] Concerns Observed in Loan Data
> - Minor differences in variability among the verified income groups.
> - A *clear pattern (non-linear relationship)* is seen for `debt to income`, which is also strongly right-skewed.
> - Minor misfitting (downward curve) for larger values of `credit utilization` and `credit check`.

## 2. Options for Improving the Model Fit
If diagnostic checks reveal issues, options include *transforming variables*, finding additional variables, or using advanced methods.

The primary concern for the Lending Club model was the nonlinear relationship and extreme skew observed in `debt to income`.

> [!info] Transformation Strategies
> Common transformations include $\log(x)$, $\sqrt{x}$, $1/x$, or truncation (capping the maximum value).

Log and inverse transformations are excluded here because `debt to income` sometimes takes a value of 0.
1. **Square Root Transformation** ($\sqrt{x}$): Refitting the model using $\sqrt{debt\_to\_income}$ showed that the fit was still poor, with a wavy smoothed line.

![[fig-histogram-debt-to-income.png]]

2. **Truncation (Capping at 50)**: A new variable, $debt\_to\_income\_50$, was created where values greater than 50 were shrunk to 50. This approach yielded a much more reasonable fit in the diagnostic plot.

**Final Reported Model (using Truncation)**
$$
\begin{aligned}
\hat{rate}=&1.562+1.002\times income\_ver_{source\_only}+2.436\times income\_ver_{verified}\\
&+0.048\times debt\_to\_income\_50 +4.694\times credit\_util +0.394\times bankruptcy\\
& + 0.153 \times term + 0.223\times credit\_check
\end{aligned}
$$

> [!caution] Note on Influence
> The coefficient for the truncated variable (0.048) is more than twice the original coefficient (0.021), indicating that the original large values were influential points dramatically impacting the estimate.

Even with shortcomings (like minor non-constant variance), a model can be reported if the flaws are clearly stated, following the principle: **"All models are wrong, but some are useful"**.