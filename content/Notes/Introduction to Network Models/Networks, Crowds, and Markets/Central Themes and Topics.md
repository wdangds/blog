---
title: Central Themes and Topics
tags:
  - network
  - graph-theory
  - game-theory
  - population
  - market
draft:
date: 2002-12-09
---
## I. Graph Theory (Theories of Structure)
Graph theory is defined as the study of network structure. Concepts drawn from social network analysis include:
### a. Strong ties vs. Weak Ties:
- Strong ties: represent close and frequent social contacts and tend to be embedded in tightly-linked network regions.
- Weak ties: represent more casual and distinct social contacts and typically cross between tightly-linked regions. Weak ties can act as global "short-cuts", which rise to the phenomenon known as *six degrees of separation*.

### b. Structural Holes
These are gaps between parts of a network that interact very little, which suggests a strategic opportunity for navigating a social landscape.

### c. Network Fissures
Networks can capture sources of conflict within a group. The theory of *structural balance* is used to reason about how conflicts or antagonism at a local level can cause fissures in a network structure.

## II. Game Theory (Theories of Behavior)
Game theory provides a framework for reasoning about behavior when outcomes depend on the joint decisions made by all involved parties.

> [!note] Core Framework
> Individuals choose a **strategy** and receive a **payoff** that is dependent on the strategies chosen by everyone.
> > [!example]- Example: Driving Routes
> > The strategy is the choice of route, and the payoff is based on the resulting travel time, which is affected by traffic congestion from all drivers. A counter-intuitive outcome is *Braess's Paradox*, where adding resources to a network can actually decrease efficiency.
> > 

> [!example]- Example: Auctions
> The strategy is how to bid, and the payoff is the difference between the value of the goods received and the price paid.

> **Equilibrium**

A fundamental concepts in this framework, representing a "self-reinforcing" state where no individual has an incentive to unilaterally change their strategy.

## III. Markets and Strategic Interaction on Networks
Economic activity and trade naturally form networks where participants are linked by relationships (e.g., borrower-lender, trading partner).

- **Network Constraints**: Network structures sometimes reflect constraints, such as institutional restrictions (regulations) or physical limitations (like geography, as seen in Medieval trade routes) which limit access between participants.

![[medival-trade.png]]
Fig: In some settings, such as this map of Medieval trade routes, physical networks constrain the patterns of interaction, giving certain participants an intrinsic economic advantage based on their network position.

- **Network Position and Power**: The level of success for participants is affected by their positions in the network. Power depends on both the number of connections and the power of the other individuals connected to oneself.

## IV. Information Networks
Online information systems, such as the Web, possess a fundamental network structure.
- **Community Structure**: link between Web pages reveal how they cluster into different communities. For instance, political blogs before the 2004 election separated into two distinct clusters corresponding to liberal and conservative perspectives.

![[pilitical-network.png]]
Fig: The links among Web pages can reveal densely-knit communities and prominent sites. In this case, the network structure of political blogs prior to the 2004 U.S. Presidential election reveals two natural and well-separated clusters.

- **Prominence and Ranking**: Search engines (like Google) utilize network structure to evaluate page quality. Prominence is often recursively defined: a page is considered more prominent if it receives links from pages that are *themselves* prominent. This circular definition can be resolved during the concept of **equilibrium** in the link structure.
- **Strategic Interaction**: The relationship between search engines and content creators is game-theoretic. Content creators constantly optimize their Web pages to achieve a high rank under the engines's current evaluation methods; thus, search methods must be developed considering these human feedback effects.

## V. Network Dynamics: Population Effects
Collective phenomena, such as the spread of new **social practices** (new beliefs, opinions, or technologies), following recurring patterns.

> [!definition] Mechanism of Influence (Why People Conform)
> 1. **Information**: People may copy others because observed behavior conveys information. If many people use a product (like YouTube), it suggests they know something about its quality. This can lead to **information cascades**, where rational individuals follow the crowd, abandoning their private information.
> 2. **Direct Benefit (Network Effects)**: There is a direct benefit to aligning one's behavior with others, regardless of whether the decision is optimal. For social media sites, value increases as more people join (more content, wider audience). **Network effects** amplify success, creating a "rich-get-richer" feedback process that is characteristic of the aggregate distribution of popularity.

![[network-dynamic-population.png]]
Fig: Cascading adoption of a new technology or service (in this case, the social-networking site MySpace in 2005-2006) can be the result of individual incentives to use the most widespread technology --- either based on the informational effects of seeing many other people adopt the technology, or the direct benefits of adopting what many others are already using.

## VI. Network Dynamics: Structural Effects
When individuals are motivated to adopt the behavior of their immediate neighbors, **cascading** effects can result, spreading outward from a small set of initial adopters.

- **Diffusion Barriers**: The diffusion of technologies can be blocked by the boundary of a *densely-connected cluster* (a "closed community") that is highly resistant to outside influences.

![[diffusion-barriers.png]]
Fig: 

- **Social Contagion**: Cascading behavior is often referred to as "social contagion", analogous to a biological epidemic. While social contagion involves decision-making and biological contagion involves pathogen transmission, the network-level dynamics are similar.