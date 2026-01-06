
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-black text-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-40"
          >
            <span className="bg-brand/10 text-brand px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.5em] mb-10 block w-fit mx-auto">The Collective</span>
            <h1 className="text-7xl md:text-[120px] font-black uppercase tracking-tighter mb-12 leading-[0.85] text-white">
              Archo<span className="text-outline-white italic">Metri</span>
            </h1>
            <p className="text-2xl text-zinc-400 font-medium leading-relaxed max-w-3xl mx-auto">
              India's specialized visual studio dedicated to documenting the intersections of structural beauty and industrial might.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-14 bg-zinc-900/30 rounded-[4rem] border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-10 right-10 w-3 h-3 bg-brand rounded-full shadow-[0_0_15px_#A9F719]"></div>
              <h3 className="text-xs font-black uppercase tracking-widest text-brand mb-8">Structural Integrity</h3>
              <p className="text-zinc-500 font-medium leading-relaxed text-xl group-hover:text-zinc-300 transition-colors">
                We understand the complexities of Indian construction environments. Our documentation serves both aesthetic appeal and technical review.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-14 bg-zinc-900/30 rounded-[4rem] border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-10 right-10 w-3 h-3 bg-white/20 rounded-full group-hover:bg-brand group-hover:shadow-[0_0_15px_#A9F719] transition-all"></div>
              <h3 className="text-xs font-black uppercase tracking-widest text-brand mb-8">Next-Gen Motion</h3>
              <p className="text-zinc-500 font-medium leading-relaxed text-xl group-hover:text-zinc-300 transition-colors">
                From drone-captured site progression to high-fidelity plant walkthroughs, we redefine how Indian enterprises showcase their progress.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-24 text-center p-20 bg-zinc-950 rounded-[4rem] border border-white/5"
          >
            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-700 mb-20">Empowering Indian Enterprises</h2>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-25 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
               <div className="text-3xl font-black uppercase italic tracking-tighter">INFRA-X</div>
               <div className="text-3xl font-black uppercase tracking-[0.3em]">RELIANT</div>
               <div className="text-3xl font-black uppercase border-2 border-white px-8 py-2 rounded-full">T-CORP</div>
               <div className="text-3xl font-black uppercase tracking-tighter">BHARAT IND.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;