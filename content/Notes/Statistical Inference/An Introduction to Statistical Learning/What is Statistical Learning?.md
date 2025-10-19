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

^0573ae

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
> 2. **Use the training data to fit or train the model** by estimating the parameters. The most common fitting for the linear model is **(ordinary) least squares**.
> 	- Advantage: Reduces the complexity of estimating $f$.
> 	- Disadvantage: The chosen model may not match the true unknown form of $f$. If the chosen model is too far from the true $f$, the estimate will be poor.

> [!example]-
> Fitting a linear model to the income data:
> $$
> \text{income}\approx \beta_0+\beta_1\times \text{education}+\beta_2\times\text{seniority}
> $$
> 
> ![[fig-2-4.png]]

> [!important] Overfitting
> Choosing overly **flexible models** (which require estimating more parameters) can lead to overfitting, where the model follows the **noise** (or errors) too closely.
### b. Non-parametric Methods
These methods do not make explicit assumptions about the functional form of $f$.
- **Goal**: Seek an estimate $\hat{f}$ that is as close to the data points as possible without being too rough or wiggly.
- **Major Advantage**: Potential to accurately fit a wider range of possible shapes for $f$ since they avoid assuming an incorrect functional form.
- **Major Disadvantage**: Since the problem is not reduced to a small number of parameters, a **very large number of observations** is required to obtain an accurate estimate.

> [!example]-
> Using a **thin-plate spline**.
> 
> ![[fig-2-6.png]]
>
> If a low level of smoothness is selected, the estimate fits the observed data perfectly (zero error on training data) but is far more variable than the true function $f$, leading to **overfitting**.

## 3. The Trade-Off Between Prediction Accuracy and Model Interpretability
Statistical learning methods vary widely in **flexibility**, or how restrictive they are in the range of shapes they can produce to estimate $f$.
- **Inflexible (Restrictive) Methods**: Generate a relatively small range of shapes (e.g., linear regression generates only lines or planes).
- **Flexible Methods**: Generate a much wider range of possible shapes (e.g., thin plate splines).

> **The Trade-Off**

| Goal       | Preferred Flexibility  | Reason                                                                                                                                                                           |
| ---------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inference  | Restrictive/Inflexible | Models are more **interpretable**. It is easier to understand how $Y$ relates to $X$.                                                                                            |
| Prediction | Flexible (Usually)     | Flexible models can potentially capture complex relationships. However, extremely models risk **overfitting** and may yield less accurate predictions than less flexible models. |
> **Flexibility and Interpretability Spectrum**

![[fig-2-7.png]]

- **Highly Interpretable (Low Flexibility)**: Least Squares, Lasso (more restrictive in coefficient estimation, setting some to zero), Subset Selection.
- **Mid-Range**: Generalized Additive Models (GAMs) (extend linear model to non-linear relationships, somewhat less interpretable).
- **Low Interpretability (High Flexibility)**: Trees, Bagging, Boosting, Support Vector Machines (with non-linear kernels), Deep Learning (neural networks).

## 4. Supervised Versus Unsupervised Learning
Statistical learning problems fall mostly into two categories: [[Introduction to Machine Learning#a. Supervised Learning|supervised]] or [[Introduction to Machine Learning#b. Unsupervised Learning|unsupervised]].

| Category              | Description                                                                                                                          | Data Format                                                                          | Common Methods                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Supervised Learning   | Goal is to model the relationship between predictors and response, for prediction or inference.                                      | Observed $n$ pairs: ($x_i,y_i$), where $y_i$ is the associated response measurement. | Linear regression, logistic regression, GAM, boosting, support vector machines learning. |
| Unsupervised Learning | Goal is to understand relationships between variables or observations when no response variable $y_i$ is available (working "blind") | Observed $n$ vectors $x_i$ but **no associated response $y_i$**.                     | **Cluster analysis** (clustering), seeking distinct groups among observations.           |

> [!example]- Unsupervised Example
> Market segmentation where characteristics ($x_i$) of potential customers are known, but their spending habits ($y_i$) are unknown. Clustering identifies distinct groups.
> 
> ![[fig-2-8.png]]


> [!definition] Semi-Supervised Learning
> Occurs when $m<n$ observations have both predictors and responses, but $n-m$ observations only have predictors.

## 5. Regression Versus Classification Problems
Problems are categorized based on the nature of the response variable $Y$.

| Variable Type             | Characteristics                                                                                             | Problem Type            | Examples                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------------- |
| Quantitative              | Takes numerical values (e.g., age, income, house value)                                                     | Regression Problems     | Least square linear regression                 |
| Qualitative (Categorical) | Takes values in $K$ different classes or categories (e.g., marital status, product brand, cancer diagnosis) | Classification Problems | Logistic regression (used for binary response) |

> [!tip] Note
> Some methods, like K-nearest neighbors and boosting, can be used for both quantitative and qualitative responses. The type of predictor variable (qualitative or quantitative) is generally less critical for selecting the learning method.



