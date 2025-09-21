---
title: Main Challenges in Machine Learning
draft:
tags:
  - machine-learning
  - challenge
---
The two primary sources of trouble in an ML project are "bad data" and "bad model".
## 1. Challenges Related to Data
### a. Insufficient Quantity of Training Data
- Most ML algorithms require a large amount of data to perform well. Simple problems might need thousands of examples, while complex ones like image recognition could require millions.
- The "unreasonable effectiveness of data" principle suggests that for complex problems, having more data often ==more impactful than developing better algorithms==.
### b. Non-representative Training Data
The training data must be representative of the new cases you want to generalize to. If not, the model will not make accurate predictions.

> [!example]-
> Training a life satisfaction model only on moderately rich countries will produce a model that performs poorly for very poor or very rich countries.

- **Sampling Noise**: A sample that is too small can be non-representative by chance.
- **Sampling Bias**: A flawed sampling method can produce a non-representative sample even if it is very large.

> [!example]- Examples of Sampling Bias
> The famous 1936 *Literary Digest* poll incorrectly predicted the US presidential election because its sampling method was biased towards wealthier households.
> - First, to obtain the addresses to send the polls to, the *Literary Digest* used telephone directories, lists of magazine subscribers, club membership lists, and the like. All of these lists tended to favor wealthier people, who were more likely to vote Republican (hence Landon).
> - Second, less than 25% of the people who were polled answered. Again this introduced a sampling bias, by potentially ruling out people who didn't care much about politics, people who didn't like the *Literary Digest*, and other key groups. This is a special type of sampling bias called *nonresponse bias*.

### c. Poor-Quality Data
If the training data is full of ==errors, outliers, and noise==, it will be much harder for the system to detect underlying patterns.

Data cleaning is a crucial step for data scientists and involves:
- Discarding or fixing obvious outliers.
- Handling missing features by ignoring them, filling them in (e.g., with the median value), or training separate models.
### d. Irrelevant Features
The system can only learn if the training data contains enough relevant features and not too many irrelevant ones. This is "[[Introduction to Machine Learning#b. "Garbage In, Garbage Out"|garbage in, garbage out]]" principle.

**Feature Engineering** is the process of selecting and creating good features, which includes:
- *Feature Selection*: Choosing the most useful features from what's available.
- *Feature Extraction*: Combining existing features to create a more useful one.
- *Creating New Features*: Gathering new data to create them.

## 2. Challenges Related to the Model
### a. Overfitting the Training Data
> [!definition]
> Overfitting occurs when the model performs well on the training data but fails to generalize to new, unseen instances. This happens when the model is too complex relative to the amount and noisiness of the data.

The model ends up learning the noise and random fluctuations in the training data, rather than the true underlying patterns.

> [!example]-
> A high-degree polynomial model might perfectly fit every data point in the training set but make wild predictions for new data points.
> 
> ![[fig-overftting.png]]

> [!tip] Solution
> 1. **Simplify the model**: Choose a model with fewer parameters (e.g., linear instead of polynomial), reduce the number of features, or constrain the model.
> 2. **Gather more training data**.
> 3. **Reduce noise in the data**: Fix errors and remove outliers.

A common technique to reduce overfitting is **regularization**, which involves constraining a model to make it simpler. For example, forcing a linear model's slope to be small will prevent it from fitting the training data too closely, which can lead to better generalization. The amount of regularization is controlled by a *hyperparamter*.

![[fig-regularization.png]]
### b. Underfitting the Training Data

> [!definition]
> Underfitting is the opposite of overfitting. It occurs when your model is **too simple** to learn the underlying structure of the data.

The model's prediction will be inaccurate, even on the training examples. A linear model for a complex, nonlinear relationship is a classic example of underfitting.

> [!tip] Solutions
> 1. **Select a more powerful model** with more parameters.
> 2. **Improve the features** through better feature engineering.
> 3. **Reduce the constraints on the model** (e.g., reduce the regularization hyperparameter).

