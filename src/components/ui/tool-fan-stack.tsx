"use client";
import React, { useState } from 'react';
import { TrendingUp, BarChart2, Gavel, Users, Activity } from "lucide-react";

type DashboardProps = { accentColor: string };

function SmartMatchDashboard({ accentColor }: DashboardProps) {
  return (
    <div className="h-full flex flex-col gap-4" style={{ minHeight: 340 }}>
      <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest">INTAKE WIDGET // LIVE</div>
      <div className="flex-1 flex flex-col gap-3">
        <div className="bg-black/40 border border-white/5 rounded-xl p-5">
          <div className="font-mono text-[8px] text-white/30 uppercase mb-2">Local Offer</div>
          <div className="text-4xl font-black text-white/30" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            $650
          </div>
        </div>
        <div
          className="relative bg-black/40 rounded-xl p-5 overflow-hidden border"
          style={{ borderColor: `${accentColor}30` }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
          />
          <div className="font-mono text-[8px] uppercase mb-2" style={{ color: `${accentColor}80` }}>
            R3UP Network
          </div>
          <div
            className="text-4xl font-black"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', color: accentColor }}
          >
            $890
          </div>
          <div className="font-mono text-[9px] mt-1" style={{ color: `${accentColor}60` }}>
            +$240 PROFIT LOCKED
          </div>
        </div>
      </div>
      <button
        className="w-full py-3 rounded-lg font-mono text-[9px] uppercase tracking-widest transition-opacity hover:opacity-70 border"
        style={{ backgroundColor: `${accentColor}10`, borderColor: `${accentColor}30`, color: accentColor }}
      >
        CALCULATE TRADE-IN →
      </button>
    </div>
  );
}

function PriceIntelDashboard({ accentColor }: DashboardProps) {
  const bars = [65, 72, 68, 80, 75, 88, 71, 84, 90, 78, 85, 100];
  return (
    <div className="h-full flex flex-col gap-4" style={{ minHeight: 340 }}>
      <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest">MARKET FEED // 30D</div>
      <div className="flex-1 flex items-end gap-1 px-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              backgroundColor: i === bars.length - 1 ? accentColor : `${accentColor}22`,
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'iPhone 14 Pro', val: '$847' },
          { label: 'Galaxy S24', val: '$720' },
          { label: 'Pixel 8 Pro', val: '$580' },
          { label: 'iPad Air', val: '$640' },
        ].map((item, i) => (
          <div key={i} className="bg-black/40 rounded-lg p-2.5 border border-white/5">
            <div className="font-mono text-[7px] text-white/30 uppercase mb-1">{item.label}</div>
            <div
              className="text-base font-black text-white"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              {item.val}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TenderDashboard({ accentColor }: DashboardProps) {
  const bids = [
    { label: 'BID_07', val: '$48,250', active: true },
    { label: 'BID_05', val: '$47,050', active: false },
    { label: 'BID_03', val: '$45,800', active: false },
  ];
  return (
    <div className="h-full flex flex-col gap-4" style={{ minHeight: 340 }}>
      <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest">LIVE AUCTION // ACTIVE</div>
      <div
        className="relative bg-black/40 rounded-xl p-5 border overflow-hidden"
        style={{ borderColor: `${accentColor}20` }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
        />
        <div className="flex justify-between mb-2">
          <span className="font-mono text-[8px] text-white/30">CURRENT BID</span>
          <span className="font-mono text-[8px]" style={{ color: accentColor }}>8 BIDDERS ACTIVE</span>
        </div>
        <div
          className="text-3xl font-black mb-3"
          style={{ fontFamily: 'Barlow Condensed, sans-serif', color: accentColor }}
        >
          $48,250
        </div>
        <div className="h-2 bg-black/60 rounded-full overflow-hidden mb-2">
          <div
            className="h-full rounded-full"
            style={{ width: '87%', background: `linear-gradient(to right, ${accentColor}60, ${accentColor})` }}
          />
        </div>
        <div className="flex justify-between font-mono text-[7px] text-white/20">
          <span>FLOOR $40,000</span>
          <span>RESERVE $55,000</span>
        </div>
      </div>
      <div className="space-y-2">
        {bids.map((bid) => (
          <div
            key={bid.label}
            className="flex justify-between items-center px-3 py-2.5 rounded-lg border"
            style={{
              backgroundColor: bid.active ? `${accentColor}10` : 'rgba(0,0,0,0.2)',
              borderColor: bid.active ? `${accentColor}30` : 'rgba(255,255,255,0.05)',
            }}
          >
            <span className="font-mono text-[8px] text-white/40">{bid.label}</span>
            <span
              className="font-mono text-[10px] font-bold"
              style={{ color: bid.active ? accentColor : 'rgba(255,255,255,0.3)' }}
            >
              {bid.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SyndicateDashboard({ accentColor }: DashboardProps) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const filled = circ * 0.73;
  return (
    <div className="h-full flex flex-col gap-4" style={{ minHeight: 340 }}>
      <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest">SYNDICATE POOL // LIVE</div>
      <div className="flex items-center justify-center py-3">
        <div className="relative w-28 h-28">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
            <circle
              cx="50" cy="50" r={r}
              fill="none"
              stroke={accentColor}
              strokeWidth="10"
              strokeDasharray={`${filled} ${circ - filled}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div
              className="text-xl font-black"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', color: accentColor }}
            >
              73%
            </div>
            <div className="font-mono text-[7px] text-white/30">FUNDED</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'Total Pooled', val: '$342,500' },
          { label: 'Members', val: '45' },
          { label: 'Avg Return', val: '15.8%' },
          { label: 'Active', val: '8' },
        ].map((m, i) => (
          <div key={i} className="bg-black/40 rounded-lg p-3 border border-white/5">
            <div className="font-mono text-[7px] text-white/30 uppercase mb-1">{m.label}</div>
            <div
              className="text-base font-black text-white"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              {m.val}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsDashboard({ accentColor }: DashboardProps) {
  const pts = [80, 74, 70, 64, 68, 56, 48, 53, 42, 36, 29, 18];
  const w = 190;
  const h = 90;
  const path = pts
    .map((y, i) => `${i === 0 ? 'M' : 'L'} ${(i / (pts.length - 1)) * w + 5},${y}`)
    .join(' ');
  const area = `${path} L ${w + 5},${h + 5} L 5,${h + 5} Z`;
  const gradId = 'analytics-grad';
  return (
    <div className="h-full flex flex-col gap-4" style={{ minHeight: 340 }}>
      <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest">AI INSIGHTS // 6-MONTH TREND</div>
      <div className="flex-1 relative" style={{ minHeight: 120 }}>
        <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accentColor} stopOpacity="0.25" />
              <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill={`url(#${gradId})`} />
          <path d={path} fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Volume', val: '1,234' },
          { label: 'Demand', val: 'HIGH' },
          { label: 'Score', val: '94/100' },
        ].map((m, i) => (
          <div key={i} className="bg-black/40 rounded-lg p-2.5 border border-white/5 text-center">
            <div className="font-mono text-[6px] text-white/30 uppercase mb-1">{m.label}</div>
            <div
              className="text-sm font-black"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', color: accentColor }}
            >
              {m.val}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolDashboard({ toolId, accentColor }: { toolId: string; accentColor: string }) {
  switch (toolId) {
    case 'smart-match': return <SmartMatchDashboard accentColor={accentColor} />;
    case 'price-intel': return <PriceIntelDashboard accentColor={accentColor} />;
    case 'tender':      return <TenderDashboard accentColor={accentColor} />;
    case 'syndicate':   return <SyndicateDashboard accentColor={accentColor} />;
    case 'analytics':   return <AnalyticsDashboard accentColor={accentColor} />;
    default:            return null;
  }
}

type StatItem = { label: string; value: string; highlight?: boolean };

type ToolItem = {
  id: string;
  tabLabel: string;
  tier: string;
  tierCode: string;
  name: string;
  subtitle: string;
  description: string;
  accentColor: string;
  Icon: React.ElementType;
  stats: StatItem[];
  badges: string[];
};

const TOOLS: ToolItem[] = [
  {
    id: 'smart-match',
    tabLabel: 'Smart Match',
    tier: 'TIER 0',
    tierCode: 'TERMINAL_OUTPUT_T0',
    name: 'Smart Match',
    subtitle: 'Win Every Walk-In',
    description:
      'AI matches your walk-in offer against 30+ global markets in real-time. Lock your margin before the customer leaves the counter.',
    accentColor: '#00C853',
    Icon: TrendingUp,
    stats: [
      { label: 'Local Price', value: '$650' },
      { label: 'R3UP Global', value: '$890' },
      { label: 'Signal', value: '+$240 PROFIT', highlight: true },
    ],
    badges: ['IMEI CLEAR', 'UNLOCKED', 'A+ GRADE'],
  },
  {
    id: 'price-intel',
    tabLabel: 'Price Intel',
    tier: 'TIER 1',
    tierCode: 'TERMINAL_OUTPUT_T1',
    name: 'Price Intel',
    subtitle: 'See the Gap. Strike.',
    description:
      'Real-time price feeds across 30+ markets. Spot arbitrage windows before they close and move inventory at peak yield.',
    accentColor: '#FF6B00',
    Icon: BarChart2,
    stats: [
      { label: 'Avg iPhone 14 Pro', value: '$847' },
      { label: '30d Change', value: '-5.3%' },
      { label: 'Signal', value: 'PRICE ALERT', highlight: true },
    ],
    badges: ['READ-ONLY', '30+ MARKETS', 'REAL-TIME'],
  },
  {
    id: 'tender',
    tabLabel: 'Tender',
    tier: 'TIER 2',
    tierCode: 'TERMINAL_OUTPUT_T2',
    name: 'Tender',
    subtitle: 'Scalability Without Headcount.',
    description:
      'Automated tender engine. Post your pallet, let the global network bid competitively. Close at peak price every time.',
    accentColor: '#4488FF',
    Icon: Gavel,
    stats: [
      { label: 'Current Bid', value: '$48,250' },
      { label: 'Reserve', value: '$55,000' },
      { label: 'Signal', value: '8 BIDDERS', highlight: true },
    ],
    badges: ['GRADED', 'ERASED', 'TESTED'],
  },
  {
    id: 'syndicate',
    tabLabel: 'Syndicate',
    tier: 'TIER 2',
    tierCode: 'TERMINAL_OUTPUT_T2B',
    name: 'Syndicate',
    subtitle: 'Pool Capital. Scale Returns.',
    description:
      'Co-invest in wholesale pallets with vetted operators. Escrow-backed, fully insured, with transparent waterfall distribution.',
    accentColor: '#00C853',
    Icon: Users,
    stats: [
      { label: 'Active Syndicates', value: '8' },
      { label: 'Avg Return', value: '15.8%' },
      { label: 'Signal', value: '$342K POOLED', highlight: true },
    ],
    badges: ['ESCROW BACKED', '45 MEMBERS', 'INSURED'],
  },
  {
    id: 'analytics',
    tabLabel: 'Analytics',
    tier: 'TIER 1',
    tierCode: 'TERMINAL_OUTPUT_T1B',
    name: 'Analytics',
    subtitle: 'Total Visibility.',
    description:
      '6-month trend lines, AI-driven demand signals, and cross-platform price history converge in one institutional terminal.',
    accentColor: '#FF6B00',
    Icon: Activity,
    stats: [
      { label: 'Trade Volume', value: '1,234' },
      { label: 'Market Demand', value: 'HIGH' },
      { label: 'Signal', value: 'AI INSIGHTS', highlight: true },
    ],
    badges: ['6-MONTH TREND', 'AI INSIGHTS', 'MULTI-PLATFORM'],
  },
];

export default function ToolFanStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const switchTab = (index: number) => {
    if (index === activeIndex) return;
    setVisible(false);
    setTimeout(() => {
      setActiveIndex(index);
      setVisible(true);
    }, 160);
  };

  const tool = TOOLS[activeIndex];

  return (
    <section className="py-24 bg-[#F5F3EE] overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-16 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-r3up-orange/10 text-r3up-orange font-mono text-[10px] tracking-[0.2em] uppercase mb-6">
          /System_Intelligence
        </div>
        <h2
          className="text-7xl font-black italic uppercase tracking-tight leading-[0.9] text-zinc-900 mb-4"
          style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
        >
          The <span className="text-r3up-orange">Empire</span> Toolset.
        </h2>
        <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
          SYSTEM_VERSION_2026 // READY_FOR_DEPLOYMENT
        </p>
      </div>

      {/* Tab bar */}
      <div className="container mx-auto px-6 mb-10">
        <div className="flex gap-1 bg-zinc-900/5 p-1 max-w-2xl mx-auto rounded-lg overflow-x-auto">
          {TOOLS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => switchTab(i)}
              className={`flex-1 whitespace-nowrap py-2.5 px-3 rounded-md font-mono text-[10px] uppercase tracking-wider transition-all duration-150 ${
                activeIndex === i
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              {t.tabLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Card stack */}
      <div className="container mx-auto px-6">
        <div className="relative max-w-5xl mx-auto">
          {/* Depth cards */}
          <div
            className="absolute inset-x-10 bottom-0 rounded-2xl bg-zinc-700"
            style={{ top: '-12px', transform: 'rotate(1.5deg)', opacity: 0.18 }}
          />
          <div
            className="absolute inset-x-5 bottom-0 rounded-2xl bg-zinc-800"
            style={{ top: '-6px', transform: 'rotate(0.75deg)', opacity: 0.25 }}
          />

          {/* Main card */}
          <div
            className="relative rounded-2xl bg-[#161a1f] border border-white/10 overflow-hidden"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(10px)',
              transition: 'opacity 0.16s ease, transform 0.16s ease',
            }}
          >
            {/* Accent bar */}
            <div
              className="h-[2px] w-full"
              style={{ background: `linear-gradient(90deg, ${tool.accentColor} 0%, transparent 55%)` }}
            />

            <div className="grid lg:grid-cols-2 min-h-[480px]">
              {/* Left: tool info */}
              <div className="p-10 flex flex-col gap-6 lg:border-r border-white/5">
                {/* Tier label */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: tool.accentColor,
                      boxShadow: `0 0 6px ${tool.accentColor}`,
                    }}
                  />
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
                    {tool.tier} // {tool.tierCode}
                  </span>
                </div>

                {/* Icon */}
                <tool.Icon size={28} strokeWidth={1.5} style={{ color: tool.accentColor }} />

                {/* Name */}
                <div>
                  <h3
                    className="text-5xl font-black italic uppercase tracking-tight leading-none mb-1"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', color: tool.accentColor }}
                  >
                    {tool.name}
                  </h3>
                  <p
                    className="text-lg uppercase tracking-wide text-white/50 font-semibold"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {tool.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-white/45 leading-relaxed font-light">
                  {tool.description}
                </p>

                {/* Stats row */}
                <div className="flex rounded-xl border border-white/5 overflow-hidden">
                  {tool.stats.map((stat, i) => (
                    <div
                      key={i}
                      className={`flex-1 px-4 py-3.5 ${i < tool.stats.length - 1 ? 'border-r border-white/5' : ''} ${stat.highlight ? 'bg-white/[0.04]' : ''}`}
                    >
                      <div className="font-mono text-[7px] text-white/25 uppercase tracking-widest mb-1.5">
                        {stat.label}
                      </div>
                      <div
                        className="font-mono text-xs font-semibold"
                        style={{ color: stat.highlight ? tool.accentColor : 'rgba(255,255,255,0.65)' }}
                      >
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {tool.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.15em] rounded-sm border"
                      style={{
                        borderColor: `${tool.accentColor}25`,
                        color: `${tool.accentColor}70`,
                        backgroundColor: `${tool.accentColor}06`,
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: dashboard */}
              <div className="p-8 bg-black/[0.15]">
                <ToolDashboard toolId={tool.id} accentColor={tool.accentColor} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.3em] mb-6">
          Select_Tier_To_Command
        </p>
        <button
          className="px-12 py-5 bg-zinc-900 text-white font-black italic uppercase text-sm tracking-widest hover:bg-r3up-orange transition-colors duration-200"
          style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
        >
          Enter the R3UP Empire →
        </button>
      </div>
    </section>
  );
}
