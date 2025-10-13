---
title: Select and Train a Model
draft:
tags:
  - machine-learning
  - linear-regression
  - random-forest
  - select-model
---
With a preprocessing pipeline in place, we can now train some models.
## 1. Training a Linear Regression Model
Let's start with a simple `LinearRegression` model. We can create a full pipeline that includes both preprocessing and the model itself.

```python
from sklearn.linear_model import LinearRegression

lin_reg = make_pipeline(preprocessing, LinearRegression())
lin_reg.fit(housing, housing_labels)
```

```python
from sklearn.metrics import mean_squared_error

housing_predictions = lin_reg.predict(housing)
lin_rmse = mean_square_error(housing_labels, housing_predictions)
```

Evaluating this model on the training data given an RMSE of around $68,232. This is a high error, suggesting the model is *underfitting* the data.

## 2. Training a Decision Tree Model
Next, let's try a more powerful model, a `DecisionTreeRegressor`.

```python
from sklearn.tree import DecisionTreeRegressor

tree_reg = make_pipeline(preprocessing, DecisionTreeRegressor(random_state=42))
tree_reg.fit(housing, housing_labels)
```

```python
housing_predictions = tree_reg.predict(housing)
tree_rmse = mean_squared_error(housing_labels, housing_predictions)**2

tree_rmse
```

When evaluated on the training data, this model has an RMSE of 0.0. An error of zero is a classic sign of *overfitting*: the model has learned the training data perfectly but will likely not generalize well to new data.

## 3. Better Evaluation Using K-Fold Cross-Validation
To get a more realistic performance estimate without touching the test set, we use **K-fold cross-validation**. This technique splits the training set into $k$ subsets (folds), then trains and evaluates the model $k$ times, using a different fold for evaluation each time and the other $k-1$ folds for training.

```python
from sklearn.model_selection import cross_val_score

tree_rmses = -cross_val_score(tree_reg, housing, housing_labels, scoring = "neg_root_mean_squared_error", cv = 10)
```

> [!warning]
> Scikit-Learn's cross validation features expect a utility function (greater is better) rather than a cost function (lower is better), so the scoring function is actually the opposite of the RMSE. It's a negative value, so we need to switch the sign of the output to get the RMSE scores.

Cross-validation shows the Decision Tree has a mean RMSE of about $68,778, which is much higher than 0 and even worse than the linear mode. This confirms severe overfitting.

## 4. Training a Random Forest Model
Let's try an **ensemble model**, `RandomForestRegressor`, which trains many Decision Trees and averages their predictions.

```python
from sklearn.ensemble import RandomForestRegressor

forest_reg = make_pipeline(preprocessing, 
							RandomForestRegressor(random_state=42))
forest_rmse = -cross_val_score(forest_reg, housing, housing_labels,
							scoring="neg_root_mean_squared_error", cv=10)
```

The cross-validation scores show a mean RMSE of about $48,920. This is significant improvement and makes Random Forest a promising model for this task. However, there is still some overfitting, as the training error is much lower than the validation error.

[CODE DEMO](https://github.com/wdangds/blog/blob/v4/content/static/notebooks/ml-app-in-sci-chapter-2-handbook.ipynb)
