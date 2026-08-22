---
title: Azure Overview
date: 2026-08-06
tags:
  - azure
---
Core Services
 * Virtual Machines
 * Virtual Networking
 * Storage
 * Identity Services (Microsoft Entra)


### Virtual Machine

* IaaS
* Windows or Linux OS
* Can be remotely connected using Remote Desktop (RDP) or SSH
* Can be placed on a virtual network
* A server can be created in a few minutes 

### Virtual Machines Abstractions

**Azure Batch**-> Let's you run large-scale parallel jobs. A lot of virtual machines running the same task and reporting their results back to a central location

**Virtual Machine Scale Sets** -> 

**Azure Kubernetes Service (AKS)** ->

**Service Fabric (decreasing role)** -> 

### App Services

Web apps or container apps
Windows or Linux OS
Fully-managed servers, no ability to remote control 
.NET, Java, Ruby, Node.js, PHP, and Python
Benefits in scaling, CI, deployment slots, integrates with VS 

### Storage 
Scalable to Petabytes 
Four types of data: Blobs, queues, tables, files
Various levels of replication included from local to global
Storage tiers (hot, cool, cold, archive)
Managed (for VMs) or unmanaged 

### Data Services 
* SQL -> Azure SQL Database, Azure SQL Managed Instance, SQL Server on a VM. You can also run your own software in a VM
* NoSQL: Cosmos DB
* Snapse Analytics (SQL Data Warehouse)
* PostgreSQL Flexible Server 

### Microservices / Serverless 

**Microservices:** Running packaged applications without having to manage the underlying machines.

* Azure Container Apps
* API Management
* Azure Container Instances
* Services Fabric (minor role)

**Serverless / Event-Driven:** You only pay when your code or workflow is running, down to the millisecond.

* Azure Functions 
* Azure Logic Apps

### Networking

1. Connectivity
How azure resources talk to each other or to the internet
* Virtual Networking (VNet)

2. Security
* Network Security Groups (NSG)
* Azure Private Link
* DDos protection
* Azure Firewall
* Web Application Firewall (WAF)
* Virtual Network Endpoints 
* Bastion

3. Delivery
* CDN 
* Azure Pront Door 
* Traffic Manager 
* App Gateway 

4. Monitoring
* Network Watcher 
* Metrics and Logs
* Packet capture 




