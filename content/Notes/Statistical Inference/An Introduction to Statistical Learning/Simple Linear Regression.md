---
title: Simple Linear Regresison
tags:
  - simple-linear-regression
  - linear-regression
  - line-of-the-best-fit
  - predictive-modeling
draft:
date: 2025-10-23
---
Simple linear regression is a straightforward approach used to predict a quantitative response $Y$ based on a **single predictor variable** $X$.

> **Model Definition and Equation**

The core assumption is that there is an **approximately linear relationship** between $X$ and $Y$.

> [!definition] Linear Relationship Model
> $$ 
> Y\approx \beta_0 +\beta_1X
> $$
> Here, $\beta_0$ and $\beta_1$ are unknown constants called the **model coefficients** or **parameters**.
> - $\beta_0$: the **intercept** term.
> - $\beta_1$: the **slope** term.

> [!example]-
> For instance, regressing sales onto TV advertising used the model $\text{sales}\approx \beta_0 +\beta_1\times TV$

Once estimates $\hat{\beta}_0$ amd $\hat{\beta}_1$ are obtained from training data, the prediction for a specific predictor value $x$ is given by:

> [!definition] Prediction
> $$
> \hat{y}=\hat{\beta}_0+\hat{\beta}_1x
> $$
> 

## 1. Estimating the Coefficients

Since $\beta_0$ and $\beta_1$ are unknown, data $(x_1,y_1),\dots,(x_n,y_n)$ must be used to estimate them. The goal is to find $\hat{\beta}_0$ and $\hat{\beta}_1$ such that the resulting line is as close as possible to the $n$ data points.

The most common method for measuring closeness is minimizing the **least squares criterion**.

> [!definition] Residuals
> The prediction for the $i$-th observation is $\hat{y}_i=\hat{\beta}_0+\hat{\beta}_1x$. The $i$-th **residual** ($e_i$) is the difference between the observed response ($y_i$) and the predicted response ($\hat{y}_i$).
> $$
> e_i=y_i-\hat{y}_i
> $$

> [!definition] Residual Sum of Squares (RSS)
> The **sum of the squared residuals** is defined as
> $$
> RSS=e_1^2+e_2^2+\dots+e_n^2=\sum_{i=1}^n(y_i-\hat{\beta}_0-\hat{\beta}_1x_i)^2
> $$

> [!definition] Least Squares Estimates
> The least squares approach chooses $\hat{\beta}_0$ and $\hat{\beta}_1$ to minimize the RSS. Using calculus, the minimizers are 
> $$
> \hat{\beta}_1=\frac{\sum_{i=1}^n(x_i-\overline{x})(y_i-\overline{y})}{\sum_{i=1}^n(x_i-\overline{x})^2}
> $$
> and 
> $$
> \hat{\beta}_0=\overline{y}-\hat{\beta}_1\overline{x}
> $$
> where $\overline{y}$ and $\overline{x}$ are the sample means.

> [!example]-
> For the *advertising* data (regressing sales onto TV), the least squares fit resulted in $\hat{\beta}_0=7.03$ and $\hat{\beta}_1=0.0475$. This means an additional $1,000 spent on TV is associated with approximately 47.5 additional units of product sold. 
> 
> ![[fig-3-1.png]]

## 2. Assessing the Accuracy of the Coefficient Estimates

> [!definition] Population Regression Line
> Assuming the true relationship between $X$ and $Y$ takes the form $Y=f(X)+\epsilon$, where $\epsilon$ is a mean-zero random error term. If $f(X)$ is approximated linearly, the true relationship is:
> $$
> Y=\beta_0+\beta_1X_\epsilon
> $$

This defines the **population regression line**, which is the best linear approximation to the true relationship. The least squares coefficient estimates define the **least squares line**. The population regression line is generally unobserved in real applications, while the least squares line is computed from the available data.

> **Bias and Unbiasedness**

The least squares estimates ($\hat{\beta}_0$, $\hat{\beta}_1$) are **unbiased estimators** of the true parameters ($\beta_0, \beta_1$) This means that if we could average the estimates obtained over a huge number of datasets, that average would exactly equal the true parameters, even though a single estimate might overestimate or underestimate the true value.

> **Standard Errors and Confidence Intervals**

To determine how close the estimates $\hat{\beta}_0$ and $\hat{\beta}_1$ are to the true values, we calculate their **standard errors (SE)**.

> [!definition] Standard Error Formulas
> $$
> SE(\hat{\beta}_0)^2=\sigma^2\left[\frac{1}{n}+\frac{\overline{x}^2}{\sum_{i=1}^n(x_i-\overline{x})^2}\right]
> $$
> and 
> $$
> SE(\hat{\beta}_1)^2=\frac{\sigma^2}{\sum_{i=1}^n(x_i-\overline{x})^2}
> $$
> where $\sigma^2=Var(\epsilon)$. $SE(\hat{\beta}_1)$ is smaller when the $x_i$ values are more spread out.

