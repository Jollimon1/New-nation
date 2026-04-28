"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  Filter, 
  Lock, 
  Zap, 
  ArrowUpRight, 
  BarChart3,
  Search,
  ChevronRight
} from 'lucide-react';

interface MarketData {
  id: string;
  asset: string;
  type: string;
  region: string;
  bid: number;
  ask: number;
  volume: string;
  spread: string;
  change: number;
  isPremium: boolean;
}

const INITIAL_DATA: MarketData[] = [
  { id: '1', asset: 'iPhone 15 Pro 128GB', type: 'Smartphone', region: 'USA', bid: 845.50, ask: 848.20, volume: '12.4k', spread: '0.32%', change: 0.45, isPremium: false },
  { id: '2', asset: 'iPhone 15 Pro 128GB', type: 'Smartphone', region: 'LATAM', bid: 1120.00, ask: 1145.50, volume: '4.2k', spread: '2.28%', change: 1.25, isPremium: true },
  { id: '3', asset: 'MacBook Pro M3 14"', type: 'Laptop', region: 'EMEA', bid: 1450.00, ask: 1462.00, volume: '1.8k', spread: '0.82%', change: -0.12, isPremium: false },
  { id: '4', asset: 'iPad Air M2', type: 'Tablet', region: 'APAC', bid: 520.00, ask: 524.50, volume: '8.9k', spread: '0.86%', change: 0.88, isPremium: false },
  { id: '5', asset: 'iPhone 14 Base 128GB', type: 'Smartphone', region: 'MENA', bid: 610.00, ask: 635.00, volume: '2.1k', spread: '4.10%', change: 2.15, isPremium: true },
  { id: '6', asset: 'Samsung S24 Ultra', type: 'Smartphone', region: 'USA', bid: 910.00, ask: 915.00, volume: '5.6k', spread: '0.55%', change: -0.34, isPremium: false },
  { id: '7', asset: 'MacBook Air M2', type: 'Laptop', region: 'LATAM', bid: 980.00, ask: 1040.00, volume: '0.9k', spread: '6.12%', change: 3.40, isPremium: true },
];

const REGIONS = ['All', 'USA', 'LATAM', 'EMEA', 'APAC', 'MENA'];
const TYPES = ['All', 'Smartphone', 'Laptop', 'Tablet'];

