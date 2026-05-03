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
			components: {
				Header: './src/components/Header.astro',
			},

			favicon: '/favicon.ico',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/pablorosi/' },
			// 	{icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/pablorosidev' },
			// 	{icon: 'blueSky', label: 'BlueSky', href: 'https://bsky.app/profile/pablorosi.dev' },
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
