---
title: Introduction to Multiple Regression
draft:
tags:
  - "#multiple-regression"
  - linear-regression
  - regression
---
Simple linear regression provides the foundational principles necessary for more sophisticated regression models. **Multiple regression** extends simple two-variable regression to model a single response variable using *many predictors* (denoted $x_1, x_2, x_3, \dots$) simultaneously. This method is necessary in scenarios where multiple factors may be connected to a single output.

> **Case Study: Lending Club Loans** ^example-lending-club-loans
>
> We examine data regarding loans provided by the peer-to-peer lender, Lending Club, focusing on 10,000 loans. The primary outcome variable of interest is the *interest rate* assigned to the loan.
>
>![[fig-loans-dataset.png]]
>
> The dataset includes the following variables:
> 
> | Variable       | Description                                              |
> | -------------- | -------------------------------------------------------- |
> | interest rate  | Interest rate for the loan (response variable)           |
> | income ver     | Categorical: verifies, source only, or not (unverified)  |
> | debt to income | Borrower's total debt percentage divided by total income |
> | credit util    | Fraction of available credit utilized                    |
> | bankruptcy     | Indicator variable (1 if past bankruptcy, 0 if not)      |
> | term           | Length of the loan, in months                            |
> | issued         | Month and year the loan was issued (Q1 2018)             |
> | credit checks  | Number of credit checks in the last 12 months            |
>
> The `bankruptcy` variable is an example of an *indicator variable*, which takes a value of 1 if the condition is met and 0 if not, allowing it to be used directly in regression.

## 1. Indicator and Categorical Variables as Predictors
### a. Two-Level Predictors (Indicator Variables)
For two-level variables, like `bankruptcy`, a linear regression model can be fit.

> [!example]- Example: Simple Regression on Bankruptcy
> 
> |             | Estimate | Std. Error | t value | Pr(>\|t\|) |
> | ----------- | -------- | ---------- | ------- | ---------- |
> | (intercept) | 12.3380  | 0.0533     | 231.49  | <0.0001    |
> | bankruptcy  | 0.7368   | 0.1529     | 4.82    | <0.0001    |
> |             |          |            |         | df=9998    |
> 
> $$
> \hat{\text{rate}}=12.33+0.74\times \text{bankruptcy}
> $$
> *Interpretation*: The slope of 0.74 means the model predicts a **0.74% higher interest rate** for borrowers with a bankruptcy in their record compared to those without. The p-value for `bankruptcy` is very close to zero, indicating strong evidence that the coefficient is different from zero.

### b. Predictors with Several Categories (k>2)
When a categorical variable has $k$ levels, the regression software typically provides coefficients for $k-1$ of those levels.
1. **Reference level**: The level that does not receive a coefficient is the *reference level*.
2. **Interpretation**: The coefficients listed for the other levels are measured *relative to this reference level*.

> [!example]- Example: Income Verification Model
> The `income_ver` variable has three levels: verified, source only, and *not* (the reference level). The fitted equation uses indicator variables for the two non-reference levels:
> 
>  |                           | Estimate | Std. Error | t value | Pr(>\|t\|) |
> | ------------------------- | -------- | ---------- | ------- | ---------- |
> | (Intercept)               | 11.0995  | 0.0809     | 137.18  | <0.0001    |
> | income_ver: *source_only* | 1.4160   | 0.1107     | 12.79   | <0.0001    |
> | income_ver: *verified*    | 3.2543   | 0.1297     | 25.09   | <0.0001    |
> |                           |          |            |         | df=9998    |
> 
> $$
> \hat{\text{rate}}=11.10+11.42\times \text{income\_ver}_{\text{source\_only}}+3.25\times \text{income\_ver}_{\text{verified}}
> $$
> - income_ver<sub>source_only</sub> takes 1 if the income verification is 'source only' and 0 otherwise.
> - income_ver<sub>verified</sub> takes 1 if the income verification is 'verified' and 0 if it takes any other value.
> 
> **Calculations using the Model**:
> - *If income ver = 'not' (unverified)*: Both indicators are 0.
> $$
> \hat{\text{rate}}=11.10+1.42(0)+3.25(0)=\mathbf{11.10\%}
> $$
> - *If income ver = 'source only'*: Source only = 1, Verified = 0. 
> $$
> \hat{\text{rate}}=11.10+1.42(1)+3.25(0)=\mathbf{12.52\%}
> $$
> - *If income ver = 'verified'*: Verified = 1, source only = 0.
> $$
> \hat{\text{rate}}= 11.10+1.42(0)+3.25(1)=\mathbf{14.35\%}
> $$
>
> *Interpretation of Coefficients*: The coefficient 3.25% for `income ver: verified` means that, compared to a borrower whose income is 'not' verified (the reference level), a verified borrower is predicted to have a *3.25% higher interest rate*.

