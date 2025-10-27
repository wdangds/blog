---
title: Tree Ensemble Methods
tags:
  - bagging
  - random-forest
  - boosting
  - bayesian-method
  - bias-variance
draft:
date: 2025-10-20
---
**Ensemble methods** combine many simple models (known as **weak learners**, here, decision trees) to produce a potentially powerful single model.

---
## 1. Bagging (Bootstrap Aggregation)

Bagging is a general-purpose procedure for reducing the **variance** of statistical learning methods, particularly useful for [[The Basics of Decision Trees|decision trees]], which suffer from high variance.

### a. Process
Since averaging a set of independent observations reduces variance, bagging simulates having multiple training sets by using the bootstrap approach:

