"use client"

import { motion } from "motion/react"
import { Cpu, Network, Shield, Zap, Database, Server, Smartphone } from "lucide-react"

const TIERS = [
  {
    tier: "Tier 0",
    name: "Trade-In Widgets",
    description: "Buyback sites and retail intake widgets for seamless device ingestion.",
    icon: <Smartphone size={24} />,
    color: "text-r3up-green",
    bg: "bg-r3up-green/10",
    border: "border-r3up-green/30",
  },
  {
    tier: "Tier 1",
    name: "Liquidity Layer",
    description: "Automated arbitrage matching with instant execution capabilities.",
    icon: <Zap size={24} />,
    color: "text-r3up-orange",
    bg: "bg-r3up-orange/10",
    border: "border-r3up-orange/30",
  },
  {
    tier: "Tier 2",
    name: "Logistics Hub",
    description: "End-to-end global shipping and grading verification network.",
    icon: <Network size={24} />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    tier: "Tier 3",
    name: "Enterprise",
    description: "Full-stack asset management for global corporations and OEMs.",
    icon: <Cpu size={24} />,
    color: "text-zinc-900",
    bg: "bg-zinc-100",
    border: "border-zinc-200",
  },
]

export default function R3UPEcosystem() {
  return (
    <section className="py-24 bg-white border-t border-zinc-200 terminal-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
            The Infrastructure
          </div>
          <h2 className="text-5xl font-bold tracking-tighter text-zinc-900">
            The <span className="text-r3up-orange">Network</span> Architecture.
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            From trade-in widgets to enterprise-grade execution, R3UP's multi-tier 
            ecosystem ensures your inventory is always moving at peak efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl border ${tier.border} ${tier.bg} hover:shadow-xl transition-all group`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${tier.color} bg-white border border-zinc-200 shadow-sm`}>
                {tier.icon}
              </div>
              <div className="space-y-2">
                <div className={`text-[10px] font-mono uppercase tracking-widest ${tier.color}`}>
                  {tier.tier}
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{tier.name}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {tier.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Data Map Visualization */}
        <div className="mt-20 p-8 rounded-3xl border border-zinc-200 bg-zinc-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.05),transparent)]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-200 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="Node" 
                      className="w-full h-full object-cover grayscale opacity-50"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-zinc-900">Active Widgets: 4,281</div>
                <div className="text-xs text-zinc-500 font-mono">Real-time intake active across 12 regions</div>
              </div>
            </div>
            <div className="flex items-center gap-12 text-center">
              <div>
                <div className="text-2xl font-bold text-zinc-900 tracking-tighter">1.2s</div>
                <div className="text-[10px] text-zinc-500 uppercase font-mono">Avg. Match Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-r3up-green tracking-tighter">$14.2M</div>
                <div className="text-[10px] text-zinc-500 uppercase font-mono">Daily Liquidity</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-r3up-orange tracking-tighter">99.9%</div>
                <div className="text-[10px] text-zinc-500 uppercase font-mono">Execution Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
