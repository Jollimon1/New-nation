"use client";

import { motion } from "framer-motion";
import { Zap, Activity } from "lucide-react";
import { GlobeAnalytics } from "./cobe-globe-analytics";

export default function R3UPHero() {
  return (
    <section className="relative min-h-screen bg-white text-zinc-900 overflow-hidden font-sans border-b border-zinc-200 terminal-grid">
      {/* Structural System Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 pt-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Execution Intelligence */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00DF81]/30 bg-[#00DF81]/5 text-[#00DF81] font-mono text-[10px] tracking-widest uppercase">
            <Activity size={12} className="animate-pulse" /> System_Status: Execution_Layer_Active
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic">
            Maximize <br /> <span className="text-[#FF6B00]">Returns.</span>
          </h1>
          
          <p className="max-w-md text-zinc-600 text-lg font-light leading-relaxed">
            Every day your devices sit on a shelf, they lose <span className="text-zinc-900 font-bold">0.5% value.</span> 
            Our AI hunts for buyers in 30+ countries to capture the <span className="text-[#00DF81]">Brazil Gap.</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="h-14 px-10 bg-[#FF6B00] text-black font-black uppercase text-[11px] tracking-widest hover:bg-zinc-900 hover:text-white transition-all shadow-[0_0_25px_rgba(255,107,0,0.2)] rounded-sm">
              Upload Manifest
            </button>
            <button className="h-14 px-10 border border-zinc-200 font-mono text-[10px] tracking-widest uppercase hover:bg-zinc-50 transition-all rounded-sm text-zinc-600">
              Live_Yield.exe
            </button>
          </div>
        </motion.div>

        {/* Right: The Pinging Global Hub */}
        <div className="relative">
          <div className="absolute -inset-20 bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative terminal-border p-2 bg-white/50 backdrop-blur-sm">
            <GlobeAnalytics className="scale-110 lg:scale-125" />
            
            {/* System Metadata Overlay */}
            <div className="absolute top-4 left-4 font-mono text-[8px] text-zinc-400 space-y-1">
              <div>LAT: 25.7617° N</div>
              <div>LNG: 80.1918° W</div>
              <div className="text-r3up-green">STATUS: SYNCING...</div>
            </div>
          </div>
          
          {/* Floating Live Match Widget */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 right-0 bg-white/90 backdrop-blur-xl border border-zinc-200 p-4 rounded shadow-xl font-mono min-w-[200px]"
          >
            <div className="text-[9px] text-[#00DF81] mb-2 uppercase tracking-tighter flex items-center gap-2">
              <Zap size={10} fill="#00DF81" /> Smart-Match™ Found
            </div>
            <div className="text-xs text-zinc-900 font-bold">iPhone 15 Pro (500u)</div>
            <div className="text-[10px] text-zinc-400 mt-1">Miami → Dubai Hub</div>
            <div className="mt-2 text-right text-xs font-bold text-[#FF6B00]">+$14,200 Δ</div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Data Ribbon */}
      <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-zinc-100 py-4">
        <div className="flex gap-16 animate-marquee whitespace-nowrap font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
          <span className="flex items-center gap-2">iPhone 15 Pro: <span className="text-[#00DF81] font-bold">$845</span> <span className="text-[#FF6B00]">(+$85 Profit)</span></span>
          <span className="flex items-center gap-2">S24 Ultra: <span className="text-[#00DF81] font-bold">$910</span> <span className="text-[#FF6B00]">(+$110 Profit)</span></span>
          <span className="flex items-center gap-2">MacBook M3: <span className="text-[#00DF81] font-bold">$1,450</span> <span className="text-[#FF6B00]">(+$215 Profit)</span></span>
          <span className="flex items-center gap-2">iPad Pro: <span className="text-[#00DF81] font-bold">$750</span> <span className="text-[#FF6B00]">(+$95 Profit)</span></span>
          {/* Duplicate for marquee */}
          <span className="flex items-center gap-2">iPhone 15 Pro: <span className="text-[#00DF81] font-bold">$845</span> <span className="text-[#FF6B00]">(+$85 Profit)</span></span>
          <span className="flex items-center gap-2">S24 Ultra: <span className="text-[#00DF81] font-bold">$910</span> <span className="text-[#FF6B00]">(+$110 Profit)</span></span>
          <span className="flex items-center gap-2">MacBook M3: <span className="text-[#00DF81] font-bold">$1,450</span> <span className="text-[#FF6B00]">(+$215 Profit)</span></span>
          <span className="flex items-center gap-2">iPad Pro: <span className="text-[#00DF81] font-bold">$750</span> <span className="text-[#FF6B00]">(+$95 Profit)</span></span>
        </div>
      </div>
    </section>
  );
}
