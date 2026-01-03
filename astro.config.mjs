// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.hotdoc.jp', 
	integrations: [
		starlight({
			plugins: [
				starlightThemeBlack({
					navLinks: [{ //optional
						label: 'Docs',
						link: 'getting-started',
					}],
					footerText: //optional
					'Built & designed by [shadcn](https://twitter.com/shadcn). Ported to Astro Starlight by [Adrián UB](https://github.com/adrian-ub). The source code is available on [GitHub](https://github.com/adrian-ub/starlight-theme-black).'
				})
			],
			title: 'windhole docs (under construction)',
			logo: {
				src: './public/hotdoc_logo_transp.svg', 
				replacesTitle: false,
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

