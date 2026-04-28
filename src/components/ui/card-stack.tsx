"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ArrowRight, Terminal } from 'lucide-react';

export interface CardStackItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  ctaLabel?: string;
  metadata?: {
    label: string;
    value: string;
  }[];
}

interface CardStackProps {
  items: any[];
  cardWidth?: number;
  cardHeight?: number;
  autoAdvance?: boolean;
  overlap?: number;
  spreadDeg?: number;
  perspectivePx?: number;
  maxVisible?: number;
  tiltXDeg?: number;
  className?: string;
  renderCard?: (item: any, props: { active: boolean; index: number }) => React.ReactNode;
}

export function CardStack({
  items,
  cardWidth = 600,
  cardHeight = 400,
  overlap = 0.55,
  spreadDeg = 35,
  perspectivePx = 1200,
  maxVisible = 5,
  tiltXDeg = 0,
  className,
  renderCard,
}: CardStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div 
      className={cn("relative flex flex-col items-center justify-center", className)}
      style={{ perspective: perspectivePx }}
    >
      <div 
        className="relative"
        style={{ 
          width: cardWidth, 
          height: cardHeight,
        }}
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => {
            // Calculate position relative to active index
            const position = (index - activeIndex + items.length) % items.length;
            
            // Only render up to maxVisible cards
            if (position >= maxVisible) return null;

            const isFront = position === 0;
            
            // Fanned out logic
            // We want the cards to spread out horizontally and rotate like a real fan
            const rotation = isFront ? 0 : (position * (spreadDeg / (maxVisible - 1))) - (spreadDeg / 2);
            const zIndex = items.length - position;
            const opacity = 1 - (position * (0.8 / maxVisible));
            const scale = 1 - (position * 0.04);
            const yOffset = position * 10;
            // Spread cards horizontally based on their position in the fan
            const xOffset = isFront ? 0 : (position * 60) * (rotation > 0 ? 1 : -1);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, rotate: 0, y: 100 }}
                animate={{ 
                  opacity,
                  scale,
                  zIndex,
                  rotate: rotation,
                  rotateX: isFront ? 0 : tiltXDeg,
                  y: yOffset,
                  x: xOffset,
                  filter: isFront ? 'none' : 'grayscale(30%) blur(0.5px)',
                }}
                whileHover={isFront ? { scale: 1.02, y: -10, transition: { duration: 0.2 } } : {}}
                exit={{ opacity: 0, scale: 0.5, x: -400, rotate: -45 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 25 
                }}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "absolute inset-0 rounded-[32px] overflow-hidden cursor-pointer",
                  isFront ? "" : "pointer-events-none"
                )}
              >
                {renderCard ? (
                  renderCard(item, { active: isFront, index })
                ) : (
                  <div className={cn(
                    "w-full h-full relative bg-zinc-900 border border-white/10 shadow-2xl",
                    isFront ? "ring-2 ring-r3up-orange/50" : ""
                  )}>
                    <img 
                      src={item.imageSrc} 
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Data Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 px-2 py-1 bg-black/50 backdrop-blur-md rounded border border-white/10 w-fit">
                            <Terminal size={10} className="text-r3up-orange" />
                            <span className="text-[8px] font-mono text-white uppercase tracking-[0.2em]">Layer_Status: Active</span>
                          </div>
                          <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter leading-none">
                            {item.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-mono text-r3up-orange uppercase font-bold">Node_ID</div>
                          <div className="text-xs font-mono text-white">R3-{item.id.toUpperCase()}</div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-white/90 text-lg max-w-md leading-tight font-bold tracking-tight">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            {item.metadata?.map((meta: any, i: number) => (
                              <div key={i}>
                                <div className="text-[8px] font-mono text-white/40 uppercase tracking-widest">{meta.label}</div>
                                <div className="text-sm font-black text-r3up-green">{meta.value}</div>
                              </div>
                            ))}
                          </div>

                          {item.ctaLabel && (
                            <button className="px-6 py-3 bg-r3up-orange text-black font-black uppercase text-[10px] tracking-widest rounded-sm hover:bg-white transition-all pointer-events-auto">
                              {item.ctaLabel}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1/2 w-full animate-scanline pointer-events-none" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-20 flex items-center gap-8">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
        >
          <ArrowRight size={20} className="rotate-180" />
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <div 
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                i === activeIndex ? "bg-r3up-orange w-6" : "bg-zinc-200"
              )}
            />
          ))}
        </div>
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
