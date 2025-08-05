---
title: Naïve Bayes Classifiers
draft: false
tags:
  - probability
  - statistics
  - classifiers
  - machine-learning
---
Naïve Bayes Classifiers are a family of probabilistic algorithms based on [[Probability|Bayes' Theorem]], primarily used for classification tasks. They are effective, simple, and computationally fast, finding applications in spam filtering, text classification, and speech recognition.
## I. Classification Problem
- **Input**: A fixed set of classes $C= \{c_1, c_2, ..., c_L\}$ and a training set of M samples $S = \{(X_1, c_1), (X_2, c_2),...,(X_M,c_j)\}$, where each sample $X=<x_1, x_2, ...,x_N>$ represents N features.
- **Output**: Predict the class for a new, unknown sample X' (e.g., '0' or '1' for IRIS, 'Fail' or 'Pass' for Course Evaluation).
- **Idea**: Assign to the sample X' the class label 'c' such that the **posterior probability** $P(c\mid X)$ is maximal. This is known as **Maximum A Posteriori (MAP)** estimation. 
## II. The Naïve Bayes Assumption
The "Naïve" part of Naïve Bayes comes from a simplifying assumption: it assumes that **features are conditionally independent given the class**. This means that the influence of one feature on the class is independent of other features.
- Mathematically, this means: $P(x_1, x_2,...,x_N\mid c)= P(x_1\mid c)\times P(x_2\mid c)\times ... \times P(x_N\mid c)$.
- Using this assumption, Bayes' Rule for classification becomes $P(c\mid X) \propto P(X\mid c)\times P(c)$ $P(c\mid X) \propto P(x_1\mid c)\times P(x_2\mid c)...\times P(x_n\mid c)\times P(c)$
- The denominator P(x) is ignored during prediction because it's constant for all classes, so we only need to compart the proportional numerator to find the maximum probability.
## III. Bernoulli Naïve Bayes Classifier (for Discrete Random Variables)
This variant is suitable when features are binary or discrete.
### 1. Algorithm Steps
- **Training phase**:
	- Calculate the **prior probability P(c)** for each class 'c' in the training set.
	- For every feature ($X_i$) and every possible feature value ($x_{ij}$), calculate the **conditional probability $P(x_{ij}\mid c)$** for each class 'c'. This forms conditional probability tables.
- **Test Phase**:
	- Given an unknown instance $X'=(x'_1, \cdots, x'_N)$.
	- For each class 'c', compute: $P(c\mid X')\propto P(x'_1\mid c)\times P(x'_2\mid c)\times \cdots \times P(x'_N\mid c)\times P(c)$.
	- Choose the class 'c' that yields the highest probability.