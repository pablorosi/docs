---
title: "Layer 1 Failure: Autonegotiation & Auto-MDIX"
description: "Root cause analysis of a link failure caused by hardcoding interface speeds on a Cisco Catalyst 2960."
---

## The Incident
During the initial Layer 2 provisioning between the Proxmox host and the Cisco Catalyst 2960 access switch, the physical link failed to come up. The interface status showed `down/down`, despite the cable being physically connected and verified.

## The Symptoms
* The interface LED indicator remained completely off.
* The command `show ip interface brief` reported the port as `down` (Protocol: `down`).
* No syslog messages indicated a security violation (e.g., port-security err-disable).

## Root Cause Analysis (RCA)
In an attempt to ensure maximum throughput, the interface speed was manually hardcoded to 1000 Mbps using the command `speed 1000`. 

However, according to the IEEE 802.3ab standard for Gigabit Ethernet over copper (1000BASE-T), **autonegotiation is a mandatory requirement** to es tablish the master/slave timing relationship between the two endpoints. 

Furthermore, manually overriding the speed on older Cisco IOS versions implicitly disables the **Auto-MDIX** (Automatic Medium-Dependent Interface Crossover) feature. Because a straight-through cable was being used instead of a crossover cable, the TX (transmit) and RX (receive) pins could not automatically align, resulting in a complete Layer 1 physical failure.

##  The Solution
To restore connectivity, the interface configuration had to be reverted to its default state, allowing the switch to negotiate the link parameters automatically.

```text
! Entering configuration mode
Switch# configure terminal
Switch(config)# interface GigabitEthernet0/1

! Reverting to automatic negotiation
Switch(config-if)# no speed
Switch(config-if)# speed auto
Switch(config-if)# duplex auto
Switch(config-if)# mdix auto

! Bouncing the port to force renegotiation
Switch(config-if)# shutdown
Switch(config-if)# no shutdown
```
