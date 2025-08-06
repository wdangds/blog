---
title: Pandas - Data Analysis and Visualization
draft: false
tags:
  - Python
  - Pandas
---
## I. Introduction to Pandas
### 1. What is Pandas?
Pandas is a foundational Python library for data analysis and manipulation. It is built on NumPy and provides easy-to-use data structures and robust data analysis tools. Pandas is highly valued for its speed, power, flexibility, and open-source nature. It excels at handling tabular data, resembling structures like SQL tables or Excel spreadsheets.

**Key characteristics of Pandas:**
![[Key-characteristic-Panda.svg]]
**Applications of Pandas span various fields:**
![[Application-Pandas.svg]]
- **Data Science**: used for data preprocessing, exploratory data analysis (EDA), and feature extraction.
- **Machine Learning (ML)**: crucial for data normalization and transforming input data for machine learning models.
- **Business and Financial Analysis**: applied for analyzing revenue, costs, profits, and customer segmentation.
- **Big Data / Log Processing**: Essential for cleaning, filtering, and converting data from large systems.
- **Data Visualization**: Integrates well with libraries like Matplotlib and Seaborn to create charts and represent data visually.
- **Automation**: automates the processing of Excel and CSV files for routine tasks like report generation.
### 2. Installation and Import
Before using Pandas, we need to install it. It's a third-party library, not part of Python's standard distribution.
- **Installation**: Open the terminal or command prompt and run:
```cmd
pip install pandas
```
- **Import:** In the Python script or Jupyter Notebook, import Pandas, typically with the alias `pd`:
```python
import pandas as pd
```
- **Check version**: To verify the installed Pandas version:
```python
print(pd.__version__)
```

