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
	integrations: [
		mermaid(),
		sitemap(),
		starlight({
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
							label: '1 Architecture',
							collapsed: true,
							autogenerate: { directory: 'enterprise-homelab/1 Architecture', collapsed: true },
						},
						{
							label: '2 Hypervisor',
							collapsed: true,
							autogenerate: { directory: 'enterprise-homelab/2 Hypervisor', collapsed: true },
						},
						{
							label: '3 Networking',
							collapsed: true,
							autogenerate: { directory: 'enterprise-homelab/3 Networking', collapsed: true },
						},
						{
							label: '4 Emulation',
							collapsed: true,
							autogenerate: { directory: 'enterprise-homelab/4 Emulation', collapsed: true },
						},
						{
							label: '5 Compute',
							collapsed: true,
							autogenerate: { directory: 'enterprise-homelab/5 Compute', collapsed: true },
						},
						{
							label: '6 Observability',
							collapsed: true,
							autogenerate: { directory: 'enterprise-homelab/6 Observability', collapsed: true },
						},
						{
							label: '7 Troubleshooting',
							collapsed: true,
							autogenerate: { directory: 'enterprise-homelab/7 Troubleshooting', collapsed: true },
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
