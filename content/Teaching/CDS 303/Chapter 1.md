---
title: Data Science, Data Mining, and the Process of Turning Data into Knowledge
---

## 1. Introduction: What is Data Science?

Data science can be understood as the modern practice of applying the scientific method to data through computation. Its purpose is not merely to collect data, summarize, or build software systems, but to transform raw observations into reliable explanations, predictions, and decisions. In this sense, data science is both a technical discipline and an applied problem-solving framework. It combines statistical reasoning, computation implementation, and domain knowledge in order to extract useful information from complex data.

The rise of data science did not happen suddenly. Its intellectual roots can be traced to earlier discussions about "data analysis" as a field in its own right. John Tukey argued in 1962 that data analysis deserved recognition as more than a branch of mathematical statistics; it was a practical science concerned with learning from data[^1]. Later, William Cleveland proposed expanding statistics into what he called `data science`, emphasizing computation, models, applications, pedagogy, and tools for practicing data analysts[^2]. David Donoho later described the modern data science movement as part of a longer historical trajectory that includes statistics, computation, visualization, machine learning, and reproducible research[^3].

> [!definition] Definition
> *Data science is the interdisciplinary process of using data, computation, statistical reasoning, and domain knowledge to understand phenomena, make predictions, and support decisions.*

This definition is intentionally broad. A data scientist may use regression models, neural networks, visualization, databases, simulation, causal reasoning, or cloud-based pipelines. What unifies these activities is the goal: to convert data into knowledge that can be evaluated, communicated, and used.

## 2. The Interdisciplinary Nature of Data Science

A common way to explain data science is through three overlapping skill areas: **data analysis**, **software engineering**, and **domain expertise**. 

### 2.1. Data Analysis

The first dimension is data analysis. This includes descriptive statistics, visualization, statistical inference, machine learning, predictive modeling, uncertainty quantification, and evaluation. A data scientist must know how to ask questions such as:
- What patterns are visible in the data?
- Which variables appear to be associated?
- Can we predicted an outcome accurately?
- How uncertain are the predictions?
- Are the observed relationships meaningful or accidental?
- Does the model generalize to unseen data?
Data analysis provides the scientific and mathematical foundation of data science. Without it, data science becomes a collection of software tools without a reliable way to judge truth, uncertainty, or error.

### 2.2. Software Engineering

The second dimension is software engineering. Real data science rarely happens in perfectly-clean textbook datasets. Data must be collected, stored, queried, cleaned, transformed, merged, modeled, visualized, and deployed. These tasks require programming ability and system-level thinking.

Software engineering matters because data science is often performed at scale. A model that works on a small CSV file may fail when applied to millions of records, streaming data, distributed databases, or production systems. Therefore, data scientists must often understand some (programming) languages such as Python, R, SQL, or Julia; tools for data pipelines; version control; reproducibility; and computational efficiency.

This is one reason data science differs from traditional statistical analysis. The data scientist is not only concerned with the mathematical validity of a model, but also with whether the full computational workflow can be reproduced, maintained, scaled, and deployed.

### 2.3. Domain Expertise

The third dimension is domain expertise. Data do not explain themselves. A dataset about hospital patients, airline delays, financial transactions, customer behavior, or climate observations requires contextual understanding. Domain expertise helps the data scientist formulate meaningful questions, define correct target variables, identify impossible values, interpret model results, or even decide predictions make practical sense.

For example, a model may discover that a certain medical treatment is associated with worse patient outcomes. Without medical knowledge, one might incorrectly conclude that the treatment causes harm. However, the treatment may be given only to the most severe patients. In this case, the apparent relationship reflects selection bias or confounding rather than a simple causal effect. Domain expertise is necessary to avoid such mistakes.

Thus, data science sits at the intersection of three forms of knowledge:

