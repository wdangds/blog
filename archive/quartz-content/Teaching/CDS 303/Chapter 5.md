---
title: Data Modeling - Tree-based Models
tags:
  - machine-learning
  - regression
  - classification
  - decision-tree
  - random-forest
---

The [[Chapter 4|previous chapter]] introduced regression as a supervised learning framework for estimating a continuous function
$$
f:\mathcal X \to \mathbb R.
$$
In that setting, the model usually assumes that the response changes smoothly with the input variables. A linear regression model, for example, assumes that each predictor contributes additively and proportionally to the target, unless the analyst manually adds nonlinear features or interaction terms.

Tree-based models take a different view.

Instead of assuming a global equation, a tree-based model divides the feature space into a collection of simpler regions and makes a prediction within each region. The model then asks: "How can input space be split into subpopulations whose outcomes are more homogeneous?"

This makes tree-based models especially useful when the relationship between predictors and target variables is nonlinear, discontinuous, interaction-heavy, or difficult to express through a simple parametric equation.

A decision tree can be understood as a __recursive partitioning model__. Starting from the full dataset, the algorithm repeatedly chooses a feature and a threshold, splits the data into two child nodes, and continues until a stopping rule is reached. The result is a rooted tree:
- internal nodes contain decision rules,
- branches represent outcomes of those rules,
- terminal nodes, or leaves, contain predictions.

The classical framework for this approach is __Classification and Regression Trees__, commonly called __CART__, introduced by Breiman, Friedman, Olshen, and Stone in 1984[^1]. CART formalized tree learning for both regression and classification through recursive binary splitting and cost-complexity pruning.

![[decision-tree.png]]

## 1. Formal Setup

Let the training data be 
$$
\mathcal D_n=\{(x_i, y_i)\}_{i=1}^n
$$
where
$$
x_i = (x_{i1}, x_{i2}, \dots, x_{ip}) \in \mathbb R^p
$$
is a vector of $p$ predictors, and $y_i$ is the response. For regression, $y_i\in \mathbb R$. For classification, $y_i \in \{1, 2, \dots, K\}$. 

A tree model partitions the feature space $\mathcal X\in \mathbb R^p$ into $M$ disjoint regions:
$$
R_1, R_2, \dots, R_m
$$
such that 
$$
R_m\cap R_\ell = \varnothing \quad \text{ for } m\neq \ell
$$
and 
$$
\bigcup_{m=1}^M R_m = \mathcal X
$$
Each region corresponds to one terminal node of the tree. The prediction is constant within each terminal region.

For regression, the tree takes the form
$$
\hat f(x) = \sum_{m=1}^M c_m \times \mathbf I\{x\in R_m\}
$$
where $\mathbf I\{x\in R_m\}$ is an indicator function:
$$
\mathbf I(x\in R_m) = \begin{cases}
1, & x\in R_m\\
0, &x\not \in R_m
\end{cases}
$$
For classification, the tree estimates class probabilities inside each region:
$$
\hat p_{mk}=\frac{1}{N}\sum_{x_i\in R_m} \mathbf I\{y_i=k\}
$$
where $N_m$ is the number of training observations in region $R_m$. The predicted class is usually 
$$
\hat k(x) = \arg \max_k \hat p_{mk}
$$
## 2. Regression Trees

> [!definition] Definition: Regression Tree
> _A **regression tree** is a piecewise-constant function_
> $$
> \hat f(x) = \sum_{m=1}^M c_m \times \mathbf I\{x\in R_m\}
> $$
> _where the input space is partitioned into disjoint regions $R_1, \dots, R_M$, and each region is assigned a constant prediction $c_m$._

The model is nonparametric in the sense that it does not assume a fixed global equation such as $y = \beta_0 + \beta_1 x_1 + \dots + \beta_p x_p +\epsilon$. Instead, it learns the partition structure from data.

### 2.1. Optimal Leaf Prediction for Squared Error

