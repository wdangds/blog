---
title: Multiple Regression Case Study - Mario Kart
tags:
  - case-study
  - linear-regression
  - multiple-regression
  - regression
draft:
date: 2025-10-06
---
## 1. Data set and the full model
This case study examines total auction prices (highest bid + shipping) for Mario Kart games on eBay. Predictors include: `cond new` (indicator: 1=new), `stock_photo` (indicator: 1=stock photo), `duration` (length of auction), and `wheels` (number of Wii wheels included).

|          | price    | cond_new | stock_photo | duration | wheels   |
| -------- | -------- | -------- | ----------- | -------- | -------- |
| 1        | 51.55    | 1        | 1           | 3        | 1        |
| 2        | 37.04    | 0        | 1           | 7        | 1        |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$    | $\vdots$ | $\vdots$ |
| 140      | 38.76    | 0        | 0           | 7        | 0        |
| 141      | 54.51    | 1        | 1           | 1        | 2        |
**Full Model Equation**: The full model uses $k=4$ predictors:
$$
\begin{aligned}
\hat{price}=&36.21+5.13\times cond\_new+1.08\times stock\_photo \\&
- 0.03\times duration + 7.29\times wheels
\end{aligned}
$$

**Change in Coefficient (Confounding)**: In simple linear regression, the coefficient for $cond\_new$ was 10.90. In the multiple regression model, it dropped to 5.13. This large change occurred because the simple model did not control for the confounding variable `wheels` (e.g., new games often include more wheels). Including `wheels` reduced the unintentional bias.

## 2. Model Selection (Backward Elimination)
We use backward elimination based on adjusted $R^2$ to refined the Mario Kart model.
- Full Model Baseline: $R^2_{adj}=0.7108$
**Step 1**: Variables are dropped one at a time. The model without `duration` yielded the highest $R^2_{adj}$ (0.7128), which is an improvement over the full model. Therefore, **`duration` is dropped**.

| Exclude... | cond_new           | stock_photo        | duration           | wheels             |
| ---------- | ------------------ | ------------------ | ------------------ | ------------------ |
|            | $R^2_{adj}=0.6626$ | $R^2_{adj}=0.7107$ | $R^2_{adj}=0.7128$ | $R^2_{adj}=0.3487$ |
**Step 2**: New baseline: $R^2_{adj}=0.7128$. Testing the removal of the three remaining variables (`cond new`, `stock photo`, `wheels`) resulted in a decrease in $R^2_{adj}$ in all cases. Therefore, **no additional variables are eliminated**.

| Exclude... | cond_new           | stock_photo        | wheels             |
| ---------- | ------------------ | ------------------ | ------------------ |
|            | $R^2_{adj}=0.6587$ | $R^2_{adj}=0.7124$ | $R^2_{adj}=0.3414$ |
**Final Reduced Model**:
$$
\hat{price}=36.05+5.18\times cond\_new+1.12\times stock\_photo+7.30\times wheels
$$

## 3. Checking Model Conditions (Mario Kart Diagnostics)
### a. Residuals
With a data set well over a hundred, we're primarily looking for major outliers. While one minor outlier appears on the upper end, it is not a concern for this large of a data set.

![[fig-mario-kart-residual.png]]
### 2. Absolute Residuals vs. Fitted Values
No obvious deviations from the constant variance assumption.

![[fig-abs-residual.png]]
### 3. Residuals in Order of Collection 
No structural issues indicative of a problem.

![[fig-residual-in-order-of-collection.png]]
### 4. Residuals Against Predictors
- `stock photo`: There is some difference in residual variability between the 'unique photo' and 'stock photo' groups.
- `wheels`: Possible curvature is seen in the residuals, indicating the relationship between price and wheels might be **nonlinear**.

![[fig-residual-agains-predic.png]]

These shortcomings must be summarized when reporting the model results.
