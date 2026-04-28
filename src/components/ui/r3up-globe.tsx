"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, Activity } from "lucide-react";

// R3UP Live Arbitrage Data
const MOCK_PINGS = [
  { id: 1, device: "iPhone 15 Pro", route: "MIAMI → BRAZIL", delta: "+$214", color: "#30D5C8", location: [25.76, -80.19] },
  { id: 2, device: "iPad Air 5", route: "NYC → DUBAI", delta: "+$128", color: "#9b87f5", location: [40.71, -74.00] },
  { id: 3, device: "Galaxy S23", route: "LONDON → SHENZHEN", delta: "+$95", color: "#30D5C8", location: [51.50, -0.12] },
];

export function R3UPGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % MOCK_PINGS.length), 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    let phi = 0;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.02, 0.02, 0.05],
      markerColor: [0.18, 0.83, 0.78], // #30D5C8
      glowColor: [0.1, 0.1, 0.2],
      markers: MOCK_PINGS.map(p => ({ location: p.location as [number, number], size: 0.05 })),
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.005;
      },
    } as any);
    return () => globe.destroy();
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto select-none">
      {/* 3D Asset Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none mix-blend-screen">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=100&w=2560&auto=format&fit=crop" 
          alt="Globe Texture" 
          className="w-full h-full object-contain scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      <canvas ref={canvasRef} className="relative z-10 w-full h-full opacity-80" />

      {/* Floating Pinging Design */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 1.1 }}
          className="absolute top-1/4 right-0 z-30 terminal-glass p-4 min-w-[220px] font-mono"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-[#30D5C8]/10 border border-[#30D5C8]/20 rounded">
              <Smartphone size={16} className="text-[#30D5C8]" />
            </div>
            <div className="text-right">
              <div className="text-[9px] text-zinc-500 uppercase">Smart-Match™</div>
              <div className="text-[10px] text-emerald-400 font-bold tracking-tighter">EXECUTION_READY</div>
            </div>
          </div>

          <div className="space-y-1 mb-3">
            <div className="text-xs font-bold text-white">{MOCK_PINGS[index].device}</div>
            <div className="text-[10px] text-zinc-400">{MOCK_PINGS[index].route}</div>
          </div>

          <div className="flex justify-between items-center border-t border-white/5 pt-2">
            <span className="text-[9px] text-zinc-500">PROFIT DELTA:</span>
            <span className="text-sm font-bold glow-cyan" style={{ color: MOCK_PINGS[index].color }}>
              {MOCK_PINGS[index].delta}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Terminal UI Label */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-black/40 px-4 py-1 rounded-full border border-white/5 backdrop-blur-md">
        <Activity size={12} className="text-[#9b87f5] animate-pulse" />
        R3UP_Global_Liquidity_Engine_v4.0
      </div>
    </div>
  );
}