For a fixed partition $R_1, \dots, R_M$, the regression tree chooses constants $c_1, \dots, , c_M$ to minimizes the sum of square errors:
$$
SSE = \sum_{i=1}^n \left(y_i-\hat f(x_i)\right)^2
$$
Then the objective becomes:
$$
SSE = \sum_{m=1}^{M} \sum_{x_i\in R_m}(y_i-c_m)^2
$$

> [!tip] Theorem: Optimal Constant in a Regression Tree Leaf
> For a fixed terminal region $R_m$, the value of $c_m$ that minimizes 
> $$
> \sum_{x_i\in R_m} (y_i-c_m)^2
> $$
> is the sample mean of the response values in that region:
> $$
> \hat c_m = \frac{1}{N_m}\sum_{x_i\in R_m} y_i
> $$


> [!info]- Proof
> For a fixed region $R_m$, define
> $$
> J(c_m) = \sum_{x_i\in R_m} (y_i-c_m)^2.
> $$
> Differentiate with respect to $c_m$:
> $$
> \frac{dJ}{dc_m} = \sum_{x_i\in R_m} 2(y_i-c_m)(-1)=-2\sum_{x_i\in R_m}(y_i-c_m).
> $$
> Set equal to zero:
> $$
> -2\sum_{x_i\in R_m}(y_i-c_m)=0 \implies \sum_{x_i\in R_m} y_i - \sum_{x_i\in R_m} c_m = 0
> $$
> Since $c_m$ is constant within the region, $\sum_{x_i\in R_m} c_m = N_mc_m$, thus,
> $$
> \sum_{x_i\in R_m} y_ i = N_m c_m \implies \hat c_m = \frac{1}{N_m}\sum_{x_i\in R_m} y_i.
> $$


### 2.2. Recursive Binary Splitting

The idea tree would search over all possible partitions of $\mathcal X$. However, the number of possible partitions is enormous, and finding the globally optimal tree is computationally infeasible in general. CART therefore uses a __greedy recursive splitting algorithm__.

At a given node containing data $R$, the algorithm considers splits of the form
$$
R_1 (j,s) = \{x\in R: x_j \leq s\},\, R_2(j,s)=\{x\in R:x_j > s\}
$$
where $j\in \{1, \dots, p\}$ is the splitting variable and $s$ is the split threshold.

For regression, the best split solves
$$
(j^*, s^*) = \arg \min_{j,s} \left[\sum_{x_i\in R_1(j,s)}(y_i-\overline y_{R_1})^2 + \sum_{x_i\in R_2(j,s)}(y_i-\overline y_{R_2})^2\right]
$$
where 
$$
\overline y_{R_k}=\frac{1}{N_{R_k}}\sum_{x_i\in R_k(j,s)}y_i.
$$
The split is chosen because is maximally reduces within-node variance.

Equivalently, define the _impurity_ of a regression node $R$ as
$$
Q(R) = \frac{1}{N_R}\sum_{x_i\in R} (y_i-\overline y_R)^2
$$
The total weighted impurity after a split is 
$$
Q_{\text{split}}(j,s)=\frac{N_{R_1}}{N_R}Q(R_1)+\frac{N_{R_2}}{N_R}Q(R_2)
$$
The best split minimizes $Q_\text{split}(j,s)$.

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.tree import DecisionTreeRegressor, plot_tree

rng = np.random.default_rng(42)

# Simulated nonlinear data
X = np.linspace(0, 10, 120).reshape(-1, 1)
y = np.sin(X).ravel() + 0.25 * rng.normal(size=X.shape[0])

# Fit regression tree
tree = DecisionTreeRegressor(max_depth=3, random_state=42)
tree.fit(X, y)

# Prediction grid
X_grid = np.linspace(0, 10, 500).reshape(-1, 1)
y_pred = tree.predict(X_grid)

