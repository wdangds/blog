---
title: Testing, Validating, and Fine-Tuning a Model
draft:
tags:
  - machine-learning
  - testing
  - validating
  - fine-tuning
  - model-evaluation
---
Once a model is trained, it must be evaluated to estimate its performance on new data.
## 1. The Importance of Test and Validation Sets.
The error rate on new cases is called the **generalization error**. The goal is to have this error be as low as possible.

> [!attention] Training and Test Sets
> To estimate the generalization error, a common practice is to split your data into a **training set (typically 80%)** and a **test set (20%)**. You train the model on the training set and evaluate its final performance on the test set, which it has never seen before.

If the model performs well on the training set but poorly on the test set, it is **overfitting**.

## 2. Hyperparameter Tuning and Model Selection
We cannot use the test set to tune hyperparameters or to choose between different model types (e.g., a linear vs. a polynomial model). If you repeatedly evaluate on the test set and tweak your model based on the results, you will inadvertently fit your model to the test set, and its performance on truly new data will be worse than estimated.

The solution is to create a third set, called the **validation set** (or **dev set**), by holding out a part of the training data.

> [!tip] Workflow
> 1. Train multiple candidate models with different hyperparameters on the *reduced* training set (full training set minus the validation set).
> 2. Select the model that perform best on the validation set.
> 3. Train this best model one last time on the *full* training set (including the validation set) to create the final model.
> 4. Evaluate this final model on the test set to get an estimate of its generalization error.

![[fig-model-validation.png]]

If the validation set is too small, evaluations can be imprecise. To solve this, **repeated cross-validation** uses many small validation sets. The model is trained on the rest of the data and evaluated on each validation set, and the performance measures are averaged. This gives a more accurate measure but increases training time significantly.

## 3. The Challenge of Data Mismatch
Sometimes, the data available for training (e.g., millions of flower pictures from the web) is not perfectly representative of the data the model will see in production (e.g., pictures taken with a specific mobile app).

> [!warning] Rule
> The validation and test sets **must** be as representative of the production data as possible.

To diagnose issues, it can be helpful to create a *train-dev set*. This is a small portion of the training data (e.g., the web pictures) that is held out.

> [!tip] Diagnostic Process
> 1. Train the model on the training set.
> 2. Evaluate it on the *train-dev set*. If performance is poor, the model is overfitting the training data.
> 3. If performance is good on the train-dev set, evaluate it on the *dev set* (representative data). If performance is now poor, the problem is **data mismatch**. You can then try to preprocess the training data to make it more similar to the production data.
> 4. Once the model performs well on both the train-dev and dev sets, you can evaluate the final model on the test set.

![[fig-data-mismatch.png]]

## 4. The "No Free Lunch" Theorem
A model is a simplified representation of data, based on a set of assumptions (e.g., a linear model assumes the data is fundamentally linear).

The **No Free Lunch (NFL) theorem** states that if you make no assumptions about the data, there is no single model that is guaranteed to work best for all problems.

> Implication: There is no "one size fits all" model. The only way to know which model is best for a given task is to evaluate several reasonable models based on your assumptions about the data.

