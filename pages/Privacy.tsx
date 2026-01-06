
import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-black text-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <span className="bg-brand/10 text-brand px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.5em] mb-8 block w-fit">Legal</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none text-white">
              Privacy <br /><span className="text-outline-white italic">Protocol.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              Last Updated: October 2023. This document outlines our commitment to your data integrity and visual asset security.
            </p>
          </motion.div>

          <div className="space-y-20">
            <section className="group">
              <h2 className="text-xs font-black uppercase tracking-widest text-brand mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand/30"></span> 01. Data Collection
              </h2>
              <div className="text-zinc-400 font-medium leading-relaxed space-y-4 text-lg">
                <p>We collect essential information required to facilitate our architectural and industrial photography services. This includes contact details, project locations, and structural specifications provided during consultations.</p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xs font-black uppercase tracking-widest text-brand mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand/30"></span> 02. Asset Stewardship
              </h2>
              <div className="text-zinc-400 font-medium leading-relaxed space-y-4 text-lg">
                <p>Visual assets captured during projects are treated with the highest level of confidentiality. We do not share raw footage or final deliverables with third parties without explicit written consent from the client.</p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xs font-black uppercase tracking-widest text-brand mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand/30"></span> 03. Digital Protection
              </h2>
              <div className="text-zinc-400 font-medium leading-relaxed space-y-4 text-lg">
                <p>Our website utilizes minimal tracking to ensure optimal performance. We prioritize your privacy by avoiding intrusive analytics and third-party advertising cookies.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;