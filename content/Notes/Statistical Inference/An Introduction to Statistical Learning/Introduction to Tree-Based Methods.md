---
title: Introduction to Tree-Based Methods
tags:
  - tree
draft:
date: 2025-10-19
---
Tree-based methods are a set of approaches used for **regression** and **classification** problems.
## 1. Core Concept
The fundamental principle involves **stratifying or segmenting the predictor space** into a number of simple regions.
### a. Prediction
To make a prediction for a given observation, we typically use the **mean response value** (for regression) or the **mode response value** (for classification) of the training observations within the region to which the observation belongs.
### b. Decision Trees
Since the set of splitting rules used to segment the predictor space can be summarized in a tree structure, these approaches are known as **decision tree methods**.

## 2. Initial Assessment and Motivation for Ensembles

> **Advantages**

Decision trees are **simple** and highly **useful for interpretation**. They can also **easily handle qualitative predictors** without needing to create dummy variables.

> **Disadvantages**

Decision trees typically **are not competitive** with the best supervised learning approaches in terms of **prediction accuracy**. Additionally, trees can be **non-robust** - a small change in the data can lead to a large change in the final estimated tree.

> **Ensemble Improvement**

To overcome low predictive accuracy, advanced methods such as **bagging**, **random forests**, **boosting**, and **Bayesian additive regression trees (BART)** involve producing **multiple trees** which are then combined to yield a single consensus prediction. Combining a large number of trees often results in **dramatic improvements in prediction accuracy**, usually at the expense of some loss in interpretation.

---
Read next: [[The Basics of Decision Trees]]
