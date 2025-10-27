---
title: "Linear Regression: Introduction and Review"
draft:
tags:
  - linear-regression
  - introduction
date: 2025-10-23
---
Linear regression is a fundamental and simple approach used in supervised learning primarily for **predicting a quantitative response**. Despite the existence of more modern statistical learning methods, linear regression remains a widely used and useful statistical learning tool. Understanding linear regression is crucial because many advanced statistical learning approaches are extensions or generalizations of this basic method.

> **Key questions answered by Linear Regression**

Linear regression can be used to address several important questions when analyzing relationships between variables, such as sales and advertising budgets (e.g., the *Advertising* data from [[What is Statistical Learning?#^ef3553|chapter 2]]).
1. **Existence of a Relationship**: Does the data show evidence of an association between the predictor (e.g., advertising expenditure) and the response (e.g., sales)?
2. **Strength of the Relationship**: If a relationship exists, how strong is it? Does knowing the predictor provide substantial information about the response?
3. **Identifying Relevant Predictors**: Which specific predictors (e.g., TV, radio, newspaper) are associated with the response? This requires separating out of the individual contribution of each predictor when multiple are used simultaneously.
4. **Magnitude of Association**: Quantifying the size of the association - for example, by how much will sales increase for every dollar spent on a particular advertising medium?
5. **Prediction Accuracy**: How accurately can future sales be predicted for a given level of advertising expenditure?
6. **Linearity**: Is the relationship approximately a straight line? If not, transformations might be needed to apply linear regression.
7. **Synergy/Interaction Effects**: Are there interaction effects (synergy) among predictors? For instance, does spending on both TV and radio yield higher sales than allocating the entire budget to one medium?

---
Next: [[Simple Linear Regression]]
