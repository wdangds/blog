---
title: Probability
draft: false
tags:
  - probability
---
## I. Introduction to Probability
**Probability** is a measure of the likelihood of an event occurring. It quantifies how likely an event is to happen, ranging from 0 (impossible) to 1 (certain).
The concept of "Controlling Randomness" involves applying mathematical techniques to understand, predict, or even influence the outcome of seemingly random systems or processes. This is crucial in a world filled with randomness and uncertainty, where mathematical principles and programming can help us gain insight and control over factors that appear beyond our reach.
**Key Concepts in Probability:**
- **Experiment**: An implementation of a set of basic conditions for observing a certain phenomenon. For example, tossing a coin or rolling a die.
- **Outcome:** A single result of an experiment.
- **Sample Space ($\Omega$ or S)**: The set of all possible outcomes of an experiment. For example,
	- For a coin toss: S = {head, tails}
	- For a single die roll: S = {1, 2, 3, 4, 5, 6}
- **Event**: A subset of the sample space. Events are typically denoted by capital letters (e.g., A, B, C).
	- **Certain Event:** An event that always occurs in an experiment, denoted by $\Omega$. For example, for a die roll, "dots $\leq 6$ and $\geq 1$" is a certain event.
	- **Impossible Event**: An event that never occurs when the experiment is executed, denoted by $\varnothing$. For example, for a die roll, "7-dot" is an impossible event.
	- **Random Event**: An event that may or may not occur when performing the experiment. For example, for a die roll, "even-dot" is a random event.
## II. Operations and Relations of Events
Events can be combined or related in several ways:
- **Intersection of Events** ($A\cap B$ or $AB$): Represents the outcomes that are common to both event A and event B.
	- *Example:* Rolling a single die. If Event A = {2, 4, 6} (even number) and event B = {3, 6} (divisible by 3), then $A\cap B$ = {6}.
- **Mutually Exclusive Events**: Events A and B are mutually exclusive if they have no elements in common, meaning $A\cap B = \emptyset$. They cannot both occur at once on a single trial of the experiment.
	- *Example*: Rolling a single die. If Event A = {2, 4, 6} (even number) and Event B = {1, 3, 5} (odd number), then $A\cap B=\emptyset$.
- **Union of Events** ($A\cup B$): Represents the collection of all outcomes that are elements of event A, event B, or both.
	- *Example*: Rolling a single die. If event A = {2, 4, 6} (even number) and event B = {3, 6} (divisible by 3), then $A\cup B$ = {2, 3, 4, 6}.
