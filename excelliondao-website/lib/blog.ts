import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  coverImage?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

function ensureDirectoryExists() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): BlogPostMeta[] {
  ensureDirectoryExists();
  
  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        date: data.date ? new Date(data.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }) : '',
        readTime: stats.text,
        category: data.category || 'General',
        tags: data.tags || [],
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureDirectoryExists();
  
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || 'Untitled',
    excerpt: data.excerpt || '',
    content,
    date: data.date ? new Date(data.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) : '',
    readTime: stats.text,
    category: data.category || 'General',
    tags: data.tags || [],
    author: {
      name: data.author?.name || 'ExcellionDao Team',
      avatar: data.author?.avatar || 'ED',
    },
    coverImage: data.coverImage,
  };
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set(allPosts.map((post) => post.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set(allPosts.flatMap((post) => post.tags));
  return Array.from(tags);
}

export function getRelatedPosts(slug: string, limit: number = 3): BlogPostMeta[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  const allPosts = getAllPosts();
  
  // Score posts based on matching category and tags
  const scoredPosts = allPosts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      let score = 0;
      
      // Same category = 3 points
      if (post.category === currentPost.category) score += 3;
      
      // Each matching tag = 1 point
      post.tags.forEach((tag) => {
        if (currentPost.tags.includes(tag)) score += 1;
      });
      
      return { ...post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scoredPosts;
}



