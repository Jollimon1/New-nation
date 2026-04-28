import React from 'react';
import { HelpCircle } from "lucide-react";

export const FAQWarehouse = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* The "Physical Reality" Image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#FF6B00]/20 rounded-[40px] blur-2xl group-hover:bg-[#FF6B00]/30 transition-all duration-700" />
          <div className="relative rounded-[32px] overflow-hidden border-8 border-black shadow-2xl">
            <img 
              src="https://picsum.photos/seed/r3up-warehouse-ops/1200/1500" 
              alt="R3UP Warehouse Operations" 
              className="w-full aspect-[4/5] object-cover hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Text */}
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black to-transparent">
              <p className="text-[#00DF81] font-mono text-[10px] tracking-widest uppercase mb-2">/Physical_Verification_Active</p>
              <h3 className="text-white text-xl font-black italic tracking-tighter uppercase">Miami Hub // Bay 04</h3>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-[#FF6B00]">
            <HelpCircle size={20} />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Common_Inquiries</span>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Is the capital in Group Buys insured?", a: "Yes. Every Tier 2 Syndicate buy is backed by a physical escrow and 100% insurance on the inventory from origin to hub." },
              { q: "Who handles the actual grading?", a: "Our trained warehouse agents (like the one pictured) use R3UP's proprietary diagnostic tools to verify every single unit. No ghost-grading." },
              { q: "How fast is the payout?", a: "Once the 'Digital WorkForce' verifies the lot at the hub, payout is triggered via smart-contract within 4 hours." },
              { q: "Where does my money go in a Group Buy?", a: "Every dollar is held in a R3UP-verified escrow account. Funds are only released to the carrier or OEM once the manifest is graded and verified by our Tier 2 logistics hubs." },
              { q: "Who is actually touching the phones?", a: "R3UP owns the grading standard. Every unit in a Tier 2 or Tier 3 lot passes through a R3UP-certified facility in Miami or Dubai. We don't rely on 'seller descriptions'." },
              { q: "I'm a one-man shop, is this too big for me?", a: "R3UP was built to make small shops act like global corporations. Whether you're buying 5 units or 5,000, our 'Digital Workforce' handles the logistics and matching." }
            ].map((item, i) => (
              <div key={i} className="border-b border-black/5 pb-6">
                <h4 className="text-lg font-black uppercase italic mb-2 tracking-tighter">{item.q}</h4>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
