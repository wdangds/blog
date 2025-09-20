---
title: The Machine Learning Landscape
tags:
  - machine-learning
draft:
---
## 1. What is Machine Learning?
Machine Learning (ML) is the science and art of programming computers to ==learn from data==. It empowers systems to improve at a task without being explicitly programmed for every scenario.

**Formal Definitions**:
> A "field of study that gives computers the ability to learn without being explicitly programmed".
> 
\- Arthur Samuel, 1959

> A computer program is said to learn from experience E with respect to some task T and some performance measure P, if its performance on T, as measured by P, improves with experience E.
>
\- Tom Mitchell, 1997 [^1]

> [!example]- Example: The Spam Filter
> Let's break down the spam filter example using Tom Mitchell's definition:
> - **Task (T)**: To identify and flag new emails as spam.
> - **Experience (E)**: A dataset of example emails, where each has been manually labeled as either spam or not spam ("ham"). This is called the *training set* (or sample).
> - **Performance Measure (P)**: The ratio of correctly classified emails, a metric known as *accuracy*.
> - **Learning:** The system's accuracy (P) improves as it is trained on more emails (E).

The part of the system that learns from the data and makes predictions is called *model*.

## 2. Why Use Machine Learning?
ML provides powerful alternatives to traditional programming, especially for complex problems.
### a. Traditional Approach vs. Machine Learning Approach
Consider building a spam filter:
- **Traditional Approach**:
	1. Manually observe patterns in spam emails (e.g., words like "free", "credit card")
	2. Write explicit rules for a detection algorithm (e.g., "if an email contains '4U', flag it as spam").
	3. Test and repeat the process, leading to a long and difficult-to-maintain list of complex rules.
	- This approach is not adaptive. If spammers change their tactics (e.g., using "For U" instead of "4U"), we must manually write new rules.
- **Machine Learning Approach**:
	1. The ML algorithm automatically learns which words and phrases are good predictors of spam by identifying frequent patterns in the training data.
	2. The resulting program is often shorter, easier to maintain, and more accurate.
	3. *It automatically adapts to change*. As users flag new types of spam containing "For U", the model can be retrained on this new data and will learn to flag these new patterns without manual intervention.
### b. Key Advantages of Machine Learning
ML is particularly effective for:
- **Problems requiring extensive fine-tuning or long lists of rules**: ML models can simplify code and improve performance.
- **Complex problems with no known traditional solution**: For tasks like speech recognition, the best solution is often an algorithm that learns from examples.
- **Fluctuating environments:** ML systems can be easily retrained on new data to stay up-to-date.
- **Gaining insights from large, complex datasets**: The process of discovering hidden patterns is known as *data mining*, an area where ML excels.
## 3. Examples of ML Applications
Machine learning can tackle an incredible breadth of tasks across various domains:

| Application Area   | Task Example                                                  | ML Category                         | Common Techniques Used                             |
| ------------------ | ------------------------------------------------------------- | ----------------------------------- | -------------------------------------------------- |
| Computer Vision    | Classifying products on a production line                     | Image Classification                | Convolutional Neural Networks (CNNs), Transformers |
| Medical Imaging    | Detecting tumors in brain scans                               | Semantic Image Segmentation         | CNNs, Transformers                                 |
| NLP                | Classifying news articles or summarizing documents            | Text Classification / Summarization | RNNs, CNNs, Transformers                           |
| Business           | Forecasting next year's revenue                               | Regression                          | Linear Regression, Random Forests, Neural Networks |
| Fraud Detection    | Identifying unusual credit card transactions                  | Anomaly Detection                   | Isolation Forests, Autoencoders                    |
| Marketing          | Segmenting clients based on purchase history                  | Clustering                          | k-Means, DBSCAN                                    |
| Data Visualization | Representing a high-dimensional dataset in a 2D or 3D diagram | Dimensionality Reduction            | Various techniques                                 |
| Gaming             | Building an intelligent bot for a game                        | Reinforcement Learning (RL)         | Various RL algorithms                              |



[^1]: see [[Introduction to Machine Learning#3. The Formal Definition T-P-E Framework|lecture 1]]


