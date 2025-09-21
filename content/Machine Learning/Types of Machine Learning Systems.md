---
title: Types of Machine Learning Systems
draft:
tags:
  - machine-learning
  - unsupervised
  - supervised
  - regression
  - classification
---
ML systems can be categorized based on several criteria. These categories are not mutually exclusive; for instance, a spam filter can be a supervised, model-based, online learning system.
## 1. Classification by Training Supervision
This criterion is based on the amount and type of human supervision during training.
### a. Supervised Learning
In supervised learning, the training data fed to the algorithm includes the desired solutions, called *labels* or *targets*.
- **Classification**: The task is to predict a category or class. The spam filter is a classic example, where each email is labeled as "spam" or "ham".
- **Regression**: The task is to predict a continuous numeric value. For example, predicting a car's price based on its features (mileage, age, brand). The data would include cars with their features and their actual prices (the target).
	- Some algorithms, like logistic regression, can be used for classification by outputting a probability.

![[fig-label.png]]
### b. Unsupervised Learning
In supervised learning, the training data is **unlabeled**, and the system tries to find hidden patterns or structure without a "teacher".
- **Clustering**: Grouping similar data instances together. For example, a clustering algorithm could analyze blog visitor data to identify distinct groups (e.g., teenagers who like comics, adults who like sci-fi).
- **Dimensionality Reduction**: Simplifying data by reducing the number of features (dimensions) without losing too much information. This can be done by merging correlated features, a process called *feature extraction*. Reducing dimensions makes algorithms run faster and can sometimes improve performance.
- **Anomaly Detection**: Identifying unusual instances that do not conform to the expected pattern. The system is trained on mostly normal instances and learns to flag anything that looks different, such as fraudulent credit card transactions.
- **Association Rule Learning**: Discovering interesting relationships between attributes in large datasets. For instance, a supermarket might find that customers who buy barbecue sauce also tend to buy steak.
### c. Semi-Supervised Learning
This approach is used when you have a large amount of unlabeled data and only a small amount of labeled data, as labeling is often costly and time-consuming.
- **How it works**: These algorithms are often a combination of unsupervised and supervised methods. For example, you could first use a clustering algorithm on all the data (labeled and unlabeled) to group similar instances. Then, you can propagate the labels from the labeled instances to all the other instances in their respective clusters.

![[fig-semi-supervised.png]]

> [!example]
> Google Photos can automatically cluster photos of the same person (unsupervised part). The user then provides a single label ("Person A"), and the system can name that person in all photos (supervised part).

### d. Self-Supervised Learning
In this approach, a fully labeled dataset is generated from a completely unlabeled one. A model is trained on this generated dataset, after which it can be fine-tuned for the actual task.