# Plot fitted function
plt.figure(figsize=(8, 5))
plt.scatter(X, y, alpha=0.65, label="Observed data")
plt.plot(X_grid, y_pred, label="Regression tree prediction")
plt.title("Regression Tree Fitted Function")
plt.xlabel("x")
plt.ylabel("y")
plt.legend()
plt.tight_layout()
plt.show()
```

![[c5-ex1.1.png]]

```python
# Plot tree structure
plt.figure(figsize=(14, 6))
plot_tree(
    tree,
    feature_names=["x"],
    filled=False,
    rounded=True,
    precision=2
)
plt.title("Regression Tree Structure")
plt.tight_layout()
plt.show()
```

![[c5-ex1.2.png]]

## 3. Classification Trees

> [!definition] Definition: Classification Tree
> _A __classification tree__ is a recursive partitioning model for categorical responses $Y\in \{1,\dots, K\}$. Each terminal region $R_m$ estimates class probabilities_
> $$
> \hat p_mk = \frac{1}{N_m}\sum_{x_i\in R_m} \mathbf I\{y_i=k\}
> $$
> _and predicts the majority class_
> $$
> \hat k(x) = \arg \max_k \hat p_mk \quad \text{ for } x\in R_m
> $$
> _The goal of splitting is to produce child nodes that are more homogeneous than their parent node._

### 3.1. Node Impurity Measures

Unlike regression trees, classification trees do not minimize squared residuals. They minimize __impurity__. A pure node contains observations from only one class. An impure node contains a mixture of classes.

Let $\hat p_{mk}$ be the proportion of class $k$ observations in node $m$.

Three common impurity measures are:
1. Misclassification error,
2. Gini index,
3. Cross-entropy, also called deviance.

#### 3.1.1. Misclassification Error

The misclassification error at node $m$ is
$$
Q_m^{ME} = 1 - \max_k\hat p_{mk}
$$
This measures the error rate if every observation in the node is assigned to the majority class.

For example, if a node has class proportions $(\hat p_{m1}, \hat p_{m2})= (0.8,0.2)$, then 
$$
Q_{m}^{ME} = 1-0.8=0.2.
$$

Misclassification error is simple and interpretable, but it is less sensitive to changes in node purity than Gini or entropy. For this reason, CART often uses Gini for classification splitting and uses misclassification error more naturally for evaluating final tree performance.

#### 3.1.2. Gini Index

The Gini index is 
$$
Q_{m}^{\text{Gini}} = \sum_{k=1}^K\hat p_{mk}(1-\hat p_{mk})
$$
This can also be written as
$$
Q_m^{\text{Gini}} = 1-\sum_{k=1}^K \hat p_{mk}^2
$$
If one randomly labels an observation according to the class distribution in the node, the Gini index is the expected probability of incorrect classification. A pure node has one class probability equal to 1 and all others equal to 0, so  $Q_m^\text{Gini}=0$. A maximal mixed binary node with $\hat p_{m1} = \hat p_{m2}=0.5$ has $Q_m^\text{Gini}=1-(0.5^2+0.5^2)=0.5$.

#### 3.1.3. Cross-Entropy / Deviance

The cross-entropy impurity is
$$
Q_m^\text{Entropy} = -\sum_{k=1}^K \hat p_{mk}\log (\hat p_{mk})
$$
By convention, $0\log0 = 0$. 

Entropy measures uncertainty in the class distribution. A pure node has entropy 0. A uniformly mixed node has high entropy.

For binary classification, if $p=\hat p_{m1}$, then:
$$
Q_m^\text{Entropy}(p) = -p\log p - (1-p)\log (1-p)
$$
Entropy is connected to information theory and likelihood-based classification. It penalizes uncertain class distribution strongly.

```python
import numpy as np
import matplotlib.pyplot as plt

p = np.linspace(0.001, 0.999, 500)

gini = 2 * p * (1 - p)
entropy = -(p * np.log(p) + (1 - p) * np.log(1 - p))
misclassification = 1 - np.maximum(p, 1 - p)

