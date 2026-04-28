import React from 'react';
import { Monitor, Smartphone, Globe, ShieldCheck, TrendingUp, Map, Shield, Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { CardStack } from "./card-stack";

export const empireTools = [
  {
    id: "t0",
    tier: "TIER 0",
    title: "Win Every Walk-in",
    description: "Stop Overpaying. Instantly Lock Your Margin.",
    imageSrc: "https://picsum.photos/seed/r3up-terminal/1200/800", 
    type: "retail"
  },
  {
    id: "t1",
    tier: "TIER 1",
    title: "Intelligence Desk",
    description: "See the Gap. Strike.",
    imageSrc: "https://picsum.photos/seed/r3up-network/1200/800",
    type: "market"
  },
  {
    id: "t2",
    tier: "TIER 2",
    title: "Automated Execution Desk",
    description: "Scalability without Headcount.",
    imageSrc: "https://picsum.photos/seed/r3up-pallet/1200/800",
    type: "syndicate"
  },
  {
    id: "t3",
    tier: "TIER 3",
    title: "Enterprise Orchestrator",
    description: "Total Sovereignty.",
    imageSrc: "https://picsum.photos/seed/r3up-orchestrator/1200/800",
    type: "command"
  },
];

export default function ToolFanStack() {
  return (
    <div className="py-24 flex flex-col items-center overflow-hidden bg-[#F5F5F7]">
      <div className="mb-20 text-center max-w-2xl px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-r3up-orange/10 text-r3up-orange font-mono text-[10px] tracking-[0.2em] uppercase rounded-full mb-6">
          /System_Intelligence
        </div>
        <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-6 leading-[0.9] text-zinc-900">
          The <span className="text-r3up-orange">Empire</span> <br /> Toolset.
        </h2>
        <p className="text-zinc-500 font-bold text-sm uppercase tracking-widest">
          SYSTEM_VERSION_2026 // READY_FOR_DEPLOYMENT
        </p>
      </div>

      {/* THE FAN LOGIC */}
      <CardStack
        items={empireTools}
        cardWidth={780}    
        cardHeight={520}   
        maxVisible={4}     
        overlap={0.5}      
        spreadDeg={40}     
        perspectivePx={2500}
        tiltXDeg={8}      
        
        renderCard={(item, { active }) => (
          <div className={`relative h-full w-full rounded-[40px] overflow-hidden bg-[#0a0a0c] border-[12px] border-zinc-900 shadow-[0_64px_128px_-32px_rgba(0,0,0,0.8)] transition-all duration-700 ${!active ? "scale-95 opacity-80" : "scale-100"}`}>
            
            {/* Screen Bezel / Inner Glow */}
            <div className="absolute inset-0 z-50 pointer-events-none rounded-[28px] border border-white/10 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
            
            {/* Scanlines Overlay */}
            <div className="absolute inset-0 z-40 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            {/* Header Bar */}
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-10 bg-black/40 backdrop-blur-md sticky top-0 z-30">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-r3up-orange shadow-[0_0_10px_rgba(255,107,0,0.5)] animate-pulse" />
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">
                  {item.tier} // Terminal_Output_{item.id.toUpperCase()}
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-r3up-green" />
                  <div className="text-[8px] font-mono text-white/30 uppercase tracking-widest">System_Online</div>
                </div>
                <div className="text-[8px] font-mono text-white/20">v4.2.0_STABLE</div>
              </div>
            </div>

            {/* Content Area */}
            <div className="relative h-[calc(100%-56px)] w-full overflow-hidden">
              
              {/* TIER 0: WIN EVERY WALK-IN */}
              {item.type === "retail" && (
                <div className="h-full relative flex flex-col items-center justify-center p-12">
                  {/* Modern Tech Background */}
                  <div className="absolute inset-0 bg-[#0a0a0c]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.05),transparent_70%)]" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  </div>
                  
                  <div className="relative z-10 w-full grid grid-cols-12 gap-10 items-center">
                    {/* Pricing Widget */}
                    <div className="col-span-7">
                      <div className="bg-[#16161a]/90 backdrop-blur-3xl rounded-[32px] border border-white/10 p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-r3up-orange to-transparent" />
                        
                        <div className="space-y-8">
                          <div className="space-y-1">
                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">R3UP Edge Intake Widget</div>
                            <div className="text-2xl font-black text-white italic uppercase tracking-tighter leading-tight">Never Overpay Again.<br />Lock in Your Margin.</div>
                          </div>

                          <div className="flex items-center gap-6 bg-black/60 p-6 rounded-2xl border border-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                            <div className="flex-1 space-y-1 relative z-10">
                              <div className="text-[9px] font-black uppercase tracking-widest text-white/20">Local Price</div>
                              <div className="text-3xl font-black text-white/30 tracking-tighter">$650</div>
                            </div>
                            <div className="text-white/10 font-black italic relative z-10">vs.</div>
                            <div className="flex-1 space-y-1 text-right relative z-10">
                              <div className="text-[9px] font-black uppercase tracking-widest text-r3up-green">R3UP Global Price</div>
                              <div className="text-4xl font-black text-r3up-green tracking-tighter drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">$890</div>
                              <div className="text-[10px] font-bold text-r3up-green/60 uppercase">profit $240</div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4">
                            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest leading-relaxed">
                              Never overpay<br />Lock in your Margin.
                            </div>
                            <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)] hover:bg-blue-500 transition-all hover:scale-105 active:scale-95">
                              Calculate Trade-In
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hero Asset: High-Fidelity iPhone 15 Pro (Asset #4) */}
                    <div className="col-span-5 flex justify-center">
                      <motion.div
                        animate={{ 
                          y: [0, -15, 0],
                          rotateZ: [-1, 1, -1]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full aspect-[4/5] flex items-center justify-center"
                      >
                        {/* Background Device (Back View - Titanium) */}
                        <motion.div 
                          animate={{ 
                            rotate: [-12, -8, -12],
                            x: [-5, 5, -5]
                          }}
                          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -left-8 top-12 w-52 h-[380px] z-10 drop-shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
                        >
                          <img 
                            src="https://picsum.photos/seed/iphone-15-pro-titanium-back/800/1600" 
                            className="w-full h-full object-contain brightness-110" 
                            alt="iPhone 15 Pro Titanium Back"
                            referrerPolicy="no-referrer"
                          />
                          {/* Subtle Glow behind the back view */}
                          <div className="absolute inset-0 bg-r3up-orange/5 blur-[60px] -z-10 rounded-full" />
                        </motion.div>

                        {/* Foreground Device (Front View with High-Contrast UI) */}
                        <motion.div 
                          animate={{ 
                            rotate: [4, 6, 4],
                            x: [5, -5, 5]
                          }}
                          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                          className="relative w-60 h-[440px] z-20 drop-shadow-[0_80px_160px_rgba(0,0,0,0.9)]"
                        >
                          {/* Device Body */}
                          <div className="absolute inset-0">
                            <img 
                              src="https://picsum.photos/seed/iphone-15-pro-front-black-premium/800/1600" 
                              className="w-full h-full object-contain" 
                              alt="iPhone 15 Pro Front"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          
                          {/* UI Overlay (The Widget) */}
                          <div className="absolute inset-[12px] z-30 rounded-[38px] overflow-hidden bg-white flex flex-col p-5 shadow-inner">
                            <div className="flex justify-between items-center mb-6 pt-2">
                              <div className="text-[11px] font-black text-black">12:25</div>
                              <div className="flex gap-1.5 items-center">
                                <div className="w-5 h-2.5 bg-black rounded-sm" />
                              </div>
                            </div>
                            
                            <div className="space-y-1 mb-6">
                              <div className="text-2xl font-black text-black tracking-tighter leading-none">R3UP EDGE</div>
                              <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Intake_Protocol_v4</div>
                            </div>
                            
                            <div className="space-y-4">
                               <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                                  <div className="text-[9px] font-black text-zinc-400 uppercase mb-1 tracking-widest">Local Offer</div>
                                  <div className="text-3xl font-black text-zinc-300 tracking-tighter">$650</div>
                               </div>
                               <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 relative overflow-hidden group">
                                  <div className="absolute top-0 right-0 p-1.5 bg-r3up-green text-[7px] font-black text-white uppercase tracking-widest">Max Yield</div>
                                  <div className="text-[9px] font-black text-blue-600 uppercase mb-1 tracking-widest">R3UP Network</div>
                                  <div className="text-4xl font-black text-r3up-green tracking-tighter drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">$890</div>
                                  <div className="text-[10px] font-black text-r3up-green/60 uppercase mt-1 tracking-tighter">+$240 Profit Locked</div>
                               </div>
                            </div>

                            <div className="mt-auto flex justify-center pb-4">
                               <div className="w-12 h-1 bg-zinc-200 rounded-full" />
                            </div>
                          </div>
                        </motion.div>

                        {/* Floating Label */}
                        <div className="absolute -bottom-12 left-0 right-0 text-center z-40">
                          <div className="text-[9px] font-black uppercase tracking-[0.5em] text-r3up-orange mb-2">Asset #4 // Verified</div>
                          <div className="text-base font-black italic uppercase tracking-tighter text-white leading-none">Complete Device Intake</div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Bold Monochromatic Overlay Text */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.02] select-none">
                    <div className="text-[14vw] font-black italic uppercase tracking-tighter leading-none text-white whitespace-nowrap text-center">
                      WIN EVERY WALK-IN.
                    </div>
                  </div>
                </div>
              )}

              {/* TIER 1: INTELLIGENCE DESK */}
              {item.type === "market" && (
                <div className="h-full relative overflow-hidden flex flex-col p-10">
                  {/* Modern Tech Background */}
                  <div className="absolute inset-0 bg-[#0a0a0c]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.05),transparent_70%)]" />
                    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                  </div>
                  
                  <div className="relative z-10 flex-1 grid grid-cols-12 gap-8 items-center">
                    {/* Left: Global Liquidity Terminal */}
                    <div className="col-span-8 space-y-6">
                      <div className="bg-[#16161a]/90 backdrop-blur-3xl rounded-[32px] border border-white/10 p-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] relative overflow-hidden">
                        <div className="flex justify-between items-center mb-8">
                          <div className="space-y-1">
                            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">Global Liquidity Terminal</div>
                            <div className="text-2xl font-black text-white italic uppercase tracking-tighter">Brazil Gap Yield</div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-black text-r3up-green tracking-tighter drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">+24.8%</div>
                            <div className="text-[8px] font-bold text-r3up-green/40 uppercase tracking-widest">Brazil Gap Yield</div>
                          </div>
                        </div>
                        
                        <div className="h-44 flex items-end gap-2 relative">
                          {[30, 45, 35, 60, 55, 90, 70, 100, 80, 95, 65, 85].map((h, i) => (
                            <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 1.5, delay: i * 0.05 }}
                              className={`flex-1 rounded-t-lg ${i === 7 ? 'bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.4)]' : 'bg-white/5'}`}
                            />
                          ))}
                          
                          {/* Wavy Line Overlay (From Second Image Style) */}
                          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                            <motion.path
                              d="M 0 140 C 50 140, 100 40, 150 100 C 200 160, 250 60, 300 120 C 350 180, 400 40, 450 100 C 500 160, 550 60, 600 120"
                              fill="none"
                              stroke="rgba(37,99,235,0.8)"
                              strokeWidth="4"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 2.5, ease: "easeInOut" }}
                              className="drop-shadow-[0_0_15px_rgba(37,99,235,0.6)]"
                            />
                          </svg>
                        </div>

                        <div className="mt-8 flex justify-between items-center border-t border-white/5 pt-6">
                           <div className="flex gap-6">
                              <div className="flex items-center gap-2">
                                 <div className="w-2 h-2 rounded-full bg-r3up-green shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                 <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">R3UP Green</div>
                              </div>
                              <div className="flex items-center gap-2">
                                 <div className="w-2 h-2 rounded-full bg-r3up-orange shadow-[0_0_10px_rgba(255,107,0,0.5)]" />
                                 <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">R3UP Orange</div>
                              </div>
                           </div>
                           <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">TTKP 10.00</div>
                        </div>
                      </div>

                      {/* Bid Feed */}
                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/5 flex justify-between items-center group hover:bg-white/5 transition-colors">
                             <div className="text-[9px] font-black text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">MIA $\rightarrow$ DBX</div>
                             <div className="text-[11px] font-black text-r3up-green">+$145</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Intelligence Desk (Tablet Device) */}
                    <div className="col-span-4 flex flex-col items-center justify-center">
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-[#16161a]/90 backdrop-blur-3xl rounded-[40px] border border-white/10 p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] w-full text-center space-y-8 relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent" />
                        
                        {/* Tablet Bezel Look */}
                        <div className="absolute inset-2 border border-white/5 rounded-[32px] pointer-events-none" />
                        
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 relative z-10">Intelligence Desk</div>
                        <div className="relative group flex justify-center z-10">
                          <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full animate-pulse" />
                          <div className="w-36 h-36 rounded-full bg-black/60 backdrop-blur-3xl border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.3)] relative z-10">
                            <Globe size={72} className="text-blue-400 animate-[spin_40s_linear_infinite]" />
                          </div>
                        </div>
                        <div className="space-y-2 relative z-10">
                           <div className="text-2xl font-black text-white italic uppercase tracking-tighter">God View</div>
                           <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">Global_Liquidity_Active</div>
                        </div>

                        {/* Particle Accents */}
                        <div className="absolute top-4 right-4 flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20" />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Bold Monochromatic Overlay Text */}
                  <div className="absolute inset-x-0 bottom-10 pointer-events-none z-0 opacity-[0.02] select-none text-center">
                    <div className="text-[10vw] font-black italic uppercase tracking-tighter leading-none text-white">
                      INTELLIGENCE DESK.
                    </div>
                  </div>
                </div>
              )}

              {/* TIER 2: AUTOMATED EXECUTION DESK */}
              {item.type === "syndicate" && (
                <div className="h-full relative overflow-hidden flex flex-col p-10">
                  {/* Modern Tech Background */}
                  <div className="absolute inset-0 bg-[#0a0a0c]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.05),transparent_70%)]" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  </div>
                  
                  <div className="relative z-10 flex-1 grid grid-cols-12 gap-8 items-center">
                    {/* Left: Wholesale Boxes & Stacks (Real Representation) */}
                    <div className="col-span-5">
                      <motion.div 
                        animate={{ rotateY: [-2, 2, -2] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="aspect-[4/5] bg-zinc-900 rounded-[32px] border border-white/5 overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)] relative group"
                      >
                        {/* Wholesale Inventory Photo */}
                        <div className="absolute inset-0">
                          <img 
                            src="https://picsum.photos/seed/wholesale-iphone-boxes/800/1000" 
                            className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000" 
                            referrerPolicy="no-referrer" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                          
                          {/* Real Labels/Badges Overlay */}
                          <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
                            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2 border border-white/20">
                              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                              <span className="text-[10px] font-black text-black uppercase tracking-tighter">Cosmetically graded</span>
                            </div>
                            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2 border border-white/20">
                              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                              <span className="text-[10px] font-black text-black uppercase tracking-tighter">Securely erased</span>
                            </div>
                            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2 border border-white/20">
                              <div className="w-2 h-2 rounded-full bg-r3up-orange shadow-[0_0_8px_rgba(255,107,0,0.6)]" />
                              <span className="text-[10px] font-black text-black uppercase tracking-tighter">Functionality tested</span>
                            </div>
                          </div>

                          {/* Scanning Laser Effect */}
                          <motion.div 
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-0.5 bg-r3up-orange shadow-[0_0_15px_rgba(255,107,0,0.8)] z-20"
                          />
                        </div>

                        <div className="absolute bottom-8 left-8 z-30">
                          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-r3up-orange mb-2">Batch ID: R3-WH-092</div>
                          <div className="text-xl font-black italic uppercase tracking-tighter text-white">Wholesale Inventory</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Right: Progress Monitor */}
                    <div className="col-span-7 space-y-6">
                      <div className="bg-[#16161a]/90 backdrop-blur-3xl rounded-[32px] border border-white/10 p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-r3up-green to-transparent" />
                        <div className="flex justify-between items-start mb-10">
                          <div className="space-y-1">
                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Carrier Syndicate</div>
                            <div className="text-2xl font-black text-white italic uppercase tracking-tighter">Funding Progress</div>
                          </div>
                          <div className="text-right">
                             <div className="text-4xl font-black text-r3up-green tracking-tighter drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">85%</div>
                             <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Funded</div>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-4 mb-12">
                          <div className="h-6 w-full bg-black rounded-full border border-white/5 p-1">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: "85%" }}
                              transition={{ duration: 2.5, ease: "circOut" }}
                              className="h-full bg-gradient-to-r from-r3up-green to-blue-600 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between bg-black/40 p-8 rounded-2xl border border-white/5 relative group overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                           <div className="space-y-2 relative z-10">
                              <div className="text-sm font-black text-white uppercase italic tracking-tighter">Trust Moat Shield</div>
                              <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]">Asset #2</div>
                           </div>
                           <Shield size={48} className="text-white/10 group-hover:text-white/20 transition-colors relative z-10" />
                        </div>
                      </div>
                      
                      <div className="bg-black/40 backdrop-blur-xl p-5 rounded-2xl border border-white/5 flex justify-between items-center">
                         <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Pallet ID: FL-13 // Normal language</div>
                         <div className="flex gap-3">
                            <div className="px-3 py-1.5 rounded-lg bg-r3up-orange/10 text-r3up-orange text-[9px] font-black border border-r3up-orange/20 uppercase tracking-widest">UP Orange</div>
                            <div className="px-3 py-1.5 rounded-lg bg-white/5 text-white/40 text-[9px] font-black border border-white/10 uppercase tracking-widest">R3UP $5.50</div>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Bold Monochromatic Overlay Text */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.02] select-none text-center">
                    <div className="text-[10vw] font-black italic uppercase tracking-tighter leading-none text-white">
                      AUTOMATED EXECUTION.
                    </div>
                  </div>
                </div>
              )}

              {/* TIER 3: ENTERPRISE ORCHESTRATOR */}
              {item.type === "command" && (
                <div className="h-full relative overflow-hidden flex flex-col p-10">
                  {/* Modern Tech Background */}
                  <div className="absolute inset-0 bg-[#0a0a0c]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)]" />
                    <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '40px 40px' }} />
                  </div>
                  
                  <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
                    {/* Command Visual */}
                    <div className="w-full aspect-[21/9] bg-[#16161a]/90 backdrop-blur-3xl rounded-[40px] border border-white/10 shadow-[0_80px_160px_-40px_rgba(0,0,0,1)] relative overflow-hidden">
                      <div className="absolute inset-0 grayscale opacity-[0.05]">
                        <img src="https://picsum.photos/seed/global-logistics-network/1200/800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
                      
                      {/* Data Pop-ups */}
                      <div className="absolute top-8 left-8 p-6 bg-black/60 backdrop-blur-2xl rounded-2xl border border-white/10 space-y-4 min-w-[220px] shadow-2xl">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Palette Tracker</div>
                        <div className="flex gap-2">
                           {[1, 2, 3, 4, 5].map(i => (
                              <div key={i} className={`w-4 h-4 rounded-full shadow-inner ${i === 1 ? 'bg-zinc-800' : i === 2 ? 'bg-zinc-600' : i === 3 ? 'bg-zinc-400' : i === 4 ? 'bg-r3up-orange' : 'bg-r3up-green'}`} />
                           ))}
                        </div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-6">
                         <div className="relative group flex justify-center">
                           <div className="absolute inset-0 bg-blue-600/30 blur-[80px] rounded-full animate-pulse" />
                           <div className="w-44 h-44 rounded-full bg-black/60 backdrop-blur-3xl border border-white/10 flex items-center justify-center shadow-[0_0_80px_rgba(37,99,235,0.4)] relative z-10">
                             <Globe size={88} className="text-blue-400" />
                           </div>
                         </div>
                         <div className="space-y-1 relative z-10">
                            <div className="text-2xl font-black text-white italic uppercase tracking-tighter">Neural CPU Node</div>
                            <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">Asset #2</div>
                         </div>
                      </div>

                      <div className="absolute bottom-8 right-8 p-6 bg-black/60 backdrop-blur-2xl rounded-2xl border border-white/10 space-y-4 min-w-[220px] text-right shadow-2xl">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Smart-Match™ Globe</div>
                        <div className="space-y-2">
                           <div className="text-sm font-black text-white uppercase italic tracking-tighter">Asset #1</div>
                           <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest">MIA $\rightarrow$ DBX</div>
                           <div className="text-[10px] font-mono text-r3up-green font-bold">T5.10 ... R3UP $5.00</div>
                        </div>
                      </div>
                    </div>

                    {/* Predictive Supply Ticker */}
                    <div className="mt-10 w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 flex items-center overflow-hidden relative shadow-2xl">
                       <motion.div 
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex items-center gap-16 whitespace-nowrap"
                       >
                          {[1, 2, 3].map(i => (
                            <div key={i} className="text-[11px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-8">
                               <span className="text-white/30">Predictive Supply:</span> iPhone 16 Pro // <span className="text-r3up-green drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">+15% Latin America Corridors</span> // <span className="text-white/30">Port Strikes:</span> <span className="text-r3up-green">Low Risk</span>
                               <div className="w-2 h-2 rounded-full bg-white/10" />
                            </div>
                          ))}
                       </motion.div>
                    </div>
                  </div>

                  {/* Bold Monochromatic Overlay Text */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-[0.02] select-none text-center">
                    <div className="text-[8vw] font-black italic uppercase tracking-tighter leading-none text-white">
                      ENTERPRISE ORCHESTRATOR.
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}
      />

      <div className="mt-24 text-center">
        <p className="text-zinc-400 font-mono text-[10px] mb-6 tracking-[0.3em]">SELECT_TIER_TO_COMMAND</p>
        <button className="px-12 py-5 bg-black text-white rounded-full font-black italic uppercase text-xs tracking-widest hover:bg-r3up-orange hover:scale-105 transition-all shadow-xl shadow-black/20">
          Enter the R3UP Empire
        </button>
      </div>
    </div>
  );
}