- **Documentation**: Comprehensive and detailed official documentation is available at https://pandas.pydata.org/docs/
### 3. Key Data Structures
Pandas is built upon two core data structures: `Series` and `DataFrame`.
#### a. Series
![[Series.svg]]
If no index is specified during creation, Pandas automatically generates a default integer index starting from 0.
- *Series creation with default index:*
```python
data = pd.Series([5, 7, 5, 1,6], name = 'num_dropped')
print(data)
```
- *Series creation with custom index*:
```python
data = pd.Series(['C++','Golang', 'Java', 'Python', 'Swift'],
				index = list('CGJPS'),
				name = 'Programming Language')
print(data)
```
#### b. DataFrame:
- A **two-dimensional labeled data structure** with columns of potentially different types.
- It can be visualized as a **table** consisting of multiple rows and columns, where **each column is essentially a Pandas Series**.
- The DataFrame is the **most important and frequently used** data structure in Pandas.
*DataFrame creation:*
```python
df = pd.read_csv("./advertising_simple.csv")
print(df)
```
![[Df-example.svg]]
- **Common data types for DataFrame columns include**: `int64` (integers), `float64` (floating-point numbers), `object` (strings), `bool` (Boolean values), `datetime64[ns]` (timestamps), and `category` (categorical data). DataFrames support powerful operations like filtering, conditional operations, statistics, grouping, and table joins.
### 4. Basic Data Operations
Pandas provides a rich set of functions for common data operations.
#### a. Reading and Writing Data
- **Reading CSV files**: The most common format in data analysis
```python
df = pd.read_csv('data.csv')
```
We can customize parameters like `sep` (separator), `encoding` (file encoding), `header`, and `names` (column names).
- **Reading JSON files**:
```python
df = pd.read_json('data.json')
```
- **Writing data to files**:
```python
df.to_csv('output.csv', index = False)
df.to_json('output.json', orient = 'records')
```
Pandas also supports Excel (`read_excel()`, `to_excel()`), SQL (`read_sql()`, `to_sql()`) and clipboard (`read_clipboard()`).
#### b. Viewing and Exploring Data
These functions will help us get a quick overview of our dataset's structure, size, data types, distribution, and missing data status.
- `df.head(n=5)`: Display the **first `n` rows** (default is 5). Useful for a quick check of data and structure.
- `df.tail(n=5)`: Display the **last `n` rows** (default is 5). Useful for checking records at the end of the dataset.
- `len(df)`: Returns the **number of rows** in the DataFrame.
- `df.shape`: Returns a tuple `(number of rows, number of columns)`.
- `df.index`: Show the **index object** (e.g., integer index, datetime index).
- `df.columns`: Return a **list of column names**.
- `df.dtypes`: Display the **data type of each column** (e.g., `int64`, `object`, `float64`).
- `df.sample(n)`: Selects **`n` random rows** from the DataFrame.
- `df['Column'].unique()`: Returns **unique values** within a specified column.
- `df['Column'].value_counts()`: Returns the **frequency of occurrence** for each unique value in a column.
- `df.isnull().sum()`: Checks for and **sums the number of missing (null) values** per column.
**Important overview function**:
- `df.info()`: Provides a **summary of the DataFrame**, including the number of rows, column names, data types, non-null counts, and memory usage. It's often one of the first functions to call after loading data.
- `df.describe()`: Generates **descriptive statistics for numerical columns**, including count, mean, standard deviation, minimum, maximum, and quartiles (25%, 50%, 75%).
#### c. Accessing Data (Indexing and Slicing)
Pandas offers powerful methods to access specific parts of our data.
- **Series Access**: we can access data in a Series using its index label, similar to a dictionary.
```python
s['b']
```
- **DataFrame Slicing**: to select multiple rows:
```python
df[1:]
```
- `loc[]`: **Access by Label**
Use to retrieve data based on **labels of rows and columns**. Labels can be string names or defined index value.
```python
df.loc['row1', 'columns1'] # row with label row1, column with label columns1
df.loc[0:3, ['name', 'age']] # row 0-3, column 'name' and 'age'
```
- `iloc[]`: **Access by Integer Position**
Used to retrieve data based on **integer positions (0-based index)** of rows and columns. Works like Python slicing.
```python
df.iloc[0, 1] # row index 0 column index 1
df.iloc[0:3, 0:2] # row index 0-2, column index 0-1
```
- `at[]`: **Fast Access by Label for Single Value**
Optimized for **quick retrieval of a single element using labels**. More efficient than `.loc[]` for single value access.
```python
df.at['row1', 'column1'] # get value at row 'row1' column 'column1'
```
- `iat[]`: **Fast Access by Integer Position for Single Value**
A high-performance version of `.iloc[]` for **single element retrieval using integer positions**.
```python
df.iat[0, 1] # value at row 0 and column 1 (index)
```
#### d. Grouping Data (`groupby()`)
`groupby()` is a powerful method for **grouping records based on one or more criteria** (columns) to perform calculations on each group. It follows a **split-apply-combine** strategy: data is *split* into groups, a function is *applied* to each group, and results are combined.
```python
# Get the mean salary for each department
df.groupby('department')['salary'].mean() 
```
```python
# Sum of salary of each gender in each department
df.groupby(['department', 'gender'])['salary'].sum()
```
`groupby()` can be combined with various statistical functions like `.mean()`, `.sum()`, `.count()`, `.min()`, `.max()`, and `.agg()` (to apply multiple functions simultaneously).
#### e. Sorting Data (`sort_values()`)
The `sort_values()` method allows us to **sort DataFrame rows based on the values of one or more columns**, in either ascending or descending order.
```python
# Sort by one column, ascending
df.sort_values('salary')
```
```python
#Sort by one column, descending
df.sort_values('salary', ascending=False)
```
```python
# Sort by multiple columns with mixed order:
df.sort_values(['department', 'salary'], ascending=[True, False])
```
For Series, `data.sort_index(inplace=True)` can be used to sort by index labels.

#### f. Applying Custom Functions (`apply()`)
The `apply()` method provides **flexibility to apply any custom function to elements along an axis** (rows or columns) of a DataFrame or Series. It's especially useful for complex operations not directly available in Pandas.
```python
# Apply a lambda function to a column
df['score'].apply(lambda x: x / 100 * 10)
```
```python
# Apply a lambda function row wise
df.apply(lambda row: row['math'] + row['english'], axis=1)
```
We can pass any predefined custom function to `apply()`.


