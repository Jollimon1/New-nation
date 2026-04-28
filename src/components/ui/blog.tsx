import React from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Brazil Arbitrage: How to Capture $200 Gaps",
    excerpt: "A deep dive into the current liquidity vacuum in South American secondary markets and how R3UP users are striking the trade.",
    date: "MAR 28, 2026",
    author: "R3UP_INTEL",
    image: "https://picsum.photos/seed/r3up-blog-1/1200/800",
    category: "MARKET_INTEL"
  },
  {
    id: 2,
    title: "Why 'Ghost Brokers' are Killing Your Margin",
    excerpt: "The hidden cost of the middleman. How direct-to-carrier settlement is restructuring the global wholesale landscape.",
    date: "MAR 24, 2026",
    author: "LOGISTICS_HUB",
    image: "https://picsum.photos/seed/r3up-blog-2/1200/800",
    category: "STRATEGY"
  },
  {
    id: 3,
    title: "System Update: V4.2 Execution Desk",
    excerpt: "New features for Syndicate members. Enhanced smart-contract escrow and real-time grading telemetry.",
    date: "MAR 15, 2026",
    author: "SYSTEM_CORE",
    image: "https://picsum.photos/seed/r3up-blog-3/1200/800",
    category: "PRODUCT"
  }
];

export default function Blog() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-r3up-orange/10 text-r3up-orange font-mono text-[10px] tracking-[0.2em] uppercase rounded-full mb-6">
            /Intelligence_Feed
          </div>
          <h1 className="text-7xl font-black italic tracking-tighter uppercase leading-[0.8] mb-6 text-zinc-900">
            The <span className="text-r3up-orange">R3UP</span> Dispatch.
          </h1>
          <p className="max-w-2xl text-zinc-500 font-bold text-sm uppercase tracking-widest">
            High-stakes market intelligence, logistics strategy, and system updates for the hardware empire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] mb-8 border-4 border-black shadow-xl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-1 bg-black text-white font-mono text-[9px] tracking-widest uppercase">
                  {post.category}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-6 text-zinc-400 font-mono text-[10px] uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Clock size={12} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={12} />
                    {post.author}
                  </div>
                </div>
                
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-zinc-900 group-hover:text-r3up-orange transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 flex items-center gap-2 text-r3up-orange font-black uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
                  Read_Full_Intel <ArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
