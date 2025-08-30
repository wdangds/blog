---
title: Introduction to Numerical Computing with NumPy, Linear Algebra, and Applications
draft: true
tags:
  - Python
  - NumPy
  - linear-algebra
---
 ## I. Introduction to NumPy
#### 1. What is NumPy?
NumPy (Numerical Python) is a **versatile Python library** specifically designed to support **numerical computing**. It is an open-source library that provides a powerful data structure for efficient mathematical operations.
#### 2. Why use NumPy?
- **Faster Execution**: NumPy is highly optimized for complex mathematical and statistical operations, making it significantly faster (e.g., 50 times faster than iterating over native Python lists using loops). This speed is achieved through its underlying implementation, which is often writing in C or Fortran.
- **Efficient Memory Usage**: NumPy arrays are more memory-efficient than Python lists, especially for large datasets, because they store elements of the same data type in contiguous memory blocks.
- **Data Type for Common Libraries:** NumPy serves as a fundamental data type for many other popular Python libraries used in scientific computing, data analysis, machine learning, and deep learning, such as Pandas, SciPy, and Scikit-learn.
- **Vectorization**: NumPy operations are inherently vectorized, meaning they operate on entire arrays rather than individual elements. This eliminates the need for explicit Python loos, leading to much faster calculations.
#### 3. Core Data Structure: N-Dimensional Arrays (ndarray)
- **Multi-dimensional Arrays**: NumPy's primary data structure is the `ndarray`, which stands for N-dimensional array. These arrays can have any number of dimensions, allowing them to represent various types of data such as 1D arrays (vectors), 2D arrays (matrices), and 3D arrays (e.g.,, RGB images).
- **Homogeneous Data**: Unlike Python lists, NumPy arrays are **homogeneous**, meaning all "items" or elements within an array must be of the **same data type** (e.g., all integers, all floats, or all booleans). This characteristics is key to their performance and memory efficiency.
## II. Creating NumPy Arrays
NumPy offers various functions to create arrays based on different needs:
- **From Existing Python Lists/Tuples**: `np.array(object)` creates an array from a list, tuple, or other data types.
	- Example: 
```python
import numpy as np

arr = np.array([1,3,4,7,9])
```
- **Arrays with Specific Values**
  - **Zeros:** `np.zeros(shape)` creates an array of 0s.

    ```python
    arr = np.zeros(5)  # 1D array of five zeros
    ```

  - **Ones:** `np.ones(shape)` creates an array of 1s.

    ```python
    arr = np.ones((3, 3))  # 3x3 ones
    ```

  - **Full:** `np.full(shape, fill_value)` fills with a value.

    ```python
    arr = np.full((2, 3), 7)  # 2x3 sevens
    ```

- **Arrays with Sequential Values**: `np.arange(start, stop, step)` creates an array with evenly spaced values within a defined interval. The `stop` value is exclusive.

```python
	arr = np.arange(0, 5) # creates a ndarray([0,1,2,3,4])
```
- **Identity Matrix**: `np.eye(N)` creates a 2D identity matrix (square matrix) where diagonal elements are 1 and others are 0.

```python
	arr = np.eye(3) # create a 3x3 identity matrix.
```

- **Random Arrays:** The `np.random` module provides functions for creating arrays with random values.
	- `np.random.rand(d0, d1, ..., dn)` creates an array with random values between 0 and 1.
	- `np.random.randint(low, high, size)` creates an array with random integers within a specified range (`low` in inclusive, `high` is exclusive).
	- Random seed can be set (e.g., `np.random.seed(2025)`) to ensure reproducible results.
	```python
	arr = np.random.rand(3,2)
	# array([[ 0.14022471,  0.96360618],  
    #        [ 0.37601032,  0.25528411],  
    #        [ 0.49313049,  0.94909878]]) 

	arr = np.random.ranint(5, size = (2,4))
	# array([[4, 0, 2, 1], 
    #        [3, 2, 2, 0]])
	```

## III. NumPy Array Attributes
NumPy array attributes provide essential information about the array's structure and contents:
- `ndim`: The number of dimensions (axes) of the array.
	```python
	x = np.array([1,2,3]) # 1D array
	x.ndim # 1

	y = np.zeros((2,3,4)) # 3D array
	y.ndim # 3
	```
