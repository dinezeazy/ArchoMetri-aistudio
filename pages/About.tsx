
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-black text-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-32"
          >
            <span className="text-brand text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Our Story</span>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
              Archo<span className="text-outline-white">Metri</span>
            </h1>
            <p className="text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
              A specialized creative studio dedicated to the high-end documentation of architecture and large-scale industrial assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 border border-white/5 bg-zinc-950/50"
            >
              <div className="w-8 h-1 bg-brand mb-8"></div>
              <h3 className="text-xs font-black uppercase tracking-widest text-brand mb-6">Technical Soul</h3>
              <p className="text-zinc-500 font-light leading-relaxed text-lg">
                We believe that great architecture deserves to be understood, not just seen. Our background in structural analysis informs every angle we choose, ensuring that the "why" of the building is as clear as the "what."
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 border border-white/5 bg-zinc-950/50"
            >
              <div className="w-8 h-1 bg-brand mb-8"></div>
              <h3 className="text-xs font-black uppercase tracking-widest text-brand mb-6">Cinematic Depth</h3>
              <p className="text-zinc-500 font-light leading-relaxed text-lg">
                Motion isn't just movement; it's a tour. We utilize cinema-grade stabilization and 4K sensors to provide virtual site visits that allow stakeholders to experience scale and texture remotely.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-white/5 pt-24 text-center"
          >
            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-700 mb-16">Global Network Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-20 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="text-3xl font-black uppercase italic tracking-tighter">STRUCT-X</div>
               <div className="text-3xl font-black uppercase tracking-widest">STEELBORN</div>
               <div className="text-3xl font-black uppercase border border-white px-4">ARC-TEC</div>
               <div className="text-3xl font-black uppercase tracking-tighter">INDUS.CO</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