## 2. Including and Assessing Many Variables in a Model
>[!definition] The Multiple Regression Model
>A multiple regression model includes many predictors and is generally written as:
>$$
>\hat{y}=\beta_0+\beta_1x_1+\beta_2x_2+\cdots+\beta_kx_k
>$$
>where $k$ is the number of predictors. A categorical predictor with $p$ levels contributes $p-1$ terms to the model.

> [!tip] Estimation
> The parameters ($\beta_i$) are estimated by minimizing the **Sum of Squared Residuals (SSE)**:
> $$
> SSE=e_1^2+e_2^2+\cdots+e_i^2=\sum_{i=1}^n e_i^2=\sum_{i=1}^n(y_i-\hat{y}_i)^2
> $$

For the Lending Club data ($n=10,000$), 10,000 residuals are calculated, one for each observation.

> **The Fitted Full Loans Model (k=9 predictors)**
> 
> The model simultaneously includes `income ver`, `debt to income`, `credit util`, `bankruptcy`, `issued`, and `credit checks`. 
> |                           | Estimate | Std. Error | t value | Pr(>\|t\|) |
> | ------------------------- | -------- | ---------- | ------- | ---------- |
> | (Intercept)               | 1.9251   | 0.2102     | 9.16    | <0.0001    |
> | income_ver: *source_only* | 0.9750   | 0.0991     | 9.83    | <0.0001    |
> | income_ver: *verified*    | 2.3574   | 0.1172     | 21.65   | <0.0001    |
> | debt_to_income            | 0.0211   | 0.0029     | 7.18    | <0.0001    |
> | credit_util               | 4.8959   | 0.1619     | 30.24   | <0.0001    |
> | bankruptcy                | 0.3864   | 0.1324     | 2.92    | 0.0035     |
> | term                      | 0.1537   | 0.0039     | 38.96   | <0.0001    |
> | issued: *Jan2018*         | 0.0276   | 0.1081     | 0.26    | 0.7981     |
> | issued: *Mar2018*         | -0.0397  | 0.1065     | -0.37   | 0.7093     |
> | credit_checks             | 0.2282   | 0.0182     | 12.51   | <0.0001    |
> |                            |          |            |         | df=9990    |
>
> *Interpretation of Slopes*: The point estimate $b_4=4.896$ for `credit util` ($\beta_4$) represents the change in interest rate we would expect if someone's credit utilization increased by one unit, *holding all other factors held even*.
> 
> *Interpretation of Intercepts* ($\beta_0$): The intercept (1.925) is the model's predicted price when all variables take a value of zero (e.g., income not verified, no debt). This interpretation is often **not** insightful if some varibles (like loan `term`) cannot realistically be zero.

> [!caution] Difference from Simple Regression (Collinearity)
> The coefficient for `bankruptcy` changed from 0.74 (simple regression) to 0.39 (multiple regression). This difference occurs because in simple regression, we are unable to control for other variables (cofounding variables), resulting in underlying bias. When predictors are correlated, they are called **collinear**. Multiple regression reduces or eliminates the bias missed by simple models, though bias fro, other confounding variables may still exist.

## 3. Adjusted $R^2$ as a Better Tool for Multiple Regression
### a. Regular $R^2$
The [[Least Square Regression#6. R-squared ($R 2$) Strength of the Fit|coefficient of determination]], $R^2$, determines the amount of variability in the response explained by the model:
$$
R^2=1-\frac{\text{variability in residuals}}{\text{variability in the outcome}}=1-\frac{Var(e_i)}{Var(y_i)}
$$
Whole valid in multiple regression, $R^2$ is less helpful when many variables are included because it is a **biased estimate** (overly optimistic) of the variability explained when applied to new data.

### b. Adjusted $R^2$ ($R^2_{adj}$)
The adjusted $R^2$ corrects this bias and is a more informative tool for comparing multiple regression models.
> [!definition]
> The **adjusted $R^2$** is computed as:
> $$
> R_{adj}^2=1-\frac{\frac{s^2_{residuals}}{n-k-1}}{\frac{s^2_{outcome}}{n-1}}=1-\frac{s^2_{residuals}}{s^2_{outcome}}\times\frac{n-1}{n-k-1}
> $$
> where $n$ is the number of cases used to fit the model and $k$ is the number of predictor variables (counting $p-1$ terms for a $p$-level categorical variable).

$R^2_{adj}$ will always be **smaller** (or equal) than the unadjusted $R^2$ because $k$ is never negative.

If a predictor is added but the variance of errors $Var(e_i)$ does not decrease, $R^2$ remains the same, but $R^2_{adj}$ decreases.

> [!example]- Example Calculation (Lending Club Loans, n=10000, k=9)
> Given $Var(e_i)\approx18.53$ and $Var(y_i)\approx 25.01$:
> $$
> R^2_{adj}=1-\frac{18.53}{25.01}\times \frac{10000-1}{10000-9-1}\approx 0.2584
> $$














