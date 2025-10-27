---
title: Assessing Model Accuracy
tags:
  - model-accuracy
  - bias-variance
  - overfitting
  - cross-validation
  - statistics
  - predictive-modeling
  - machine-learning
draft:
date: 2025-10-17
---
Since no single statistical learning method works best on all possible data sets, assessing performance and selecting the best approach for a given data set is crucial.
## 1. Measuring the Quality of Fit (Regression)
In the regression setting (quantitative response), the most commonly used measure is the **Mean Squared Error (MSE)**.

> [!definition] Training MSE
> The MSE computed using the training data:
> $$
> \text{MSE}=\frac{1}{n}\sum_{i=1}^n(y_i-\hat{f}(x_i))^2
> $$

> [!definition] Test MSE
> We are primarily interested in the accuracy of predictions on **previously unseen test data**. We want to choose the method that minimizes the **Test MSE**. If we had a large number of test observations $(x_0,y_0)$, the **Test MSE** would be:
> $$
> \text{Ave}(y_0-\hat{f}(x_0))^2
> $$

> **The Risk of Overfitting**

Selecting the method with the lowest *training* MSE is problematic because there is no guarantee it will have the lowest *test* MSE.
- As the **flexibility** (or degrees of freedom) of a statistical method increases, the **training MSE decreases monotonically**
- However, the **test MSE exhibits a characteristic U-shape**: it decreases initially but eventually levels off and starts to increase again.

![[fig-2-9.png]]
**Overfitting** occurs when a method yields a small training MSE but a large test MSE because the model is working too hard to find patterns in the training data, picking up noise or random chance patterns that do not exist in the test data (e.g., the wiggly green curve).

The lowest achievable test MSE is bounded by the [[What is Statistical Learning?#^0573ae|irreducible error]], $\text{Var}(\epsilon)$. Methods like cross-validation are used to estimate the Test MSE using training data when true test data is unavailable.

## 2. The Bias-Variance Trade-Off
The U-shape observed in the Test MSE curve is the result of the Bias-Variance trade-off. The expected test MSE at a given point $x_0$ can be decomposed into three fundamental, non-negative quantities:
$$
E(y_0-\hat{f}(x_0))^2=Var(\hat{f}(x_0))+[\text{Bias}(\hat{f}(x_0))]^2+Var(\epsilon)
$$
Here the notation $E(y_0-\hat{f}(x_0))^2$ defines the *expected test MSE* at $x_0$, and refers to the average test MSE that we would obtain if we repeatedly estimated $f$ using a large number of training sets, and tested each at $x_0$.

To minimize the expected test error, we must select a method that simultaneously achieves low variance and low bias. The minimum possible value is the irreducible error, $Var(\epsilon)$.

> [!definition] Variance
> **Variance** refers to the amount $\hat{f}$ would change if estimated using a different training data set.
> - **High variance**: small changes in training data result in large changes in $\hat{f}$.
> - **Rule**: More flexible statistical methods have **higher variance** (e.g., the flexible green curve has high variance compared to the orange linear fit).

> [!definition] Bias
> The error introduced by approximating a complicated real-life problem with a much simpler model.
> - **High Bias**: Occurs when the assumed model form (e.g., linear) is far from the true function $f$.
> - **Rule**: More flexible methods generally result in **less bias**.

> **The Trade-Off Dynamic**

As flexibility increases:
- **Bias Decreases**: Initially, the bias tends to decrease rapidly.
- **Variance Increases**: The variance tends to increase.

![[fig-2-12.png]]
Initially, the decrease in bias outweighs the increase in variance, and the Test MSE declines. However, at some point, increasing flexibility no longer significantly impacts bias but causes variance to increase substantially, leading to a rise in Test MSE (the U-shape).

Finding a method for which both variance and squared bias are low is the fundamental challenge of the **bias-variance trade-off**.

## 3. The Classification Setting
In classification, the response $Y$ is qualitative. Accuracy is measured using error rates.

> [!definition] Training Error Rate
> The most common approach for quantifying the accuracy of our estimate $\hat{f}$ is the training *error rate*, the proportion of mistakes that are made if we apply $\hat{f}$ to the training observations:
> $$
> \frac{1}{n}\sum_{i=1}^n \mathbf{1}\{y_i\neq \hat{y}_i\}
> $$
> where $\mathbf{1}\{y_i\neq \hat{y}_i\}$ is an **indicator variable** equal to 1 if $y_i\neq \hat{y}_i$ (misclassified) and 0 if $y_i=\hat{y}_i$ (correctly classified).

> [!definition] Test Error Rate
> The *test error rate* associated with a set of test observations of the form $(x_0, y_0)$ is given by
> $$
> \text{Ave}(\{\mathbf{1}\{y_0\neq\hat{y}_0\})
> $$

### a. The Bayes Classfier
The theoretical best classifier that minimizes the test error rate.
> [!definition] Rule ^rule
> Assigns a test observation $x_0$ to the class $j$ for which the **conditional probability** is largest:
> $$
> \text{Pr}(Y=j|X=x_0)
> $$

> **Bayes Decision Boundary**

The Bayes classifier's prediction is determined by the *Bayes decision boundary*, which is the line of surface where the probability of belonging to competing classes is equal (e.g., 50% in a two-class problem).

![[fig-2-13.png]]
> [!important] Bayes Error rate
> The Bayes classifier produces the <u>lowest possible test error rate</u>, called the *Bayes error rate*. Since the Bayes classifier will always choose the class for which [[#^rule|rule]] is largest, the error rate will be $1-\max_j\text{Pr}(Y=j|X=x_0)$ at $X=x_0$. In general, the overall Bayes error rate is given by:
> $$
> 1-E\left(\max_j\text{Pr}(Y=j|X)\right)
> $$
> where $E$ is the expectation averages the probability over all possible values of $X$. This is analogous to the irreducible error in regression.

### b. K-Nearest Neighbors (KNN) Classifier
Since the true conditional distribution needed for the Bayes classifier is unknown in practice, KNN is used to estimate it. Given an integer $K$ and test observation $x_0$:
1. Identify the $K$ training point closest to $x_0$, denoted $\mathcal{N}_0$.
2. Estimate the conditional probability for class $j$ as the fraction of points in $\mathcal{N}_0$ belonging to class $j$.
$$
\text{Pr}(Y=j|X=x_0)=\frac{1}{k}\sum_{i\in \mathcal{N}_0}\mathbf{1}\{y_i=j\}
$$
3. Classify $x_0$ to the class with the largest estimated probability.

> **KNN Flexibility and the Bias-Variance Trade-Off**

The choice of $K$ drastically affects flexibility:
- $K=1$: Highly flexible, resulting in a rough decision boundary, low bias, and very high variance. The training error rate is 0, but the test error rate may be high (overfitting).
- Large $K$ (e.g., $K=100$): Less flexible, producing a simpler, smoother decision boundary, low variance, and high bias.

![[fig-2-16.png]]
Similar to regression, the classification training error rate declines monotonically as flexibility increases (i.e., as $K$ decreases, or $\frac{1}{K}$ increases), while the test error rate exhibits a U-shape.

---
Next: [[Linear Regression - Introduction and Review]]
