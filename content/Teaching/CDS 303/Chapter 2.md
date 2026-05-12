---
title: Context and Data Understanding
draft:
tags:
  - context
  - data-understanding
  - data-mining
---

Data science does not begin with data. It begins with a situation.

A dataset is never a complete copy of reality. It is a partial, structured, and historically produced representation of some phenomenon. Every row, column, label, sensor reading, transaction record, or survey response has already passed through a chain of choices: what to observe, who to observe, when to observe, how to measure, what to exclude, how to store, and how to interpret. For this reason, data understanding have to be a scientific and ethical act.

[[Chapter 1|The previous chapter]] introduced data science as an interdisciplinary process for transforming data into knowledge. This chapter moves one level deeper. We want to know __"What does it mean to understand data before modeling it?"__. The answer is that one must understand the __context__ in which data are produced, the __limitations__ of what they represent, the __social and technical systems__ that shape them, and the __ethical consequences__ of using them for decisions. 

At this point, one must move beyond the idea of data as a static resource. Data should instead be viewed as a __socio-technological construct__: something produced by people, institutions, instruments, software systems, economic incentives, and historical circumstances. For example, consider a dataset of hospital readmission records. Technically, it may contain variables such as age, diagnosis code, length of stay, insurance type, prior visits, and readmission status. But the data are also shaped by hospital policy, insurance coverage, physician judgement, patient behavior, coding practices, and structural inequalities in healthcare access. A model trained on such data does not simply learn "health risk"; it may also learn the structure of the healthcare system that produced the observations.

So we come to the central argument of this chapter:

> __Data understanding requires context understanding. Without context, data means nothing.__

## 1. Context

In data science, __context__ refers to the circumstances, conditions, relationships, and meanings surrounding an observation. It includes the environment in which data are generated, the purpose for which they are collected, the actors involved, the measurement process, and the decision setting in which the data will be used. 

> [!definition]
> __Context is the situational frame that gives data meaning.__

Context is therefore part of the structure that determines what the data are, what they mean, and how they can be responsibly used.

Paul Dourish argues that conventional approaches often treat context as something that can be represented in advance as a stable set of measure variables, but this misses the way context emerges through activity and interaction. In his view, context is relational, dynamic, and produced through practice[^1]. A variable may have one meaning in one decision environment and another meaning elsewhere. For example, "number of previous purchases" in a retail dataset may indicate customer loyalty, but in another setting it may indicate financial pressure, seasonal demand, or limited product alternatives. The variable itself does not carry a universal meaning; it depends on its context.

> [!example]-
> "Temperature" may be a relevant contextual variable in several systems, but its meaning changes by activity:
> 
> | Setting   |  Temperature Means   |
> | --- | --- |
> | Weather forecasting  |  Atmospheric condition   |
> | Retail recommendation  |  Seasonal purchase signal   |
> | Food storage  |  Safety condition   |
> | Manufacturing | Process-control variable | 
> | Healthcare | Possible symptom |
>
> The same measured value can support different interpretations depending on the task. A temperature of 38°C may indicate a hot summer day in one dataset, a dangerous fever in a clinical dataset, or an equipment warning in an industrial sensor stream.

Thus, data understanding requires asking:
- What activity produced this data?
- What entity is being represented?
- What environment surrounds the observation?
- What decision will be made from the data?
- What assumptions connect the measurement to the phenomenon of interest?

A dataset without these answers is scientifically fragile.

## 2. The Ontology of Data: Why "Raw Data" is Misleading

### 2.1. Data are Produced

A critical idea in modern data studies is that "raw data" is a misleading phrase. Data are not naturally occurring objects waiting to be collected. They are produced through instruments, categories, protocols, database schemas, institutional incentives, and human decisions. As the result, data are always already shaped by the conditions of their production[^2]. Similarly, large-scale data should not be treated as neutral or self-explanatory; big data is embedded in social, methodological, and interpretive assumptions[^3].

This does not mean that data are useless or purely subjective. Rather, it means data must be interpreted as evidence produced under specific conditions. Data are powerful precisely because they can support systematic analysis, but their evidentiary value depends on understanding how they cam into being.

