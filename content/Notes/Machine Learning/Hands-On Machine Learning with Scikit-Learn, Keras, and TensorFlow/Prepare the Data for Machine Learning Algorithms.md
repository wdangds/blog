---
title: Prepare the Data for Machine Learning Algorithms
tags:
  - data-preparation
  - data-cleaning
  - machine-learning
---
It's time to write functions to prepare the data. This makes the transformations reproducible and reusable. First, separate the predictors and labels.

```python
housing = strat_train_set.drop("median_house_value", axis=1)
housing_labels = strat_train_set["median_house_value"].copy()
```

## 1. Scikit-Learn Design Principles
Scikit-Learn has a *consistent* and *well-designed API* with several key concepts:
- **Estimators**: Objects that can learn parameters from data (e.g., `SimpleImputer`). They have `fit()` method.
- **Transformers**: Estimators that can also transform a dataset. They have a `transform()` method and a convenient `fit_transform()` method.
- **Predictors**: Estimators that can make predictions on new data. They have a `predict()` method (e.g., `LinearRegression`)
- **Inspection**: Hyperparameters are public instance variables (e.g., `imputer.strategy`), while learned parameters have a trailing underscore (e.g., `imputer.statistics_`)
- **Composition**: Scikit-Learn provides tools like `Pipeline` to chain transformers and estimators together.
## 2. Data Cleaning
Most ML algorithms cannot handle missing values. for the `total_bedrooms` attribute, we have three options:
1. Remove the districts with missing values (`dropna()`)
2. Remove the entire attribute (`drop()`)
3. Fill the missing values (*imputation*) with the mean, median, or mode (`fillna()`)

Option 3 is often preferred. We can use Scikit-Learn's `SimpleImputer` to handle this. It learns the median from the training data and can then be used to fill missing values in the training set, validation set, and test set.

```python
from sklearn.impute import SimpleImputer
imputer = SimpleImputer(strategy="median")

#Median can only be computed on numerical attributes
housing_num = housing.select_dtypes(include=[np.number])

imputer.fit(housing_num) # Learns the medians
X = imputer.transform(housing_num) # Transforms the data
```

> [!tip] 
> There are also more powerful imputers available in the `sklearn.impute` package (both for numerical features only):
> - `KNNImputer` replaces each missing value with the mean of the $k$-nearest neighbors' values for that feature. The distance is based on all the available features.
> - `IterativeImputer` trains a regression model per feature to predict the missing values based on all the other available features. It then trains the model again on the updated data, and repeats the process several times, improving the models and the replacement values at each iteration.

## 3. Handling Text and Categorical Attributes
The `ocean_proximity` attribute is categorical. Since most ML algorithms prefer numbers, we must convert this text attribute.
- **Original Encoding**: `OrdinalEncoder` converts categories to integers (e.g., 0, 1, 2). This is problematic if there is no natural order, as ML algorithms will assume nearby values are more similar.
- **One-Hot Encoding**: A better solution for nominal categories is one-hot encoding, which creates one binary attribute per category. Scikit-Learn's `OneHotEncoder` does this efficiently, often returning a memory-saving SciPy sparse matrix.

```python
from sklearn.preprocessing import OneHotEncoder

housing_cat = housing[["ocean_proximity"]]

cat_encoder = OneHotEncoder()
housing_cat_1hot = cat_encoder.fit_transform(housing_cat)
```

> [!tip]
> If a categorical attribute has a large number of possible categories (e.g., country, code, profession, species), then one-hot encoding will result in a large number of input feature. This may slow down training and degrade performance. If this happens, we may want to replace the categorical input with useful numerical features related to the categories.

## 4. Feature Scaling and Transformation
ML algorithms generally perform poorly when numerical attributes have very different scales. 

> [!warning]
> It's crucial to fit scalers only on the training data.

Two common scaling methods are:
- **Min-Max Scaling (Normalization)**: Rescales values to a range of 0-1. Done using `MinMaxScaler`.
$$
\mathbf{X}^{(i)}= \frac{\mathbf{X}-\min(\mathbf{X})}{\max(\mathbf{X})-\min(\mathbf{X})}
$$

```python
from sklearn.preprocessing import MinMaxScaler

min_max_scaler = MinMaxScaler(feature_range=(-1, 1))
housing_num_min_max_scaled = min_max_scaler.fit_transform(housing_num)
```

- **Standardization**: Values are not bound to a specific range, but it's less affected by outliers. Done using `StandardScaler`.
$$
\mathbf{X^{(i)}}=\frac{\mathbf{X}-\overline{X}}{s}
$$

```python
from sklearn.preprocessing import StandardScaler

std_scaler = StandardScaler()
housing_num_std_scaled = std_scaler.fit_transform(housing_num)
```

> [!tip]
> For features with heavy-tailed distributions (where values far from the mean are not rare), it's beneficial to first transform them to be more symmetrical, for instance, by taking their logarithm or square root.
> 
> ![[fig-log-transform.png]]

## 5. Transformation Pipelines
Since there are many transformation steps, Scikit-Learn's `Pipeline` class is extremely useful for chaining them in the correct order.

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler

num_pipeline = Pipeline([
	("impute", SimpleImputer(strategy="median")),
	("standardize", StandardScaler())
])
```
To handle different column types (numerical, categorical) simultaneously, use `ColumnTransformer`. It applies different pipelines to different subsets of columns and concatenates the results.
```python
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import make_pipeline

num_attribs = ["longtitude", "latitude", "housing_median_age", "total_rooms", "total_bedrooms", "population", "households", "median_income"]
cat_attribs = ["ocean_proximity"]

cat_pipeline = make_pipeline(
	SimpleImputer(strategy="most_frequent"),
	OneHotEncoder(handle_unknown="ignore"))
	
preprocessing = ColumnTransformer([
	("num", num_pipeline, num_attribs),
	("cat", cat_pipeline, cat_attribs),
])
```

> [!tip]
> Instead of using a transformer, we can specify the string "drop" if we want the columns to be dropped, or we can specify "passthrough" if we want the columns to be left untouched. By default, the remaining columns (i.e., the ones that were not listed) will be dropped, but we can set the remainder hyperparameter to any transformer (or to "passthrough") if we want these columns to be handled differently.

```python
housing_prepared = preprocessing.fit_transform(housing)
```

> [!note]
> The `OneHotEncoder` returns a sparse matrix and the `num_pipeline` returns a dense matrix. When there is such a mix of sparse and dense matrices, the ColumnTransformer estimates the density of the final matrix (i.e., the ratio of nonzero cells), and it returns a sparse matrix if the density is lower than a given threshold (by default, `sparse_threshold=0.3`).

This create a single preprocessing pipeline that handles all data preparation steps, making the workflow clean and efficient.

[CODE DEMO](https://github.com/wdangds/blog/blob/v4/content/static/notebooks/ml-app-in-sci-chapter-2-handbook.ipynb)