| Dimension            | Main Question                                | Example Skill                                          |
| -------------------- | -------------------------------------------- | ------------------------------------------------------ |
| Data analysis        | What can be learned from the data?           | Statistics, machine learning, visualization            |
| Software engineering | How can the process be implemented reliably? | Programming, databases, pipelines                      |
| Domain expertise     | What does the result mean in context?        | Business, medicine, transportation, climate, education |

A strong data science requires all three. A technical elegant model may be useless if it answers the wrong question. A meaningful question may remain unanswered if the data pipeline is broken. A large dataset may produce misleading results if the analysis ignore bias, missingness, or uncertainty.

## 3. Data Mining and Knowledge Discovery

The term `data mining` is often used alongside data science. In everyday usage, data mining may refer to finding useful patterns in data. However, in the classical Knowledge Discovery in Databases literature, data mining has a more specific meaning. Fayyad, Piatetsky, Piatetsky-Shapiro, and Smyth define Knowledge Discovery in Databases, or KDD, as the broader of discovering useful knowledge from data, while data mining is the algorithmic step within that larger process where patterns or models are extracted[^4].

This distinction is important. Data mining is not the entire data science process. It is one part of it. Before mining patterns, the data scientist must understand the problem, select data, clean the data, transform variables, and decide what type of pattern would be useful. After mining patterns, the data scientist must evaluate them, interpret them, and determine whether they should be used in practice.

> [!info] Distinction
> - **KDD/Data science process**: The full workflow from problem formulation to deployed knowledge.
> - **Data mining**: The modeling or pattern-discovery stage inside that workflow.

> [!example]- 
> Suppose a retail company wants to identify customers likely to buy a new product. The data mining step might involve training a classification model. But the broader data science process includes defining what "likely to buy" means, selecting customer records, cleaning missing values, engineering behavior features, evaluating performance, explaining the model to marketing teams, and monitoring the model after deployment.

## 4. The Data Science Cycle

Data science is often mistakenly described as a linear sequence: collect data, clean data, train a model, deploy it. In practice, the process is iterative. A visualization may reveal missing values, forcing the analyst to revisit data collection. A model may perform poorly, forcing new feature engineering. Deployment may expose changing data patterns, requiring model retraining.

The CRISP-DM framework, one of the most widely cited process models for data mining projects, organizes the life cycle into six phases: business understanding, data understanding, data preparation, modeling, evaluation, and deployment. These phases are not linear; feedback loops are expected.

