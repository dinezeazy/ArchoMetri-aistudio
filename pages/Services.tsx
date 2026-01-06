
import React from 'react';
import { motion, Variants } from 'framer-motion';

const Services: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="pt-48 pb-32 bg-black text-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-40"
        >
          <span className="bg-brand/10 text-brand px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.5em] mb-8 block w-fit">Capabilities</span>
          <h1 className="text-6xl md:text-[110px] font-black uppercase tracking-tighter mb-12 leading-[0.85] text-white">
            Visual <br /><span className="text-outline-white italic">Precision.</span>
          </h1>
          <p className="text-2xl text-zinc-400 leading-relaxed font-medium">
            Providing high-fidelity visual documentation through surgical camera work and cinema-grade videography.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-64"
        >
          {/* Service 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div variants={item} className="relative aspect-video overflow-hidden rounded-[4rem] shadow-2xl border border-white/5 bg-zinc-900">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
                alt="Architecture"
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:scale-105 transition-all duration-1000"
              />
            </motion.div>
            <motion.div variants={item} className="space-y-10">
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none text-white">Architectural <br /><span className="text-brand">Narratives</span></h2>
              <p className="text-zinc-500 leading-relaxed font-medium text-xl">
                We capture structures as evolving sculptures. From light-play in residential spaces to the geometric symmetry of corporate glass.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['Exterior Facades', 'Interior Atmosphere', 'Twilight Motion', 'Aerial Perspective'].map(s => (
                  <div key={s} className="flex items-center space-x-4 group p-4 bg-zinc-900/40 rounded-2xl border border-white/5 hover:border-brand/30 transition-all">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full shadow-[0_0_8px_#A9F719]"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Service 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div variants={item} className="order-2 lg:order-1 space-y-10">
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none text-white">Industrial <br /><span className="text-brand">Scale</span></h2>
              <p className="text-zinc-500 leading-relaxed font-medium text-xl">
                Documenting the magnitude of engineering. We integrate with site operations to provide technically accurate, cinematically impressive documentation.
              </p>
              <div className="flex flex-wrap gap-4">
                 {['Oil & Gas', 'Manufacturing', 'Steel', 'Logistics'].map(tag => (
                   <span key={tag} className="px-8 py-3 bg-zinc-900/40 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-brand hover:border-brand/30 transition-all cursor-default">
                     {tag}
                   </span>
                 ))}
              </div>
            </motion.div>
            <motion.div variants={item} className="order-1 lg:order-2 relative aspect-[4/3] overflow-hidden rounded-[4rem] shadow-2xl border border-white/5 bg-zinc-900">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial"
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:scale-105 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;