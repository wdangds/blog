---
title: What is Statistical Learning?
draft:
tags:
  - statistics
  - data-science
  - machine-learning
  - predictive-modeling
  - linear-regression
  - bias-variance
---
Statistical learning is motivated by investigating the association between input variables (predictors) and an output variable (response).

> [!example]- Example: Advertising Data Set
> A client is interested in the relationship between advertising budgets and sales.
> - **Input Variables ($X$)**: Advertising budgets for TV ($X_1$), radio ($X_2$), and newspaper ($X_3$). These are also called **predictors**, **independent variables**, **features**, or **variables**.
> - **Output Variable ($Y$)**: Sales. This is also called the **response** or **dependent variable**.
>
> **Goal**: Develop an accurate model to predict sales based on the three media budgets, allowing the client to adjust advertising budgets to indirectly increase sales.

> **The relationship between Output and Input**

Generally, we observe a quantitative response $Y$ and $p$ different predictors, $X_1, X_2,\dots, X_p$. The relationship between $Y$ and $X=(X_1,X_2, \dots, X_p)$ is written in the general form:
$$
Y=f(X)+\epsilon
$$
where:
- $f$: some fixed but unknown function of $X_1, \dots, X_p$. $f$ represents the systematic information that $X$ provides about $Y$.
- $\epsilon$ (error term): a random error term that is independent of $X$ and has a mean of zero.

$\Rightarrow$ **Statistical learning**: refers to a set of approaches used for **estimating** $f$.

> [!example]- Example: Income Dataset
> A plot of income versus year of education suggests one might predict income using education.
> 
> ![[fig2-2.png]]
>
> - In a simulated scenario, the true function $f$ (the underlying relationship) is known (blue curve).
> - The vertical lines represent the error terms $\epsilon$ (some positive, some negative, overall approximately mean zero).
> 
> If $f$ involves multiple input variables (e.g., years of education and seniority), $f$ is a multi-dimensional surface that must be estimated
> 
> ![[fig-2-3.png]]

## 1. Why Estimate $f$?
There are two main reasons to estimate $f$: [[#a. Prediction|prediction]] and [[#b. Inference|inference]].
### a. Prediction
In prediction settings, inputs $X$ are available, but output $Y$ is not easily obtained. We predict $Y$ using:
$$
\hat{Y}=\hat{f}(X)
$$
where:
- $\hat{f}$ represents our estimate for $f$, and $\hat{Y}$ is the resulting prediction for $Y$.
- $\hat{f}$ is often treated as a **black box**; the exact form of $\hat{f}$ is not crucial, provided it yields accurate predictions.

> [!example]-
> Predicting a patient's risk ($Y$) for an adverse reaction based on blood sample characteristics ($X$) to determine if the drug should be administered.

> **Prediction Error**

The accuracy of $\hat{Y}$ is governed by two quantities: **reducible error** and **irreducible error**.

> [!definition] Reducible Error
> Error introduced because $\hat{f}$ is not a perfect estimate for $f$. This error can potentially be improved (reduced) by selecting a more appropriate statistical learning technique.

> [!definition] Irreducible Error
> Error caused by the random error term $\epsilon$, which cannot be predicted using $X$. Denoted: $\text{Var}(\epsilon)$.
> - $\epsilon$ may contain unmeasured variables useful for predicting $Y$.
> - $\epsilon$ may contain unmeasurable variation (e.g., variations in the drug or the patient's feeling of well-being).
> - The irreducible error provides an **upper bound** on the accuracy of prediction for $Y$.

The average, or expected value, of the squared difference between the predicted and actual value of $Y$ is given by:
$$
E(Y-\hat{Y})^2=E[f(X)+\epsilon-\hat{f}(X)]^2=\underbrace{[f(X)-\hat{f}(X)]^2}_{Reducible}+\underbrace{\text{Var}(\epsilon)}_{Irreducible}
$$
Statistical learning focuses on minimizing the reducible error.
### b. Inference
Inference focuses on understanding the association between $Y$ and $X_1, \dots, X_p$ $\Rightarrow$ $\hat{f}$ **cannot** be treated as a black box; its exact form is required.

> **Key Questions in Inference**:
> - Which predictors are substantially associated with $Y$?
> - What is the relationship between the response and each predictor (positive, negative, complex)?
> - Can the relationship be summarized adequately using a linear equation, or is a more complicated model needed?

> [!example]-
> Analyzing the Advertising data to determine which media are associated with sales, which generate the biggest boost, or the magnitude of sales increase associated with TV advertising.

Some modeling could be conducted both for prediction and inference.

> [!example]-
> In a real estate setting, one may seek to relate values of homes to inputs such as crime rate, zoning, distance from a river, air quality, schools, income level of community, size of houses, and so forth. In this case one might be interested in the association between each individual input variable and housing price (inference) or may simply be interested in predicting the value of a home given its characteristics (prediction).

> **Method Selection**

Different methods are appropriate depending on the goal:
- **Linear models** allow for relatively simple and interpretable inference but may not yield the most accurate predictions.
- **Highly non-linear approaches** can provide accurate predictions for $Y$, but this comes at the expense of a less interpretable model where inference is more challenging.

## 2. How do we estimate $f$?
 Let $x_{ij}$ represent the value of the $j$ predictor for observation $i$, and let $y_i$ represent the response variable for the $i$th observation. Estimation methods rely on **training data** consisting of $n$ observations $\{(x_1,y_1), (x_2,y_2), \dots, (x_n, y_n)\}$, where $x_i=(x_{i1},x_{i2},\dots, x_{ip})^T$.

Statistical learning methods are generally characterized as either [[#a. Parametric Methods|parametric]] or [[#b. Non-parametric Methods|non-parametric]].
### a. Parametric Methods

> [!algorithm] Parametric Methods
> 1. **Assume a functional form (shape) of $f$**: A simple assumption is that $f$ is linear in $X$:
> $$
> f(X)=\beta_0+\beta_1X_1+\beta_2X_2+\dots+\beta_pX_p
> $$
> The problem simplifies from estimating an arbitrary $p$-dimensional function $f(X)$ to estimating $p+1$ coefficients $(\beta_0,\dots, \beta_p)$.


### b. Non-parametric Methods