---
title: Introduction to Machine Learning
draft:
tags:
  - machine-learning
---
## 1. Why Machine Learning?
Imagine trying to write a set of rules to automatically sort photos of cats and dogs.

![[fig-cat-dog.jpg]]
**Common Rule Ideas**:
- Dogs have floppy ears, cats have pointy ears.
- Cats have whiskers, dogs don't.
- Dogs are larger, cats are smaller.
However, these rule-based systems quickly *struggle with complexity and adaptability.* Some dogs have pointy ears, some cats have floppy ears, and dogs also have whiskers (just less visible). Some cats are larger than small dogs. Unusual breeds, different angles, and varying lighting conditions further complicate manual rule creation. 
![[fig-complexity-growth.png]]
As the number of variables or conditions increases, rules become an *unmanageable "long list"* and their complexity grows exponentially. **Static rules cannot handle new examples or changing data** not covered by existing rules. This is why machine learning approaches are preferred for complex tasks.

## 2. How ML Overcomes Rule Limitations
Machine learning overcomes these limitations through a data-driven approach:
- **Data-Driven Learning**: Instead of manually writing rules, we feed the machine a large amount of data and **let it learn the rules itself**.
- **Robust to Complexity**: ML handles complexity and variations that we cannot anticipate with manual rules.
- **Dynamics & Adaptable**: ML models can be *retrained on new data* to adapt to changing environments and conditions.
- **Pattern Recognition**: ML excels at finding *subtle patterns humans might miss*.

## 3. The Formal Definition: T-P-E Framework
> "An algorithm is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E."
>
> \- Tom M. Mitchell

This **T-P-E framework is the foundation for almost all machine learning research**.
 - **Task (T)**: The specific problem to be solved.
 - **Performance (P)**: How success is measured.
 - **Experience (E)**: The data the model learns from.

> [!example]- House Price Prediction Example
> - **Task (T)**: Predict house prices (a regression problem).
> - **Performance (P)**: Metrics like Mean Absolute Error, Root Mean Square Error, R-squared.
> - **Experience (E)**: A dataset of houses with features such as square footage, number of bedrooms, location, age, and their actual sale prices.

> [!example]- Medical Example: Classifying Brain Tumors
> - **Task (T)**: Classifying brain tumors as malignant or benign based on medical scans.
> - **Performance (P)**: Accuracy, precision, recall, and F1-score of tumor classifications.
> - **Experience (E)**: A dataset of thousands of labeled brain scans with known tumor classifications.

This framework helps us clearly define and evaluate any machine learning problem.

## 4. Features, Targets, and Data Types
Understanding data structure is crucial for machine learning.

![[fig-feature-target-data-types.png]]

