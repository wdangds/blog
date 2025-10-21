---
title: The Basics of Decision Trees
tags:
  - decision-tree
  - gini-index
  - entropy
  - supervised
draft:
date: 2025-10-19
---
## 1. Regression Trees
Regression trees are used when the response variable is quantitative.
### a. Building a Regression Tree: Prediction via Stratification
The process of building a regression tree involves two main steps:
1. **Segmentation**: Divide the predictor space $(X_1,X_2,\dots,X_p)$ into $J$ distinct and **non-overlapping regions** $(R_1,R_2, \dots, R_j)$. These regions are chosen to be **high-dimensional rectangles (boxes)** for simplicity and ease of interpretation.
2. **Prediction**: For every observation falling into region $R_j$, we make the same prediction, $\hat{y}_{R_j}$, which is the **mean of the response values** for the training observations in $R_j$.

![[fig-8-1.png]]
### b. Finding Optimal Regions
The goal of region construction is to find the boxes $R_1, \dots, R_j$ that minimize the **Residual Sum of Squares (RSS)**.

> [!definition] Formula: Residual Sum of Squares (RSS)
> $$
> \sum_{j=1}^J\sum_{i\in R_j}(y_i-\hat{y}_{R_j})^2
> $$
> where $\hat{y}_{R_j}$ is the mean response for training observations within the $j$-th box.

Since it is computationally infeasible to consider every possible partition, a practical approach called **recursive binary splitting** is used.

### c. Recursive Binary Splitting
This approach is characterized as **top-down** and **greedy**:
- **Top-down**: The process begins at the top of the tree (all observations in one region) and successively splits the predictor space.
- **Greedy**: At each step, the split that leads to the greatest possible reduction in RSS *at that particular step* is chosen, without looking ahead to see if a split leading to less immediate reduction might yield a better overall later.

> **Splitting Criterion**

To perform a split, we select the predictor $X_j$ and the cutpoint $s$ that maximize the reduction in $RSS$.

For any $j$ and $s$, we define two half-planes:
$$
R_1(j,s)=\{X|X_j<s\}\quad \text{and}\quad R_2(j,s)=\{X|X_j\geq s\}
$$
We seek the values of $j$ and $s$ that minimize:

> [!definition] Formula: RSS Reduction
> $$
> \sum_{i:x_i\in R_1(j,s)}(y_i-\hat{y}_{R_1})^2+\sum_{i:x_i\in R_2(j,s)}(y_i-\hat{y}_{R_2})^2
> $$
> where $\hat{y}_{R_1}$ is the mean response for the training observations in $R_1(j,s)$ and $\hat{y}_{R_2}$ is the mean response for the training observations in $R_2(j,s)$.

This process repeats by splitting one of the newly formed regions to further minimize the RSS, continuing until a stopping criterion is reached (e.g., no region contains more than five observations).

### d. Terminology
A regression tree segments the predictor space.

![[fig-8-3-a.png]]

| Terminology             | Definition                                                                                                                                         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Terminal Nodes (Leaves) | The regions $R_1, R_2, R_3$ are known as terminal nodes. The number in each leaf is the mean of the response for the observations that fall there. |
| Internal Nodes          | The points where the predictor space is split.                                                                                                     |
| Branches                | Segments connecting the nodes                                                                                                                      |

> [!example]- Example: Hitters Data
> In predicting baseball players' log salary based on Years and Hits, the tree might stratify players into three regions:
> 
> ![[fig-8-2.png]]
>
> 1. $R_1$: Years $<$ 4.5. Mean log salary $\approx$ 5.107 (predicted salary $\approx$ $165,174)
> 2. $R_2$: Years $\geq$ 4.5 AND Hits $<$ 117.5. Mean log salary $\approx$ 5.999 (predicted salary $\approx$ $402,834)
> 3. $R_3$: Years $\geq$ 4.5 AND Hits $\geq$ 117.5. Mean log salary $\approx$ 6.740 (predicted salary $\approx$ $845,346)
>
> The tree indicates that Years is the most important factor.

### e. Tree Pruning
A very large tree ($T_0$) resulting from recursive binary splitting is likely to **overfit** the training data, leading to poor test set performance. A smaller tree might lead to lower variance and better interpretation.

Instead of stopping splits based on a high RSS threshold (which is too "short-sighted"), the better strategy is to:
1. Grow a very large tree $T_0$.
2. **Prune** it back to obtain an optimal subtree.

> **Cost Complexity Pruning (Weakest Link Pruning)**

