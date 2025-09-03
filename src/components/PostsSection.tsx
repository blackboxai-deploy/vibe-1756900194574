"use client";

import { useState } from 'react';
import MatrixCard from './ui/matrix-card';
import MatrixButton from './ui/matrix-button';
import TypingEffect from './ui/typing-effect';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'development' | 'security' | 'tutorial' | 'thoughts';
  readTime: string;
  tags: string[];
}

const posts: Post[] = [
  {
    id: 'post_001',
    title: 'Building Secure APIs with Node.js and Express',
    excerpt: 'Best practices for creating secure REST APIs, including authentication, rate limiting, and data validation.',
    date: '2024-01-15',
    category: 'development',
    readTime: '8 min',
    tags: ['Node.js', 'Security', 'API']
  },
  {
    id: 'post_002', 
    title: 'OWASP Top 10: A Developer\'s Guide to Web Security',
    excerpt: 'Understanding and preventing the most critical web application security risks with practical examples.',
    date: '2024-01-10',
    category: 'security',
    readTime: '12 min',
    tags: ['OWASP', 'Web Security', 'Vulnerabilities']
  },
  {
    id: 'post_003',
    title: 'Docker Security: Hardening Your Containers',
    excerpt: 'Essential security practices for containerized applications, from image scanning to runtime protection.',
    date: '2024-01-05',
    category: 'security',
    readTime: '10 min',
    tags: ['Docker', 'DevOps', 'Security']
  },
  {
    id: 'post_004',
    title: 'Advanced React Patterns for Large Applications',
    excerpt: 'Scalable React patterns including compound components, render props, and custom hooks.',
    date: '2024-01-01',
    category: 'development',
    readTime: '15 min',
    tags: ['React', 'Patterns', 'Architecture']
  },
  {
    id: 'post_005',
    title: 'Setting Up a Bug Bounty Environment',
    excerpt: 'Complete guide to setting up a home lab for ethical hacking and bug bounty hunting.',
    date: '2023-12-28',
    category: 'tutorial',
    readTime: '20 min',
    tags: ['Bug Bounty', 'Hacking', 'Lab Setup']
  },
  {
    id: 'post_006',
    title: 'The Philosophy of Clean Code',
    excerpt: 'Thoughts on writing maintainable, readable code that stands the test of time.',
    date: '2023-12-20',
    category: 'thoughts',
    readTime: '6 min',
    tags: ['Clean Code', 'Philosophy', 'Best Practices']
  }
];

const categoryColors = {
  development: 'text-green-400',
  security: 'text-red-400',
  tutorial: 'text-blue-400',
  thoughts: 'text-yellow-400'
};

export default function PostsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visiblePosts, setVisiblePosts] = useState(4);

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const displayPosts = filteredPosts.slice(0, visiblePosts);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="posts" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-green-400 mb-8">
            POSTS
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-6"></div>
          <TypingEffect
            text="Thoughts, tutorials, and insights on development and security"
            speed={50}
            className="text-green-300 text-lg"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {['all', 'development', 'security', 'tutorial', 'thoughts'].map((category) => (
            <MatrixButton
              key={category}
              variant={selectedCategory === category ? 'primary' : 'secondary'}
              onClick={() => {
                setSelectedCategory(category);
                setVisiblePosts(4);
              }}
              glow={selectedCategory === category}
              size="sm"
              className="capitalize"
            >
              {category === 'all' ? 'All Posts' : category}
            </MatrixButton>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayPosts.map((post) => (
            <MatrixCard 
              key={post.id} 
              glow 
              animated 
              className="p-6 h-full cursor-pointer hover:border-green-400/70"
            >
              {/* Post Header */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 text-xs font-mono bg-black/50 border border-current rounded ${categoryColors[post.category]}`}>
                  {post.category.toUpperCase()}
                </span>
                <div className="text-right">
                  <div className="text-green-500 font-mono text-xs">
                    {formatDate(post.date)}
                  </div>
                  <div className="text-green-600 font-mono text-xs">
                    {post.readTime} read
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="space-y-4 flex-1">
                <h3 className="text-green-400 font-mono text-lg font-bold leading-tight">
                  {post.title}
                </h3>

                <p className="text-green-300 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs bg-green-500/10 text-green-400 border border-green-500/30 rounded font-mono"
                    >
                      #{tag.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read More */}
              <div className="mt-6 pt-4 border-t border-green-500/20">
                <MatrixButton size="sm" variant="ghost" className="w-full">
                  READ MORE →
                </MatrixButton>
              </div>
            </MatrixCard>
          ))}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > visiblePosts && (
          <div className="text-center">
            <MatrixButton
              variant="primary"
              glow
              onClick={() => setVisiblePosts(prev => prev + 4)}
            >
              LOAD MORE POSTS
            </MatrixButton>
          </div>
        )}

        {/* No posts message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-green-600 font-mono text-lg">
              No posts found in this category.
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-black/60 border border-green-500/30 rounded px-6 py-3 font-mono">
            <TypingEffect
              text={`${filteredPosts.length} POSTS AVAILABLE • ${posts.reduce((acc, post) => acc + parseInt(post.readTime), 0)} MIN TOTAL READ TIME`}
              speed={60}
              className="text-green-400 text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}