- **Complement of an Event (A' or $A^C$)**: Represents the collection of all outcomes in the sample space ($\omega$) that are not elements of event A. It corresponds to negating the description of event A.
	- *Example*: For a die roll, if A = {5, 6} ("number rolled is greater than 4"), then A' = {1, 2, 3, 4}.
## III. Rules of Probability
**Basic Properties of Probability**:
- For any event A, $0\leq P(A) \leq 1$
- The probability of any sample space ($\Omega$) is $P(\Omega)= 1$.
- The probability of an impossible event ($\varnothing$) is $P(\emptyset)=0$
### 1. Classical Probability
Classical probability defines the likelihood of an event by dividing the number of favorable outcomes by the total number of possible outcomes, assuming all outcomes are equally likely.

$P(A)=\frac{\text{Number of favorable outcomes}}{\text{Total number of possible outcomes}}= \frac{n_A}{n_{\Omega}}$

*Example:* Probability of rolling an even number on a fair die.
- $n_\Omega$ = 6 (faces 1-6).
- A = {2, 4, 6} (even numbers), so $n_A$ = 3.
- $P(A) = \frac{3}{6} = 0.5$
### 2. Geometric Probability
When dealing with continuous variables, classical probability (counting outcomes) is not feasible. Geometric probability is used instead, by taking the ratio of measures (e.g., lengths, areas, volumes).

$P(A) = \frac{\text{Measure of domain A}}{\text{Measure of domain }\Omega}$

- *1D Example*: X is a random real number between 0 and 3. The probability X is closer to 0 than to 1.
	- Domain $\Omega$ is length of segment where $0<X<3$, length = 3.
	- Domain A (closer to 0 than 1) is [0, 0.5], length = 0.5.
	- $P(A) = \frac{0.5}{3} = \frac{1}{6}$
![[Pic-1D-Geometric-Probability.png]]
- *2D Example*: A dart thrown randomly at a circular dartboard. Probability it lands closer to the center than to the edge.
	- This implies the dart lands within a circle of radius $\frac{R}{2}$ is the dartboard has radius R.
	- $P(A)= \frac{\text{Area of desired outcomes}}{\text{Area of total outcomes}}$. This would be $\frac{\pi(\frac{R}{2})^2}{\pi R^2}=\frac{1}{4}$.
![[Pic-2D-Geometric-Prob.png]]
### 3. Empirical (Experimental) Probability
Empirical probability uses the number of observed occurrences of an outcome within a sample set to determines it probability. It's about estimating probabilities from experience and observation.

$P(A)= \frac{\text{Number of times A occurred}}{\text{Total number of times experiment performed}}$

### 4. Rules of Probability
- **Addictive Rule**:
	- For **mutually exclusive events** A and B: $P(A\cup B)= P(A)+P(B)$
	- In **general**: $P(A\cup B)= P(A)+P(B)-P(A\cap B)$
- **Complement Rule**: For any event A, $P(A^C)=1-P(A)$. This also means $P(A)=1-P(A^C)$
- **Conditional Probability**: The probability that event A occurs *given that* event B has already occurred.
	- $P(A\mid B)= \frac{P(A\cap B)}{P(B)}$ where $P(B)\neq 0$
	- *Example*: A fair die is rolled. Find the probability that the number rolled is a two, given that it is even.
		- A = {2}, B = {2, 4, 6}. $A\cap B$ = {2}.
		- P(A) = $\frac{1}{6}$, P{B} = $\frac{3}{6}=\frac{1}{2}$, $P(A\cap B)=\frac{1}{6}$
		- $P(A\mid B)=\frac{\frac{1}{6}}{\frac{1}{2}}=\frac{1}{3}$
- **Multiplication Rule**: Derived from the conditional probability formula.
	- $P(A\cap B)= P(A)\times P(B\mid A)= P(B)\times P(A\mid B)$
	- General form for multiple events: $P(A_1\cap A_2...\cap A_n)= P(A_1)\times P(A_2\mid A_1)\times P(A_3\mid A_1\cap A_2)...\times P(A_n\mid A_1\cap A_2...\cap A_{n-1})$
- **Independent Events**: Events A and B are independent if the occurrence of one does not affect the probability of the other.
	- Mathematically: $P(A\cap B)=P(A)\times P(B)$
	- If $P(A\cap B)\neq P(A)P(B)$, then events A and B are dependent.
	- *Example*: A single fair die is rolled. A = {4}, B = {2, 4, 6}.
		- $P(A) = \frac{1}{6}$, $P(B)=\frac{1}{2}$, $P(A\cap B)=\frac{1}{6}$
		- $P(A)P(B)=\frac{1}{6}\times \frac{1}{2}= \frac{1}{12}$.
		- Since $\frac{1}{12}\neq\frac{1}{6}$, A and B are not independent.
## IV. Total Probability Theorem
The **Total Probability Theorem** is used to calculate the overall probability of an event (H) when there are several mutually exclusive and exhaustive prior events ($A_1, A_2,...,A_n$) that can lead to H. A set events {$A_1, A_2,...,A_n$} forms a **complete system of events** if they are mutually exclusive ($A_i\cap A_j=\varnothing$ for $i\neq j$) and their union covers the entire sample space ($\sum A_i=\Omega$), meaning their probabilities sum to 1 ($\sum P(A_i)= 1$).
**Formula**: $P(H) = P(H\cap A_1) + P(H\cap A_2)+ ... + P(H\cap A_n)$. Which can be expanded using the multiplication rule: $P(H)=\sum P(A_i)\times P(H\mid A_i)$.
- *Example:* Given two classes, 'Fail' and 'Pass', and a feature 'Studied'.
	- We can compute $P(\text{Studied}=\text{Yes})$ using the total probability theorem:
	- $P(\text{Studied}= \text{Yes})= P(\text{Studied}=\text{Yes}\mid \text{Result}=\text{Pass})\times P(Result = Pass)$  $+ P(\text{Studied}=\text{Yes}\mid \text{Result}= \text{Fail})\times P(\text{Result}= \text{Fail})$
	- $P(\text{Result}=\text{Pass})=\frac{3}{6}= 0.5$, $P(\text{Result}=\text{Fail})=\frac{3}{6}=0.5$
	- $P(\text{Studied}=\text{Yes}\mid\text{Result}=\text{Pass})=\frac{2}{3}$, $P(\text{Studied}= \text{Fail})=\frac{1}{3}$.
	- Then $P(\text{Studied}=\text{Yes})=\frac{2}{3}\times\frac{1}{2}+\frac{1}{3}\times\frac{1}{2}=\frac{1}{3}+\frac{1}{6}=\frac{1}{2}$
## V. Bayes' Rule
**Bayes' Rule** is a fundamental theorem in probability that describes how to update the probability of a hypothesis based on new evidence. It allows us to calculate the **posterior probability** of an event based on its **prior probability** and the **likelihood** of observing new evidence given the event.
For any two events A and B, where $P(A)\neq 0$: $P(B\mid A)= \frac{P(A\mid B)P(B)}{P(A)}$ 
- $P(B\mid A)$: **Posterior probability** - The probability of event B occurring given that event A has occurred. This is the *updated* belief.
- $P(A\mid B)$: **Likelihood** - The probability of event A occurring given that event B has occurred.
- $P(B)$: **Prior probability** - The initial probability of event B occurring before any new evidence (A) is considered.
- $P(A)$: **Marginalization (or Evidence)** - The total probability of event A occurring, which can be calculated using the [[#IV. Total Probability Theorem|Total Probability Theorem]]: $P(A)=\sum P(C_i)\times P(A\mid C_i)$, where $C_1, C_2,...,C_n$ form a complete system of events.

*Example: Detect Spam E-Mail*. Assume that the word 'offer' occurs in 80% of the spam messages in my account. Also, let's assume 'offer' occurs in 10% of my desired e-mails. 30% of the received e-mails are considered as a spam. I receive a new message which contains 'offer', what is the probability that it is spam?
	$C_1$ = "Spam", $C_2$ = "Not Spam". $P(C_1)=0.3$, $P(C_2)= 0.7$
	X = "contains word offer". $P(X\mid C_1) = 0.8$ (likelihood of 'offer' given spam), $P(X\mid C_2)=0.1$ (likelihood of 'offer' given not spam).
	$P(X)=P(X\mid C_1)\times P(C_1)+P(X\mid C_2)\times P(C_2)=0.8\times 0.3+0.7\times 0.1 = 0.31$
	Probability that a message is spam given it contains 'offer':
	$P(C_1\mid X)=\frac{P(X\mid C_1)\times P(C_1)}{P(X)}= \frac{0.8\times 0.3}{0.31}= \frac{24}{31}\approx 0.774$	