This technique provides a way to select a small set of subtrees for consideration. It considers a sequence of trees indexed by a non-negative **tuning parameter** $\alpha$.

The goal is to find the subtree $T\subset T_0$ that minimizes the following equation:

> [!definition] Cost complexity Pruning Criterion
> $$
> \sum_{m=1}^{|T|}\sum_{i\in R_m}(y_i-\hat{y}_{R_m})^2+\alpha|T|
> $$
> where:
> - $|T|$ is the number of terminal nodes (complexity)
> - The first term is the RSS (fit to training data)
> - $\alpha$ controls the trade-off. If $\alpha=0$, $T=T_0$ (minimizing only training error). As $\alpha$ increases, the penalty for complexity increases, favoring smaller subtrees.

> [!important] Algorithm 8.1: Building and Pruning a Regression Tree
> 1. Use recursive binary splitting to grow a large tree $T_0$ on the training data, stopping only when each terminal node has fewer than some minimum number of observations.
> 2. Apply cost complexity pruning to $T_0$ to obtain a sequence of best subtrees (as a function of $\alpha$).
> 3. Use [[Model Evaluation and Selection#a. K-Fold Cross Validation|K-fold cross-validation]] to choose the optimal $\alpha$ by minimizing the average mean squared prediction error.
> 4. Return the subtree from Step 2 that corresponds to the chosen $\alpha$.

## 2. Classification Trees
Classification trees are used to predict a qualitative response.
### a. Prediction Rule
For a classification tree, we predict that an observation belongs to the **most commonly occurring class** of training observations in the region (terminal node) to which it belongs.

### b. Splitting Criteria
RSS cannot be used for making binary splits in the classification setting. Instead, criteria that measure **node purity** are preferred.
#### (i). Classification Error Rate (E)

> [!definition] Classification Error Rate (E)
> The fraction of training observations in a region that do not belong to the most common class is called **classification error rate**.
> $$
> E=1-\max_k(\hat{p}_{mk})
> $$
> where $\hat{p}_mk$ is the proportion of training observations in the $m$-th region that are from the $k$-th class.

Classification error is **not sufficiently sensitive for tree-growing** but is preferable for **pruning** if the final prediction accuracy is the goal.

#### (ii). Gini Index (G)

> [!definition] Gini Index (G)
> A measure of **total variance** across the classes; takes on a small value if all $\hat{p}_{mk}$ are close to zero or one (high node purity).
> $$
> G=\sum_{k=1}^K\hat{p}_{mk}(1-\hat{p}_{mk})
> $$

#### (iii) Entropy

> [!definition] Entroypy
> A measure of **total variance** across the classes; takes on a small value if all $\hat{p}_{mk}$ are close to zero or one (high node purity).
> $$
> D=-\sum_{k=1}^K\hat{p}_{mk}\log\hat{p}_{mk}
> $$

When building a classification tree, the **Gini index** or **entropy** are typically used because they are more sensitive to node purity than the classification rate.

> [!caution] Node Purity
> A split may be performed even if it does not reduce the classification error rate, because it leads to increased node purity (improving Gini index/entropy). Increased purity means greater certainty in the prediction for test observations falling in that leaf.

### c. Qualitative Predictors
Decision trees can handle qualitative predictor variables. A split on a qualitative variable assigns some of the qualitative values to one branch and the remaining values to the other.

## 3. Tree Versus Linear Models
Decision trees assume a fundamentally different model structure compared to classical linear approaches.

| Model Type                                                                            | Model Form                                          | Applicability                                                                                                                                         |
| ------------------------------------------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[Fitting a line, residuals, and correlation#1. The Linear model\|Linear Regression]] | $f(X)=\beta_0+\sum_{j=1}^p\mathbf{X}_j\beta_j$      | Performs well if the relationship between features and response is well approximated by a **linear model**.                                           |
| [[#1. Regression Trees\|Regression Trees]]                                            | $f(X)=\sum_{m=1}^M c_m\cdot \mathbf{1}\{X\in R_m\}$ | Performs well if there is a **highly non-linear and complex relationship** that can be captured by partitioning the feature space into regions $R_m$. |

## 4. Advantages and Disadvantages of Single Trees

| Advantages                                               | Disadvantages                                                                    |
| -------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Very easy to explain and interpret (especially if small) | Generally do not have the same level of **predictive accuracy** as other methods |
| Can be displayed graphically                             | Can be very **non-robust** (small data change causes large tree change)          |
| May mirror human decision-making                         |                                                                                  |
| Easily handle qualitative predictors                     |                                                                                  |

![[fig-8-7.png]]