plt.figure(figsize=(8, 5))
plt.plot(p, gini, label="Gini index")
plt.plot(p, entropy, label="Entropy")
plt.plot(p, misclassification, label="Misclassification error")
plt.title("Impurity Measures for Binary Classification")
plt.xlabel("Class probability p")
plt.ylabel("Impurity")
plt.legend()
plt.tight_layout()
plt.show()
```

![[c5-ex2.png]]

### 3.2. Example: Heart Disease Rule Tree

Suppose a simplified health dataset contains the following predictors:
$$
X_1 = \text{Exercise}, X_2=\text{Smoking}, X_3 =\text{Age}, X_4=\text{Blood Pressure}
$$
The response is
$$
Y\in \{\text{Healthy, At Risk}\}
$$

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

rng = np.random.default_rng(7)
n = 180

exercise = rng.choice(["Yes", "No"], size=n, p=[0.55, 0.45])
smoking = rng.choice(["Yes", "No"], size=n, p=[0.35, 0.65])
age = rng.normal(50, 12, size=n)
blood_pressure = rng.normal(130, 15, size=n)

risk_score = (
    (exercise == "No").astype(int) * 1.2
    + (smoking == "Yes").astype(int) * 1.5
    + 0.04 * (age - 50)
    + 0.03 * (blood_pressure - 130)
    + rng.normal(0, 0.5, size=n)
)

target = np.where(risk_score > 1.2, "At Risk", "Healthy")

df = pd.DataFrame({
    "exercise": exercise,
    "smoking": smoking,
    "age": age,
    "blood_pressure": blood_pressure,
    "target": target
})

X = df.drop(columns=["target"])
y = df["target"]

categorical_features = ["exercise", "smoking"]
numeric_features = ["age", "blood_pressure"]

preprocess = ColumnTransformer([
    ("cat", OneHotEncoder(drop=None), categorical_features),
    ("num", "passthrough", numeric_features)
])

clf = Pipeline([
    ("preprocess", preprocess),
    ("tree", DecisionTreeClassifier(max_depth=3, random_state=42))
])

clf.fit(X, y)

feature_names = clf.named_steps["preprocess"].get_feature_names_out()

plt.figure(figsize=(16, 7))
plot_tree(
    clf.named_steps["tree"],
    feature_names=feature_names,
    class_names=clf.named_steps["tree"].classes_,
    filled=False,
    rounded=True,
    precision=2
)
plt.title("Classification Tree for Simplified Health Risk")
plt.tight_layout()
plt.show()
```

![[c5-ex3.png]]

## 4. Pruning and Model Complexity

### 4.1. Why Trees Overfit

A fully grown decision tree can often fit the training data extremely well. If allowed to keep splitting until every terminal node contains only one or a few observations, the tree can memorize noise.

In regression, this means the training SSE may become very small. In classification, the training error may approach zero. But a tree with very low training error may generalize poorly.

