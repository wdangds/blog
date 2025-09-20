---
title: Power Calculations for a Difference of Means
draft:
tags:
  - error
  - statistics
  - power
  - inference
  - type1
  - type2
---
When planning an experiment, we want to collect enough data to detect a meaningful effect without wasting resources or exposing participants to unnecessary risk. **Power** is the probability of correctly rejecting the null hypothesis when it is false. It is the likelihood of detecting an effect if one truly exists. A common target for power is 80% or 90%.

> [!definition] Steps for Calculating Power and Sample Size
> 1. **Define Hypotheses and Significance Level ($\alpha$)**: Set up the null and alternative hypotheses and choose $\alpha$ (e.g., 0.05).
> 2. **Determine a Practically Significant Effect Size**: Decide on the minimum difference between means that you want to be able to detect (e.g., a 3 mmHg drop in blood pressure).
> 3. **Calculate the Rejection Region**: Based on the null distribution (centered at 0), find the critical values beyond which you would reject $H_0$. For $\alpha=0.05$, this is typically $\pm1.96\times SE$.
> 4. **Calculate Power**:
> 	- Center the alternative distribution at the chosen effect size.
> 	- Calculate the probability of obtaining a sample result that falls within the rejection region, *under the assumption that the alternative distribution is true*. This probability is the power.

> [!tip] Determining an Appropriate Sample Size
> Instead of guessing sample sizes, we can work backward from a desired power level (e.g., 80%) to find the necessary sample size.


