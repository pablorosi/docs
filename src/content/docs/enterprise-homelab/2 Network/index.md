---
title: "Network Architecture"
description: "Overview of the hybrid physical and virtual network topology."
sidebar:
  label: "2 Network"
---

## Physical Topology Diagram

![Hybrid Lab Network Topology](/network-topology.svg)
*Figure 1: Current physical network architecture featuring a collapsed core design.*

## Architecture Overview

The physical lab topology follows a hierarchical design to separate edge routing, core switching, and compute resources.

*   **Edge Gateway (GL.iNet):** Provides upstream connectivity to the ISP and handles external NAT/DHCP for the lab environment.
*   **Core Switch (Catalyst 3560-CX):** Acts as the high-speed backbone of the lab, aggregating links from the gateway, the compute node, and the access switch.
*   **Compute Node (HP t740):** Hosts the Proxmox hypervisor and EVE-NG simulation engine, bridging the physical and virtual environments via multiple hardware NICs.
*   **Access Switch (Catalyst 2960):** Provides Layer 2 connectivity for downstream devices, console loops, and future IoT endpoints.
*   **Management Console (Admin Workstation):** A dedicated machine connected to the core switch for Out-of-Band (OOB) and In-Band configuration of the infrastructure.