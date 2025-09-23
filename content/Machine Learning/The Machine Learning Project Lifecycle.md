---
title: The Machine Learning Project Lifecycle
tags:
  - machine-learning
  - mlops
  - lifecycle
draft:
---
A typical machine learning project can be broken down into eight main steps:
1. [[#1. Look at the Big Picture|Look at the big picture]]: Understanding the business objective and frame the problem.
2. [[Get and Prepare the Data|Get the data]]: Find and acquire the necessary data.
3. [[Explore and Visualize the Data|Explore and visualize the data]]: Analyze the data to gain initial insights.
4. [[Prepare the Data for Machine Learning Algorithms|Prepare the data]]: Clean, transform, and preprocess the data for ML algorithms.
## 1. Look at the Big Picture
The first step is to understand the project's goals and context. This involves asking critical questions to define the problem correctly.
### a. Frame the Problem
Before writing any code, we must understand the *business objective*. How will the model be used, and what benefit will it provide the company? The answer determines how we frame the problem, select algorithms, and choose performance metrics.

> [!example] Example Scenario
> A real estate company wants to build a model to predict the median housing price in any California district (a block group with 600-3000 people).
> > [!tip] Business Objective
> > The model's output (predicted price) will be fed into a downstream system that decides whether an area is worth investing in. This directly impacts revenue.
> > > [!solution] Current Solution
> > > Currently, prices are estimated manually by experts using complex rules. This process is costly, time-consuming, and inaccurate, with estimates often being off by more than 30%.

This flow of data processing components is known as a *data pipeline*, where each self-contained component processes data and passes it to the next. 
### b. Define the Machine Learning Task
Based on the problem framing, we can determine the type of ML task:
- **Supervised Learning**: This is a supervised learning task because the dataset includes labeled example (the median housing price for each district).
- **Regression Task**: The goal is to predict a continuous value (price), making it a regression task.
	- It is a *multiple regression* problem because it uses multiple features (population, median income, etc.) to make a prediction.
	- It is a *univariate regression* problem because it predicts a single value per district.
- **Batch Learning**: The data is small enough to fit in memory, and there is no continuous flow of new data requiring rapid adaption,, so batch learning is suitable.

>[!tip]
>If the data were huge, we could either split our batch learning work across multiple servers (using the MapReduce technique) or use an [[Types of Machine Learning Systems#b. Online Learning (Incremental Learning)|online learning]] technique.
### c. Select a Performance Measure
For regression tasks, the most common performance measure is the **Root Mean Square Error (RMSE)**. It is sensitive to large errors, which is often desirable.
$$
\text{RMSE}(\mathbf{X}, h) = \sqrt{\frac{1}{m}\sum_{i=1}^{m}(h\mathbf{X}^{(i)} - y^{(i)})^2}
$$
Where:
- $m$ is the number of instances in the dataset.
- $\mathbf{X}^{(i)}$ is a vector of all feature values for the $i$-th instance.
- $y^{(i)}$ is the label (the desired output value) for that instance.
- $h$ is the system's prediction function, also called a hypothesis. $\hat{y}^{(i)}=h\mathbf{X}^{(i)}$ is the predicted value.
- $\text{RMSE}(\mathbf{X},h)$ is the cost function measured on the set of examples $\mathbf{X}$ using hypothesis $h$.

If the dataset contains many outliers, the **Mean Absolute Error (MAE)** maybe a better choice, as it is less sensitive to large errors.
$$
\text{MAE}(\mathbf{X}, h)=\frac{1}{m}\sum_{i=1}^m\mid h\mathbf{X}^{(i)}-y^{(i)}\mid
$$

These metrics correspond to different mathematical norms: RMSE uses the Euclidean norm ($l_2$ norm), while MAE uses the Manhattan norm ($l_1$ norm). The ==higher the norm index==, the ==more it focuses on large values==.
### d. Check Assumptions
Finally, list and verify all assumptions. Misaligned assumptions can lead to wasted effort.
> [!example] Example Assumption
> We assume the downstream system needs the exact predicted price. If it only needed price categories (e.g., "cheap", "expensive"), this should have been framed as a classification task. After discussion with the relevant team, it is confirmed they need the actual price values.