This is the same [[Chapter 4#8. Regularized Regression|generalization]] problem discussed in the previous chapter, but the mechanism is different. For regression, overfitting may appear as an overly complex polynomial curve. For trees, overfitting appears as an overly fragmented partition of the feature space.

### 4.2. Cost-Complexity Pruning

CART addresses overfitting using __cost-complexity pruning__. The idea is to first grow a large tree $T_0$, then prune it back to smaller subtrees.

Let $T$ be a subtree of $T_0$, and let $|T|$ denote the number of terminal nodes in $T$. Define
$$
R(T) = \sum_{m=1}^{|T|} N_mQ_m(T),
$$
where $Q_m(T)$ is the impurity or loss in terminal node $m$.

The cost-complexity criterion is 
$$
C_\alpha(T) = R(T) + \alpha |T|,
$$
where $a\geq 0$ is a tuning parameter.
- If $\alpha = 0$, the criterion favors the largest tree with lowest training error.
- If $\alpha$ is large, the criterion penalizes complexity more heavily and favors a smaller tree.

> [!definition] Cost-Complexity Pruning
> _Cost-complexity pruning selects a subtree_
> $$
> T_\alpha = \arg\min_{T\subseteq T_0}[R(T)+\alpha|T|].
> $$
> _The parameter $\alpha$ controls the tradeoff between empirical fit and tree size._

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.tree import DecisionTreeRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

rng = np.random.default_rng(42)

X = np.linspace(0, 10, 250).reshape(-1, 1)
y = np.sin(X).ravel() + 0.3 * rng.normal(size=X.shape[0])

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.35, random_state=42
)

base_tree = DecisionTreeRegressor(random_state=42)
path = base_tree.cost_complexity_pruning_path(X_train, y_train)
ccp_alphas = path.ccp_alphas

train_rmse = []
test_rmse = []
leaf_counts = []

for alpha in ccp_alphas:
    tree = DecisionTreeRegressor(random_state=42, ccp_alpha=alpha)
    tree.fit(X_train, y_train)

    train_pred = tree.predict(X_train)
    test_pred = tree.predict(X_test)

    train_rmse.append(mean_squared_error(y_train, train_pred) ** 0.5)
    test_rmse.append(mean_squared_error(y_test, test_pred) ** 0.5)
    leaf_counts.append(tree.get_n_leaves())

plt.figure(figsize=(8, 5))
plt.plot(leaf_counts, train_rmse, marker="o", label="Train RMSE")
plt.plot(leaf_counts, test_rmse, marker="o", label="Test RMSE")
plt.gca().invert_xaxis()
plt.title("Cost-Complexity Pruning: Error vs. Number of Leaves")
plt.xlabel("Number of terminal leaves")
plt.ylabel("RMSE")
plt.legend()
plt.tight_layout()
plt.show()
```

![[c5-ex4.png]]

## 5. Strengths and Limitations of Single Trees

### 5.1. Interpretability

A single decision tree is interpretable because it represents predictions as a sequence of logical rules. Each root-to-leaf path can be written as a conjunction of conditions:
$$
x_3\leq 40 \quad \wedge\quad  x_1> 2.5\quad \wedge \quad  x_5 = \text{Yes}
$$
This rule-based structure is useful in domains where decisions must be communicated to nontechnical stakeholders. 

However, interpretability declines as the tree becomes large. A tree with hundreds of leaves may be no easier to interpret than a black-box model.

### 5.2. Invariance to Monotone Transformations

Decision trees are invariant to strictly monotone transformations of individuals predictors.

> [!tip] Theorem: Monotone Transformation Invariance
> Let $g:\mathbb R \to \mathbb R$ be a strictly increasing function. A split of the form 
> $$
> x_j \leq s
> $$
> is equivalent to 
> $$
> g(x_j) \leq g(s).
> $$
> Therefore, applying a strictly increasing transformation to $x_j$ does not change the ordering of observations along that feature and does not change the set of possible binary partitions induced by threshold splits.

> [!info]- Proof
> Because $g$ is strictly increasing, 
> $$
> x_j \leq s \Longleftrightarrow g(x_j)\leq g(s).
> $$
> Thus, the observations sent to the left child and right child are unchanged under the transformation. The possible split structure is preserved.

This is why trees do not require feature scaling in the same way that KNN, K-means, or [[Chapter 4#9. Gradient Descent for Regression|gradient-based regression models]] often do. Scaling is often unnecessary for tree split rules because trees depend on order.

### 5.3. Limitations of Single Trees

Single trees have several weakness:
1. _High variance_. Small changes in training data can produce different tree structures.
2. __





















[^1]: Breiman, Leo, Jerome H. Friedman, Richard A. Olshen, and Charles J. Stone. _Classification and Regression Trees_. Chapman & Hall/CRC, 1984. [https://doi.org/10.1201/9781315139470](https://doi.org/10.1201/9781315139470).