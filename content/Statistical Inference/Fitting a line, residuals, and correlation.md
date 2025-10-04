---
title: Fitting a Line, Residuals, and Correlation
draft:
tags:
  - linear-regression
  - residuals
  - correlation
  - covariance
---
> [!summary] 
> *This section introduces the basic concepts of fitting a line to data, defines the form of a linear model, explores criteria for what makes a good fit, and introduces the correlation statistic.*

## 1. The Linear model
Linear regression is a statistical method for fitting a line to data where the relationship between two variables, an explanatory variable ($x$) and a response variable ($y$), can be modeled by a straight line with some error.

**Perfect Linear Relationship**: In a perfect linear relationship, the exact value of $y$ can be determined just by knowing the value of $x$. For example, the total cost of purchasing shares of a stock is a perfect linear function of the number of shares purchased
![[fig-perfect-linear.png]]
> [!equation]
> $$
> y =\beta_0+\beta_1x
> $$

**Statistical Linear Model**: In most natural processes, the relationship is not perfect. Data points appear as a cloud of points that fall around a straight line. The statistical model accounts for this variability with an error term $\epsilon$.

![[fig-statistical-linear-model.png]]
> [!equation]
> $$
> y=\beta_0+\beta_1x+\epsilon
> $$
> - $y$: The response variable (the one you want to predict).
> - $x$: The explanatory or predictor variable.
> - $\beta_0$: The population intercept (a model parameter).
> - $\beta_1$: The population slope (a model parameter).
> - $\epsilon$: The error term, representing the variability in $y$ that is not explained by $x$.

When we use sample data to estimate the model parameters, we use $b_0$ and $b_1$ as point estimate for $\beta_0$ and $\beta_1$, respectively. The predictive form of the equation, which gives the estimated $y$ (denoted as $\hat{y}$), is:

> [!equation]
> $$
> \hat{y}=b_0+b_1x
> $$

The "hat" on $\hat{y}$ signifies that it is an estimate or a predicted value. This estimate can be viewed as the predicted average value of $y$ for a given $x$.

It's importance to note that a linear model is not always appropriate. If the data show a clear nonlinear trend, a straight line will not be a useful model.

![[fig-linear-vs-nonlinear.png]]

> [!example]- Example: Predicting Possum Head Lengths
> Researchers measured the total length and head length of 104 brushtail possums. We can use total length ($x$) to predict head length ($y$).
> 
> A scatterplot of the data shows a positive association: possums with a greater total length tend to have a greater head length. While not perfectly linear, a straight line can help describe this relationship.
> 
> ![[fig-predicting-possum.png]]
>
> By fitting a line to the data, we get the equation $\hat{y}=41+0.59x$.
>
> Using this model, we can predict the head length for a possum with a total length of 80cm: $\hat{y}=41+0.59\times80=88.2$ mm. This means we expect a possum that is 80 cm long to have a head length of about 88.2 mm, on average.

## 2. Residuals
Residuals represent the leftover in the data after accounting for the model fit. They are the errors in our predictions.
$$
\text{Data}=\text{Fit}+\text{Residual}
$$

> [!definition]
> The residual ($\epsilon_i$) for an individual observation ($x_i$, $y_i$) is the difference between the observed value ($y_i$), and the predicted value ($\hat{y}_1$).
> $$
> \epsilon_i=y_i-\hat{y}_i
> $$

**Positive Residual**: If an observation is above the regression line, its residual is positive. This means the model *underestimated* the actual value.

**Negative Residual**: If an observation is below the regression line, its residual is negative. This means the model *overestimated* the actual value.

The goal is to find a linear model where the residuals are as small as possible.

> [!example]- Example: Calculating a Residual for the Possum Data
> Using the model $\hat{y}=41+0.59x$, let's calculate the residual for a possum with a total length of 77.0 cm and a head length of 85.3 mm.
> 1. Find the predicted value $\hat{y}$: $\hat{y}=41+0.59\times 77=86.4$ mm.
> 2. Calculate the residual ($\epsilon$): $\epsilon=85.3-86.4=-1.1$ mm. The negative residual indicates the model over-predicted this possum's head length by 1.1 mm

## 3. Residual Plots
A **residual plot** is a scatterplot of the residuals against their corresponding $x$ values. This plot helps us evaluate how well the model fits the data. It's like tipping the original scatterplot so the regression line becomes a horizontal line at zero.

![[fig-residual-plot.png]]

**Interpreting Residual Plots**:
- **Good fit**: If the linear model is a good fit, the residuals should be scattered *randomly* around the horizontal line at 0 with no obvious patterns.
- **Poor fit**: Patterns in the residual plot indicate that a linear model may not be appropriate. For example, a curved pattern in the residuals suggests the original relationship was nonlinear.

![[fig-sample-residual-plot.png]]

## 4. Correlation ($R$): Quantifying the Strength of a Linear Relationship
> [!definition]
> Correlation $R$ is a statistic that quantifies the **strength and direction** of the *linear* relationship between two variables.
> $$
> R=\frac{1}{n-1}\sum_{i=1}^n \frac{x_i-\overline{x}}{s_x} \frac{y_i-\overline{y}}{s_y}
> $$
> where $\overline{x}$, $\overline{y}$, $s_x$, and $s_y$ are the sample means and standard deviations for each variable.

**Properties of Correlation**:
- It always takes a value between -1 and 1.
- *$R$ near +1*: indicates a strong, positive linear relationship.
- *$R$ near -1*: indicates a strong, negative linear relationship.
- *$R$ near 0*: indicates no apparent linear relationship.
- A value of exactly -1 or +1 means the relationship is perfectly linear.

**Important**: Correlation only measures the strength of a *linear* trend. A strong nonlinear relationship can have a correlation near zero.

![[fig-correlation.png]]



