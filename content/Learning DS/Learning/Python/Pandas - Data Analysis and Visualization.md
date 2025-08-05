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
```python
import micropip 
await micropip.install('pandas') # This is for Obsidian
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