export default function LiquidityTerminal() {
  const [data, setData] = useState<MarketData[]>(INITIAL_DATA);
  const [regionFilter, setRegionFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => prevData.map(item => {
        if (item.isPremium) return item; // Keep premium stable or update differently
        const change = (Math.random() - 0.5) * 2;
        const newBid = item.bid + change;
        const newAsk = newBid + (item.bid * parseFloat(item.spread) / 100);
        return {
          ...item,
          bid: parseFloat(newBid.toFixed(2)),
          ask: parseFloat(newAsk.toFixed(2)),
          change: parseFloat((item.change + (Math.random() - 0.5) * 0.1).toFixed(2))
        };
      }));
      setLastUpdate(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const filteredData = data.filter(item => {
    const regionMatch = regionFilter === 'All' || item.region === regionFilter;
    const typeMatch = typeFilter === 'All' || item.type === typeFilter;
    return regionMatch && typeMatch;
  });

  return (
    <section className="py-24 bg-white border-t border-zinc-200 terminal-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-white font-mono text-[8px] tracking-[0.2em] uppercase">
              <BarChart3 size={10} className="text-r3up-orange" /> Liquidity_Terminal_v4.2
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 uppercase italic">
              Global <span className="text-r3up-orange">Liquidity</span> Markets.
            </h2>
            <p className="text-zinc-500 max-w-xl text-sm">
              Real-time bid/ask spreads across 45+ global corridors. 
              Direct execution layer for high-volume hardware arbitrage.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 border border-zinc-200 rounded-sm">
              <Filter size={12} className="text-zinc-400" />
              <select 
                className="bg-transparent border-none text-[10px] font-bold uppercase tracking-widest focus:ring-0 cursor-pointer"
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
              >
                {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 border border-zinc-200 rounded-sm">
              <Search size={12} className="text-zinc-400" />
              <select 
                className="bg-transparent border-none text-[10px] font-bold uppercase tracking-widest focus:ring-0 cursor-pointer"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="text-[9px] font-mono text-zinc-400 uppercase">
              Last_Update: {lastUpdate.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Terminal Table & Sidebar */}
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 bg-white border border-zinc-200 shadow-2xl overflow-hidden rounded-sm">
            <div className="grid grid-cols-6 gap-4 p-4 bg-zinc-900 text-white font-mono text-[9px] tracking-widest uppercase">
              <div className="col-span-2">Asset_Description</div>
              <div>Region</div>
              <div className="text-right">Bid / Ask</div>
              <div className="text-right">Spread</div>
              <div className="text-right">Volume_24h</div>
            </div>

            <div className="divide-y divide-zinc-100">
              <AnimatePresence mode="popLayout">
                {filteredData.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`grid grid-cols-6 gap-4 p-4 items-center hover:bg-zinc-50 transition-colors relative group ${item.isPremium ? 'overflow-hidden' : ''}`}
                  >
                    {/* Asset */}
                    <div className="col-span-2 flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.change >= 0 ? 'bg-r3up-green' : 'bg-red-500'}`} />
                      <div>
                        <div className="text-xs font-bold text-zinc-900 uppercase tracking-tight">{item.asset}</div>
                        <div className="text-[8px] font-mono text-zinc-400">{item.type}</div>
                      </div>
                    </div>

                    {/* Region */}
                    <div className="flex items-center gap-2">
                      <Globe size={10} className="text-zinc-300" />
                      <span className="text-[10px] font-bold text-zinc-600">{item.region}</span>
                    </div>

                    {/* Bid/Ask */}
                    <div className="text-right font-mono">
                      <div className="text-[11px] font-bold text-zinc-900">
                        ${item.bid.toLocaleString()} / ${item.ask.toLocaleString()}
                      </div>
                      <div className={`text-[8px] flex items-center justify-end gap-1 ${item.change >= 0 ? 'text-r3up-green' : 'text-red-500'}`}>
                        {item.change >= 0 ? <TrendingUp size={8} /> : <TrendingDown size={8} />}
                        {Math.abs(item.change)}%
                      </div>
                    </div>

                    {/* Spread */}
                    <div className="text-right">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${parseFloat(item.spread) > 2 ? 'bg-r3up-orange/10 text-r3up-orange' : 'bg-zinc-100 text-zinc-500'}`}>
                        {item.spread}
                      </span>
                    </div>

                    {/* Volume */}
                    <div className="text-right flex items-center justify-end gap-4">
                      <span className="text-[10px] font-bold text-zinc-900">{item.volume}</span>
                      <button className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all">
                        <ChevronRight size={14} />
                      </button>
                    </div>

                    {/* Premium Overlay for specific rows */}
                    {item.isPremium && (
                      <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-4 px-6 py-2 bg-zinc-900 text-white rounded shadow-xl">
                          <Lock size={12} className="text-r3up-orange" />
                          <span className="text-[9px] font-mono tracking-widest uppercase">Restricted_Data_Feed</span>
                          <button className="px-3 py-1 bg-r3up-orange text-black text-[8px] font-black uppercase tracking-tighter hover:bg-white transition-colors">
                            Upgrade Tier
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar: Smart-Match Bid Signal Stack */}
          <div className="hidden lg:block space-y-4 sticky top-24 h-fit">
            <div className="p-4 bg-zinc-900 text-white rounded-sm border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={14} className="text-r3up-orange" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Bid_Signal_Stack</span>
              </div>
              
              <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                  {[
                    { id: 1, text: "NEW BID: iPhone 15 Pro (LATAM) @ $1,125", time: "JUST NOW", type: "bid" },
                    { id: 2, text: "MATCH: NYC → DUBAI (MacBook Pro)", time: "2m ago", type: "match" },
                    { id: 3, text: "LIQUIDITY ALERT: APAC S24 Ultra +12%", time: "5m ago", type: "bid" },
                  ].map((signal) => (
                    <motion.div
                      key={signal.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-white/5 border border-white/5 rounded-sm space-y-1"
                    >
                      <div className="flex justify-between items-center">
                        <span className={`text-[8px] font-mono font-bold px-1 rounded-sm ${signal.type === 'bid' ? 'bg-r3up-orange/20 text-r3up-orange' : 'bg-r3up-green/20 text-r3up-green'}`}>
                          {signal.type.toUpperCase()}
                        </span>
                        <span className="text-[8px] font-mono text-zinc-500">{signal.time}</span>
                      </div>
                      <div className="text-[10px] font-bold leading-tight">{signal.text}</div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <button className="w-full mt-6 py-2 border border-white/10 text-[9px] font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                View_All_Signals.log
              </button>
            </div>

            <div className="p-6 bg-r3up-orange text-black rounded-sm">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest mb-2">Market_Health</div>
              <div className="text-3xl font-black tracking-tighter">OPTIMAL</div>
              <div className="mt-4 h-1 w-full bg-black/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  className="h-full bg-black" 
                />
              </div>
              <div className="mt-2 text-[9px] font-bold uppercase tracking-tighter">Liquidity Index: 8.5/10</div>
            </div>
          </div>
        </div>

        {/* Action Solutions */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Solution 1: Request Demo */}
          <div className="terminal-border p-8 bg-zinc-50 space-y-6">
            <div className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center rounded-sm">
              <Zap size={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold uppercase tracking-tight italic">Standard <span className="text-r3up-orange">Terminal</span> Access</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">
                Get full visibility into USA and EMEA liquidity pools. Perfect for domestic recyclers 
                looking to optimize their first layer of yield.
              </p>
            </div>
            <button className="w-full py-4 border-2 border-zinc-900 text-zinc-900 font-black uppercase text-[10px] tracking-widest hover:bg-zinc-900 hover:text-white transition-all">
              Request Platform Demo
            </button>
          </div>

          {/* Solution 2: Paywall */}
          <div className="terminal-border p-8 bg-zinc-900 text-white space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-r3up-orange/10 blur-3xl" />
            <div className="w-12 h-12 bg-r3up-orange text-black flex items-center justify-center rounded-sm">
              <Lock size={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold uppercase tracking-tight italic text-r3up-orange">Tier 3 <span className="text-white">Global Arbitrage</span></h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Unlock restricted corridors (LATAM, MENA, APAC) and deep-yield sensors. 
                Includes automated cross-border matching and logistics execution.
              </p>
            </div>
            <button className="w-full py-4 bg-r3up-orange text-black font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all">
              Unlock Full Terminal — $499/mo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
