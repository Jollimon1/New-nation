import React from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#F5F5F7] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-r3up-orange/10 text-r3up-orange font-mono text-[10px] tracking-[0.2em] uppercase rounded-full">
                /Direct_Line_Active
              </div>
              <h1 className="text-7xl font-black italic tracking-tighter uppercase leading-[0.8] mb-6 text-zinc-900">
                The <span className="text-r3up-orange">Empire</span> <br /> Command.
              </h1>
              <p className="max-w-md text-zinc-500 font-bold text-sm uppercase tracking-widest leading-relaxed">
                Connect with the R3UP Command Center. Whether you're a retail operator or a global OEM, we're ready to deploy.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center text-r3up-orange group-hover:bg-r3up-orange group-hover:text-white transition-all shadow-sm">
                  <Mail size={20} />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest leading-none">Email_Intel</div>
                  <div className="text-lg font-black italic uppercase tracking-tighter text-zinc-900">command@r3up.com</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center text-r3up-orange group-hover:bg-r3up-orange group-hover:text-white transition-all shadow-sm">
                  <Phone size={20} />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest leading-none">Voice_Line</div>
                  <div className="text-lg font-black italic uppercase tracking-tighter text-zinc-900">+1 (305) 555-0199</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center text-r3up-orange group-hover:bg-r3up-orange group-hover:text-white transition-all shadow-sm">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest leading-none">Global_Hub</div>
                  <div className="text-lg font-black italic uppercase tracking-tighter text-zinc-900">Miami, FL // Dubai, UAE</div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-12 border-t border-zinc-200 flex items-center gap-12">
              <div className="flex items-center gap-3 text-zinc-400">
                <ShieldCheck size={24} />
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest leading-none">Verified_Escrow</div>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Globe size={24} />
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest leading-none">Global_Logistics</div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-r3up-orange/10 rounded-[40px] blur-2xl" />
            <div className="relative bg-white p-10 rounded-[40px] border-8 border-black shadow-2xl space-y-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter text-zinc-900 leading-none">Request Strategy Call</h3>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">/Deployment_Inquiry_Form</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest ml-1">Full_Name</label>
                    <input type="text" className="w-full h-14 px-6 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:border-r3up-orange transition-colors font-bold text-sm" placeholder="COMMANDER NAME" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest ml-1">Email_Address</label>
                    <input type="email" className="w-full h-14 px-6 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:border-r3up-orange transition-colors font-bold text-sm" placeholder="INTEL@EMAIL.COM" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest ml-1">Company_Type</label>
                  <select className="w-full h-14 px-6 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:border-r3up-orange transition-colors font-bold text-sm appearance-none">
                    <option>RETAIL_OPERATOR</option>
                    <option>WHOLESALE_DISTRIBUTOR</option>
                    <option>CARRIER_OEM</option>
                    <option>SYNDICATE_INVESTOR</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest ml-1">Mission_Brief</label>
                  <textarea className="w-full h-32 px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:border-r3up-orange transition-colors font-bold text-sm resize-none" placeholder="DESCRIBE YOUR OPERATION..."></textarea>
                </div>

                <button type="submit" className="w-full h-16 bg-black text-white rounded-2xl font-black italic uppercase text-xs tracking-widest hover:bg-r3up-orange transition-all flex items-center justify-center gap-3 shadow-xl">
                  <Send size={16} />
                  Deploy Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
