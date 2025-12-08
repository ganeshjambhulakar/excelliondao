'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, Search, ArrowRight } from 'lucide-react';
import { useState, useMemo } from 'react';

// Static blog data (in production, this would come from getAllPosts())
const blogPosts = [
  {
    slug: 'introduction-to-nft-subscriptions',
    title: 'Introduction to NFT-Based Subscriptions',
    excerpt: 'Learn how NFT technology is revolutionizing the subscription economy, enabling true digital ownership and transferability.',
    date: 'Dec 1, 2024',
    readTime: '8 min read',
    category: 'Technology',
    tags: ['NFT', 'Subscriptions', 'Web3'],
  },
  {
    slug: 'why-blockchain-payments-future',
    title: 'Why Blockchain Payments Are the Future',
    excerpt: 'Explore the advantages of cryptocurrency payments over traditional systems: lower fees, instant settlement, and global reach.',
    date: 'Nov 25, 2024',
    readTime: '6 min read',
    category: 'Industry',
    tags: ['Blockchain', 'Payments', 'Future'],
  },
  {
    slug: 'getting-started-excelliondao-checkout',
    title: 'Getting Started with ExcellionDao Checkout',
    excerpt: 'A step-by-step guide to integrating our crypto checkout system into your e-commerce platform.',
    date: 'Nov 18, 2024',
    readTime: '10 min read',
    category: 'Tutorial',
    tags: ['Tutorial', 'Integration', 'Checkout'],
  },
];

const categories = ['All', 'Technology', 'Industry', 'Tutorial'];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 animated-bg" />
        <div className="absolute inset-0 network-bg opacity-30" />
        
        <div className="relative container-custom text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            Our Blog
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-responsive-xl font-bold text-white mb-6"
          >
            Insights & <span className="gradient-text">Updates</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-300 max-w-2xl mx-auto"
          >
            Stay up to date with the latest in blockchain payments, Web3 technology, 
            and ExcellionDao product updates.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-dark-900 border-b border-dark-800 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 pl-11 pr-4 py-2.5 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-dark-800 text-dark-400 hover:text-white hover:bg-dark-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-dark-500 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 text-primary-400 hover:text-primary-300"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card glass-card-hover overflow-hidden group"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-dark-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.1)_50%,transparent_75%)] bg-[length:200%_200%] group-hover:animate-gradient-x" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30">
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
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-dark-400 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-dark-800 text-dark-400 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

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
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Never Miss an <span className="gradient-text">Update</span>
            </h2>
            <p className="text-dark-400 mb-6">
              Subscribe to our newsletter for weekly insights on blockchain technology and payments.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

