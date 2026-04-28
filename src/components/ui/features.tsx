"use client";

import { motion } from "motion/react";
import { Smartphone, ArrowRight, CheckCircle2, TrendingUp, Globe2, Zap, Shield, Users, Recycle, Store, Building2, Lock, Eye, Activity, ShieldCheck } from "lucide-react";

const INVENTORY = [
  { id: 1, model: "iPhone 15 Pro", grade: "A+", qty: 45, avgPrice: 890, demand: "High" },
  { id: 2, model: "iPad Pro 12.9", grade: "A", qty: 22, avgPrice: 750, demand: "Medium" },
  { id: 3, model: "Samsung S23 Ultra", grade: "B", qty: 18, avgPrice: 620, demand: "High" },
  { id: 4, model: "MacBook Air M2", grade: "A+", qty: 12, avgPrice: 950, demand: "Low" },
];

export function InventorySection() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200 terminal-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-white font-mono text-[8px] tracking-[0.2em] uppercase">
              <Activity size={10} className="text-r3up-green animate-pulse" /> Live_Inventory_Feed
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 uppercase italic">Buyback <span className="text-r3up-orange">Site</span> Manifests.</h2>
            <p className="text-zinc-500 max-w-md text-sm">
              Real-time valuation for trade-in operators. 
              Execution ready across all global tiers.
            </p>
          </div>
          <button className="flex items-center gap-2 text-[10px] font-bold text-zinc-900 hover:text-r3up-orange transition-colors uppercase tracking-widest font-mono">
            View_Full_Manifest.exe <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid gap-4">
          {INVENTORY.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row items-center justify-between p-6 bg-white terminal-border hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
                <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded overflow-hidden flex items-center justify-center group-hover:border-r3up-orange/30 transition-colors">
                  <img 
                    src={
                      item.model.includes('iPhone') ? 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=100' :
                      item.model.includes('iPad') ? 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=100' :
                      item.model.includes('Samsung') ? 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=100' :
                      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=100'
                    }
                    alt={item.model}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-zinc-900 uppercase tracking-tight">{item.model}</h3>
                    <span className="text-[8px] font-mono text-zinc-400">ID: {Math.random().toString(36).substring(7).toUpperCase()}</span>
                  </div>
                  <div className="flex gap-2 mt-1">
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded-sm uppercase tracking-wider">Grade_{item.grade}</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-r3up-green/10 text-r3up-green rounded-sm uppercase tracking-wider">{item.demand}_DEMAND</span>
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-600 rounded-sm border border-blue-100">
                      <ShieldCheck size={10} />
                      <span className="text-[8px] font-mono font-bold uppercase tracking-widest">Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-12 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-zinc-100">
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-400 uppercase font-mono tracking-tighter">Quantity</span>
                  <span className="text-xl font-black text-zinc-900 tracking-tighter">{item.qty}u</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-400 uppercase font-mono tracking-tighter">Avg_Price</span>
                  <span className="text-xl font-black text-zinc-900 tracking-tighter">${item.avgPrice}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-400 uppercase font-mono tracking-tighter">Valuation</span>
                  <span className="text-xl font-black text-r3up-green tracking-tighter">${(item.qty * item.avgPrice).toLocaleString()}</span>
                </div>
              </div>

              <button className="hidden md:flex items-center justify-center w-10 h-10 border border-zinc-200 text-zinc-400 group-hover:bg-r3up-orange group-hover:text-black group-hover:border-r3up-orange transition-all">
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="px-8 py-4 bg-zinc-900 text-white font-black uppercase text-[10px] tracking-widest hover:bg-r3up-orange hover:text-black transition-all">
            Request Demo to Sync Live Inventory
          </button>
        </div>
      </div>
    </section>
  );
}

