---
title: Introduction to Classification
tags:
  - machine-learning
  - MNIST
  - "#classification"
draft:
---
> [!summary] 
> *This section covers the fundamentals of classification, a core supervised learning task in machine learning. We will explore various concepts using the well-known MNIST dataset, learn how to train and evaluate classifiers, and delve into different types of classification tasks.*

## 1. Introduction to Classification
### a. Supervised Learning Tasks
In supervised machine learning, the two most common tasks are *regression* (prediction continuous values) and *classification* (predicting discrete classes).
### b. The MNIST Dataset: The "Hello World" of Machine Learning
For our exploration of classification, we will use the **MNIST dataset**.
- **Content**: It is a collection of 70,000 small, 28x28 pixel of handwritten digits. These digits were written by high school students and employees of the US Census Bureau.
- **Labels**: Each of the 70,000 images is labeled with the digit it represents (0 through 9).
- **Significance**: The dataset is a benchmark for classification algorithms. New algorithms are often tested on MNIST to see how they perform, making it a foundational dataset for anyone learning machine learning.

## 2. Getting and Preparing the Data
### a. Fetching the Dataset with Scikit-Learn
Scikit-Learn provides helper functions to easily download popular datasets with MNIST.
- We use the `fetch_openml()` function to download the dataset. It's recommended to set `as_frame=False` to get the data as NumPy arrays, which are better suited for image data than Pandas DataFrame.
- Datasets downloaded this way are typically returned as `Bunch` objects, which are similar to dictionaries. They generally contain keys like:
	- `DESCR`: A description of the dataset.
	- `data`: The input features, usually a 2D NumPy array.
	- `target`: The labels, usually a 1D array.

```python
from sklearn.datasets import fetch_openml

mnist = fetch_openml('mnist_784', as_frame=False)
```

### b. Exploring the Data Structure
Let's inspect the shape and content of our downloaded data.

```python
X, y = mnist.data, mnist.target

print(X.shape)
# Output: (70000,784)
print(y.shape)
# Output: (70000,)
```

- The dataset contains *70,000 images*.
- Each image has *784 features*. This is because each image is 28x28 pixels, and every feature represents the intensity of one pixel, ranging from 0 (white) to 255 (black).

### c. Visualizing an Image
To see what an individual digit looks like, we can reshape its 784-feature vector back into a 28x28 array and plot it using Matplotlib.

```python
import matplotlib.pyplot as plt

def plot_digit(image_data):
	image = image_data.reshape(28, 28)
	plt.imshow(image, cmap="binary")
	plt.axis("off")
	
some_digit = X[0]
plot_digit(some_digit)
plt.show()
```

![[fig-x0.png]]

```python
print(y[0])
# Output: 5
```

The first image in the dataset is a '5', which the plot confirms visually.

### d. Creating a Test Set.
It is crucial rule in machine learning to [[Get and Prepare the Data#3. Create a Test Set|set aside a test set before any data inspection]]. Fortunately, the MNIST dataset as fetched by `fetch_openml()` is already split into a training set (the first 60,000 images) and a test set (the last 10,000 images).

```python
X_train, X_test = X[:60000], X[60000:]
y_train, y_test = y[:60000], y[60000:]
```

The training set is also conveniently pre-shuffled. This is beneficial because:
1. It ensures all cross-validation folds will be representative of the whole dataset.
2. It prevents algorithms that are sensitive to instance order from performing poorly.

## 3. Binary Classification
To begin, we will simplify the problem from classifying 10 digits to a *binary classification* task: identifying a single digit. Our goal will be to build a "5- detector" that distinguished between two classes: '5' and 'not-5'.
### a. Preparing Labels for Binary Classification
We need to create target vectors that reflect our binary goal.

```python
y_train_5 = (y_train == '5') # True for all 5s, False otherwise
y_test_5 = (y_test == '5')
```

### b. Training a Stochastic Gradient Descent (SGD) Classifier
A good starting point for a classifier is the *Stochastic Gradient Descent (SGD) classifier*. It is implemented in Scikit-Learn's `SGDClassifier` class and is very efficient for large datasets because it processes training instances one at a time.

```python
from sklearn.linear_model import SGDClassifier

sgd_clf = SGDClassifier(random_state=42)
sgd_clf.fit(X_train, y_train_5)

# Test it on our example digit
print(sgd_clf.predict([some_digit]))
# Output: array([True])
```

The classifier correctly predicts that our `some_digit` (the '5' from earlier) is indeed a 5.