---
title: Introduction to Cloud Computing
draft:
tags:
  - cloud
  - data-engineering
  - data-science
---
## 1. Defining Cloud Computing: A New Paradigm
### a. What is Cloud Computing?
Cloud computing is a model for delivering computing services where resources are concentrated in large data centers and made available to users over a network, typically the Internet.

> **A model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned and released with minimal management effort or service provider interaction.**

 \- The US National Institute of Standards and Technology (NIST)

At its core, cloud computing is an evolution of **utility computing**, where users pay for computing, storage, and communication resources as they consume them, much like a public utility such as the telephone system. While utility computing requires a cloud-like infrastructure, the focus of  cloud computing is more on the business model for providing these services. This paradigm represents a significant shift from local to **network-centric computing**, where users relinquish direct control of their data and code to Cloud Service Providers (CSPs) who manage the underlying infrastructure.
### b. The Five Defining Attributes
According to NIST, cloud computing is characterized by five essential attributes:
1. **On-demand self-service**: Users can provision computing resources automatically without requiring human interaction with the service provider.
2. **Broad network access**: Capabilities are available over the network accessed through standard mechanisms by various clients (e.g., laptops, smartphones)
3. **Resource pooling**: The provider's resources are pooled to serve multiple consumers using a multi-tenant model. Resources are dynamically assigned and reassigned according to demand.
4. **Rapid elasticity**: Resources can be elastically and rapidly provisioned, in some cases automatically, to scale up or down with demand. To the user, resources can appear to be infinite.
5. **Measured service**: Cloud systems automatically control and optimize resource use by leveraging a metering capability. Resource usage is monitored, controlled, and reported, providing transparency for both the provider and the consumer.
## 2. The Evolution and Driving Forces of Cloud Computing
### a. Key Technological Enablers
Several technological and architectural developments paved the way for the cloud:
- **Processor Technology**: The evolution from single-core processors to multicore processors, Systems on a Chip (SoCs), Graphics Processing Units (GPUs), and Tensor Processing Units (TPUs) provided enormous computing power. These technologies challenged computer scientists to develop new algorithms to exploit concurrency.
- **Storage Technology**: Dramatic advancements in storage, such as the development of solid-state disks (SSDs) and flash memories, enabled systems to handle high transaction volumes, while the price of memory dropped significantly.
- **Networking**: High-performance switches and advances in internet routers have been critical for both supercomputers and cloud infrastructure.
- **Software Engineering**: The emergence of new software models, such as the **three-tier architecture**, provided a structured way to build scalable applications. This model separates applications into a presentation tier (user interface), an application/logic tier (functionality), and a data tier (information storage), allowing each to be modified independently.
### b. Economic Motivation: The Power of Scale
A primary driver for cloud computing is its cost-effectiveness, which stems from two main principles:
1. **Economies of Scale**: Large data centers (over 50,000 systems) can operate five to seven times more efficiently in terms of resources and energy consumption compared to medium-sized centers (around 1,000 systems). CSPs can pass these savings on to users.
2. **Resource Multiplexing**: By sharing resources among many users whose peak demands are not synchronized, overall system utilization increases, making the model more efficient and cost-effective. This eliminates the need for users to make large up-front financial commitments, moving to a **pay-as-you-go** model.
## 3. Cloud Models and Infrastructure
### a. Deployment Models
The term "computer cloud" covers infrastructures of varying sizes and management styles. There are four main deployment models:
- **Public Cloud**: The infrastructure is owned by an organization selling cloud services and is made available to the general public or a large industry group.
- **Private Cloud**: The infrastructure is operated exclusively for a single organization, such as a university or corporation. While it uses similar hardware to a public cloud, it doesn't necessarily support the utility computing payment model since the organization must invest in the infrastructure upfront.
- **Hybrid Cloud**: This model is a composition of two or more clouds (e.g., private and public) that are bound together by technology enabling data and application portability.
- **Community Cloud**: The infrastructure is shared by several organizations with common concerns or goals.