export function YieldAuditSection() {
  return (
    <section className="py-24 bg-white border-t border-zinc-200 overflow-hidden relative terminal-grid">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-r3up-orange/5 blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-r3up-green/20 bg-r3up-green/5 text-r3up-green font-mono text-[10px] tracking-widest uppercase">
              The Yield Audit
            </div>
            <h2 className="text-5xl font-bold tracking-tighter text-zinc-900 leading-none">
              Stop Leaving <br /> <span className="text-r3up-orange">Money</span> on the Table.
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Local trade-in programs and domestic wholesalers are designed for convenience, not profit. 
              R3UP bypasses the middleman to capture the global arbitrage delta.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-r3up-green/10 flex items-center justify-center text-r3up-green">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-zinc-700 font-medium">Direct access to 30+ global markets</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-r3up-green/10 flex items-center justify-center text-r3up-green">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-zinc-700 font-medium">Automated grading and verification</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-r3up-green/10 flex items-center justify-center text-r3up-green">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-zinc-700 font-medium">Instant liquidity on matched manifests</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-6">
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Local Trade-In</div>
              <div className="text-4xl font-black text-zinc-300 tracking-tighter">$450.00</div>
              <div className="text-xs text-zinc-400 font-medium">Standard domestic wholesale price. Multiple broker layers involved.</div>
              <div className="h-1 w-full bg-zinc-200 rounded-full" />
            </div>
            
            <div className="p-8 bg-white border-2 border-r3up-orange rounded-2xl space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-r3up-orange text-black font-black text-[8px] px-3 py-1 uppercase tracking-widest">Optimal</div>
              <div className="text-[10px] font-mono text-r3up-orange uppercase tracking-widest">R3UP Execution</div>
              <div className="text-4xl font-black text-zinc-900 tracking-tighter">$890.00</div>
              <div className="text-xs text-zinc-500 font-medium">Direct global matching. Capturing the Brazil Gap yield.</div>
              <div className="h-1 w-full bg-r3up-orange rounded-full" />
              <div className="text-sm font-bold text-r3up-green flex items-center gap-2">
                <TrendingUp size={16} /> +97.8% Yield Increase
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center lg:justify-start">
            <button className="px-8 py-4 border-2 border-zinc-900 text-zinc-900 font-black uppercase text-[10px] tracking-widest hover:bg-zinc-900 hover:text-white transition-all">
              Request Full Yield Audit Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NoGhostSection() {
  const PROMISES = [
    {
      title: "No Ghost Brokers",
      description: "Every buyer on R3UP is verified and has immediate liquidity. No more 'waiting for a buyer's buyer'.",
      icon: <Shield className="text-r3up-orange" size={24} />
    },
    {
      title: "Direct Execution",
      description: "We remove the 3-4 layers of middlemen that typically eat 15-20% of your asset's value.",
      icon: <Zap className="text-r3up-green" size={24} />
    },
    {
      title: "Verified Logistics",
      description: "Our Tier 2 hubs handle all grading and shipping, ensuring what you send is what they get.",
      icon: <Globe2 className="text-zinc-900" size={24} />
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200 terminal-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter text-zinc-900 uppercase italic">The <span className="text-r3up-orange">No Ghost</span> Promise.</h2>
          <p className="text-zinc-500 text-lg">
            The secondary market is plagued by "ghost brokers" and endless chains. 
            R3UP is a direct execution layer, connecting you to real demand, instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {PROMISES.map((promise, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 p-8 bg-white border border-zinc-200 rounded-2xl hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center">
                {promise.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900">{promise.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MatchingSection() {
  return (
    <section className="py-24 bg-white border-t border-zinc-200 terminal-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-r3up-orange/5 rounded-3xl blur-2xl" />
            <div className="relative bg-zinc-50 border border-zinc-200 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-r3up-orange rounded-lg flex items-center justify-center text-black">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <span className="font-bold text-zinc-900">Smart-Match™ Engine</span>
                </div>
                <span className="text-[10px] font-mono text-r3up-green bg-r3up-green/10 px-2 py-1 rounded">Active</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-zinc-200">
                  <div className="w-2 h-2 rounded-full bg-r3up-orange animate-ping" />
                  <div className="flex-1">
                    <div className="text-[10px] text-zinc-400 uppercase font-mono">Scanning Markets</div>
                    <div className="text-sm font-medium text-zinc-900">Brazil, UAE, Hong Kong, USA</div>
                  </div>
                </div>

                <div className="flex items-center justify-center py-4">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="text-[10px] text-zinc-400 uppercase font-mono">Optimal Match Found</div>
                    <div className="text-2xl font-black text-zinc-900 tracking-tighter">NYC → SAO PAULO</div>
                    <div className="text-xs text-r3up-green font-bold">+18.4% Net Yield</div>
                  </div>
                </div>

                <button className="w-full py-4 bg-r3up-orange text-black font-black rounded-lg hover:bg-zinc-900 hover:text-white transition-all uppercase text-xs tracking-widest">
                  Execute All Matches
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-r3up-orange/20 bg-r3up-orange/5 text-r3up-orange font-mono text-[10px] tracking-widest uppercase">
              The Engine
            </div>
            <h2 className="text-5xl font-bold tracking-tighter text-zinc-900 leading-none">
              The <span className="text-r3up-orange">Match</span> That <br /> Changes Everything.
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Our AI doesn't just find buyers; it finds the *perfect* buyer. By analyzing global supply gaps, 
              R3UP moves your inventory to where it's most scarce, maximizing your margins automatically.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="mt-1 text-r3up-green"><TrendingUp size={20} /></div>
                <div>
                  <h4 className="font-bold text-zinc-900">Margin Optimization</h4>
                  <p className="text-sm text-zinc-500">Average 12% increase in net profit per unit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-r3up-green"><Globe2 size={20} /></div>
                <div>
                  <h4 className="font-bold text-zinc-900">Global Logistics</h4>
                  <p className="text-sm text-zinc-500">Seamless shipping to 45+ countries handled by us.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="px-8 py-4 bg-zinc-900 text-white font-black uppercase text-[10px] tracking-widest hover:bg-r3up-orange hover:text-black transition-all">
                Unlock Smart-Match Engine — $299/mo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PremiumArbitrageSection() {
  const GAPS = [
    { region: "LATAM", yield: "+32.4%", status: "High Demand", asset: "iPhone 15 Pro" },
    { region: "MENA", yield: "+28.1%", status: "Medium Demand", asset: "MacBook Pro M3" },
    { region: "APAC", yield: "+24.5%", status: "High Demand", asset: "iPad Air M2" },
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white border-t border-white/10 overflow-hidden relative terminal-grid">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-r3up-orange/10 border border-r3up-orange/30 text-r3up-orange font-mono text-[10px] tracking-widest uppercase">
              Premium Intelligence
            </div>
            <h2 className="text-4xl font-bold tracking-tighter italic uppercase">Deep <span className="text-r3up-orange">Arbitrage</span> Gaps.</h2>
            <p className="text-zinc-400 max-w-md text-sm">
              Real-time yield analysis across restricted global corridors. 
              Updated every 1.2 seconds.
            </p>
          </div>
          <button className="flex items-center gap-2 text-xs font-bold text-r3up-orange hover:underline uppercase tracking-widest">
            Unlock Full Terminal <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid gap-4 relative">
          {/* The Locked Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl">
            <div className="text-center space-y-6 p-12 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl max-w-md">
              <div className="w-16 h-16 bg-r3up-orange/10 border border-r3up-orange/30 rounded-full flex items-center justify-center mx-auto text-r3up-orange">
                <Lock size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold uppercase tracking-tight">Terminal Access Required</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Deep yield data for LATAM and MENA regions is restricted to verified Tier 3 Enterprise partners. 
                  Authenticate your terminal to view live gaps.
                </p>
              </div>
              <button className="w-full py-4 bg-r3up-orange text-black font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all rounded-sm">
                Request Access Key
              </button>
            </div>
          </div>

          {/* The Blurred Content */}
          {GAPS.map((gap, idx) => (
            <div key={idx} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-xl locked-data">
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-zinc-500">
                  <Globe2 size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Region</div>
                  <div className="font-bold text-lg">{gap.region}</div>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Asset</div>
                <div className="font-bold">{gap.asset}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Yield_Delta</div>
                <div className="text-2xl font-black text-r3up-green">{gap.yield}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EcosystemParticipantsSection() {
  const PARTICIPANTS = [
    {
      role: "The Recycler",
      title: "Turning Waste into Value",
      description: "Small-scale recyclers use R3UP to find premium global buyers for their processed assets, ensuring nothing goes to waste.",
      icon: <Recycle className="text-emerald-500" size={24} />,
      stat: "4.2M Units Saved",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
    },
    {
      role: "The Retailer",
      title: "Sourcing for Communities",
      description: "Local shop owners in emerging markets source verified, high-quality tech directly from the R3UP network at fair prices.",
      icon: <Store className="text-blue-500" size={24} />,
      stat: "12k+ Local Shops",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800"
    },
    {
      role: "The Enterprise",
      title: "Scale with Integrity",
      description: "Fortune 500 companies manage their device lifecycles through R3UP, maximizing ROI while meeting ESG goals.",
      icon: <Building2 className="text-zinc-900" size={24} />,
      stat: "99.9% Compliance",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-zinc-200 overflow-hidden terminal-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
              The Human Element
            </div>
            <h2 className="text-5xl font-bold tracking-tighter text-zinc-900 leading-none">
              Built for the <br /> <span className="text-r3up-orange">R3UP Nation.</span>
            </h2>
            <p className="text-zinc-500 max-w-xl text-lg">
              Behind every device is a person. R3UP is the ecosystem that connects 
              recyclers, retailers, and enterprises into a single global community.
            </p>
          </div>
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-zinc-100 overflow-hidden shadow-sm">
                <img 
                  src={`https://picsum.photos/seed/person${i}/100/100`} 
                  alt="Community Member" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
            <div className="w-14 h-14 rounded-full border-4 border-white bg-zinc-900 flex items-center justify-center text-white text-xs font-bold shadow-sm">
              +12k
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PARTICIPANTS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-3xl overflow-hidden border border-zinc-200"
            >
              <img 
                src={p.image} 
                alt={p.role} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-xl">
                  {p.icon}
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest">{p.role}</div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{p.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                    {p.description}
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-r3up-orange font-bold text-xs uppercase tracking-widest">
                    <Users size={14} /> {p.stat}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-zinc-900 rounded-[40px] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.15),transparent)]" />
          <div className="relative z-10 space-y-8">
            <h3 className="text-4xl font-bold text-white tracking-tighter italic uppercase">Ready to join the <span className="text-r3up-orange">Nation?</span></h3>
            <p className="text-zinc-400 max-w-xl mx-auto text-lg">
              Whether you're a single recycler or a global OEM, there's a place for you in the R3UP ecosystem. 
              Start maximizing your impact and your returns today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="h-14 px-10 bg-r3up-orange text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-all rounded-sm">
                Apply for Membership
              </button>
              <button className="h-14 px-10 border border-zinc-700 text-white font-mono text-xs tracking-widest hover:bg-zinc-800 transition-all rounded-sm">
                View_Ecosystem_Map.pdf
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
