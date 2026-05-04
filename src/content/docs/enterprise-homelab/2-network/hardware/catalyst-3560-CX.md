---
title: "Cisco Catalyst 3560-CX"
description: "Hardware specifications and role of the Layer 3 core switch in the home lab."
---

## Hardware Overview

The **Cisco Catalyst 3560-CX** serves as the **Core/Distribution** layer of my physical lab. Because it is a multilayer switch, it is responsible for all physical Inter-VLAN routing and acts as the high-speed backbone for the network.

### Technical Specifications

| Feature | Specification |
| :--- | :--- |
| **Model** | Cisco Catalyst 3560-CX Series |
| **Form Factor** | Compact, Fanless |
| **Network Layer** | Layer 3 (Multilayer) |
| **Port Configuration** | 16 total ports (Copper + SFP) |
| **Throughput** | 32 Gbps |

## Current Status

Currently, the hardware is in the initial provisioning phase. It is acting as the primary management switch connecting the Proxmox host to the rest of the infrastructure. 

### Planned Physical Port Mapping
* **SFP Ports:** Reserved for future high-speed fiber uplinks.
* **Gigabit Copper:** Uplinks to the Catalyst 2960 and the HP t740 Gateway.