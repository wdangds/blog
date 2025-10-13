---
title: Types of Outliers in Linear Regression
draft:
tags:
  - linear-regression
  - outlier
---
Outliers are observations that fall far from the cloud of points and can have a strong influence on the least squares line.

> [!definition] Leverage
> Points that are horizontally far from the center of the data (far from $\overline{x}$) are said to have *high leverage*. These points have the *potential* to strongly influence the slope of the line.

> [!definition] Influential Point
> A high-leverage point that *actually* does pull the line towards it is called an *influential point*. If removing the point would cause a substantial change in the regression line, it is influential.

![[fig-type-of-outlier.png]]

> [!caution]
> Do not remove outliers without a very good reason. They can be the most interesting and important data points.