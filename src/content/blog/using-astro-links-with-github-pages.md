---
title: 'Using Astro Blog links with GitHub Pages'
description: 'Discussing Astro Blog links with GitHub Pages'
pubDate: 'Dec 05 2023'
heroImage: '/blog-placeholder-3.jpg'
---

This is the first post. I had to learn how Astro works and how it automatically routes and links everything so this would mostly work
with GitHub pages. In my case a current working solution was to delete 'blog' from the default template code.

```javascript
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.conradswebsite.com',	
	integrations: [mdx(), sitemap(), vue()],
});
```
Modifying the params: { slug: `${post.slug}`}, in the [...slug].astro file below:
```javascript
export async function getStaticPaths() {
	const posts = await getCollection('blog');
	return posts.map((post) => ({
		params: { slug: `${post.slug}`},
		props: post,
	}));
}
```
Modifying the '<a href={`${post.slug}/`}> in the index.astro file below:

```javascript
<main>
<section>
    <ul>
        {
        posts.map((post) => (
        <li>
            <a href={`${post.slug}/`}>
                <img width={720} height={360} src={post.data.heroImage} alt="" />
                <h4 class="title">{post.data.title}</h4>
                <p class="date">
                    <FormattedDate date={post.data.pubDate} />
                </p>
            </a>
        </li>
        ))
        }
    </ul>
</section>
</main>
```
