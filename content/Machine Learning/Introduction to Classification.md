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

## 4. Performance Measures
Evaluating a classifier is often more complex than evaluating a regressor. Let's explore the various ways to measure performance.
### a. Accuracy and its Pitfalls
A common way to evaluate a model is with *k-fold cross-validation*. Let's use `cross_val_score()` to measure the accuracy of our `SGDClassifier`.

```python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(sgd_clf, X_train, y_train, cv=3, scoring="accuracy")
print(scores)
# Output: array([0.87365 0.85835 0.8689])
```

An accuracy of over 85% looks impressive. However, *accuracy is often not the best metric for classifiers, especially with skewed datasets* (where some classes are far more frequent than others).

To demonstrate this, consider a `DummyClassifier` that always guesses the most frequent class (in our case, 'not-5').

```python
from sklearn.dummy import DummyClassifier

dummy_clf = DummyClassifier()
dummy_clf.fit(X_train, y_train_5)
dummy_scores = cross_val_score(dummy_clf, X_train, y_train_5, cv=3, scoring="accuracy")
print(dummy_scores)
# Output: array([0.90965 0.90965 0.90965])
```
This simple classifier achieves over 90% accuracy just by guessing "not-5" every time, because only about 10% of the images are 5s. This shows why we need more nuanced metrics.

### b. The Confusion Matrix
A much better way to evaluate performance is the *confusion matrix*. It provides a comprehensive look at a classifier's errors by counting how many times instances of class A are classified as class B.

To generate a confusion matrix, we first need a set of predictions. We use `cross_val_predict()`, which, like `cross_val_score`, performs k-fold cross-validation but returns the prediction made for each instance on the fold it was held out from. This gives us "clean" predictions that the model has not seen during training.

```python
from sklearn.model_selection import cross_val_predict
from sklearn.metrics import confusion_matrix

y_train_pred = cross_val_predict(sgd_clf, X_train, y_train_5, cv=3)
cm = confusion_matrix(y_train_5, y_train_pred)
print(cm)
# Output: array([[53892 687] 
#				[ 1891 3530]])
```
Here's how to interpret the matrix:
- **Rows**: Represent actual classes (negative class 'not-5' on top, positive class '5' on bottom).
- **Columns**: Represent predicted classes (predicted negative on left, predicted positive on right)
- **True Negatives (TN)**: 53,892 non-5s were correctly classified as non-5s.
- **False Positives (FP)**: 687 non-5s were wrongly classified as 5s (Type I error).
- **False Negatives (FN)**: 1,891 5s were wrongly classified as non-5s (Type II error).
- **True Positives (TP)**: 3,530 5s were correctly classified as 5s.
A perfect classifier would have non-zero values only on the main diagonal.
### c. Precision and Recall
The confusion matrix gives us the components to calculate more precise metrics.
- **Precision**: The accuracy of positive predictions. It answers the question: *Of all the images the classifier identified as a 5, what percentage was actually a 5?*
$$
\text{Precision}=\frac{TP}{TP+FP}
$$
- **Recall (Sensitivity or True Positive Rate)**: The ratio of positive instances that are correctly detected. It answers: *Of all the actual 5s in the dataset, what percentage did the classifier correctly identify?*
$$
\text{Recall}=\frac{TP}{TP+FN}
$$