- `shape`: A tuple indicating the size of the array in each dimension.
	```python
	np.shape(np.eye(3)) # size of the identity matrix
	# >> (3,3)
	np.shape([[1,3]]) # >> (1, 2)
	np.shape([0]) # >> (1,)
	np.shape(0) # >> ()
	```
- `size`: The total number of elements in the array. Equal to `np.prod(a.shape)`, i.e., the product of the array's dimensions.
	```Python
	x = np.zeros((3, 5, 2))
	x.size # 30 (3 x 5 x 2)
	np.prod(x.shape) # 30
	```
- `dtype`: The data type of the elements in the array (e.g., `int64`, `float64`, `bool`)
- `itemsize`: The size in bytes of each element in the array.
	```Python
	x = np.array([1,2,3], dtype = np.float64)
	x.itemsize # >> 8

	x = np.array([1,2,3], dtype = np.complex128)
	x.itemsize # >> 16
	```
- `data`: A buffer object pointing to the start of the array's data in memory.
## IV. Accessing and Manipulating Arrays (Indexing, Slicing, Reshaping)
### 1. Indexing
Indexing allows access to individual elements using their positions.
- For 1D arrays, elements are accessed using a single index (e.g., `arr[0]` for the first element, `arr[-1]` for the last element).
- For 2D arrays, elements are accessed using row and column indices (e.g., `arr[row_index][col_index]`).
### 2. Slicing
Slicing extracts a portion of an array using a range of indices, specified by `array[start:stop:step]`
- `start`: The starting index (inclusive, default 0)
- `stop`: The ending index (exclusive, default `len(array)`)
- `step`: The increment between indices (default 1)
```python
arr = np.array([3, 4, 6, 1, 4])
arr[1:4] # >> np.array([4, 6, 1]) for element from index 1 to 3
arr[::2] # >> np.array([3, 6, 4]) for element with even indices
```
### 3. Changing Array Shape
#### a. Adding Dimensions:
- `np.newaxis` or `None`: Used with slicing to insert a new dimension of size 1 at a specified position.
	```Python
	arr = np.arange(4)
	arr.shape # >> (4,)

	# make it as a row vector by inserting an axis along first dimension
	row_vec = arr[np.newaxis, :] # arr[None, :]
	row_vec.shape # >> (1, 4)

	# make it as a column vector by inserting an axis along second dimension
	col_vec = arr[:, np.newaxis] # arr[:, None]
	col_vec.shape # >> (4, 1)
	```
- `np.expand_dims(arr, axis)`: Explicitly adds new dimensions to an array.
	```Python
	x = np.array([1, 2])
	x.shape # >> (2,)

	y = np.expand_dims(x, axis = 0) # >> array([[1, 2]])
	y.shape # >> (1, 2) 
	# is equivalent to x[np.newaxis, :]

	y = np.expand_dims(x, axis = 1) # >> array([[1],
									#	        [2]])
	y.shape # >> (2,1)
	# is equivalent to x[:, np.newaxis]
	```
#### b. Reshaping
`np.reshape(input, newshape)` changes the array's shape without altering its data. The total number of elements *must remain the same*.
```python
a = np.arange(6).reshape((3, 2))
# array([[0,1],
#       [2,3],
#       [4, 5]])
```
#### c. Flattening
Transforms a multi-dimensional array into a 1D array. This can be achieved using `reshape(-1)` or the `flatten()` method.
```python
a = np.array([[1,2],[3,4]])
a.flatten()
## >>> array([1, 2, 3, 4])
```
### 4. Concatenating Arrays
NumPy provides functions to join arrays along different axes.
- **Horizontally**:
	- `np.hstack((arr1, arr2))`: Stacks arrays in sequence horizontally (column-wise). Requires arrays to have the same number of rows.
		```python
		a = np.array((1, 2, 3))
		b = np.array((4, 5, 6))
		np.hstack((a, b))  # array([1, 2, 3, 4, 5, 6])

		a = np.array([[1], [2], [3]])
		b = np.array([[4], [5], [6]])
		np.hstack((a, b)) # array([[1, 4],
		                  #        [2, 5],
		                  #        [3, 6]])
		```
    - `np.concatenate((arr1, arr2), axis=1)`: General function for concatenation, `axis=1` for horizontal stacking.
		```python
		a = np.array([[1, 2], [3, 4]])
		b = np.array([[5, 6]])

		np.concatenate((a, b.T), axis = 1)
		# array([[1, 2, 5],
		#        [3, 4, 6]])

		np.concatenate((a, b), axis = None)
		# array([1, 2, 3, 4, 5, 6])
		```