![CRISP-DM framework](https://enterprise-knowledge.com/wp-content/uploads/2025/03/CRISP-DM-1.png)

From my perspective, the process can be presented in the following expanded form:

```mermaid
flowchart LR
A[Problem formulation] --> B[Data capture and selection]  
B --> C[Data understanding and exploratory analysis]  
C --> D[Data preparation and preprocessing]  
D --> E[Transformation and feature engineering]  
E --> F[Modeling and data mining]  
F --> G[Evaluation and interpretation]  
G --> H[Deployment and decision support]  
H --> I[Monitoring, feedback, and revision]  
  
I --> A  
C --> B
G --> F
```

1. Problem formulation
2. Data capture and selection
3. Data understanding and exploratory analysis
4. Data preparation and preprocessing
5. Transformation and feature engineering
6. Modeling and data mining
7. Evaluation and interpretation
8. Deployment and decision support
9. Monitoring, feedback, and revision

Each stage is discussed below.

## 5. Problem Formulation

The first stage of data science is not data collection. We have to define the problem first. Before building a dataset or choosing an algorithm, the data scientist must define the question.

A weak question is vague:

> "Can we use data to improve sales?"

A stronger data science question is operational:

> "Can we predict, at the time of first customer inquiry, whether a customer is likely to purchase a new car within the next 30 days?"

The second question is better because it defines the unit of analysis, prediction target, time horizon, and decision context. It also suggests what data might be needed: customer demographics, inquiry channel, previous purchases, income range, geographic region, and interaction history.

Problem formulation usually requires collaboration with domain experts. The data scientist must translate a practical concern into a technical objective. For example:

| Practice Goal               | Data Science Translation                                  |
| --------------------------- | --------------------------------------------------------- |
| Reduce customer churn       | Predict probability of churn within 60 days.              |
| Improve hospital operations | Forecast emergency department arrivals by hour.           |
| Detect fraud                | Classify transactions as fraudulent or legitimate.        |
| Improve marketing           | Segment customers by purchase behavior.                   |
| Predict salary              | Estimate salary from experience, education, and job type. |

A data science project can make no sense if this stage is rushed. A technically impressive model may have little value if it solves a poorly defined problem.

## 6. Data Capture and Selection

Once the problem is formulated, the next step is to identify relevant data sources. Data may come from internal databases, surveys, sensors, transaction logs, public APIs, web data, text documents, images, or experimental measurements.

> [!example]-
> In a project predicting whether customers will buy a new car, a company may collect information from sales inquiries: age, gender, occupation, annual income, previous purchase history, location, inquiry date, vehicle type, and whether the customer eventually purchased the car.

Data selection involves deciding which observations and variables belong in the project. Sometimes, the current available data may not match the desired problem. A company may want to predict future purchases, but its database may only include customers who already interacted with the company. This creates selection bias: the data represent only a subset of the real population.

Important questions at this stage include:
- Who or what is represented in the data?
- What population is missing?
- How were the data collected?
- Are the measurements reliable?
- Is the target variable available?
- Are there legal, ethical, or privacy restrictions?
- Does the data source reflect the decision context?

Data capture shapes everything that follows.

## 7. Data Understanding and Exploratory Analysis

After data are collected, the data scientist must understand them. This stage often uses exploratory data analysis, visualization, descriptive statistics, and data quality checks.

Exploratory analysis may reveal:
- Missing values
- Duplicate records
- Outliers
- Impossible values
- Inconsistent categories
- Class imbalance
- Time trends
- Spatial patterns
- Correlated variables
- Data leakage

> [!example]-
> Suppose a rainfall prediction project uses sensor readings from weather stations. A visualization may show negative rainfall values or extremely large readings far outside the physical range of the sensor. These observations may indicate sensor malfunction, unit conversion errors, or data entry mistakes. In that case, the analyst may need to return to the data capture stage and obtain corrected readings.

Exploratory analysis is not separate from modeling. It directly affects modeling choices. If the target class is rare, accuracy may be misleading. If time trends exist, random train-test splitting may cause leakage. If variables are highly skewed, transformations may be needed. If geographic patterns are present, spatial features may improve prediction.

## 8. Data Preparation and Preprocessing

Raw data are usually messy. Data preparation converts raw observations into a reliable modeling dataset. This stage often takes more time than modeling itself.

Common preprocessing tasks include:

| Task                    | Purpose                                          |
| ----------------------- | ------------------------------------------------ |
| Removing duplicates     | Prevent repeated records from distorting results |
| Handling missing values | Avoide                                           |





---
[^1]: JTukey, J. W. (1962). _The future of data analysis_. Annals of Mathematical Statistics, 33(1), 1–67. [https://doi.org/10.1214/aoms/1177704711](https://doi.org/10.1214/aoms/1177704711).
[^2]: Cleveland, W. S. (2001). _Data science: An action plan for expanding the technical areas of the field of statistics_. International Statistical Review, 69(1), 21–26. [https://www.jstor.org/stable/1403527](https://www.jstor.org/stable/1403527).
[^3]: Donoho, D. (2017). _50 years of data science_. Journal of Computational and Graphical Statistics, 26(4), 745–766. [https://doi.org/10.1080/10618600.2017.1384734](https://doi.org/10.1080/10618600.2017.1384734) 
[^4]: Fayyad, U., Piatetsky-Shapiro, G., & Smyth, P. (1996). _From data mining to knowledge discovery in databases_. AI Magazine, 17(3), 37–54. [https://www.kdnuggets.com/gpspubs/aimag-kdd-overview-1996-Fayyad.pdf](https://www.kdnuggets.com/gpspubs/aimag-kdd-overview-1996-Fayyad.pdf)