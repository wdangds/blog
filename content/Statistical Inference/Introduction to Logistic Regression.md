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

## 2. Modeling the Probability of an Event
In logistic regression, we model the probability $p_i$ that the outcome $Y_i$ takes the value 1 (callback). The model relates $p_i$ to the predictors using a transformation:
$$
\text{transformation}(p_i)=\beta_0+\beta_1 x_{1,i} +\beta_2 x_{2,i}+\cdots+\beta_k x_{k,i}
$$
The standard transformation used is the **logit transformation**:
$$
\text{logit}(p_i)=\log_e(\frac{p_i}{1-p_i})
$$
The full logistic regression model:
$$
\log_e(\frac{p_i}{1-p_i})=\beta_0+\beta_1x_{1,i}+\beta_2x_{2,i}+\cdots+\beta_kx_{k,i}
$$

> [!definition] Converting Logit back to Probability
> $$
> p_i = \frac{e^{\beta_0+\beta_1 x_{1,i}+\cdots+\beta_k x_{k,i}}}{1 + e^{\beta_0+\beta_1 x_{1,i}+\cdots+\beta_k x_{k,i}}} 
> $$

![[fig-p1-vs-logit-pi.png]]

> [!example]- Example: Honors Predictor
> Model: $\log_e ( \frac{p_i}{1 - p_i}) = -2.4998 + 0.8668\times honors$
> - **No Honors (honors=0)**: logit = -2.4998. Probability $\hat{p}_i = 0.076$ (7.6%)
> - **With Honors (honors=1)**: logit=-1.6330. Probability $\hat{p}_i = 0.163$ (16.3%)

## 3. Building the Logistic Model with Many Variables
The summary table structure is similar to multiple regression, but p-values are calculated using the **normal (z) distribution** instead of the t-distribution.

|                     | Estimate | Std. Error | z value | Pr(>\|z\|) |
| ------------------- | -------- | ---------- | ------- | ---------- |
| (Intercept)         | -2.6632  | 0.1820     | -14.64  | <0.0001    |
| job_city: *Chicago* | -0.4403  | 0.1142     | -3.85   | 0.0001     |
| college_degree      | -0.0666  | 0.1211     | -0.55   | 0.5821     |
| years_experience    | 0.0200   | 0.0102     | 1.96    | 0.0503     |
| honors              | 0.7694   | 0.1858     | 4.14    | <0.0001    |
| military            | -0.3422  | 0.2157     | -1.59   | 0.1127     |
| email_address       | 0.2183   | 0.1133     | 1.93    | 0.0541     |
| race: *white*       | 0.4424   | 0.1080     | 4.10    | <0.0001    |
| sex: *male*         | -0.1818  | 0.1376     | -1.32   | 0.1863     |

> [!definition] Akaike Information Criterion (AIC)
> For logistic regression, the **Akaike information criterion (AIC)** is often used as an analog to adjusted $R^2$. Models with a *lower AIC* are preferred.

The resume model was simplified by eliminating `college degree` using AIC.

|                     | Estimate | Std. Error | z value | Pr(>\|z\|) |
| ------------------- | -------- | ---------- | ------- | ---------- |
| (Intercept)         | -2.7162  | 0.1551     | -17.51  | <0.0001    |
| job_city: *Chicago* | -0.4364  | 0.1141     | -3.83   | 0.0001     |
| years_experience    | 0.0206   | 0.0102     | 2.02    | 0.0430     |
| honors              | 0.7634   | 0.1852     | 4.11    | <0.0001    |
| military            | -0.3432  | 0.2157     | -1.60   | 0.1105     |
| email_address       | 0.2221   | 0.1130     | 1.97    | 0.0494     |
| race: *white*       | 0.4429   | 0.1080     | 4.10    | <0.0001    |
| sex: *male*         | -0.1959  | 0.1352     | -1.45   | 0.1473     |

**Impact of Race**: The p-value for $race_{white}$ is very small, meaning race played a *statistically significant role* in callback. The positive coefficient (0.4429) reflects a positive gain in callback rate for resumes where the candidate's first name implied they were White, providing strong evidence of racism.

> [!example] Example: Comparing Callback Rates
> For candidates with otherwise identical characteristics:
> 1. **White Male Candidate**: Logit value calculated as -2.3955. Predicted probability $\hat{p}\approx \mathbf{8.35\%}$
> 2. **Black Male Candidate**: Logit value calculated as -2.3955-9.4429 (since $race_{white}=0$)=-2.8384. Predicted probability $\hat{p}\approx \mathbf{5.53\%}$
> 
> **Practical Implication**: Applicants perceived as Black need to apply to $1/0.0533\approx 18$ jobs on average, compared to $1/0.0835 \approx 12$ jobs for those perceived as White. This means Black applicants need to apply to *50% more employers* to receive a callback.
> 

## 4. Diagnostics for the Callback Rate Model

>[!note] Logistic Regression Conditions
> There are two key conditions for fitting a logistic regression model:
> 1. Each outcome $Y_i$ is independent of the other outcomes.
> 2. Each predictor $x_i$ is linearly related to $\text{logit}(p_i)$ if all other predictors are held constant.

> [!tip] Calibration Check
> To assess model quality, data are grouped (bucketed) by their predicted probabilities. The observed probability for each group (with confidence intervals) is plotted against the average predicted probability for that group. If the model is well-calibrated, these points should fall close to the line $y=x$.

![[fig-calibration-check.png]]

## 5. Exploring Discrimination Between Groups of Different Sizes
A key insight regarding discrimination in group dynamics is that even if two demographic groups have the same degree of prejudice against the other group, the **smaller group experience the negative effects more frequently**. The greater the population imbalance, the more disproportionately impacted the smaller group is.

For instance, in a large company where 20% are women and 80% are men, if 10% of each sex is prejudiced against the other, men going up for promotion would experience discrimination from $\approx 2\%$ of their reviewers, while women would experience discrimination from $\approx 8\%$ of their reviewers.

