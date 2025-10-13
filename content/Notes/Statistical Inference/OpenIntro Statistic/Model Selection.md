---
title: Model Selection
draft:
date: 2025-10-06
tags:
  - model-evaluation
  - select-model
  - multiple-regression
  - regression
---
> [!summary]
> *The optimal model is not necessarily the most complex. Including variables that are not important can reduce the accuracy of predictions. Models that have been simplified through variable pruning are referred to as **parsimonious**. The model including all available explanatory variables is called the **full model**. $R^2_{adj}$ is the primary tool used here to evaluate which predictors add value to the model.*

## 1. Two Model Selection Strategies
These are often called step-wise strategies because they add or delete one variable at a time.
### a. Backward Elimination
> [!definition] Backward Elimination
> 1. **Start**: Begin with the *full model* (all potential predictors).
> 2. **Eliminate**: Variables are eliminated one-at-a-time. In each step, eliminate the variable that leads to the *largest improvement in adjusted $R^2$*.
> 3. **Stop**: Continue until $R^2_{adj}$ cannot be improved by eliminating any further variables.

> [!example]- Example: [[Introduction to Multiple Regression#^example-lending-club-loans|Lending Club Loans]]
> - Full model baseline: $R^2_{adj}=0.25843$
> - Testing removal of each variable: Removing `issued` resulted in the highest $R^2_{adj}$ (0.25854). Since 0.25854>0.25843, `issued` is dropped.
> - New baseline: $R^2_{adj}=0.25854$
> - Testing further removal: None of the remaining variables improve $R^2_{adj}$. Stop.
> - Final Model: Excludes `issued`.

### b. Forward Selection
> [!definition] Forward Selection
> 1. **Start**: Begin with a model that includes *no variables* ($R^2_{adj}=0$)
> 2. **Add**: Variables are added one-at-a-time. In the first step, add the single variable that provides the largest $R^2_{adj}$. In subsequent steps, add the remaining variable that yields the highest $R^2_{adj}$ when combined with variables already in the model.
> 3. **Stop**: Continue until no variable can be found that improves $R^2_{adj}$ baseline.

> [!example]- Example: Lending Club Loans
> - Start with $R^2_{adj}=0$. The model including only `term` has the highest $R^2_{adj}$ (0.12855). Add `term`.
> - Add `credit util` (improving $R^2_{adj}$ to 0.20046)
> - Add `income ver`, `debt to income`, `credit checks`, and `bankruptcy`.
> - Final check: adding the remaining variable, `issued`, results in a lower $R^2_{adj}$ (0.25843) than the current model (0.25854). Do not add `issued`.

> [!tip] Note on Strategy Outcomes
> Backward elimination and forward selection sometimes arrive at different final models. If this happens, it is common to choose the model with the larget $R^2_{adj}$.

## 2. The P-value Approach
The p-value approach uses a significance level ($\alpha$, usually 0.05) as an alternative to maximizing $R^2_{adj}$.
- **Backward elimination (p-value)**: Identify the predictor with the *largest p-value*. If p-value > $\alpha$, drop the variable, refit, and repeat. Stop if the largest p-value $\leq \alpha$.
- **Forward selection (p-value)**: Start with no predictors. Fir one-predictor models, identify the one with the **smallest p-value**.

> [!note] When to Use Which Approach
> - Use $R^2_{adj}$ when the sole goal is to improve *prediction accuracy* (e.g., machine learning applications).
> - Use the *p-value approach* when the goal is to understand which variables are *statistically significant predictors* or to produce a simpler model.

Regardless of the approach, model conditions must be verified after variable selection.