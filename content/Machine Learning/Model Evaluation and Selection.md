---
title: Model Evaluation and Selection
draft:
tags:
  - machine-learning
  - model-evaluation
---
## 1. Why Model Evaluation Matters?
Model evaluation is not merely a technical step; it forms the **foundation of trust** in your machine learning systems.
### a. The Hidden Dangers of Poor Evaluation
Without proper evaluation, we risk:
- **False Confidence**: Models performing well on training data but failing in production, leading to costly deployment failures.
- **Hidden Biases**: Undetected biases that can result in unfair or discriminatory outcomes in real-worlds applications.
- **Wasted Resources**: Time and computational effort spent optimizing models that fundamentally do not generalize.
### b. A Holistic Approach to Evaluation
Effective evaluation demands a comprehensive strategy considering:
- **Multiple Metrics**: Different problems require different success measures.
- **Statistical Validity**: Ensuring results are reliable and reproducible.
- **Domain Context**: Aligning evaluation with the specific needs of the real-world application.
- **Ethical Implications**: Considering fairness and transparency in model performance.
### c. Real-World Impact in Scientific Applications
In scientific applications, proper evaluation is especially critical because:
- **Research Integrity**: ML results must adhere to scientific standards.
- **Reproducibility Crisis**: ML can either aid or hinder scientific reproducibility.
- **High Stakes**: Many scientific ML applications directly impact human lives.
## 2. Data Splitting Strategies
Properly splitting your data is the fundamental step for reliable model evaluation.
### a. The Three-Way Split
The standard approach involves dividing data into three distinct sets:
- **Training Set (60%-80%)**: Used to **train the model parameters**.
- **Validation Set (10-20%)**: Used for **hyperparameter tuning**.
- **Test Set (10-20%)**: Reserved **only for the final, unbiased evaluation** of the chosen model.

> [!warning] Critical Principle
> The **test set must remain untouched** until the very end of the model development process to ensure an unbiased assessment of the final model's performance.

### b. Correct Parameter Choices for Data Splitting (Example)
For a dataset requiring a **60% train / 20% validation / 20% test set**, the following `train_test_split` parameter choices are typically correct:
1. **Step 1:** Create initial train/test split (80/20)
	- `test_size=0.2`: This sets aside 20% of the data for the final test set, following a standard 80/20 split. Industry standards commonly use 10-30% for test sets, with 20% being most frequent.
	- `stratify=y`: **Crucial for imbalanced datasets**, this parameter ensures that the class proportions in `y` are maintained across the `X_temp` and `X_test` splits.
	- `random_state=42`: An arbitrary integer that ensures **reproducibility** of the split. 

```python
# Create initial train/test split 
X_temp, X_test, y_temp, y_test = train_test_split(
	X, y,
	test_size = 0.2,
	stratify = y,
	random_state = 42)
```
2. **Step 2:** Split remaining data (`X_temp`, `y_temp`) into train/validation (75/25 of the 80%)
	- `test_size=0.25`: When applied to `X_temp` (which is 80% of the original data), this value results in 20% of the *total* data being allocated for the validation set (0.25 * 0.8 = 0.2), thereby achieving the desired **60/20/20 train/validation/test split**.
	- `stratify=y_temp`: Maintains class balance within these new splits, ensuring representativeness of classes in the training and validation sets.
	- `random_state=42`: Ensures consistency with the initial split.

```python
# Split remaining data into train/validation
X_train, X_val, y_train, y_val = train_test_split(
	X_temp, y_temp,
    test_size = 0.25,
    stratify = y_temp,
    random_state = 42)
```

