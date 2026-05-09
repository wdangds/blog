---
title: Context and Data Understanding
---

Data science does not begin with data. It begins with a situation.

A dataset is never a complete copy of reality. It is a partial, structured, and historically produced representation of some phenomenon. Every row, column, label, sensor reading, transaction record, or survey response has already passed through a chain of choices: what to observe, who to observe, when to observe, how to measure, what to exclude, how to store, and how to interpret. For this reason, data understanding have to be a scientific and ethical act.

[[Chapter 1|The previous chapter]] introduced data science as an interdisciplinary process for transforming data into knowledge. This chapter moves one level deeper. We want to know __"What does it mean to understand data before modeling it?"__. The answer is that one must understand the __context__ in which data are produced, the __limitations__ of what they represent, the __social and technical systems__ that shape them, and the __ethical consequences__ of using them for decisions. 

At this point, one must move beyond the idea of data as a static resource. Data should instead be viewed as a __socio-technological construct__: something produced by people, institutions, instruments, software systems, economic incentives, and historical circumstances. For example, consider a dataset of hospital readmission records. Technically, it may contain variables such as age, diagnosis code, length of stay, insurance type, prior visits, and readmission status. But the data are also shaped by hospital policy, insurance coverage, physician judgement, patient behavior, coding practices, and structural inequalities in healthcare access. A model trained on such data does not simply learn "health risk"; it may also learn the structure of the healthcare system that produced the observations.

So we come to the central argument of this chapter:

> [!quote]
> __Data understanding requires context understanding. Without context, data means nothing.__

