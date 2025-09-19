---
title: The Cloud Ecosystem
draft:
tags:
  - cloud
  - data-science
  - data-engineering
---
## 1. Introduction to the Cloud Ecosystem
[[Introduction to Cloud Computing#a. What is Cloud Computing?|Cloud computing]] is a **disruptive technology** that has a transformative effect on nearly all areas of computing, including algorithms, software, hardware, databases, and networking. It presents unique challenges and requiers new approaches to concepts like load balancing.
>[!example] Example of Transformation: Load Balancing
>Traditionally, load balancing aimed to distribute work evenly across system components. In cloud computing, the focus shifts to **minimizing energy consumption**. This often means concentrating workloads on the fewest serves possible and switching the others to an energy-saving mode.

**Hardware and Resource Management Evolution**:
- *Hardware*: Cloud environments require hardware to support multiple levels of protection and a trusted execution mode, as a hypervisor, not a single OS, manages resources.
- *Resource Management*: Cloud systems must be **elastic** to handle sudden workload spikes while also being energy-efficient. These complexities must be hidden from users through simple interfaces.
The major players in the cloud ecosystem include Amazon, Google, Microsoft, and more recently, IBM.
## 2. Core Concepts and Entities
### a. Entities in Cloud Computing
According to the NIST reference model, the key entities in the cloud ecosystem are:

![[fig-nist-model.png]]
- *Service Consumer*: The user or organization that uses cloud services.
- *Service Provider*: The company that makes the services available (e.g., AWS, Google).
- *Carrier*: The intermediary providing network connectivity between providers and consumers.
- *Broker*: An entity that manages the use, performance, and delivery of cloud services, often negotiating between providers and consumers.
- *Auditor*: A party that conducts independent assessments of cloud services, security, performance, and privacy. An audit systematically evaluates a cloud system against established criteria.
### b. Cloud Delivery Models
Cloud Service Providers (CSPs) offer services through one or more delivery models. The degree of control a user has over the infrastructure varies significantly between models.
#### (i). Software as a Service (SaaS)
> [!definition] 
> SaaS provides centrally hosted software on a subscription basis. Users access applications via a thin client interface like a web browser. The provider manages the entire underlying infrastructure (network, servers, OS, storage).

**User Control**: Minimal, limited to user-scientific application configuration settings.
> [!example]
> Gmail, Google Docs, workflow management, and Customer Relationship Management (CRM) software.

**Best Use Cases**:
- Applications with many competitors, like email.
- Applications with periodic demand peaks, like billing and payroll.
- Applications needing web or mobile access.
- Short-term needs, such as collaborative software for a project.
**Limitations:** Not suitable for applications that need real-time responses or where data cannot be hosted externally.
#### (ii). Platform as a Service (PaaS)
> [!definition]
> PaaS offer a platform for developers to build, deploy, and run applications without managing the underlying infrastructure. The provider supports specific programming languages and tools.

**User Control:** Users control the deployed applications and possibly some hosting environment configurations, but not the OS, servers, or network.
>[!example]
>Google App Engine, Microsoft Azure

**Best Use Cases**: Software development environments where multiple developers collaborate and where development and testing need to be automated.

**Limitations:** Not ideal if applications need to be portable, use proprietary languages, or require customized hardware and software for performance.
#### (iii). Infrastructure as a Service (IaaS)
> [!definition]
> IaaS provides fundamental computing resources like processing, storage, and networks. The consumer can deploy and run arbitrary software, including operating systems and applications.

**User Control**: The user controls the operating systems, storage, and deployed applications, with limited control over some networking components (e.g., host firewalls). The CSP manages the physical infrastructure and hypervisor.

**Characteristics:** Resources are distributed, support dynamic scaling, use a utility (variable cost) pricing model, and hardware is shared among users.

> [!example] 
> Amazon Web Services (AWS) is a pioneer in IaaS.

**Best Use Cases**: Situations with volatile demand, new businesses that want to avoid investing in infrastructure, or rapidly expanding organizations.

![[Screenshot 2025-09-18 at 4.44.22 PM.png]]

#### (iv) Database as a Service (DBaaS)
> [!definition]
> A cloud service where the database runs on the provider's infrastructure, enabling users to set up and operate databases using a common set of abstractions.

**Key Features:**
- *Self-service*: 