- **Vertically**:
	- `np.vstack((arr1, arr2))`: Stacks arrays in sequence vertically (row-wise). Requires arrays to have the same number of columns.
		```python
		a = np.array([1, 2, 3])
		b = np.array([4, 5, 6])
		np.vstack((a, b)) # array([[1, 2, 3],
						  #        [4, 5, 6]])
		```
	- `np.concatenate((arr1, arr2), axis=0)`: General function, `axis =0` for vertical stacking.
		```python
		a = np.array([[1, 2], [3, 4]])
		b = np.array([[5, 6]])
		
		np.concatenate((a, b), axis = 0)
		# array([[1, 2],
		#        [3, 4],
		#        [5, 6]])
		```
	- `np.r_[[arr1, arr2]]`: A shorthand for vertical stacking.
### 5. Repeating/Tiling Arrays
- `np.repeat(data, repeats):`Repeats each element of an array a specified number of times.
	```python 
	np.repeat(3, 4) # array([3, 3, 3, 3])

	x = np.array([[1,2], [3,4]])
	np.repeat(x, 2) # array([1, 1, 2, 2, 3, 3, 4, 4])

	np.repeat(x, 3, axis = 1) # array([[1, 1, 1, 2, 2, 2],
	                        #         [3, 3, 3, 4, 4, 4]])
	```
- `np.tile(data, reps)`: Repeats the entire array a specified number of times.
	```python
	a = np.array([0, 1, 2])
	np.tile(a, 2) # array([0, 1, 2, 0, 1, 2])
	```
### 6. Finding/Replacing Elements
#### a. Conditional Selection/Finding Elements
- `np.where(condition)`: Returns indices of elements satisfying a condition.
	```python
	a = np.arange(10)
	np.where(a<5) # array([0, 1, 2, 3, 4])
	```
- **Boolean Indexing**: Selects elements where a boolean array (result of a condition) is True.
	- *Example:* `data[data%2 == 1]` to filter odd number
#### b. Replacing Elements
- Elements can be replaced by assigning new values using boolean indexing (e.g., `data[data%2 == 1] = -1`)
- `np.where(condition, x, y):` Returns elements chosen from `x` or `y` depending on `condition`
	```python
	a = np.arange(10)
	np.where(a%2==0, a, 0) # array([0, 0, 2, 0, 4, 0, 6, 0, 8, 0, 9])
	```
