
import React from 'react';
import { motion } from 'framer-motion';

const Security: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-black text-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <span className="bg-brand/10 text-brand px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.5em] mb-8 block w-fit">Standards</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none">
              Asset <br /><span className="text-outline-white italic">Security.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              Industrial-grade protection for your most valuable visual assets and sensitive project data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 bg-zinc-900/40 rounded-[3rem] border border-white/5 group hover:border-brand/30 transition-all">
              <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-brand transition-colors">Encrypted Delivery</h3>
              <p className="text-zinc-500 font-medium leading-relaxed">All final 4K masters and high-res photography are delivered via secure, encrypted links with restricted access controls.</p>
            </div>

            <div className="p-12 bg-zinc-900/40 rounded-[3rem] border border-white/5 group hover:border-brand/30 transition-all">
              <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-brand transition-colors">On-Site Safety</h3>
              <p className="text-zinc-500 font-medium leading-relaxed">Our team follows strict industrial safety protocols (PPE, specialized permits) to ensure zero-incident documentation environments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
