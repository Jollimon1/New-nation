import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Terminal, Shield, Globe, ShieldCheck, CheckCircle2, X, Cpu, HelpCircle, Lock, ShieldAlert, TrendingUp, Monitor, Smartphone } from 'lucide-react';
import R3UPHero from './components/ui/hero';
import R3UPEcosystem from './components/ui/r3up-ecosystem';
import R3UPFooter from './components/ui/r3up-footer';
import ToolFanStack from './components/ui/tool-fan-stack';
import { FAQWarehouse } from './components/ui/faq-warehouse';
import Solutions from './components/ui/solutions';
import Blog from './components/ui/blog';
import Contact from './components/ui/contact';

const Navbar = ({ currentView, setCurrentView }: { currentView: string, setCurrentView: (view: string) => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setCurrentView('home')}
            className="text-2xl font-black tracking-tighter flex items-center gap-2 text-zinc-900 italic uppercase"
          >
            <div className="w-8 h-8 bg-r3up-orange rounded-sm flex items-center justify-center text-black">
              <Zap size={20} fill="currentColor" />
            </div>
            R3UP
          </button>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setCurrentView('home')}
              className={`text-xs font-black uppercase tracking-widest transition-colors ${currentView === 'home' ? 'text-r3up-orange' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentView('solutions')}
              className={`text-xs font-black uppercase tracking-widest transition-colors ${currentView === 'solutions' ? 'text-r3up-orange' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              Solutions
            </button>
            <button 
              onClick={() => setCurrentView('blog')}
              className={`text-xs font-black uppercase tracking-widest transition-colors ${currentView === 'blog' ? 'text-r3up-orange' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              Blog
            </button>
            <button 
              onClick={() => setCurrentView('contact')}
              className={`text-xs font-black uppercase tracking-widest transition-colors ${currentView === 'contact' ? 'text-r3up-orange' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
              Contact
            </button>
            <div className="flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded border border-zinc-200 font-mono text-[10px] text-zinc-500">
              <Terminal size={12} />
              <span>CMD: /EXECUTE_MATCH</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 mr-4 border-r border-zinc-200 pr-4">
            <div className="text-right">
              <div className="text-[9px] font-mono text-zinc-400 uppercase">Global_Yield</div>
              <div className="text-xs font-bold text-r3up-green data-number">+24.8%</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] font-mono text-zinc-400 uppercase">Liquidity</div>
              <div className="text-xs font-bold text-zinc-900 data-number">$42.8M</div>
            </div>
          </div>
          <button className="h-10 px-6 rounded-sm bg-zinc-900 text-white text-xs font-black uppercase tracking-widest hover:bg-r3up-orange transition-all flex items-center gap-2">
            <Shield size={14} />
            Authenticate
          </button>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  return (
    <main className="bg-[#F5F5F7] min-h-screen">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pt-20">
              <R3UPHero />
            </div>

            <R3UPEcosystem />

            {/* The Infrastructure Stack: Empire Toolset */}
            <section className="bg-white">
              <ToolFanStack />
            </section>

            <FAQWarehouse />

            <R3UPFooter />
          </motion.div>
        ) : currentView === 'solutions' ? (
          <motion.div
            key="solutions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Solutions setCurrentView={setCurrentView} />
            <R3UPFooter />
          </motion.div>
        ) : currentView === 'blog' ? (
          <motion.div
            key="blog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Blog />
            <R3UPFooter />
          </motion.div>
        ) : (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
            <R3UPFooter />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showUploadModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-zinc-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <button onClick={() => setShowUploadModal(false)} className="text-zinc-400 hover:text-zinc-900 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-r3up-green/10 text-r3up-green rounded-full flex items-center justify-center">
                  <CheckCircle2 size={40} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900">Manifest Uploaded</h3>
                  <p className="text-zinc-500 text-sm">
                    Your inventory has been parsed and synchronized with the global clearinghouse.
                  </p>
                </div>

                {/* The "Verified" Stamp (Asset #3) */}
                <div className="flex items-center gap-3 px-6 py-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100 shadow-sm">
                  <ShieldCheck size={24} />
                  <div className="text-left">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest leading-none">Data_Status</div>
                    <div className="text-sm font-black uppercase tracking-tight">Verified & Safe</div>
                  </div>
                </div>

                <div className="w-full pt-4">
                  <button 
                    onClick={() => setShowUploadModal(false)}
                    className="w-full h-12 bg-zinc-900 text-white rounded-xl font-bold text-sm hover:bg-r3up-orange transition-all"
                  >
                    View Live Matches
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