### 2.2. Theory-Ladenness of Data

All data collection depends on prior theory, even when that theory is implicit. Before collecting data, we must decide what counts as an object, event, variable, category, or outcome.

>[!example]-
> In an educational dataset, the variable "student success" might  be measured by course grade, graduation status, retention, GPA, employment, or self-reported learning. Each choice encodes a different theory of what "success" means. A model trained on course grades learns patterns associated with grades, not necessarily learning, intellectual development, or long-term achievement.
>
> Similarly, in criminal justice data, "crime rate" may reflect reported crimes, arrests, convictions, police deployment, neighborhood surveillance, or legal definitions. Treating such a variable as a direct measure of criminal behavior ignores the institutional process that produced it.

### 2.3. The Vantage Point Problem

Every dataset is collected from a vantage point. This vantage point determines what becomes visible and what remains invisible. 

A company's customer dataset captures people who interacted with the company, not everyone who might need the product. A hospital dataset captures people who reached the hospital, not everyone who was sick. A social media dataset captures those who use the platform, not society as a whole. A sensor network captures locations where sensors were installed, not necessarily the true spatial distribution of the phenomenon.

This is the _vantage point problem_: data reflect the position of the observer. In data science, the observer may be a person, organization, platform, institution, or measurement device. Understanding the observer is part of understanding the data.

## 3. Data Understanding as Scientific Practice

### 3.1. Beyond Summary Statistics

Data understanding is often associated with Exploratory Data Analysis, or EDA. EDA is a scientific practice of becoming familiar with the structure, limitations, anomalies, and possible meanings of a dataset.

Summary statistics are useful, but they are incomplete. A mean, median, standard deviation, or correlation coefficient compresses a distribution into a small number of values. That compression may hide skewness, multimodality, outliers, nonlinear relationships, missingness patterns, or subgroup differences.

> [!example]-
> Suppose a dataset of house prices has a median price of $160,000. That number may be accurate, but it does not reveal whether most houses are clustered near the median, whether a few luxury homes create a long right tail, whether there are multiple housing submarkets, or whether some values are erroneous. A histogram, box-plot, density plot, or geographic visualization may reveal structure that a table of summary statistics cannot.

We will discuss about EDA more carefully in [[Chapter 3|Chapter 3]]

### 3.2. The Shape of Data

To understand data, we must inspect the "shape" of the dataset. Shape refers to the distributional, relational, temporal, and structural patterns within the data.

Important questions include:

| Aspect        | Guiding Question                                                       |
| ------------- | ---------------------------------------------------------------------- |
| Distribution  | Are variables symmetric, skewed, heavy-tailed, or multimodal?          |
| Missingness   | Which values are missing, and is the missingness random or systematic? |
| Outliers      | Are extreme value errors, rare events, or meaningful cases?            |
| Dependence    | Are observations independent, clustered, temporal, or spatial?         |
| Class balance | Are some outcomes rare?                                                |
| Measurement   | Are variables measured consistently?                                   |
| Granularity   | Are observations recorded at the correct level of detail?              |
| Stability     | Does the data-generating process change over time?                     |

>[!example]- Example: House Price Data
> Consider a housing dataset with the following variables:
> - Sale price
> - Square footage
> - Number of bedrooms
> - Number of bathrooms
> - Year built
> - Neighborhood
> - School district
> - Distance to city center
> - Sale date
>
> A novice analysis may begin by calculating average price and fitting a regression model. A deeper data understanding process would ask:
> - Are prices skewed?
> - Are luxury properties creating outliers?
> - Are neighborhoods mixing different housing markets?
> - Are sale prices inflation-adjusted?
> - Are there seasonal effects?
> - Are missing values concentrated in older homes?
> - Are square footage values measured consistently?
> - Is the model being asked to predict current prices using information only available after sale?

## 5. The Illusion of "n = all"

### 5.1. Big Data is Not Whole Data

One of the most dangerous mistakes is modern data science is the belief that large data automatically solves the problem of representation. This is sometimes called the illusion of "__n = all__". The analyst assumes that because the dataset is large, it must be complete.