#### c. Max/Min Values
`np.max(array, axis)`, `np.min(array, axis)` find the maximum/minimum values, potentially along a specified axis
```python
a = np.arange(4).reshape((2,2)) # array([[0, 1],
                                #       [2, 3]])
np.max(a)           # 3: Maximum of the flattened array

np.max(a, axis=0)   # array([2, 3]): Maxima along the first axis

np.max(a, axis=1)   # array([1, 3]): Maxima along the second axis
```
#### d. Indices of Max/Min
`np.argmax(array, axis)`, `np.argmin(array, axis)` return the indices of the maximum/minimum values.
```python
a = np.arange(6).reshape(2,3) + 10 # array([[10, 11, 12],
                                  #        [13, 14, 15]])
np.argmax(a) # 5

np.argmax(a, axis=0) # array([1, 1, 1])

np.argmax(a, axis=1) # array([2, 2])
```
#### e. Sorting
`np.sort(array, axis)` sorts elements in ascending order, along a specified axis or flattened. For descending order, `arr[::-1]` can be used after `arr.sort()`.
```python
a = np.array([[1,4], [3,1]])
a.sort(axis=1)  # array([[1, 4],
                #        [1, 3]])
a.sort(axis=0)  # array([[1, 3],
                #        [1, 4]])
```
#### f. Common Elements:
`np.intersect1d(arr1, arr2)` finds common unique elements between two 1D arrays.
```python
np.intersect1d([1, 3, 4, 3], [3, 1, 2, 1])
# array([1, 3])
```
#### g. Unique Elements
`np.unique(data)` returns the unique elements of an array.
```python
np.unique([1, 1, 2, 2, 3, 3]) # array([1, 2, 3])
```
#### h. Difference of Elements
`np.setdiff1d(arr1, arr2)` returns elements in `arr1` that are not in `arr2`.
```python
a = np.array([1, 2, 3, 2, 4, 1])
b = np.array([3, 4, 5, 6])
np.setdiff1d(a, b)  # array([1, 2])
```
#### g. Swapping/Reversing Axes
- **Swapping Columns:** `data[:, [col_idx1, col_idx2,...]]`
- **Swapping Rows** `data[[row_idx1, row_idx2,...], :]`
- **Reversing Columns:** `data[:, ::-1]`
- **Reversing Rows**: `data[::-1, :]`
## V. Fundamental Linear Algebra Operations with NumPy
### 1. Vectors and Matrices: Definitions and Representations
- **Vectors**: Mathematically defined as a tuple of `n` numbers `v = (v1, v2, ..., vn)`. In NumPy, a vector is typically, represented as a **1D array**.
- **Matrices:** A 2D data structure with `m` rows and `n` columns, represented by a capital letter (e.g., $A \in \mathbb{R}^{m\times n}$). In NumPy, a matrix is a **2D array**.
### 2. Basic Element-wise Operations
These operations apply to corresponding elements of arrays, requiring the arrays to be of compatible shapes (often the same dimensions or allowing for broadcasting).
- **Addition:** `arr1 + arr2` or `np.add(arr1, arr2)`
	```python
	x1 = np.arange(9.0).reshape((3, 3))
	x2 = np.arange(3.0)
	np.add(x1, x2)
	>> array([[  0.,   2.,   4.],
          	  [  3.,   5.,   7.],
          	  [  6.,   8.,  10.]])
	```
- **Subtraction:** `arr1 - arr2` or `np.subtract(arr1, arr2)`
	```python
	x1 = np.arange(9.0).reshape((3, 3))
	x2 = np.arange(3.0)
	np.subtract(x1, x2)
    >> array([[ 0.,  0.,  0.],
	          [ 3.,  3.,  3.],
              [ 6.,  6.,  6.]])
    ```
- **Multiplication (Hadamard Product)**: Element-wise product `arr1 * arr2` or `np.multiply(arr1, arr2)`
	```python
	x1 = np.arange(9.0).reshape((3, 3))
	x2 = np.arange(3.0)
	np.multiply(x1, x2)
    >> array([[  0.,   1.,   4.],
         	  [  0.,   4.,  10.],
       	      [  0.,   7.,  16.]])
	```
-  **Division (Hadamard Division)**: Element-wise division `arr1/arr2` or `np.divide(arr1, arr2)`
	```python
	x1 = np.arange(9.0).reshape((3, 3))
	x2 = np.arange(3.0)
	np.divide(x1, x2)
	>> array([[nan, 1. , 1. ],
              [inf, 4. , 2.5],
              [inf, 7. , 4. ]])
	```
### 3. Dot Product (Inner Product)
- **Definition:** For two vectors $v=[v_1,...,v_n]$ and $u=[u_1,...,u_n]$, their dot product is $v\cdot u= v_1\times u_1 + v_2\times u_2+...+v_n\times u_n$. It measures the correlation or angle between them.
- **Implementation**: `np.dot(vector1, vector2)` or `vector1.dot(vector2)`
```python
np.dot([2j, 3j], [2j, 3j]) 
>> (-13+0j)

a = [[1, 0], [0, 1]]
b = [[4, 1], [2, 2]]
np.dot(a, b)
>>> array([[4, 1],
          [2, 2]])
```
### 4. Matrix Multiplication
- **Matrix-Vector Multiplication**: $c=A\times v$ results in a new vector $c$.
	- Implementation: `matrix.dot(vector)`