> [!definition] Residual Standard error (RSE)
> The unknown error variance $\sigma^2$ is typically estimated using the **residual standard error (RSE)**
> $$
> RSE = \sqrt{\frac{RSS}{n-2}}
> $$

Standard errors are used to construct **confidence intervals**. A 95% confidence interval is a range of values expected to contain the true unknown parameter value 95% of the time if repeated samples are taken.
$$
\hat{\beta}_1\pm 2\times SE(\hat{\beta}_1)
$$
> [!example]-
> For the *advertising* data, the 95% CI for $\beta_1$ (TV slope) is $[0.042, 0.053]$. This implies that for each $1000 increase in TV advertising, sales increase by an average of between 42 and 53 units.

> **Hypothesis Testing**

Standard errors are also used to perform **hypothesis tests** on the coefficients. The most common test is:
- **Null Hypothesis** ($H_0$): There is no relationship between $X$ and $Y$ ($\beta_1=0$).
- **Alternative Hypothesis ($H_A$)**: There is some relationship between $X$ and $Y$ ($\beta_1\neq0$).

To test this, we compute the [[Inference for the Mean#^f268eb|t-statistic]]:

> [!definition] T-statistic
> $$
> t=\frac{\hat{\beta}_1-0}{SE(\hat{\beta}_1)}
> $$

The t-statistic measures how many standard deviations $\hat{\beta}_1$ is away from 0. If $H_0$ is true, the t-statistic follows a t-distribution with $n-2$ degrees of freedom. 

The corresponding [[Inference for the Mean#^ddf350|p-value]] is the probability of observing a t-statistic as large or larger (in absolute value), assuming $H_0$ is true. A small p-value (e.g., $<5\%$ or $1\%$) indicates that it is unlikely to observe such a substantial association by chance, allowing us to **reject the null hypothesis** and infer that a relationship exists.

> [!example]- 
>
> ![[table-3-1.png]]
>
> In the simple regression of sales on TV, the t-statistic for TV is 17.67, with a p-value < 0.0001, providing strong evidence that $\beta_1 \neq 0$.

### 3. Assessing the Accuracy of the Model

The quality of a linear regression fit is typically measured using the **residual standard error (RSE)** and the **$\mathbf{R^2}$ statistic**.

> [!definition] Residual Standard Error (RSE)
> The RSE is an estimate of $\sigma$, the standard deviation of the error term $\epsilon$ in the true model $Y=\beta_0+\beta_1X+\epsilon$. It roughly represents the average amount the response ($Y$) will deviate from the true regression line.
> $$
> RSE=\sqrt{\frac{1}{n-2}RSS}=\sqrt{\frac{1}{n-2}\sum_{i=1}^n(y_i-\hat{y}_i)^2}
> $$

The RSE measures the lack of fit of the model to the data. A smaller RSE indicates a better fit.

> [!example]-
> For the sales regression onto TV, the RSE is 3.26. Given the mean sales are 14,000 units, the percentage of error is $\frac{3.26}{14}\approx 23\%$.

> [!definition] $R^2$ statistic
> The $R^2$ statistic provides a scale-independent measure of fit, representing the **proportion of variance explained**. It always takes a value between 0 and 1.
> $$
> R^2=\frac{TSS-RSS}{TSS}=1-\frac{RSS}{TSS}
> $$
> where **TSS** (total sum of squares) is defined as
> $$
> TSS=\sum_{i=1}^n(y_i-\overline{y})^2
> $$

The TSS measures the total variability inherent in the response $Y$. RSS measures the variability remaining **unexplained** after regression. So $TSS-RSS$ measures the variability explained after regression.

An $R^2$ close to 1 means a large proportion of variability is explained, while a value near 0 means the regression explains little variability.

> [!example]-
> For the TV-sales regression, $R^2=0.612$, meaning just under two-thirds of the variability in sales is explained by TV advertising.

> **Relationship between $R^2$ and Correlation**

Recall that *correlation*, defined as
$$
\hat{Cor(X,Y)}=\frac{\sum_{i=1}^n(x_i-\overline{x})(y_i-\overline{y})}{\sqrt{\sum_{i=1}^n(x_i-\overline{x})^2}\sqrt{\sum_{i=1}^n(y_i-\overline{y})^2}}
$$
is also a measure of the linear relationship between $X$ and $Y$. In the context of simple linear regression, the $R^2$ statistic is identical to the square of the sample correlation $r$ between $X$ and $Y$:
$$
R^2=r^2=(\hat{Cor(X,Y)})^2
$$
---
Next: [[Multiple Linear Regression]]




