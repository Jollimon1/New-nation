"use client";

import React from 'react';
import { Smartphone, CheckCircle2, Search } from 'lucide-react';

export const Tier0IntakeVisual = () => {
  return (
    <div className="relative w-full max-w-sm bg-white rounded-[40px] shadow-2xl border border-black/5 overflow-hidden font-mono p-6 group">
      {/* 1. Header: Widget Status */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#00DF81] rounded-full animate-pulse" />
          <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Retail_Sensor_Active</span>
        </div>
        <span className="text-[8px] text-zinc-300">ID: NNGDO-42</span>
      </div>

      {/* 2. The Device Inspection Card */}
      <div className="bg-[#F5F5F7] rounded-3xl p-5 mb-4 border border-black/5 relative overflow-hidden">
        <div className="flex items-start justify-between relative z-10">
          <div className="p-3 bg-white rounded-2xl shadow-sm">
            <Smartphone className="text-black" size={24} />
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold text-black uppercase">iPhone 15 Pro</div>
            <div className="text-[9px] text-[#00DF81] font-bold uppercase">Grade A+ // Verified</div>
          </div>
        </div>

        {/* Scanning Animation Over the Device Info */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00DF81]/10 to-transparent w-full animate-scan-horizontal pointer-events-none" />
        
        <div className="mt-6 space-y-2 relative z-10">
           <div className="flex justify-between text-[10px]">
             <span className="text-zinc-400 uppercase">Local_Market:</span>
             <span className="text-black font-bold">$610.00</span>
           </div>
           <div className="flex justify-between text-[10px]">
             <span className="text-[#FF6B00] font-bold uppercase">R3UP_Global_Bid:</span>
             <span className="text-[#FF6B00] font-bold">$840.00</span>
           </div>
        </div>
      </div>

      {/* 3. Live Activity Feed */}
      <div className="space-y-2 opacity-80">
        <div className="flex items-center gap-2 px-3 py-2 bg-zinc-50 rounded-xl border border-black/5">
          <Search size={10} className="text-zinc-400" />
          <span className="text-[9px] text-zinc-500 uppercase">Searching Dubai Hub...</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-[#00DF81]/10 rounded-xl border border-[#00DF81]/20">
          <CheckCircle2 size={10} className="text-[#00DF81]" />
          <span className="text-[9px] text-[#00DF81] font-bold uppercase">Optimal Match Found (+37.7%)</span>
        </div>
      </div>
    </div>
  );
};
