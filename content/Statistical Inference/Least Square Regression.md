---
title: Least Square Regression
draft:
tags:
  - least-square-regression
  - linear-regression
---
> [!summary]
> *This section moves from fitting lines by eye to a more rigorous, objective method called **least squares regression**.*

## 1. An Objective Measure for the Best Line
To find the "best" fitting line, we need a mathematical criterion. The most common method is the *least squares criterion*, which chooses the line that *minimizes the sum of the squared residuals (SSE)*.

> [!minimize]
> $$
> \sum \epsilon_i^2 = \epsilon_1^2+\epsilon_2^2+...+\epsilon_n^2
> $$

Th line that satisfies this condition is called the *least squares line*. This method is preferred because:
1. It is the most commonly used method.
2. It is widely supported in statistical software.
3. Squaring the residuals penalizes larger errors more heavily (e.g., an error of 4 is considered more than twice as bad as an error of 2).

## 2. Conditions for Least Squares Regression
For the results of a least squares regression to be reliable, four conditions should be met:
1. **Linearity**: The data should show a linear trend. A scatterplot is the best way to check this. If the trend is nonlinear, more advance methods are needed.
2. **Nearly Normal Residuals**: The residuals should be nearly normally distributed. This is often checked with a histogram of the residuals. This condition is mainly important for inference.
3. **Constant Variability (Homoscedasticity)**: The variability (spread) of points around the least squares line should be roughly constant for all values of $x$. A residual plot is used to check this. A common violation is when the variability of $y$ increases as $x$ increases.
4. **Independent Observations**: The observations should be independent of each other. This is particularly important for time series data (e.g., stock prices over time), where one observation may be correlated with the next.

![[fig-condition-least-square.png]]

## 3. Finding the Least Squares Line
While software is typically used, the least squares line can be calculated from summary statistics.
> [!formula] Formulas for Slope and Intercept
> 1. **Estimate the slope $b_1$**:
> $$
> b_1=\frac{s_y}{s_x}\times R
> $$
> where $s_y$ and $s_x$ are the sample standard deviations of the response and explanatory variables, and $R$ is the [[Fitting a line, residuals, and correlation#4. Correlation ($R$) Quantifying the Strength of a Linear Relationship|correlation]].
> 
> 2. **The line passes through the point of averages** $(\overline{x},\overline{y})$.
> 
> 3. **Use the point-slope form to find the full equation**:
> $$
> y-\overline{y}=b_1\times(x-\overline{x})
> $$
> This can be simplified to solve for the intercept, $b_0=\overline{y}-b_1\overline{x}$

> [!example]- Example: Finding the Elmhurst College Aid Equation
> Data on gift aid and family income for 50 students provided the following summary statistics: ^example-elmhurst
> 
> |      | Family Income ($x$)      | Gift Aid ($y$)     |
> | ---- | ------------------------ | ------------------ |
> | mean | $\overline{x}=101,780$ | $\hat{y}=19,940$ |
> | sd   | $s_x=63,200$           | $s_y=5,460$      |
> |      |                          | $R=-0.499$         |
>
> 1. **Calculate the slope ($b_1$)**: $b_1=\frac{5460}{63200}\times(-0.499)=-0.0431$
> 2. **Use the point-slope formula**: $y-19940=-0.0431\times(x-101780)$
> 3. **Simplify to get the final equation**: $\hat{\text{aid}}=24,327-0.0431\times \text{family income}$

## 4. Interpreting Regression Parameters

> [!Intercept] Intercept
> The intercept is the *predicted value of $y$ when $x=0$*. This interpretation is only practical if $x=0$ is a realistic value in the data.
> > [!example]-
> > 
> > In the [[#^example-elmhurst|Elmhurst Example]], $b_0=24,327$. This means a student with a family income of \$0 is predicted to receive \$24,319 in aid, on average.

> [!slope] Slope 
> The slope represents the *predicted change in $y$ for a one-unit increase in $x$*.
> > [!example]-
> > 
> > In the [[#^example-elmhurst|Elmhurst Example]], $b_1=-0.0431$. For each additional \$1 of family income, the gift aid is predicted to decrease by \$0.0431 (or 4.31 cents) on average.

> [!caution]
> These are observational data, so we can describe an association, but we cannot claim a causal connection without more information.

## 5. Extrapolation is Treacherous
**Extrapolation** is applying a regression model to predict values outside the range of the original data. This is dangerous because the linear trend may not continue.

> [!example]- Example: [[#^example-elmhurst|Elmhurst]]
> Using the model to predict aid for a family with a \$1 million income gives a negative aid amount, which is impossible. This is an extrapolation because the original data did not include incomes that high.

## 6. R-squared ($R^2$): Strength of the Fit
> [!definition]
> $R^2$ describes the *percentage of the variation in the response variable ($y$) that is explained by the least squares line using the explanatory variable ($x$)*.

- $R^2$ is calculated by squaring the [[Fitting a line, residuals, and correlation#4. Correlation ($R$) Quantifying the Strength of a Linear Relationship|correlation coefficient]] ($R$).
- The value is always between 0 and 1 (or 0% and 100%).
- A higher $R^2$ means the model explains more of the variability in $y$, and the data points are closer to the regression line.

> [!example]- Example: [[#^example-elmhurst|Elmhurst Example]]
> $R=-0.499$, so $R^2=(-0.499)^2\approx 0.25$
>
> About **25% of the variation** in gift aid among these students is explained by their family income.

## 7. Categorical Predictors with Two Levels
Linear regression can also be used when the predictor variable is categorical with two levels (e.g.,  'new' vs 'used')

> [!definition] Construct a categorical predictor with two levels
> 1. **Create an indicator variable**: This is a numerical variable that is 1 for one category and 0 for the other.
> 2. **Fit the linear model**: $\hat{y} = b_0 + b_1 \times (\text{indicator variable})$

> [!example]- Example: Mario Kart Auction Prices
> Predicting auction price based on game condition ('new' or used').
> - Indicator variable `cond_new`: 1 if the game is new, 0 if it is used.
> - Model from software output: $\hat{\text{price}}=42.87+10.90 \times \text{cond\_new}$
>   
>  ![[fig-linear-categorical.png]]
>  
>  **Interpretation**:
>  - *Intercept $b_0$*: The predicted value when the indicator is 0. The average price of a *used* game is \$42.87.
> - *Slope* $b_1$: The average difference in price between the two categories. On average, *new* games sell for \$10.90 more than used game

