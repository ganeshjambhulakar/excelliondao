'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage?: string;
}

interface BlogPreviewProps {
  posts: BlogPost[];
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-dark-900" />
      
      <div className="relative container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              From Our Blog
            </span>
            <h2 className="text-responsive-md font-bold text-white">
              Latest <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 text-primary-400 hover:text-primary-300 flex items-center gap-2 group"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card glass-card-hover overflow-hidden group"
            >
              {/* Cover Image */}
              <div className="h-48 relative overflow-hidden bg-dark-800">
                {post.coverImage ? (
                  <Image 
                    src={post.coverImage} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="h-full bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-dark-800">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.1)_50%,transparent_75%)] bg-[length:200%_200%] group-hover:animate-gradient-x" />
                  </div>
                )}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-dark-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-dark-400 text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-400 text-sm font-medium flex items-center gap-1 group/link"
                >
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}