> [!tip] Key Considerations for Data Splitting
> 1. **Why `stratify=y` is crucial**: For datasets with **imbalanced classes** (e.g., 40%, 30%, 20%, 10%), stratified splitting ensures each split maintains the same class proportions as the original dataset. Without it, random splitting could lead to some classes being **underrepresented or entirely missing** in smaller splits, causing biased evaluation and poor model performance on minority classes.
> 2. **Expected Class Distributions**: With stratified splitting, the class distributions should be **nearly identical** across training, validation, and test sets. This confirms that the strategy worked correctly, ensuring each split is representative of the overall dataset, which guarantees **fair evaluation and prevents bias toward majority classes.**
> 3. **Approach for Small Datasets (e.g., 100 samples)**: For very small datasets, a separate test set is impractical as it leaves too few samples for training. In this scenario, *cross-validation (CV)* should be used instead to maximize training data and provide more robust evaluation estimates. *Stratified 5-fold or 10-fold CV* would be recommended to ensure class imbalance in each fold.
## 3. Cross-Validation Techniques
Cross-validation provides **more reliable performance estimates** by utilizing multiple train-test splits of the data. It helps to address the issues of limited data and provides a more robust measure of a model's generalization ability.
### a. K-Fold Cross Validation
**Concept:** The data is divided into `k` equal "folds". The model is trained on `k-1` folds and tested on the remaining single fold. This process is repeated `k` times, with each fold serving as the test set exactly one.
- **Pros**: Uses all data for both training and testing.
- **Cons**: Can be computationally expensive, especially for large `k`.
### b. Stratified K-Fold Cross-Validation
**Concept**: An enhancement of k-fold CV that **ensures each fold maintains the same class distribution** as the original dataset.
- **Pros**: **Better for imbalanced data** as it prevents minority classes from being underrepresented or absent in certain folds.
- **Cons**: Primarily designed for classification tasks, not suitable for regression.
### c. Leave-One-Out (LOOCV)
**Concept**: A special case of k-fold CV where `k` equals `n` (the total number of samples). The model is trained on `n-1` samples and tested on the single remaining sample. This is repeated `n` times.
- **Pros**: Maximizes the amount of training data in each iteration.
- **Cons**: **Extremely computational expensive** (scales with dataset size), may have high variance for some problems, and can be sometimes be overly optimistic.

**CHOOSE THE RIGHT CROSS-VALIDATION APPROACH**

|      Scenario      |    Recommended CV    |
| :----------------: | :------------------: |
|   Small dataset    |        LOOCV         |
| Imbalanced classes |  Stratified K-Fold   |
|   Standard cases   | 5-fold or 10-fold CV |
### d. Correct Parameter Choices for Cross-Validation (Example)
When performing cross-validation, especially with imbalanced data, specific parameter choices are recommended:
1. **Standard K-Fold CV**:
	- `cv=5`: A **standard choice** for the number of folds. (3 or 10 folds are also acceptable)
	- `scoring='balanced_accuracy'`: **Crucial for imbalanced datasets**, as it handles class imbalance better than simple 'accuracy'.

```python
# Standard k-fold CV
cv_scores_kfold = cross_val_score(
	model, X_train, y_train,
	cv=5,
	scoring='balanced_accuracy')
```
2. **Stratified K-fold CV**:
	- `n_splits=5`: Consistent with standard k-fold for comparison.
	- `shuffle=True`: **Recommended practice** to randomize data before splitting into folds, improving robustness.
	- `random_state=42`: For reproducibility.
	- `scoring='balanced_accuracy'`: Consistent with other methods.

