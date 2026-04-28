"use client";

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface AnimatedFeatureSpotlightProps {
  preheaderIcon?: React.ReactNode;
  preheaderText?: string;
  heading: React.ReactNode;
  description: string;
  buttonText: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string };
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

export function AnimatedFeatureSpotlight({
  preheaderIcon,
  preheaderText,
  heading,
  description,
  buttonText,
  buttonProps,
  imageUrl,
  imageAlt,
  className,
  reverse = false,
  children,
}: AnimatedFeatureSpotlightProps) {
  const { className: buttonClassName, ...restButtonProps } = buttonProps || {};

  return (
    <section className={cn(
      "w-full max-w-7xl mx-auto px-6 py-24 rounded-[48px] border border-zinc-200 overflow-hidden",
      className
    )}>
      <div className={cn(
        "grid lg:grid-cols-2 gap-12 lg:gap-24 items-center",
        reverse && "lg:direction-rtl"
      )}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className={cn("space-y-8", reverse && "lg:order-2")}
        >
          <div className="space-y-4">
            {(preheaderIcon || preheaderText) && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200">
                {preheaderIcon}
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                  {preheaderText}
                </span>
              </div>
            )}
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              {heading}
            </h2>
            <p className="text-xl text-zinc-500 leading-relaxed max-w-lg">
              {description}
            </p>
          </div>

          <button 
            className={cn(
              "h-14 px-8 rounded-full font-bold text-sm transition-all active:scale-95",
              buttonClassName
            )}
            {...restButtonProps}
          >
            {buttonText}
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className={cn(
            "relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200 flex items-center justify-center",
            reverse && "lg:order-1"
          )}
        >
          {children ? children : (
            <>
              <img 
                src={imageUrl} 
                alt={imageAlt} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
