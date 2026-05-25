// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
	integrations: [
		starlight({
			customCss: [
				'@fontsource/jetbrains-mono',
				'@fontsource/inter',
				'./src/styles/custom.css'],
			title: 'pablo@docs:~$',
			components: {
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
              			label: '1 Systems',
						collapsed: true,
              			autogenerate: { directory: 'enterprise-homelab/1 Systems', collapsed: true },
            			},
            			{
              			label: '2 Network',
						collapsed: true,
              			autogenerate: { directory: 'enterprise-homelab/2 Network', collapsed: true },
            			},
						{
              			label: '3 Troubleshooting',
						collapsed: true,
              			autogenerate: { directory: 'enterprise-homelab/3 Troubleshooting', collapsed: true },
            			},
          					],
				},
				{
					label: 'Cloud Infrastructure',
					collapsed: true,
					autogenerate: { directory: 'cloud-infrastructure', collapsed: true },
				},
				{
					label: 'Learning Log',
					collapsed: true,
					autogenerate: { directory: 'learning-log', collapsed: true },
				},
				
			],
		}),
	],
});