But large data are often incomplete in systematic ways. A dataset may contain millions of observations and still exclude the most important population. Social media data may be massive but biased toward platform users. Search query data may be enormous but shaped by interface design and media attention. Customer data may be large but limited to people already inside the company's ecosystem.

Scale can create a false sense of objectivity and completeness. The size of a dataset does not remove the need for interpretation, sampling logic, or methodological caution.

### 5.2. Bounded Rationality and Partial Observation

Because data are incomplete, decision-making always occurs under bounded rationality. Bounded rationality refers to describe decision-making under limited information, limited cognitive capacity, and limited time[^4]. In data science, bounded rationality appears because models are built from partial observations of a complex world.

A model may optimize within the boundaries of available data, but those boundaries may not align with the real decision problem. For example, a hiring model may predict which applicants resemble historically successful employees. But if historical hiring was biased, then the model's apparent rationality is bounded by the organization's behavior.

Thus, data scientist must ask:
- What part of reality is captured?
- What part is missing?
- Who is absent from the data?
- Which variables are proxies rather than direct measurements?
- What historical process produced the labels?
- Are we optimizing for the true goal or a convenient substitute?

A large dataset does not eliminate uncertainty; in fact, it can hide uncertainty behind volume.

## 6. Information Fusion and Situation Awareness

### 6.1. Information Fusion

Data analysts more often combine heterogeneous sources rather than a single dataset: transaction records, sensor streams, demographic data, whether data, geographic information, text, images, logs, and expert knowledge. This process is often called __information fusion__.

> [!definition]
> __Information fusion is the process of combining information from multiple sources into a more coherent representation of a situation.__

In human factors research, situation awareness is commonly defined through three levels: perceiving relevant elements in the environment, comprehending their meaning, and projecting their future status. We often use [[Endsley's theory of situation awareness]] in dynamic decision-making systems such as aviation, emergency response, healthcare, and control systems[^5]. Many applied systems must do the same thing within the framework:
1. _Perceive_ signals from data.
2. _Comprehend_ what those signals mean in context.
3. _Project_ likely future states.
4. _Act_ through a decision, recommendation, alert, or intervention.

### 6.2. Four Levels of Inference

An adaptive data system can be understood through four levels of inference.

__(1) Data Inference__

Data inference refers to conclusions drawn directly from observed data. For example:
- Sales increased by 12% last month.
- A sensor recorded a temperature spike.
- A customer clicked on three product pages.
- A patient's heart rate increased.

This level is descriptive. It tells us what was observed.

__(2) Context Inference__

Context inference interprets the observation in relation to other conditions. For example:
- Sales increased because of a holiday promotion.
- The temperature spike occurred during a known equipment cycle.



---
[^1]: Dourish, Paul. “What We Talk about When We Talk about Context.” _Personal and Ubiquitous Computing_ 8, no. 1 (2004): 19–30. [https://doi.org/10.1007/s00779-003-0253-8](https://doi.org/10.1007/s00779-003-0253-8).
[^2]: Gitelman, Lisa, ed. _“Raw Data” Is an Oxymoron_. The MIT Press, 2013. [https://doi.org/10.7551/mitpress/9302.001.0001](https://doi.org/10.7551/mitpress/9302.001.0001).
[^3]: Boyd, Danah, and Kate Crawford. “CRITICAL QUESTIONS FOR BIG DATA: Provocations for a Cultural, Technological, and Scholarly Phenomenon.” _Information, Communication & Society_ 15, no. 5 (2012): 662–79. [https://doi.org/10.1080/1369118X.2012.678878](https://doi.org/10.1080/1369118X.2012.678878).
[^4]: Selten, Reinhard. “Bounded Rationality.” _Journal of Institutional and Theoretical Economics (JITE) / Zeitschrift Für Die Gesamte Staatswissenschaft_ 146, no. 4 (1990): 649–58.
[^5]: Endsley, Mica R. “Toward a Theory of Situation Awareness in Dynamic Systems.” _Human Factors_ 37, no. 1 (1995): 32–64. [https://doi.org/10.1518/001872095779049543](https://doi.org/10.1518/001872095779049543).