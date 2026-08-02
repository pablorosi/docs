// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.pablorosi.dev',
	prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
	redirects: {
		'/enterprise-homelab/1-architecture/hardware-specs': '/enterprise-homelab/phase-1-ccna-lab/1-architecture/hardware-specs',
		'/enterprise-homelab/1-architecture/network-topology': '/enterprise-homelab/phase-1-ccna-lab/1-architecture/network-topology',
		'/enterprise-homelab/2-hypervisor/proxmox-installation': '/enterprise-homelab/phase-1-ccna-lab/2-hypervisor/proxmox-installation',
		'/enterprise-homelab/2-hypervisor/pcie-passthrough': '/enterprise-homelab/phase-1-ccna-lab/3-emulation/eve-ng-deployment',
		'/enterprise-homelab/3-networking/cisco-switches': '/enterprise-homelab/phase-1-ccna-lab/1-architecture/network-topology',
		'/enterprise-homelab/3-networking/tailscale-mesh': '/enterprise-homelab/phase-1-ccna-lab/2-hypervisor/proxmox-installation',
		'/enterprise-homelab/4-emulation/eve-ng-deployment': '/enterprise-homelab/phase-1-ccna-lab/3-emulation/eve-ng-deployment',
		'/enterprise-homelab/4-emulation/cisco-images': '/enterprise-homelab/phase-1-ccna-lab/3-emulation/eve-ng-deployment',
		'/enterprise-homelab/7-troubleshooting/catalyst-autonegotiation': '/enterprise-homelab/phase-1-ccna-lab/5-troubleshooting/catalyst-autonegotiation',
		'/enterprise-homelab/7-troubleshooting/vlan-internet-routing-failure': '/enterprise-homelab/phase-1-ccna-lab/5-troubleshooting/vlan-internet-routing-failure',
		'/enterprise-homelab/7-troubleshooting/blank-gateway-drop': '/enterprise-homelab/phase-1-ccna-lab/5-troubleshooting/blank-gateway-drop',
		'/enterprise-homelab/phase-1-ccna-lab/2-hypervisor/pcie-passthrough': '/enterprise-homelab/phase-1-ccna-lab/3-emulation/eve-ng-deployment',
		'/enterprise-homelab/phase-1-ccna-lab/3-networking/cisco-switches': '/enterprise-homelab/phase-1-ccna-lab/1-architecture/network-topology',
		'/enterprise-homelab/phase-1-ccna-lab/3-networking/tailscale-mesh': '/enterprise-homelab/phase-1-ccna-lab/2-hypervisor/proxmox-installation',
		'/enterprise-homelab/phase-1-ccna-lab/4-emulation/cisco-images': '/enterprise-homelab/phase-1-ccna-lab/3-emulation/eve-ng-deployment',
		'/enterprise-homelab/phase-1-ccna-lab/4-emulation/eve-ng-deployment': '/enterprise-homelab/phase-1-ccna-lab/3-emulation/eve-ng-deployment',
		'/enterprise-homelab/phase-1-ccna-lab/5-labs--topologies': '/enterprise-homelab/phase-1-ccna-lab/4-labs--topologies',
		'/enterprise-homelab/phase-1-ccna-lab/6-troubleshooting/catalyst-autonegotiation': '/enterprise-homelab/phase-1-ccna-lab/5-troubleshooting/catalyst-autonegotiation',
		'/enterprise-homelab/phase-1-ccna-lab/6-troubleshooting/vlan-internet-routing-failure': '/enterprise-homelab/phase-1-ccna-lab/5-troubleshooting/vlan-internet-routing-failure',
		'/enterprise-homelab/phase-1-ccna-lab/6-troubleshooting/blank-gateway-drop': '/enterprise-homelab/phase-1-ccna-lab/5-troubleshooting/blank-gateway-drop',
		'/enterprise-homelab/5-compute/docker-engine': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/5-compute/docker-compose': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/6-observability/prometheus': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/6-observability/grafana': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/ipam': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/phase-2-infrastructure/1-compute/docker-engine': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/phase-2-infrastructure/1-compute/docker-compose': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/phase-2-infrastructure/2-observability/prometheus': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/phase-2-infrastructure/2-observability/grafana': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/phase-2-infrastructure/3-ipam': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/phase-2-infrastructure/2-compute/docker-engine': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/phase-2-infrastructure/2-compute/docker-compose': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/phase-2-infrastructure/3-observability/prometheus': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/phase-2-infrastructure/3-observability/grafana': '/enterprise-homelab/phase-2-infrastructure/',
		'/enterprise-homelab/phase-2-infrastructure/4-ipam': '/enterprise-homelab/phase-2-infrastructure/',
	},
	integrations: [
		mermaid(),
		sitemap(),
		starlight({
			lastUpdated: true,
			customCss: [
				'@fontsource/jetbrains-mono',
				'@fontsource/inter',
				'./src/styles/custom.css'],
			title: 'pablo@docs:~$',
			components: {
				Head: './src/components/starlight/Head.astro',
				Header: './src/components/Header.astro',
				Sidebar: './src/components/Sidebar.astro',
			},

			favicon: '/favicon.ico',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/pablorosi' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/pablorosi' },
			// 	{icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/pablorosidev' },
			// 	{icon: 'blueSky', label: 'BlueSky', href: 'https://bsky.app/profile/pablorosi.dev' },
		  ],
		
			sidebar: [
				{
					label: 'Enterprise Homelab',
					collapsed: true,
					items: [
						{
							label: 'Project Overview',
							link: '/enterprise-homelab/',
						},
						{
							label: 'Phase 1 — CCNA Lab & Emulation (Completed)',
							collapsed: true,
							items: [
								{
									label: 'Overview',
									link: '/enterprise-homelab/phase-1-ccna-lab/',
								},
								{
									label: '1 Architecture',
									collapsed: true,
									items: [
										{ label: 'Hardware Specs', link: '/enterprise-homelab/phase-1-ccna-lab/1-architecture/hardware-specs/' },
										{ label: 'Network Topology', link: '/enterprise-homelab/phase-1-ccna-lab/1-architecture/network-topology/' },
									],
								},
								{
									label: '2 Hypervisor',
									collapsed: true,
									items: [
										{ label: 'Proxmox Installation', link: '/enterprise-homelab/phase-1-ccna-lab/2-hypervisor/proxmox-installation/' },
									],
								},
								{
									label: '3 Emulation',
									collapsed: true,
									items: [
										{ label: 'EVE-NG Deployment', link: '/enterprise-homelab/phase-1-ccna-lab/3-emulation/eve-ng-deployment/' },
									],
								},
								{
									label: '4 Labs & Topologies',
									collapsed: true,
									items: [
										{ label: 'Labs & Topologies', link: '/enterprise-homelab/phase-1-ccna-lab/4-labs--topologies/' },
									],
								},
								{
									label: '5 Troubleshooting',
									collapsed: true,
									items: [
										{ label: 'Layer 1 Failure: Autonegotiation & Auto-MDIX', link: '/enterprise-homelab/phase-1-ccna-lab/5-troubleshooting/catalyst-autonegotiation/' },
										{ label: 'Layer 3 Failure: Missing Return Route on Edge Gateway', link: '/enterprise-homelab/phase-1-ccna-lab/5-troubleshooting/vlan-internet-routing-failure/' },
										{ label: 'macOS Local Routing: Blank Gateway Drop', link: '/enterprise-homelab/phase-1-ccna-lab/5-troubleshooting/blank-gateway-drop/' },
									],
								},
							],
						},
						{
							label: 'Phase 2 — Infrastructure Expansion (Roadmap)',
							collapsed: true,
							items: [
								{
									label: 'Overview',
									link: '/enterprise-homelab/phase-2-infrastructure/',
								},
								{
									label: '1 Router',
									collapsed: true,
									items: [
										{ label: 'OPNsense Router', link: '/enterprise-homelab/phase-2-infrastructure/1-router/opnsense/' },
									],
								},
								{
									label: '2 IaC & Automation',
									collapsed: true,
									items: [
										{ label: 'IaC & Automation', link: '/enterprise-homelab/phase-2-infrastructure/2-iac--automation/' },
									],
								},
							],
						},
					],
				},
				{
					label: 'Cloud Infrastructure',
					collapsed: true,
					items: [
						{
							label: 'Project Overview',
							link: '/cloud-infrastructure/',
						},
						{
							label: 'V2 — Cloudflare Pages (Current)',
							collapsed: true,
							autogenerate: { directory: 'cloud-infrastructure/V2 — Cloudflare Pages Migration (Current)', collapsed: true },
						},
						{
							label: 'V1 — Hetzner (Legacy)',
							collapsed: true,
							autogenerate: { directory: 'cloud-infrastructure/V1 — Hetzner Secure Cloud Routing (Legacy)', collapsed: true },
						},
						{
							label: 'Troubleshooting',
							collapsed: true,
							autogenerate: { directory: 'cloud-infrastructure/2 Troubleshooting', collapsed: true },
						},
					],
				},
				{
					label: 'Learning Log',
					collapsed: true,
					items: [
						{
							label: 'All Notes',
							link: '/learning-log/',
						},
						{
							label: 'Networking Theory',
							collapsed: true,
							autogenerate: { directory: 'learning-log/networking-theory', collapsed: true },
						},
						{
							label: 'Networking Labs',
							collapsed: true,
							autogenerate: { directory: 'learning-log/networking-lab', collapsed: true },
						},
						{
							label: 'Python',
							collapsed: true,
							autogenerate: { directory: 'learning-log/python', collapsed: true },
						},
						{
							label: 'Docker',
							collapsed: true,
							autogenerate: { directory: 'learning-log/docker', collapsed: true },
						},
						{
							label: 'Proxmox',
							collapsed: true,
							autogenerate: { directory: 'learning-log/proxmox', collapsed: true },
						},
						{
							label: 'EVE-NG',
							collapsed: true,
							autogenerate: { directory: 'learning-log/eve-ng', collapsed: true },
						},
						{
							label: 'Tailscale',
							collapsed: true,
							autogenerate: { directory: 'learning-log/tailscale', collapsed: true },
						},
						{
							label: 'Databases',
							collapsed: true,
							autogenerate: { directory: 'learning-log/databases', collapsed: true },
						},
					],
				},
				
			],
		}),
	],
});
