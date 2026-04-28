import React from 'react';
import ToolFanStack from './tool-fan-stack';

export default function Solutions({ setCurrentView }: { setCurrentView: (view: string) => void }) {
  return (
    <div className="bg-[#F5F5F7] min-h-screen">
      {/* 1. Hero: The Ecosystem Overview */}
      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-7xl font-black italic tracking-tighter uppercase leading-[0.8] mb-6 text-zinc-900">
          The <span className="text-[#FF6B00]">Full-Stack</span> <br /> Hardware Empire.
        </h1>
        <p className="max-w-xl mx-auto text-zinc-500 font-bold uppercase text-[11px] tracking-[0.2em]">
          One Network. Four Tiers. Total Market Sovereignty.
        </p>
      </section>

      {/* 2. The Fanned Tool Stack */}
      <section className="py-10">
         <ToolFanStack /> 
      </section>

      {/* 3. The "Paywall" CTA Section */}
      <section className="py-24 bg-black text-white rounded-t-[60px]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 border border-[#00DF81] text-[#00DF81] rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
            Deployment_Ready
          </div>
          <h2 className="text-5xl font-black italic tracking-tighter uppercase mb-8">
            Stop Moving Boxes. <br /> Start Moving <span className="text-[#00DF81]">Markets.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* CTA 1: The Fast Lane */}
            <div className="p-8 bg-zinc-900 rounded-[32px] border border-white/10 text-left">
              <h3 className="text-xl font-black italic uppercase mb-4 tracking-tighter">Standard Deployment</h3>
              <p className="text-zinc-400 text-xs font-bold mb-8 leading-relaxed">
                Instant access to Tier 0 and Tier 1 tools. Perfect for retail shops and local wholesalers.
              </p>
              <button 
                onClick={() => setCurrentView('contact')}
                className="w-full py-4 bg-[#00DF81] text-black font-black uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-all"
              >
                Access Tier 1 — $499/mo
              </button>
            </div>

            {/* CTA 2: The Enterprise Lane */}
            <div className="p-8 bg-[#FF6B00] rounded-[32px] text-left text-black">
              <h3 className="text-xl font-black italic uppercase mb-4 tracking-tighter">Empire Scaling</h3>
              <p className="text-black/70 text-xs font-bold mb-8 leading-relaxed">
                Custom Tier 2 & 3 orchestration. Syndicate access, global logistics, and God-View dashboard.
              </p>
              <button 
                onClick={() => setCurrentView('contact')}
                className="w-full py-4 bg-black text-white font-black uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-all"
              >
                Book Deployment Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