- **Matrix-matrix multiplication**: For matrix $A(m\times n)$ and $B(n\times p)$, the result $C=A\times B$ is an $m\times p$ matrix where $C_{ij}=\sum A_{ik}\times B_{kj}$.
	- Implementation: `np.matmul(matrix1, matrix2)` or `matrix1.dot(matrix2)`
		```python
		a = np.array([[1, 0],
				     [0, 1]])
		b = np.array([[4, 1],
				     [2, 2]])
		np.matmul(a, b)
		>> array([[4, 1],
				 [2, 2]])
    	```
### 5. Transpose
- **Definition**: Swaps the rows and columns of a matrix. If $A$ is $m\times n$, its transpose $A^T$ is $n\times m$.
- **Implementation:** `np.transpose(array)` or `array.T`
```python
a = np.array([[1, 2], [3, 4]])
np.transpose(a)
>> array([1, 3],
         [2, 4])
```
### 6. Norm (Length of a vector)
- **Definition**: The length of a vector $v=[v_1,...,v_n]$ is $\mid\mid v\mid\mid=\sqrt{v_1^2+v_2^2+...+v_n^2}$ . This is also known as the Euclidean norm or L2 norm.
- **Implementation**: `np.linalg.norm(vector)`
```python
from numpy import linalg as LA
a = np.arange(9) - 4 # array([-4,-3,...,2,3,4])
LA.norm(a)
>> 7.745966692414834
```
### 7. Summation and Average
- **Summation:** `np.sum(a, axis=None)` calculates the sum of array elements, optionally along specific axes.
	```python
	np.sum([[0, 1], [0, 5]])
	>> 6
	np.sum([[0, 1], [0, 5]], axis=0)
	>> array([0, 6])
	```
- **Average:** `np.mean(arr)` calculates the arithmetic mean of array elements.
	```python
	a = np.array([[1, 2], [3, 4]])
	np.mean(a)
	>> 2.5
	np.mean(a, axis=0)
	>> array([2., 3.])
	```
### 8. Solving Linear Equations
For a system $Ax=b$, `np.linalg.solve(A, b)` can be used to find `x`.
```python
a = np.array([[1, 2], [3, 5]])
b = np.array([1, 2])
x = np.linalg.solve(a, b)
>> array([-1.,  1.])
```
## VI. Broadcasting
### 1. Concept and Mechanism
Broadcasting is a powerful mechanism in NumPy that allows **mathematical operations to be performed on arrays of different shapes**. NumPy automatically expands the smaller array to match the shape of the larger array, making element-wise operations possible without explicit loops or manual replication. This saves memory and optimizes performance.
### 2. Rules of Broadcasting
Broadcasting follows specific rules to determine compatibility:
- **Number of Dimensions**: If arrays have different numbers of dimensions, the array with fewer dimensions is padded with new dimensions of size 1 at the beginning.
- **Dimension Sizes:** If the sizes of corresponding dimensions do not match, the array with size 1 in that dimension is stretched (or "broadcast") to match the size of the other array.
- **Incompatibility**: If dimensions do not match and neither dimension's size is 1, a `ValueError` will occur.
### 3. Examples
- **Scalar and Array**: A scalar value is broadcast across all elements of an array (e.g., `arr + 2`).
- **Different Shaped Arrays**: An array with a smaller dimension can be broadcast to match a larger array.
```python
A = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]]) # shape (3,3)
B = np.array([10, 20, 30]) # shape (3,)

# b is broadcast across each row of A
C = A + b
>> array([[11, 22, 33],
          [14, 25, 36,
          [17, 28, 39]]])
```
## VII. Advanced Techniques and Functions
### 1. Vectorization
Vectorization refers to transforming algorithms that use explicit Python loops for individual elements into operations that rely on **array-wide operations**. This significantly speeds up calculations compared to traditional loops (e.g., 12.42 times faster for a given function evaluation). Almost all NumPy operations are inherently vectorized.
- `np.vectorize(func)` converts a standard Python function into a vectorized one that can operate element-wise on arrays.
```python
def myfunc(a, b):
	"""Return a - b if a>b, otherwise return a + b"""
	if a > b:
		return a - b
	else:
		return a + b

vfunc = np.vectorize(myfunc)
vfunc([1, 2, 3, 4], 2)
>> array([3, 4, 1, 2])
```
### 2. Applying Functions Along an Axis
- `np.apply_along_axis(func, axis, arr)` allows a user-defined function (`func`) to be applied along a specific axis (`axis`) of an array (`arr`). This is useful for performing calculations like summing elements per row or columns.
```python
def my_func(a):
	"""Average first and last element of a 1-D array"""
	return (a[0] + a[-1]) * 0.5
b = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
np.apply_along_axis(my_func, 0, b)
>> array([4., 5., 6.]) # average first and last element of columns
np.apply_along_axis(my_func, 1, b)
>> array([2., 5., 8]) # average first and last element of rows
```
### 3. `np.clip()` and `np.where()`
- `np.clip()`: Used to limit values in an array to a specified range, handling out-of-range issues often encountered in image processing (e.g., pixel values exceeding 255)

