import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig, absoluteUrl } from '../config/site';
import { publishedPosts } from '../utils/content';

export const GET: APIRoute = async () => {
  const posts = publishedPosts(await getCollection('blog'));
  return rss({
    title: `${siteConfig.name} · Blog`,
    description: siteConfig.description,
    site: siteConfig.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: absoluteUrl(`/blog/${post.id}/`),
    })),
  });
};
