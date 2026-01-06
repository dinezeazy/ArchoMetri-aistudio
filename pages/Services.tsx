
import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-40 pb-32 bg-black text-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-32"
        >
          <span className="text-brand text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Expertise</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            Visual <br /><span className="text-outline-white">Precision.</span>
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed font-light">
            Providing high-fidelity visual documentation through advanced photography and cinema-grade videography techniques tailored for the industrial sector.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-48"
        >
          {/* Service 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div variants={item} className="relative aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
                alt="Architecture"
                className="w-full h-full object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-0 left-0 w-2 h-2 bg-brand shadow-[0_0_10px_#A9F719]"></div>
            </motion.div>
            <motion.div variants={item} className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter">Architectural <span className="text-brand">Narratives</span></h2>
              <p className="text-zinc-500 leading-relaxed font-light text-lg">
                We capture structures as dynamic sculptures. Utilizing tilt-shift optics and advanced exposure blending to showcase volume, texture, and light as the architect intended.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Exterior Facades',
                  'Interior Atmosphere',
                  'Twilight Blue-Hour',
                  'Aerial Perspective'
                ].map(s => (
                  <div key={s} className="flex items-center space-x-3 group">
                    <div className="w-6 h-[1px] bg-brand group-hover:w-10 transition-all"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div variants={item} className="order-2 lg:order-1 space-y-8 text-right lg:text-left">
              <h2 className="text-4xl font-black uppercase tracking-tighter">Industrial <span className="text-brand">Scale</span></h2>
              <p className="text-zinc-500 leading-relaxed font-light text-lg">
                Documenting the raw power of engineering. From logistics hubs to manufacturing plants, we provide technically accurate visuals that emphasize operational magnitude.
              </p>
              <div className="flex flex-wrap justify-end lg:justify-start gap-4">
                 {['Oil & Gas', 'Manufacturing', 'Logistics', 'Energy'].map(tag => (
                   <span key={tag} className="px-4 py-2 border border-white/5 text-[9px] font-black uppercase tracking-widest text-zinc-500">
                     {tag}
                   </span>
                 ))}
              </div>
            </motion.div>
            <motion.div variants={item} className="order-1 lg:order-2 relative aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial"
                className="w-full h-full object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-brand shadow-[0_0_10px_#A9F719]"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