```python
stratified_cv = StratifiedKFold(
	 n_spits=5,
	 shuffle=True,
	 random_state=42)
	 
cv_scores_stratified = cross_val_score(
	model, X_train, y_train,
	cv=stratified_cv,
	scoring='balanced_accuracy') 
```
3. **Leave-one-out CV**:
```python
cv_scores_loo = cross_val_score(
	model, X_train, y_train,
	cv=loo_cv,
	scoring='balaced_accuracy')
```
### e. Cross-validation Analysis Insights
1. **Reliability for Imbalanced datasets**: *Stratified 5-fold CV gives the most reliable estimate* for imbalanced datasets because it maintains class balance in each fold, has lower variance than standard k-fold, and provides more stable estimates than LOOCV while being computationally efficient.
2. **Importance for Imbalanced data**: Stratified CV is *critical* for datasets with severe class imbalance (e.g., 10% for the smallest class). Without it, some folds might have very few or zero samples from minority classes, leading to *biased performance estimates, inability to evaluate minority class performance, and high variance in CV scores*. This could result in overoptimistic performance estimates as models fail to learn minority class patterns.
3. **Variance Across Strategies**: *Stratified CV typically shows the lowest variance*, indicating the most reliable estimates. Standard k-fold has higher variance due to random class distribution across folds. LOOCV often has very low variance but can be overly optimistic. Lower variance signifies more stable and trustworthy performance estimates.
4. **When to choose LOOCV**: LOOCV is appropriate for *very small datasets (n<100)* where maximizing training data is critical. The *trade-offs* including its high computational cost (scales with the dataset size), potential for high variance in some problems, and the risk of being overly optimistic. However, it provides maximum training data per iteration. Use it when data is extremely limited and computational resources allow.

## 4. Performance Metrics
Choosing the right performance metric is crucial as different problems require different success measures
### a. Classification Metrics

|                                             | Definition                                                                                  | Best when                                                                                                                                                                            |
| ------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Accuracy**                                | Overall correctness $\frac{TP+TN}{TP+TN+FP+FN}$                                             | Classes are balanced, and all errors have equal cost.                                                                                                                                |
| **Precision (Positive Predicted Value)**    | Of all predicted positive cases, how many were actually positive? $\frac{TP}{TP+FP}$        | *False positives are costly* (e.g., spam detection, where misclassifying a legitimate email as spam is highly undesirable)                                                           |
| **Recall/Sensitivity (True Positive Rate)** | Of all actual positive cases, how many did the model correctly identify? $\frac{TP}{TP+FN}$ | *False negatives are costly* (e.g., disease detection, where missing a disease diagnosis has severe consequences). This is often the **MOST IMPORTANT metric** in medical screening. |
| **F1-Score**                                | The harmonic mean of precision and recall                                                   | A balance between precision and recall is needed, especially with imbalanced classes.                                                                                                |
### b. Regression Metrics

|                                          | Definition                                                                                                       | Best when                                     |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **Mean Squared Error (MSE)**             | The average of the squared differences between predicted and actual values                                       | Large errors should be penalized more heavily |
| **$R^2$ (Coefficient of Determination)** | Explains the proportion of variance in the dependent variable that is predictable from the independent variables | Comparing models across different datasets    |
### c. Confusion Matrix
The *confusion matrix* is a powerful tool for evaluating classification models beyond simple accuracy, providing a detailed breakdown of correct and incorrect predictions for each class.
**Key Metrics Derived**:
- **True Positives (TP)**: Correctly predicted positive cases.
- **True Negative (TN)**: Correctly predicted negative cases.
- **False Positive (FP)**: Incorrectly predicted positive cases (Type I error)
- **False Negatives (FN)**: Incorrectly predicted negative cases (Type II error)

![[fig-classification-metrics.png]]

