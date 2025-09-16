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
	- `test_size=20`: This sets aside 20% of the data for the final test set, following a standard 80/20 split. Industry standards commonly use 10-30% for test sets, with 20% being most frequent.
	- `stratify=y`: **Crucial for imbalanced datasets**, this parameter ensures that the class proportions in `y` are maintained across the `X_temp` and `X_test` splits.
	- `random_state=42`: An arbitrary integer that ensures **reproducibility** of the split. 

```python
# Create initial train/test split 
X_temp, X_test, y_temp, y_test = train_test_split(
	test_size = 0.2,
	stratify = y,
	random_state = 42)
```
