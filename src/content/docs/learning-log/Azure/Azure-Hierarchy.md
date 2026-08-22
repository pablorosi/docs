---
title: Azure Hierarchy
date: 2026-08-04
tags:
  - azure
---
### Management Groups 

Organizacional containers that sit above subscriptions in Azure.
They are used to apply polices (Azure Policy), access controls (RBAC) and compliance rules to multiple subscriptions at one, rather than having to configure them one by one 

**Depth Limit**. 
You can nest Management Groups up to a **maximum of 6 levels deep** (this excludes the Root level and the Subscription level).

**Total Limit**. 
A single Azure tenant supports a maximum of **10,000 Management Groups**.

**Parenting**. 
Each Management Group or Subscription can only have **ONE single parent**. They cannot exist in two places at once.

### Subscription 


## Resource Groups 

A Resource Group name only needs to be unique within your specific Azure Subscription.

Deleting the resource group of an application environment will automatically destroy every resource inside it.

A Resource Group must be assigned a specific Region (e.g., East US)
The Region dictates where the metadata for those resources is stored, ensuring compliance with data residency laws.

The resources inside the Resource Group can be deployed in completely different Regions than the Resource Group itself.

You can move most resources between different Resource Groups, and even between different Azure Subscriptions, without experiencing downtime