**Data Point**: A single row or observation in your dataset (e.g., one patient's medical record).

**Feature**: An individual, measurable property or characteristic of a data point (input variables)
- [[Feature Engineering]] is the process of *creating new variables from existing ones to improve model performance*. It involves transforming raw data into features that better represent the underlying problem. This is a critical skill in machine learning.

**Target (Label)**: The variable you are trying to predict; the "answer" in your training data (corresponding target values or correct answers).

**Data Types**:
- **Labeled Data**: Includes both *features (input variables) and their corresponding target values (correct answers)*. This is essential for supervised learning. 
	- **Example**: A dataset of emails with each email marked as "spam" or "not spam".
- **Unlabeled Data**: Contains **only features without target values**. This is used in unsupervised learning.
	- **Example**: A collection of customer purchase records without any categorization or outcome labels.

## 5. The Three Pillars of Machine Learning
Machine learning is broadly divided into three main categories: supervised learning, unsupervised learning, and reinforcement learning.
### a. Supervised Learning
> [!definition]
> Uses **labeled data** (input-output pairs) to learn a mapping from inputs to outputs, enabling prediction of target variables for new, unseen data.

|       Input        |      Output      |                 Goal                 |
| :----------------: | :--------------: | :----------------------------------: |
| Known features (X) | Known target (Y) | Learn a function f(X) that maps to Y |
> [!example] Types of Supervised Learning:
>- **Classification**: Predicting discrete categories or classes.
> 	- *Example*: Email spam detection, medical diagnosis, image recognition. For example, predicting if an email is "spam" or "not spam" (binary classification).
> - **Regression:** Predicting continuous numerical values.
> 	- *Example*: House price prediction, temperature forecasting, sales estimation.

### b. Unsupervised Learning
> [!definition] 
> Finds *hidden patterns and structures in unlabeled data* without a specific target variable.

| Input                  | Output          | Goal                    |
| ---------------------- | --------------- | ----------------------- |
| Unlabeled features (X) | No known target | Discover data structure |
> [!example]
> - **Clustering**: Groups similar data points together. 
> 	- *Example*: customer segmentation and gene sequencing.
> - **Dimensionality Reduction**: Reduces features while preserving information.
> 	- *Example*: data visualization and noise reduction.
> - **Association Rule Learning**: Finds relationships between variables.
> 	- *Example*: Market basket analysis.
> - **Anomaly Detection**: Identifies unusual data points.
> 	- *Example*: Fraud detection, system monitoring.

### c. Reinforcement Learning
> [!definition]
> An agent learns to make decisions through **trial and error**, receiving **rewards or penalties** from the environment to optimize its behavior over time. The goal is to learn a policy to maximize cumulative reward over time.

**Key components:**
- *Agent*: The learner.
- *Environment*: The world the agent interacts with.
- *State*: The current situation.
- *Action*: The agent's choices.
- *Reward*: Feedback from the environment.
- *Policy*: The decision-making strategy.

> [!example]
> Game playing (chess, Go), autonomous vehicles, robot navigation, trading algorithms.

### d. Choosing the Right ML Approach
Several key factors influence the choice of ML approach:
1. **Data Availability**: Do you have labeled examples? If yes, supervised learning is possible.
2. **Problem Type**: Are you predicting something specific (supervised) or exploring data patterns (unsupervised)?
3. **Goal**: Classification, regression, pattern discovery, or decision-making?
4. **Domain**: Some fields favor certain approaches based on established practices.

## 6. The ML Pipeline: End-to-End Workflow
The ML pipeline represents the full lifecycle of a machine learning project, from raw data to a deployed model. It is an **iterative process**, not a linear one.

![[fig-ml-pipeline.png]]

| Stage                                  | Goal                                                                                           | Activities                                                                                                                                                                                                                                                    |
| -------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 - Data preparation and Preprocessing | Transform raw data in to a clean, structured format that models can understand.                | Data cleaning, normalization, scaling, and categorical encoding.                                                                                                                                                                                              |
| 2 - Model Training                     | Feed prepared data into an algorithm to learn patterns                                         | Use the **training set** (subset of data used to train model) to build the model.                                                                                                                                                                             |
| 3 - Evaluation                         | Assess a model's performance on separate, unseen test data.                                    | Use a **validation set** (data used to fine-tune model parameters and prevent overfitting) to fine-tune parameters. Then, use a **test set** (a separate subset of data) to evaluate the final model's performance, providing unbiased validation of results. |
| 4 - Optimization                       | Adjust hyperparameters to improve performance.                                                 | Interpret model decisions                                                                                                                                                                                                                                     |
| 5 - Deployment                         | Deploy the final model in to a production environment where it can make real-time predictions. |                                                                                                                                                                                                                                                               |
## 7. The Reality of Real-World Data
### a. The 80/20 Rule
In data science, the *80/20 rule* refers to the reality that data scientists typically spend the **majority of their time (80%) on data cleaning, preparation, and preprocessing**, with only **20% on actual modeling**. This highlights the crucial importance of data quality.
### b. "Garbage In, Garbage Out"
This principle means that **poor quality input data will inevitably lead to poor quality results**, regardless of how sophisticated the machine learning algorithm is. The model can only learn from the data it's given. Even the most sophisticated algorithm cannot overcome poor data quality. A model trained on biased or incorrect data will produce biased or incorrect results.
### c. Common Data Quality Issues
- **Missing Values**: Sensors fail, surveys are incomplete, databases have gaps.
- **Inconsistent Formats:** Different date formats, units, naming conventions.
- **Outliers and Errors**: Typos, measurement errors, data corruption.
- **Bias in Collection**: Sampling bias, historical bias.

> [!example]- Example: Geographic Bias in Climate Model
> If a climate model trained primarily on data from North America performs poorly when predicting climate patterns in Africa, this is an example of **sampling bias or geographic bias** in the training data. Certain regions are underrepresented or missing from the dataset.
>
> **Steps to Address**:
> 1. **Analyze data distribution**: examine the geographic coverage of training data to identify gaps.
> 2. **Collect additional data**: Gather more data from underrepresented regions.
> 3. **Investigate regional differences**: Research whether different environmental conditions require different modeling approaches.
> 4. **Validate across regions**: Test the updated model's performance across all geographic areas.
> 5. **Consider domain adaptation**: Use techniques to adapt the model to new geographic regions.

## 8. Ethical Considerations in Machine Learning
As future scientists and practitioners, you have a responsibility to consider the ethical implications of the machine learning systems you develop and deploy.

**Fairness and Non-discriminations**:
- **Concern**: Model should not discriminate against protected groups or exhibit unequal performance across different population. Consider historical biases in training data.
- **How to address**: Ensure training data includes diverse, representative samples from all demographic groups, regularly audit model performance across different populations; implement bias detection and mitigation techniques.

**Transparency and Explainability**:
- **Concern**: Stakeholders should understand how ML systems make decisions, especially in high-stakes applications.
- **How to address**: Use interpretable models when possible; provide explanations for AI recommendations; maintain human oversight in final decisions; document model limitations clearly. Transparency and explainability specifically refer to the requirement that stakeholders understand how ML systems make decisions.

**Accountability and Responsibility**:
- **Concern**: Unclear responsibility for errors and outcomes.
- **How to address**: Establish clear protocols for human oversight and error handling; maintain clear responsibility for model outcomes and decisions; conduct regular auditing and monitoring of deployed systems.

**Privacy and Data Protection**:
- **Concern**: Protecting sensitive patient or research data.
- **How to address**: Use data anonymization, secure storage, obtain proper consent; minimize data collection to what's necessary.

## 9. Application Example
> [!example] Spam Detection System
> **Feature:** Measurable and relevant properties of an email that can help classify it as spam or not spam.
> - *Examples*: Number of exclamation marks, presence of keywords like "FREE" or "URGENT", sender reputation score, email length, time sent, number of links.
>
> **Target/Label**: The outcome we are trying to predict.
> - *Example*: "Spam" or "Not Spam" (a binary classification problem)
>
> **Training Data**: Realistic and appropriately labeled data used to teach the model.
> - *Example*: Thousands of emails that have been manually labeled as spam or legitimate.
>
> **Performance Metric**: A suitable metric for classification problems to measure how ell the model performs.
> - *Example*: Accuracy, precision, recall, F1-score, or area under ROC curve


# Glossary

|                               | Definition                                                                                   |
| ----------------------------- | -------------------------------------------------------------------------------------------- |
| **Core Concepts**             | ------------------------------------------------------------                                 |
| Algorithm                     | A set of rules or instructions that a computer follows to solve a problem or complete a task |
| Data point                    | A single row or observation in your dataset                                                  |
| Feature                       | An individual, measurable property or characteristic of a data point                         |
| Target (Label)                | The variable you are trying to predict; the "answer" in your training data                   |
| T-P-E Framework               | Task, Performance measure, and Experience                                                    |
| **Types of machine learning** | ------------------------------------------------------------                                 |
| Supervised learning           | Learning with labeled data to predict a target variable                                      |
| Classification                | Predicting discrete categories or classes                                                    |
| Regression                    | Predicting continuous numerical values                                                       |
| Unsupervised learning         | Finding hidden patterns in unlabeled data without a specific target variable                 |
| Reinforcement learning        | An agent learns to make decisions through rewards and penalties                              |
| **ML Pipeline Stages**        | ------------------------------------------------------------                                 |
| Data Preparation              | Transforming raw data into a clean, structured format for models                             |
| Model Training                | The process of feeding data into an algorithm to learn patterns                              |
| Evaluation                    | Assessing a model's performance on separate, unseen test data                                |
| **Data and Evaluation Terms** | ------------------------------------------------------------                                 |
| Training Set                  | The subset of data used to train the model                                                   |
| Validation Set                | Data used to fine-tune model parameters and prevent overfitting                              |
| Test Set                      | A separate subset of data used to evaluate the final model's performance                     |
