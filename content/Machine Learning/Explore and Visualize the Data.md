---
title: Explore and Visualize the Data
draft:
tags:
  - data-visualization
  - "#correlation-matrix"
  - "#feature-engineering"
---
Now, working only with the training set (`strat_train_set`), we can perform a deeper exploration.

Since we're going to experiment with various transformations of the full training set, we should make a copy of the original so we can revert to it afterwards.

```python
housing = strat_train_set.copy()
```
## 1. Visualizing Geographical Data
since the data has latitude and longitude, a scatterplot is a great way to visualize it.
- Setting `alpha=0.2` helps visualize data density, highlighting areas like the Bay Area and Los Angeles.
- We can also visualize housing prices on the map. In the plot below, the radius of each circle represents populations (`s`), and the color represents the median house value (`c`). This visualization confirms that prices are related to location (e.g., near the ocean) and population density.
```python
housing.plot(kind="scatter", x="longitude", y="latitude", grid=True,
			s=housing["population"]/100, label="population",
			c="median_house_value", cmap="jet", colorbar=True,
			legend=True, sharex=False, alpha=0.2, figsize=(10,7))
```

![[fig-lat-lon.png]]

## 2. Look for Correlations
The **standard correlation coefficient (Pearson's r)** measures linear relationships between attributes. It ranges from -1 (strong negative correlation) to +1 (strong positive correlation), with 0 indicating no linear correlation.

Computes the correlation matrix:

```python
corr_matrix = housing.corr(numeric_only=True)
```

Shows the correlation of each attribute with the median house value. `median_income` has the strongest positive correlation (0.69).

```python
corr_matrix["median_house_value"].sort_values(ascending=False)
```

The Pandas `scatter_matrix()` function is useful for visualizing correlations between several promising attributes.

```python
from pandas.plotting import scatter_matrx

attributes = ["median_house_value", "median_income", "total_rooms", "housing_median_age"]
scatter_matrix(housing[attributes], figsize=(12,8))
plt.show()
```

![[fig-scatter-matrix.png]]

A closer look at the scatterplot for `median_income` versus `median_house_value` confirms a strong positive correlation and also reveals data quirks like the price cap at $500,000.

```python
housing.plot(kind="scatter", x="median_income", y="median_house_value",
			alpha=0.1, grid=True)
```

![[fig-scatter-median-income-median-house.png]]

> [!warning]
> The correlation coefficient only measures *linear* relationships and can miss nonlinear ones entirely.

## 3. Experiment with Attribute Combinations
Before preparing the data for ML models, it's wise to create new features by combining existing ones.

```python
housing["rooms_per_house"] = housing["total_rooms"]/housing["households"]
housing["bedrooms_ratio"] = housing["total_bedrooms"]/housing["total_rooms"]
housing["people_per_house"]= housing["population"]/housing["households"]
```

After creating these, the new `bedrooms_ratio` attribute shows a stronger negative correlation with `median_house_value` than either `total_rooms` or `total_bedrooms` alone, indicating that houses with a lower bedroom-to-room ratio tend to be more expensive.

```python
corr_matrix = housing.corr(numeric_only=True)
corr_matrix["median_house_value"].sort_values(ascending=False)
```

[CODE DEMO](https://github.com/wdangds/blog/blob/v4/content/static/notebooks/ml-app-in-sci-chapter-2-handbook.ipynb)