> [!example] Example: Rare Disease Screening
> Consider a scenario of a model detecting a rare disease, where the prevalence is typically low (e.g., 5%).
> 1. *Which metric is most important and why?*
> 	- *Recall (sensitivity) is most important.* The *cost of missing a disease diagnosis (false negative) far exceeds the cost of a false alarm (false positive)*. The primary goal is to catch all positive cases, even if it means some healthy patients receive false alarms. False negatives can delay critical treatment and worsen patient outcomes.
> 2. *Trade-offs between Precision and Recall for a Medical Team*:
> 	- *Recall*: 'Of all patients who *actually* have the disease, how many did we catch?' High recall means *we miss fewer sick patients.*
> 	- *Precision*: 'Of all patients we *flagged* as positive, how many *actually* have the disease?' High precision means *fewer false alarms*.
> 	- *Prioritization*: In screening, *we prioritize recall (catching disease) over precision (avoiding false alarms)* because missing a diagnosis has more serious consequences than additional testing.
> 3. *Model recommendation for clinical deployment*:
> 	- Recommend the model with the *highest recall (sensitivity) while maintaining acceptable precision (e.g., >10%)*. A [[Random Forest]] with `class_weight='balanced'` often achieves high recall (~0.85-0.95) with reasonable precision (~0.15-0.25), making the slight increase in false alarms acceptable for critical disease detection.
> 4. *Additional Validation Before Clinical Deployment*:
> 	- Multi-site validation (across different hospitals/populations).
> 	- Temporal validation (on data from different time periods).
> 	- Regulatory approval (e.g., FDA/CE marking).
> 	- Clinical workflow integration testing.
> 	- Healthcare provider training and acceptance testing.
> 	- Continuous monitoring system for model drift.
> 	- Ethical review for bias and fairness across demographic groups.
> 5. *Handling class imbalance in Medical Settings*:
> 	- Use `class_weight='balanced'` or custom weights based on clinical costs.
> 	- Consider ensemble methods that handle imbalance well.
> 	- Collect more positive cases through targeted recruitment.
> 	- Use synthetic data generation techniques (e.g., SMOTE) carefully.
> 	- Implement threshold tuning to optimize recall.
> 	- Design the system to flag uncertain cases for human review.
> 	- Regularly retrain with new data to maintain performance.

When calculating medical metrics, explicitly prioritizing recall (sensitivity) is important.
```python
def calculate_medical_metrics(y_true, y_pred):
	metrics = {}
	metrics['accuracy'] = accuracy_score(y_true, y_pred)
	metrics['precision'] = precision_score(y_true, y_pred)
	metrics['recall'] = recall_score(y_true, y_pred)
	metrics['f1'] = f1_score(y_true, y_pred)
	return metrics
```
When training models for medical data, using `class_weight='balanced'` is critical for handling imbalance.
```python
models = {
	'Logistic Regression': LogisticRegression(
		random_state=42, max_iter=1000, class_weight='balanced'
	),
	'Random Forest': RandomForestClassifier(
		n_estimators=100, random_state=42, class_weight='balanced'
	),
	'Decision Tree': DecisionTreeClassifier(
		random_state=42, max_depth=5, class_weight='balanced'
	)
}
```
When visualizing a confusion matrix, specific parameters enhance readability and align with medical standards.
```python
sns.heatmap(
	results['confusion_matrix'],
	annot=True,     # Show numbers on the heatmap
	fmt='d',        # Integer format for annotations
	cmap='Blues',   # Medical standard color map
	# ... rest of parameters
)
```
## 5. Bias-Variance Analysis
### a. Fundamental Tradeoff
The **bias-variance tradeoff** is a central challenge in machine learning. It describes the relationship between a model's complexity and its ability to generalize to unseen data.
- **High Bias (Underfitting)**: Simple models that miss important patterns in the data. They are too simplistic to capture underlying relationships, leading to poor performance on both training and test data.
- **High Variance (Overfitting)**: Complex models that capture noise rather than signal. They learn the training data too well, including its noise, which results in excellent performance on training data but poor generalization to new data.
The **Total Error** of a model can be conceptualized as:
$$
\text{Total Error} = \text{Bias}^2+\text{Variance}+\text{Irreducible Error}
$$

![[ML--Bias-Vs-Variance-(1).png]]

> [!example] Example: Climate Prediction Task
> Consider using a *Decision Tree Regressor* to demonstrate different levels of complexity:
> - *Simple Model*: `max_depth=3` (low complexity, prone to underfitting)
> - *Medium Model*: `max_depth=5` (balance complexity)
> - *Complex Model*: `max_depth=20` (high complexity, prone to overfitting)

