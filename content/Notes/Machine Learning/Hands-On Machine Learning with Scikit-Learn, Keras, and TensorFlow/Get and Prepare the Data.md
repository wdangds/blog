---
title: Get and Prepare the Data
tags:
  - machine-learning
  - data-preparation
draft:
---
With the problem framed, the next step is to acquire and prepare the data. It's best to work with real-world data from repositories like [Kaggle.com](https://www.kaggle.com), [OpenML.org](https://www.openml.org), or the [UC Irvine Machine Learning Repository](https://archive.ics.uci.edu). In this project , we use the [California Housing Prices dataset](https://www.key2stats.com/data-set/view/1597).
## 1. Download the data
It is best practice to automate data fetching with a function. This makes the process reproducible and easy to update if the data changes.

The following function downloads and loads the housing data into a Pandas DataFrame:
```python
from pathlib import Path
import pandas as pd
import tarfile
import urllib.request

def load_housing_data():
	tarball_path = Path("datasets/housing.tgz")
	if not tarball_path.is_file():
		Path("datasets").mkdir(parents=True, exist_ok=True)
		url = "https://github.com/ageron/data/raw/main/housing.tgz"
		urllib.request.urlretrieve(url, tarball_path)
		with tarfile.open(tarball_path) as housing_tarball:
			housing_tarball.extractall(path="datasets")
	return pd.read_csv(Path("datasets/housing/housing.csv"))
	
housing = load_housing_data()	
```

## 2. Take a Quick Look at the Data Structure
Once the data is loaded, perform a preliminary inspection.

```python
housing.head()
```
Display the first five rows. Each row represents a district with 10 attributes: `longitude`, `latitude`, `housing_median_age`, `total_rooms`, `total_bedrooms`, `population`, `households`, `median_income`, `median_house_value`, and `ocean_proximity`.

```python
housing.info()
```
Provides a summary, including the number of entries (20,640), data types, and non-null counts. We can see `total_bedrooms` has 207 missing values.

```python
housing["ocean_proximity"].value_counts()
```
Shows that `ocean_proximity` is a categorical attribute with a limited number of unique values.

```python
housing.describe()
```
Gives a statistical summary of numerical attributes (count, mean, standard deviation, percentiles)

```python
housing.hist()
```
Plots a histogram for each numerical attribute, which helps reveal distributions, scaling issues, and capped values.

![[fig-hist.png]]

> [!observation] Observations from histograms
> `median_income` appears scaled and capped. `housing_median_age` and the target `median_house_value` are also capped, which could be a problem for the model. Many histograms are skewed right.

## 3. Create a Test Set
**Crucially, we must create a test set and set it aside *before* any deep data exploration**. This prevents **data snooping bias**, where we might spot patterns in the test data and build a model that is over optimistic about its performance or unseen data. The test set is typically 20% of the dataset.
```python
import numpy as np

def shuffle_and_split_data(data, test_ratio):
	shuffled_indices = np.random.permutation(len(data))
	test_set_size = int(len(data)*test_ratio)
	test_indices = shuffled_indices[:test_set_size]
	train_indices = shuffled_indices[test_set_size:]
	return data.iloc[train_indices], data.iloc[test_indices]
```

```python
train_set, test_set = shuffle_and_split_data(housing, 0.2)
print(len(train_set))
# Output: 16512
print(len(test_set))
# Output 4128
```
### a. Random Sampling
A simple approach is to randomly shuffle the data and split it. However, this generates a different test set each time we run it, which is not ideal. To ensure a stable split, we can either save the test set or use a fixed random seed (`np.random.seed(42)`)

A more robust solution is to use each instance's unique identifier to decide if it goes into the test set. This ensures the split remains consistent even when the dataset is updated.

```python
from zlib import crc32

def is_id_in_test_set(identifier, test_ratio):
	return crc32(np.int64(identifier)) < test_ratio*2**32
	
def split_data_with_id_hash(data, test_ratio, id_column):
	ids = data[id_column]
	in_test_set = ids.apply(lambda id_: is_id_in_test_set(id_, test_ratio))
	return data.loc[~in_test_set], data.loc[in_test_set]
```

The housing dataset lacks a unique ID, so we can use the row index or create one from stable features like latitude and longitude.

```python
housing_with_id = housing.reset_index() # adds an `index` column
train_set, test_set = split_data_with_id_hash(housing_with_id, 0.2, "index")
```

Scikit-Learn provides `train_test_split` for this purpose:

```python
from sklearn.model_selection import train_test_split

train_set, test_set = train_test_split(housing, test_size=0.2, random_state=42)
```

### b. Stratified Sampling
If the dataset is small, random sampling can introduce sampling bias. **Stratified sampling** ensures the test set is representative of the whole population by dividing the data into homogeneous subgroups (strata) and sampling the correct number of instances from each.

For the housing dataset, `median_income` is a key predictor. To perform stratified sampling on it, we first create an income category attribute.

```python
housing["income_cat"] = pd.cut(housing["median_income"],
							bins=[0., 1.5, 3.0, 4.5, 6, np.inf],
							labels=[1, 2, 3, 4, 5])
```

![[fig-hist-income-cat.png]]
Then, we can use `train_test_split` with the `stratify` argument:

```python
strat_train_set, strat_test_set = train_test_split(
	housing, test_size=0.2, stratify=housing["income_cat"], random_state=42)
```

This ensures the income category proportions in the test set are nearly identical to the full dataset, unlike a purely random split. Finally, the temporary `income_cat` column should be remove.

```python
for set_ in (strat_train_set, strat_test_set):
	set_.drop("income_cat", axis=1, inplace=True)
```

[CODE DEMO](https://github.com/wdangds/blog/blob/v4/content/static/notebooks/ml-app-in-sci-chapter-2-handbook.ipynb)