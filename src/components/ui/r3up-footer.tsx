"use client"

import { motion } from "motion/react"
import { ArrowRight, Cpu, Github, Linkedin, Twitter, Zap, Smartphone } from "lucide-react"

export default function R3UPFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-zinc-200 pt-20 pb-10 overflow-hidden relative terminal-grid">
      {/* Background scanline effect for the whole footer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,107,0,0.03)_50%,transparent_100%)] bg-[size:100%_4px] animate-scanline pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Final CTA Section: The "Execution" Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-24 overflow-hidden rounded-3xl bg-gradient-to-br from-r3up-orange/5 via-transparent to-r3up-green/5 p-12 text-center border border-zinc-200"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tighter mb-6 uppercase italic">
              Stop Waiting. <br /> Start <span className="text-r3up-orange">Matching.</span>
            </h2>
            <p className="text-zinc-500 text-lg mb-10 font-light leading-relaxed">
              Every day your inventory sits on a shelf, it loses 0.5% value. 
              Upload your manifest now and let our AI hunt for your global buyer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="h-14 px-10 bg-r3up-orange text-black font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,107,0,0.2)] rounded-sm">
                Upload My List
              </button>
              <button className="h-14 px-10 border border-zinc-200 text-zinc-600 font-mono text-[10px] tracking-widest uppercase hover:bg-zinc-50 transition-all rounded-sm">
                Request Strategy Call.sh
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Links & Data Map */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20 border-b border-zinc-100 pb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-r3up-orange rounded-sm flex items-center justify-center">
                <Zap size={18} className="text-black fill-black" />
              </div>
              <span className="text-xl font-bold text-zinc-900 tracking-tighter uppercase italic">R3UP Nation</span>
            </div>
            <p className="text-zinc-500 text-xs font-mono max-w-xs leading-relaxed uppercase tracking-tighter">
              The AI-driven brokerage for sustainable IT asset management. 
              Maximizing recovery value through global intelligence.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-r3up-orange uppercase tracking-[0.2em] mb-6">Ecosystem</h4>
            <ul className="space-y-4 text-xs font-mono text-zinc-500 uppercase">
              <li className="hover:text-zinc-900 transition-colors cursor-pointer underline decoration-r3up-orange/30">The AI Brokerage</li>
              <li className="hover:text-zinc-900 transition-colors cursor-pointer underline decoration-r3up-orange/30">Smart-Match™</li>
              <li className="hover:text-zinc-900 transition-colors cursor-pointer underline decoration-r3up-orange/30">Tier 0 Sensors</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] mb-6">Company</h4>
            <ul className="space-y-4 text-xs font-mono text-zinc-500 uppercase">
              <li className="hover:text-zinc-900 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-zinc-900 transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-zinc-900 transition-colors cursor-pointer">Security</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] mb-6">Legal</h4>
            <ul className="space-y-4 text-xs font-mono text-zinc-500 uppercase">
              <li className="hover:text-zinc-900 transition-colors cursor-pointer">Privacy.pdf</li>
              <li className="hover:text-zinc-900 transition-colors cursor-pointer">Terms.exe</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
             © {currentYear} R3UP_NATION // SYSTEM_Sovereignty_Active
          </div>
          <div className="flex items-center gap-6">
            <Linkedin size={16} className="text-zinc-400 hover:text-r3up-orange transition-colors cursor-pointer" />
            <Twitter size={16} className="text-zinc-400 hover:text-r3up-orange transition-colors cursor-pointer" />
            <div className="flex items-center gap-2 text-[9px] font-mono text-r3up-green">
               <div className="w-1.5 h-1.5 rounded-full bg-r3up-green animate-pulse" />
               NETWORK_STATUS: OPTIMAL
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