### b. Expected Learning Curve Patterns
Learning curves (plotting performance against training set size) are invaluable for diagnosing bias and variance.

![[Example-of-Train-and-Validation-Learning-Curves-Showing-a-Training-Dataset-the-May-be-too-Small-Relative-to-the-Validation-Dataset.png]]

|                               | Pattern                                                        | Diagnosis                                                                                               | Strategies                                                                                                                          |
| ----------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Simple Model (High Bias)      | Low training score, low test score, small gap between them.    | High bias, low variance. The model is too simple to capture underlying patterns.                        | Increase model complexity, add more features, use more sophisticated algorithms (e.g., ensemble methods), or reduce regularization. |
| Medium Model (Balanced)       | Good training score, good test score, moderate gap.            | Balanced bias-variance tradeoff.                                                                        | Fine-tune hyperparameters, add cross-validation for robust model selection, consider ensemble methods for further improvement.      |
| Complex Model (High Variance) | High training score, lower test score, large gap between them. | Low bias, high variance. the model memorizes training data rather than learning generalizable patterns. | Simplify the model, add regularization, or use pruning; collect more training data; use ensemble methods with averaging.            |
> [!tip] Impact of More Training Data (e.g., 10x more data) 
> With significantly more data (e.g., 10x more data):
> - One could use more complex models without as much overfitting risk.
> - Use more sophisticated algorithms like neural networks or gradient boosting.
> - Implement more rigorous validation with larger test sets.
> - Explore feature interactions and non-linear relationships.
> - Consider ensemble methods with diverse base learners.
> - Implement more thorough hyperparameter optimization.

## 6. Scientific Decision Making and Ethical Considerations
### a. Model Selection Framework
A systematic approach to model evaluation is crucial for scientific decision-making:
1. *Define Evaluation Strategy*: Choose data splitting approach, cross-validation method, and performance metrics aligned with goals.
2. *Baseline Establishment*: Implement simple models as a performance baseline and set minimum acceptable performance thresholds.
3. *Model Comparison*: Evaluate multiple models using a consistent methodology and analyze performance across data subsets.
4. *Hyperparameter Optimization*: Use nested cross-validation to avoid selection bias and apply systematic search strategies.
5. *Final Evaluation*: Assess the best model on the held-out test set, analyzing error patterns and edge cases.
### b. Ethical Considerations in Model Evaluation
Ethical evaluation extends beyond purely technical metrics:
- *Fairness*: Models should perform equitably across different demographic groups.
- *Transparency*: Evaluation methods and results should be clearly documented.
- *Privacy*: Evaluation should not compromise sensitive information.
- *Accountability*: Clear responsibility for model performance and consequences.
Ethical evaluation should be integrated throughout the model development lifecycle.
### c. Context-Specific Evaluation & Stakeholder Communication
Effective scientific decision-making requires:
- *Context-Specific Evaluation*: Recognizing that different scenarios require different priorities.
- *Trade-off Recognition*: Understanding that no model is perfect, and choices always involve trade-offs.
- *Stakeholder Communication*: Translating technical metrics into actionable domain insights for non-technical audiences.
- *Risk Assessment*: Understanding the consequences of different error types.

# TERMINOLOGY

|                  | Definition                                                                     |
| ---------------- | ------------------------------------------------------------------------------ |
| Cross-validation | A resampling procedure used to evaluate ML models on limited data samples.     |
| Confusion Matrix | A table showing correct and incorrect predictions by class.                    |
| Precision        | The ratio of true positives to all positive predictions                        |
| Recall           | The ratio of true positives to all actual positives (sensitivity)              |
| F1 Score         | The harmonic mean of precision and recall                                      |
| Bias             | Error from incorrect assumptions in the learning algorithm (underfitting)      |
| Variance         | Error from sensitivity to small fluctuations in the training set (overfitting) |
| Stratification   | Preserving the class distribution in data splits                               |
