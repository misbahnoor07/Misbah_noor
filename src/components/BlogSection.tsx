import React, { useState } from 'react';
import { BLOG_POSTS_DATA } from '../data/portfolioData';
import { BlogPost } from '../types';
import {
  BookOpen,
  Clock,
  User,
  X,
  ArrowRight,
  Sparkles,
  Calendar,
} from 'lucide-react';

interface BlogSectionProps {
  darkMode: boolean;
  onOpenHireModal: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  darkMode,
  onOpenHireModal,
}) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-orange-100 text-orange-900 dark:bg-orange-950/80 dark:text-orange-300 border border-orange-200 dark:border-orange-800 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
            <span>Articles & Strategies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            E-commerce & SEO <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-500 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="mt-3 text-base font-semibold text-slate-700 dark:text-slate-300">
            Actionable strategies, Etsy SEO updates, and digital product marketing tips written by Misbah Noor.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS_DATA.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className={`group rounded-3xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-700 hover:border-orange-500/50 hover:shadow-2xl shadow-slate-950/80'
                  : 'bg-white border-orange-100 shadow-xl shadow-orange-500/5 hover:border-orange-300 hover:shadow-2xl'
              }`}
            >
              <div>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-black bg-orange-600 text-white shadow-xs">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400 mb-2 font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-950 dark:text-white leading-snug mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePost(post);
                  }}
                  className="w-full py-2.5 rounded-xl font-extrabold text-xs text-orange-700 dark:text-orange-300 bg-orange-50 dark:bg-orange-950/60 hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-orange-200 dark:border-orange-900/40"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Article Modal Reader */}
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div
              className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-10 border-2 shadow-2xl ${
                darkMode ? 'bg-slate-950 text-slate-100 border-slate-700' : 'bg-white text-slate-900 border-orange-200'
              }`}
            >
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-orange-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="rounded-2xl overflow-hidden aspect-video mb-6 relative">
                <img
                  src={activePost.coverImage}
                  alt={activePost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2 text-xs font-extrabold text-orange-600 dark:text-orange-400 mb-2">
                <span>{activePost.category}</span>
                <span>•</span>
                <span>{activePost.date}</span>
                <span>•</span>
                <span>{activePost.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white leading-tight mb-6">
                {activePost.title}
              </h2>

              <div className="prose prose-orange dark:prose-invert max-w-none text-sm leading-relaxed whitespace-pre-line mb-8 text-slate-800 dark:text-slate-200 font-medium">
                {activePost.content}
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-amber-600 text-white font-black flex items-center justify-center text-sm shadow-md shadow-orange-500/20">
                    MN
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-950 dark:text-white">
                      Written by {activePost.author}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                      Digital Entrepreneur & Etsy SEO Strategist
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActivePost(null);
                    onOpenHireModal();
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 fill-white/20" />
                  <span>Hire Misbah to Implement This Strategy</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
