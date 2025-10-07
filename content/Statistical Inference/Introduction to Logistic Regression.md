---
title: Introduction to Logistic Regression
tags:
  - logistic-regression
  - "#regression"
---
**Logistic regression** is a modeling tool used when the response variable is a [[Introduction to Multiple Regression#a. Two-Level Predictors (Indicator Variables)|two-level categorical variable]] (e.g., yes/no). It is a type of Generalized Linear Model (GLM).

> [!info] GLM Approach
> GLMs uses a two-stage process:
> 1. Model the response using a probability distribution (e.g., binomial), and
> 2. Model the parameter of that distribution using a special form of multiple regression.

This is necessary because the nature of the categorical response variable means regular multiple regression residuals would not approximate a normal distribution.

## 1. Resume Data Case Study
The study examined the effect of race and sex on job application *callback rates* using fake resumes. Because attributes were randomly assigned, the study allows for the inference of **causation** if a variable is statistically significant.

| variable           | description                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `callback`         | Specifies whether the employer called the applicant following submission of the application for the job (1=callback, 0 = no callback) |
| `job_city`         | City where the job was located: Boston or Chicago                                                                                     |
| `college_degree`   | An indicator for whether the resume listed a college degree                                                                           |
| `years_experience` | Number of years of experience listed on the resume                                                                                    |
| `honors`           | Indicator for resume listing some sort of honors, e.g., employee of the month                                                         |
| `military`         | Indicator for if the resume listed any military experience                                                                            |
| `email_address`    | Indicator for if the resume listed an email address for the applicant                                                                 |
| `race`             | Race of the applicant, implied by their first name listed on the resume                                                               |
| `sex`              | Sex of the applicant (limited to only `male` and `female` in this study), implied by the first name listed on the resume              |
