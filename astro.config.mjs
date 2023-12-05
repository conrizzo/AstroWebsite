import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://conrizzo.github.io',
	base: '/ConradsBlog',
	integrations: [mdx(), sitemap(), vue()],
});

// site: 'https://blog.conradswebsite.com',
// Temporary fix for paths issue for github pages deployment
// Added ConradsBlog Header.astro and index.astro

// testing again