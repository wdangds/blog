---
title: Fine-Tune Your Model
draft:
tags:
  - machine-learning
  - fine-tuning
  - grid-search
---
Now that we have a promising model, the next step is to fine-tune its hyperparameters.

## 1. Grid Search
A common technique is **grid search**. We provide a "grid" of hyperparameter values to try, and Scikit-Learn's `GridSearchCV` evaluates all possible combinations using cross-validation.

```python
from sklearn.model_selection import GridSearchCV

full_pipeline = Pipeline([
	("preprocessing", preprocessing),
	("random_forest", RandomForestRegressor(random_state=42))
])

param_grid = [
	{'preprocessing__geo__n_clusters': [6, 8, 10],
	'random_forest__max_features': [4, 5, 8]},
	{'preprocessing__geo_n_clusters': [10, 14],
	'random_forest__max_features': [5, 8, 10]}
]

grid_search = GridSearchCV(full_pipeline, param_grid, cv=3,
				scoring='neg_root_mean_squared_error')
grid_search.fit(housing, housing_labels)
```

> [!tip]
> Wrapping preprocessing steps in a Scikit-Learn pipeline allows us to tune the preprocessing hyperparameters along with the model hyperparameters. This is a good thing since they often interact. For examples, increasing `n_clusters` requires increasing `max_features` as well. If fitting the pipeline transformers is computationally expensive, we can set the pipeline's memory hyperparameter to the path of a caching directory: when we first fit the pipeline, Scikit-Learn will save the fitted transformers to this directory. If we then fit the pipeline again with the same hyperparameters, Scikit-Learn will just load the cached transformers.

After the search, we can access the best combination of parameters with `grid_search.best_params_` and the best estimator with `grid_search.best_estimator_`. 
```python
grid_search.best_params_
# {'preprocessing__geo__n_clusters': 14, 'random_forest__max_features': 5}
```

In this case, the best model achieved an RMSE of $43,522, an improvement over the default settings.

## 2. Randomized Search
When the hyperparameter search space is large, `RandomizedSearchCV` is often more efficient. Instead of trying all combinations, it evaluates a fixed number of combinations, selecting random values for each hyperparameters from a specified distribution at each iteration. This allows for a much broader exploration of the search space in the same amount of time.

```python
from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint

param_distribs = {'preprocessing__geo__n_clusters': randint(low=3, high=50),
	'random_forest__max_features': randint(low=2, high=20)}

rnd_search = RandomizedSearchCV(
	full_pipeline, param_distributions=param_distribs, n_iter=10, cv=3,
	scoring='neg_root_mean_squared_error', random_state=42)
```

## 3. Analyze the Best Models and Their Errors
Inspecting the best models can provide valuable insights. For example, a `RandomForestRegressor` can indicate the relative importance of each feature.

```python
final_model = grid_search.best_estimator_
feature_importances = final_model["random_forest"].feature_importances_

sorted(zip(feature_importances,
		final_model["preprocessing"].get_feature_names_out()),
		reverse=True)
```

The most important features turn out to be `log__median_income`, `cat__ocean_proximity_INLAND`, and the `people_per_house__ratio`. This analysis might lead us to drop less useful features.

> [!tip]
> The `sklearn.feature_selection.SelectFromModel` transformer can automatically drop the least useful features for us: when we fit it, it trains a model (typically a random forest), looks at its `feature_importances_` attribute, and selects the most useful features. Then when we call `transform()`, it drops the other features.

[CODE DEMO](https://github.com/wdangds/blog/blob/v4/content/static/notebooks/ml-app-in-sci-chapter-2-handbook.ipynb)
