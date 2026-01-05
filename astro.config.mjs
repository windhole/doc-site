// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.hotdoc.jp', 
	integrations: [
		starlight({
			title: 'windhole docs (under construction)',
			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'Google',
					link: 'https://google.com/'
				},
			],
		}),
	],
});
