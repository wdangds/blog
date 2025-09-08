---
title: Diffusion of Innovation and Innovation Processes
draft:
tags:
  - computational-science
  - innovation
---
>[!summary] Abstract
>*This post explores the process by which innovations are developed and how they spread among consumers. We begins by defining innovation with broader definitions from behavioral scientists compare to the economic view as an idea or thing that is perceived as new. A key argument is that innovation can be planned or "programmed" rather than being a random, discontinuous event. We also provides a framework for classifying innovations based on their effect on established consumer patterns. Diffusion and then is defined as the process by which an innovation spreads from its source to its ultimate adopters.*
## 1. Diffusion of Innovation: Core Concepts
Diffusion of innovation is fundamentally a **social process** that relies on sharing information and ideas. According to Everett M. Rogers (1962)[^1], four main elements define this process:
- The **innovation itself**.
- **Communications channels**.
- **Time**, which significantly affects the rate of adoption.
- The **social system** in which the innovation spreads.
[^1]: Rogers, Everett M. "*Diffusion of innovations*", 1st edition. Free Press, New York (1962). [link](https://teddykw2.wordpress.com/wp-content/uploads/2012/07/everett-m-rogers-diffusion-of-innovations.pdf)
### b. Innovation Decision Process Stages (Rogers, 1962)
The process an individual goes through when deciding whether to adopt an innovation involves several stages:
- **Knowledge:** Becoming aware of innovation.
- **Persuasion:** Forming a favorable or unfavorable attitude towards the innovation, influenced by factors like its perceived advantage, compatibility, complexity, trialability, and observability.
- **Decision:** Choosing to adopt or reject the innovation.
- **Implementation:** Putting the innovation into use.
- **Confirmation:** Seeking reinforcement for the decision or reversing a previous decision, which can lead to continued adoption or eventual rejection.
## 2. The Process of Innovation
Innovation is defined as a process where a new "thought, behavior, or thing", which is "qualitatively different from existing forms," is conceived and brought into reality.
### a. Definitions of Innovation
- **Joseph A. Schumpeter:** Viewed innovation as distinct from invention, characterized by new plants and equipment, new firms, and the rise of new leaders. For Schumpeter, innovation is a **discontinuous event**. He defined it as "setting up of a new production function".
- **H. G. Barnett**: Defined innovations as "any thought, behavior, or thing that is new because it is qualitatively different from existing forms," considering it the basis of cultural change. This is a broader definition than Schumpeter's.
- **Everett M. Rogers:** Broadened the definition even further, referring to innovation as "an idea perceived as new by the individual".
### b. Theories of the Innovation Process
Several theories explain how innovation occurs:
- **"Transcendentalist" Approach:** Predominant in economics, this view attributes innovation to the "inspiration of genius", considering creative entrepreneurs and their work unpredictable.
- **"Mechanistic" Theory**: Emphasized in sociology, this theory suggests innovation is an **accumulation of many individual items over a long period.** It asserts that "No innovation springs full-blown out of nothing: it must have antecedents".
- **Cumulative-Synthesis" Approach (Abbott Payson Usher):** Combines and refines both views, arguing innovation is neither accidental nor purely mechanistic. Usher proposes that major inventions result from the **cumulative synthesis of many novel and familiar elements**, which the "act of insight" being the crucial stage.
### c. Usher's Four Steps of Innovation
User's proposed innovation process consists of four steps:
1. **Perception of the problem:** A problem must be recognized as existing.
2. **Setting of the stage:** A specific configuration of events is brought together.
3. **The act of insight:** The solution is found, requiring insight due to uncertainty and multiple possible solutions.
4. **The critical revision:** The innovation is analyzed for its practicality.
### d. Empirical Studies and Programmed Innovation
- William H. Brown's study of the machine-tool industry hypothesized that innovation is a planned attempt to increase demand. His analysis suggested innovation occurs when demand falls and **need to be discontinuous**, allowing it to be **programmed**.
- The concept of **programmed innovation** is relevant for industrial and consumer goods, where marketers use innovation to differentiate products and increase market share (e.g., annual automobile change-overs).
### e. Framework for Classifying Innovations
Innovations can be classified based on their effects on established patterns:
1. **Continuous innovations**: Have the least disrupting influence, involving product alteration rather than new product establishment (e.g., fluoride toothpaste, new-model cars, menthol cigarettes).
2. **Dynamically continuous innovations**: More disrupting than continuous but generally do not alter established patterns. They may involve a new product or alteration of an existing one (e.g., electric toothbrushes, the Mustang automobile, Touch-Tone telephones)
3. **Discontinuous innovations**: Involve establishing a new product and new behavior patterns (e.g., television, computers)
## 3. The Diffusion Process and Adopter Categories
Once an innovation exists, the challenge becomes its diffusion. Sociologist Everett M. Rogers views the diffusion process as an **orderly sequence of events.**
### a. Rogers' Diffusion Curve and Adopter Categories
Rogers proposes a diffusion curve, essentially a **normal curve of distribution**, which categorizes adopters based on their relative time of adoption:

![[fig-diffusion-1.png]]
### b. Empirical Validation and Limitations
- A 1961 study by Edwin Mansfield on 12 innovations across various industries largely **confirmed the Rogers model**, noting that competitive pressures created a "bandwagon" effect, increasing the adoption rate, similar to the "snowballing" effect observed after the early majority stage.
- A study of physicians adopting a "miracle drug" also validated the Rogers model, showing that socially integrated physicians tended to adopt in a "chain-reaction" manner.
- These validating studies often concerned innovations demonstrably superior to existing forms (e.g., hybrid corn, miracle drugs).
- For **most marketing innovations**, however, **not everyone will adopt** because products may not be objectively superior, or not perceived as such, leading to an **ever-incomplete curve of adoption**.
## 4. Modeling Diffusion of Innovation
Diffusion of innovation, being a social process, can be modeled similarly to the spread of rumors, infectious diseases, or political views.
### a. Compartment Style Model with Ordinary Differential Equations (ODEs)
This model defines a population using three distinct "compartments":
- **Aware:** Potential users who know about the innovation.
$$
d\text{Aware}=\beta\text{ Aware}\times \text{Adopts}
$$
- **Adopts**: People who have decided to try the innovation.
$$
d\text{Adopts}=\beta{Aware}\times \text{Adopts}-\gamma\text{Adopts}
$$
- **MoveOns**: People who are no longer using the innovation.
$$
d\text{MoveOns}=\gamma\text{Adopts}
$$
ODEs determine the **rate of flow** between these compartments, governed by constants and dependent on compartment population sizes. This model is **easy to understand** and provides clear outputs but may be overly simplistic.
### b. Agent-Based Models (ABMs)
ABMs offer a more realistic portrayal but require multiple runs and more effort to interpret.
- **Cellular Automata (CAs)**: Can model diffusion, for example, by showing "rumor aware" agents spreading a rumor to unaware neighbors over time. The NetLogo Rumor Spread model demonstrates shapes similar to innovation adoption curves (Adopts curve) and decline (MoveOns curve).
![[fig-diffusion-2.png]]
- **Network Graphs**: Explicit network models, such as the NetLogo Virus on a Network model, exhibiting complex dynamics than ODE models.
![[fig-diffusion-3.png]]
### c. Network Topology's Effect on Diffusion
The structure of the network significantly affects diffusion speed:
- **Slowest case:** A linear network, where the diffusion distance $d$ is $N-1$ ($N$ being the number of agents).
- **Fastest case**: A star network, where $d$ = 2.
- **Average case**: Approximately $\frac{N}{2}$.

![[fig-diffusion-network.png]]
## 5. Communication and Social Influence in Diffusion
### a. Advertising Compared with Personal Influence
The model of mass media advertising's impact has evolved:
- **Early "Vertical" Model (1920s)**: Assumed a mass audience was directly aroused by powerful buying stimuli from media.
- **"Two-Step Flow of Communication" Model:** Studies in the 1940s (e.g., Albany presidential campaign, Decatur study) found that primary groups and "other people" held greater influence over decisions than mass media. This model suggests **mass media primarily influence opinion-leaders**, who then influence less-influential people. Opinion-leaders are distributed across all social classes and occupations.
- **Roper's "Concentric-Circle" Theory:** Ideas diffuse in circles, starting from "Great Thinkers", flowing through "Preachers", "Politically Active", "Participating Citizens", and finally reaching the "Politically Inert" (the majority). This model is an extension of the two-step model, suggesting the "Politically Inert" accept ideas more readily from "Participating Citizen neighbors" than from mass media.
Sociologists hypothesize that **average people are more strongly affected by social pressures, group associations, and opinion leaders than by direct mass media**. This implies companies should target opinion leaders through specialized media rather than solely using mass media for the masses, though identifying specific opinion leaders can be difficult. Advertiser might argue the two-step model applies to ideas but not to products, as everyone is interested in products. Regardless, **personal influence is a major mediating factor** in communications flow, and leveraging these channels is important.
### b. Social Integration of Innovators
Findings on whether innovators are socially integrated vary:
- **Physician Study**: Concluded that a doctor's social integration with local colleagues was **strongly and positively related to early adoption** of a new drug; more isolated doctors adopted later.
- **Roger's Conclusions (Agricultural Innovators)**: Implied innovators are "marginal" members of the community, the **least socially integrated** and perceived as deviant. Anthropologist Barnett also noted that individuals predisposed to accept substitutes are often dissenters.
**Reconciliation of Differences (Elihu Katz)**: Whether innovators are socially integrated depends on the **risk in adoption and the norms of the social system**.
- **High-Risk Situations (e.g., new drugs for physicians)**: Communication among colleagues helps spread and reduce individual risk. The normative structure of medicine favors innovation, so physicians don't need to "emancipate" themselves from local groups to innovate.
- **Lower-Risk Situations (e.g., agriculture with extension services)**: Risk is reduced by scientific efforts. Farming innovators might need to "emancipate" themselves from traditional norms.
- **Marketing Innovations:** Consumers face an "ambiguous stimulus" and perceive risk. Communication with other consumers can reduce this risk. **Socially integrated persons are better positioned to engage in such communications and innovate**. Given that overall marketing norms favor innovation (e.g., fascination with new products), marketing innovators should be aware of socially integrated individuals, who are often norm-conscious and norm-abiding.
## 6. Case Study: The Apple iPad
The Apple iPad, introduced in 2010, was a powerful personal computing device with a larger form factor than an iPhone but smaller and without a keyboard like a laptop. It effectively exploited the use of highly visual, interactive web commerce, social media, and email. It also gained popularity in industrial field data management (e.g., car rentals, package delivery monitoring).

Millions of units were sold worldwide, with sales peaking around **2015**. However, sales began declining in **2016-2017**. The sales data shows quarterly fluctuations, with a 1-year moving average smoothing out the trend, clearly illustrating the peak and subsequent decline.