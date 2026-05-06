---
title: "Cisco Catalyst 2960"
description: "Hardware specifications and role of the Layer 2 access switch."
---

## Hardware Overview

The **Cisco Catalyst 2960-8TC-L** acts as the **Access Layer** switch in the topology. It provides Layer 2 connectivity for standard physical endpoints and management interfaces that do not require Gigabit speeds.

### Technical Specifications

| Feature | Specification |
| :--- | :--- |
| **Model** | Cisco Catalyst 2960-8TC-L |
| **Form Factor** | Compact / Fixed Configuration |
| **Network Layer** | Layer 2 |
| **Port Configuration** | 8 x FastEthernet (10/100) + 1 x Gigabit Dual-purpose |
| **Forwarding Bandwidth** | 16 Gbps |

## Current Status

The switch is racked and physically linked to the core. Advanced configurations (like Port-Security and specific Access VLANs) are currently in the backlog.

### Planned Physical Port Mapping
* **Gi0/1 (Uplink):** Trunk port connecting back to the Catalyst 3560-CX.
* **Fa0/1 - Fa0/8:** Designated for access-level testing, console management loops, and future IoT/lab endpoint devices.