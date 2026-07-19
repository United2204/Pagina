import type { CollectionEntry } from 'astro:content';

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('es-UY', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);

export const sortPosts = (posts: CollectionEntry<'blog'>[]) =>
  [...posts].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

export const publishedPosts = (posts: CollectionEntry<'blog'>[]) =>
  sortPosts(posts.filter((post) => !post.data.draft));