> [!example] Example: Image Repair
> 1. Take a large dataset of unlabeled images.
> 2. For each image, randomly mask a small part of it.
> 3. Train a model where the *input* is the masked image and the *label* is the original, unmasked image.
> 4. The model learns to "repair" the image. To do this, it must learn features about the world (e.g., what a cat's face looks like)
> 5. This pre-trained model can then be adapted for a different supervised task, like pet classification, using a small set of labeled data. This process of transferring knowledge from one task to another is called *transfer learning*.

![[fig-self-supervised.png]]

### e. Reinforcement Learning (RL)
Reinforcement Learning is fundamentally different. A learning system, called an *agent*, interacts with an *environment*.
- The agent observes the environment, performs action, and receives *rewards* (or *penalties*) in return.
- Its goal is to learn the best strategy, known as a *policy*, to maximize its cumulative reward over time.

> [!example]
> DeepMind's AlphaGo learned its winning policy for the game of Go by analyzing millions of games and then playing against itself to discover new strategies.

## 2. Classification by Learning Capability
This criteria distinguishes whether a system can learn incrementally.
### a. Batch Learning (Offline Learning)
- The system cannot learn incrementally. It must be trained on all available data at once.
- This is typically done offline, taking significant time and computing resources. Once trained, the model is deployed and no longer learns; it only makes predictions.
- **Adapting to Change**: To learn from new data, you must train a new version of the model from scratch on the full dataset (old plus new data) and replace the old model. This process can be automated.
- **Model Rot**: Over time, a model's performance can degrade as the real world evolves, a phenomenon called *model rot* or *data drift*. Regular retraining is necessary to combat this.
- **Limitations**: This approach is resource-intensive and not suitable for systems needing to adapt rapidly or those with limited resources.
### b. Online Learning (Incremental Learning)
- The system is trained incrementally by feeding it data instances sequentially, either one by one or in small groups called *mini-batches*.
- Each learning step is fast and cheap, allowing the system to learn on the fly as new data arrives.

![[fig-online-learning.png]]
- **Use Cases**: Ideal for systems needing rapid adaption (e.g., stock market prediction) or with limited resources. It is also used for training on datasets too large to fit in a single machine's memory, a technique called *out-of-core learning*.

![[fig-out-of-core.png]]

> [!warning]
> Out-of-core learning is usually done offline (i.e., not on the live system), so *online learning* can be a confusing name. Think of it as *incremental learning*.

- **Learning Rate**: A key parameter is the *learning rate*, which controls how quickly the model adapts. A high rate means rapid adaptation but also forgetting old data faster. A low rates means more inertia and less sensitivity to noise.
- **Challenge**: The system is vulnerable to performance degradation if fed bad data. Close monitoring is essential to detect performance drops.

## 3. Classification by Generalization Method
This criterion describes how a system generalizes from training examples to make predictions on new, unseen instances.
### a. Instance-Based Learning
- The system learns by memorizing the training examples.
- When a new instance arrives, it uses a *similarity measure* to compare it to the known examples (or a subset) and makes a prediction based on the most similar ones.

> [!example]
> To classify a new data point, the system finds the most similar training instances and assigns the class that is most common among them.

![[fig-instance-based.png]]

### b. Model-Based Learning
This approach involves building a model from the training examples and then using that model to make predictions.

![[fig-model-based-learning.png]]

> [!tip] A Typical Model-Based Learning Workflow
> 1. **Study the Data**: Analyze the data to understand its structure. For example, plotting life satisfaction against GDP per capita reveals potential trend.
> ![[fig-gdp-life-satisfaction.png]]
> 2. **Select a Model**: Choose a type of model that seems appropriate. For the GDP data, a *linear model* is a simple starting point. This model has *parameters* (e.g., $\theta_0$ and $\theta_1$ in $\text{life\_satisfaction}=\theta_0+\theta_1\times \text{GDP\_per\_capita}$) that can be tweaked.
> ![[fig-possible-linear-model.png]]
> 3. **Train the Model**: This involves finding the optimal parameter values that make the model best fit the training data. This is typically done by defining a *cost function* that measures how "bad" the model is (i.e., the distance between the predictions and actual data) and using a learning algorithm to find the parameters that minimize this cost.
> ![[fig-good-linear.png]]
> 4. **Apply the Model for Predictions (Inference)**: Use the trained model with its final parameters to make predictions on new instances. For example, using the model to predict the life satisfaction for Cyprus, a country not in the original dataset. 
> 
>

The following Python code demonstrates this workflow using the Scikit-Learn library:

```python
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

# 1. Load and prepare the data
data_root = 'https://github.com/ageron/data/raw/main/'
lifesat = pd.read_csv(data_root + "lifesat/lifesat.csv")
X = lifesat[["GDP per capita (USD)"]].values
y = lifesat[["Life satisfaction"]].values

# (Optional) Visualize the data
lifesat.plot(kind='scatter', grid=True.
		x="GDP per capita (USD)", y="Life satisfaction")
plt.show()

# 2. Select a linear model
model = LinearRegression()

# 3. Train the model
model.fit(X, y)

# 4. Make a prediction for a new instance
X_new = [[37_655.2]] # Cyprus' GDP per capita
print(model.predict(X_new))
# Output: [[6.30165767]]
```