```python
a = np.arange(10)
np.clip(a, 1, 8)
>> array([1, 1, 2, 3, 4, 5, 6, 7, 8, 8])
```
- `np.where()`: As discussed in [[#6. Finding/Replacing Elements|section IV-6]], it can be used for conditional selection and replacement of elements, which is useful in image processing tasks like background subtractions.
## VIII. Applications of NumPy and Linear Algebra
### 1. Image Processing
#### a. Image Data Representation
Images are represented by pixels, with values typically ranging from 0 to 255.
- **Grayscale Images**: Represented as a 2D matrix (Height x Width) where each pixel is a scalar value.
- **Color Images**: Represented as a 3D matrix (Height x Width x Channel), where `Channel` is typically 3 for RGB (Red, Green, Blue). Note that `OpenCV` often uses BGR channel order by default.
#### b. Converting Color Image to Grayscale
Converts a 3-channel image to a 1-channel grayscale image by combining RGB values into a single value. Three common methods are:
- **Lightness**: $\frac{\text{max(R, G, B)}+\text{min(R, G, B)}}{2}$
- **Average**: $\frac{\text{R} + \text{G}+ \text{B}}{3}$
- **Luminosity**: $0.21\times \text{R}+0.72\times \text{G}+0.07\times\text{B}$ (weights human perception)
#### c. Background Subtraction
A technique to extract a foreground object from an image and place it onto a new background.
- **Input**: Original background image (Greenscreen), Target background image, Object image.
- **Output**: A new image with the object extracted and pasted onto the target background.
- **Key steps**: 
	1. **Resize images**: Ensure all three input images (Original Background, Target Background, Object Image) are brought to the same dimensions.
	2. **Compute difference**: Calculate the difference between the Object Image and the Original Background Image to obtain an initial mask.
			- E.g., `difference_single_channel = compute_difference(bg1_image, ob_image)`
	3. **Compute Binary Mask**: Convert the difference image into a binary mask (Foreground Mask). Pixels corresponding to the object are typically 1 (or 255), and background pixels are 0.
			- E.g., `binary_mask = (difference_single_channel > threshold).astype(np.unit8) * 255`
	4. **Replace Background**: Create the final output image by taking pixel values from the Object Image where the mask is 1 (or 255) and from the Target Background Image where the mask is 0. This step often uses `np.where()`.
### 2. Tabular Data Analysis
NumPy often in conjunction with Pandas, is used for analyzing tabular data.
- **Loading Data**: Data is typically loaded from CSV files using `pandas.read_csv()` and then converted to NumPy arrays using `.to_numpy()`.
- **Basic Operations**:
	- Find the maximum value and its index in a column.
	- Calculating the mean of a column.
	- Counting records based on conditions (e.g., `Sales >= 20`)
	- Calculating averages or sums based on multiple conditions (e.g., average Radio sales where Sales >= 15, total Sales where Newspaper > average Newspaper).
### 3. Cosine Similarity
#### a. Definition
Cosine Similarity (`cs(x, y)`) is a measure of similarity between two non-zero vectors in an inner product space. It is defined as the cosine of the angle between them.
- Formula: $\text{cs}(x,y)=\frac{x\cdot y}{\mid\mid x\mid \mid \cdot \mid \mid y \mid \mid}$
- This can be expanded to $\frac{\sum x_i \cdot y_i}{\sqrt{\sum x_i^2}\cdot \sqrt{\sum y_i^2}}$
#### b. Application
Widely used in Natural Language Processing (NLP) and information retrieval to measure the **similarity between two documents or texts**, represented as vectors (e.g., term frequency vectors, n-gram profiles). It's useful for tasks like Author Profiling.
#### c. Properties
An important property is that $\text{cs}(x,y)=\text{cs}(ax, by)$ for $ab>0$. This means scaling the vectors does not change their cosine similarity, making it robust to document length differences.
#### d. Implementation
Typically involves calculating the dot product (`np.dot()`) and the norms (`np.linalg.norm()`) of the vectors.
### 4. Natural Language Processing (NLP) - Author Profiling Example
Python dictionaries are fundamental in NLP for tasks involving unstructured text data.
#### a. Python Dictionaries for Text Processing
- **Character Counting**: Counting the frequency of each character in a text, useful for detecting patterns or language identification. `defaultdict(int)` simplifies this by providing a default value of 0 for new keys.
- **Word Counting**: Extending character counting to count the frequency of words in a text. This is a crucial pre-processing step for techniques like Bag-of-Words.
- **N-grams**; A sequence of `n` consecutive words or characters in a text.
	- **Unigram (n=1)**: Each word is an independent unit (e.g., ["This", "is", "a", "sentence"])
	- **Bigram (n=2)**: Pairs of consecutive words (e.g., ["This is", "is a"]).
	- **Trigram (n=3):** Sequences of three consecutive words (e.g., ["This is a"])
	- N-gram help **capture short-term context** and identify meaningful phrases (collocations) like "machine learning". They are also used in author profiling.
#### b. Text Preprocessing for NLP
Before analysis, raw text often requires preprocessing:
- **Lowercasing**: converting all characters to lowercase for consistency.
- **Removing Punctuation**: eliminating punctuation marks.
- **Tokenization**: breaking text into individual words or tokens.
- **Lemmatization vs. Stemming**: both reduce words to their base forms to reduce vocabulary size and help models detect patterns.
	- **Stemming**: Cuts off word suffixes (e.g., "changing" -> "chang"). It's fast but might not result in a grammatically correct or meaning word.
	- **Lemmatization**: Reduces words to their dictionary form (lemma) (e.g., "changing" -> "change"). It uses morphological analysis and ensures the base form is a real word, but is slower.
	- **Combined Workflow**: A common strategy is to apply lemmatization first to standardize words to their meaningful roots, followed by stemming to further reduce variations, especially for words not perfectly handled by lemmatization. This balances accuracy and processing speed. The `nltk` library (`PorterStemmer` for stemming, `WordNetLemmatizer` for lemmatization) is commonly used.
#### c. Author Profiling using N-grams and Cosine Similarity
- **Problem:** to determine if two given texts are likely written by the same author.
- **Methodology**: Involves creating n-gram frequency profiles for texts and then computing the **Cosine Similarity** between these profiles. A higher similarity score suggests a higher likelihood of the same author.
- **Implementation Steps**:
	1. **Preprocess Text**: Clean and normalize text using lowercasing, tokenization, lemmatization, and stemming.
	2. **Compute N-gram Profiles**: Use functions like `count_word()` to generate frequency counts of n-grams (e.g., bigrams) from the processed text.
	3. **Compare Texts (Cosine Similarity)**:
		- Convert n-gram profiles into vectors.
		- Calculate the Cosine Similarity between the vectors of the test text and a reference text (e.g., "alice.txt" by Lewis Carroll).
		- The `sklearn.metrics.cosine_similarity` function can be used for this.
	4. **Conclusion**: Compare the calculated Cosine Similarity with a predefined threshold (e.g., 0.8) to conclude whether the texts likely share the same author.
- **Minimum Word Count for Author Attribution**: Historically, studies suggested a minimum of 250 words for reliable stylometric analysis. However, modern machine learning algorithms can achieve successful author attribution on much shorter texts (e.g., under 25 words for Twitter messages).

[Demo Notebook](https://github.com/wdangds/learning-ds/blob/v4/content/static/notebooks/m02w01-exercise.ipynb)