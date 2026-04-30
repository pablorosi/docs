// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: [
				'@fontsource/jetbrains-mono',
				'@fontsource/inter',
				'./src/styles/custom.css'],
			title: 'pablo@docs:~$',

			favicon: '/public/favicon.ico',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/pablorosi/' },
			],
			sidebar: [
				{
					label: 'Secure Cloud Routing',
					autogenerate: { directory: 'secure-cloud-routing' },
				},
				{
					label: 'Enterprise Homelab',
					autogenerate: { directory: 'enterprise-homelab' },
				},
				{
					label: 'DB Administration',
					autogenerate: { directory: 'db-administration' },
				},
			],
		}),
	],
});
