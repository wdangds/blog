---
title: Paired data
draft:
tags:
  - statistics
  - hypothesis-test
  - inference
  - numerical
  - dependent
---
## 1. Paired Observations
Two set of observations are **paired** if each observation in one set has a special correspondence with exactly one observation in the other set. When analyzing paired data, we focus on the **difference** between each pair of observations. By calculating the differences, we transform the problem into a one-sample $t$-test (or confidence interval) on those difference.

|          | subject                 | course_number | bookstore | amazon   | price_difference |
| -------- | ----------------------- | ------------- | --------- | -------- | ---------------- |
| 1        | American Indian Studies | M10           | 47.97     | 47.45    | 0.52             |
| 2        | Anthropology            | 2             | 14.26     | 13.55    | 0.71             |
| 3        | Arts and Architecture   | 10            | 13.50     | 12.53    | 0.97             |
| $\vdots$ | $\vdots$                | $\vdots$      | $\vdots$  | $\vdots$ | $\vdots$         |
| 68       | Jewish Studies          | M10           | 35.96     | 32.40    | 3.56             |
## 2. Inference for paired data
Once we have a single sample of differences, we can apply the one-sample $t$-test procedures from [[One-sample means with the t-distribution|section]].
>[!example]- Example: Textbook Prices (UCLA vs. Amazon)
> We want to determine if there is a difference in average textbook prices between the UCLA bookstore and Amazon. The data consists of prices for 68 books, with a price from each store for each book, making it paired data. We analyze the differences: $\text{price}_{\text{UCLA}}-\text{price}_{\text{Amazon}}$. For the 68 differences:
> 
> | $n_{\text{diff}}$ | $\overline{x}_{\text{diff}}$ | $s_{\text{diff}}$ |
> | ----------------- | ---------------------------- | ----------------- |
> | 68                | 3.58                         | 13.42             |
>
>**Hypothesis Test**:
>1. *Prepare*:
>	- $H_0:\mu_{diff}=0$ (No average difference in price)
>	- $H_A:\mu_{diff}\neq 0$ (There is an average difference)
>2. *Check*: The sample is random (independence), and with $n=68$, the presence of some outliers is acceptable (normality).
>3. *Calculate*:
>	- $SE_{diff}=\frac{s_{diff}}{\sqrt{n}}=\frac{13.42}{\sqrt{68}}=1.63$
>	- $T=\frac{3.58-0}{1.63}=2.20$
>	- $df=68-1=67$
>	- The two-tailed p-value is 0.0312.
>4. *Conclude*: Since $p<0.05$, we reject $H_0$. There is strong evidence that, on average, Amazon's prices are lower than the UCLA Bookstore's.





