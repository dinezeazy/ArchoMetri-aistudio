
import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="bg-black">
      {/* Dynamic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Hero"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 bg-brand text-black text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                Premium Visuals
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-6xl md:text-[120px] font-black uppercase leading-[0.85] tracking-tighter mb-8"
            >
              Capturing <br />
              <span className="text-outline-white">The Scale.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100px' }}
              transition={{ delay: 1, duration: 1 }}
              className="h-1 bg-brand mb-8"
            />

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed font-light mb-12"
            >
              Architectural and Industrial storytelling for the visionaries of the built environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex space-x-6"
            >
              <a 
                href="#/gallery" 
                className="px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-brand transition-all duration-300"
              >
                Launch Gallery
              </a>
              <a 
                href="#/services" 
                className="px-10 py-5 border border-white/20 hover:border-brand/50 text-white font-black uppercase text-xs tracking-widest transition-all duration-300"
              >
                Our Services
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Modern Grid Feature */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Beyond the <br /> <span className="text-brand">Blueprint.</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed font-light">
                We don't just take photos; we document engineering milestones. Our team integrates with your project timeline to capture every structural beat from groundbreaking to grand opening.
              </p>
              <div className="pt-8">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-brand/30 flex items-center justify-center group-hover:bg-brand transition-colors">
                    <svg className="w-5 h-5 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="uppercase text-xs font-bold tracking-[0.3em]">The ArchoMetri Method</span>
                </div>
              </div>
            </motion.div>

            <div className="md:col-span-7 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 aspect-[4/3] overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" 
                  alt="Industrial" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </motion.div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="absolute -bottom-12 -left-12 w-64 h-64 border-4 border-brand/20 -z-0"
              />
              <div className="absolute -top-6 -right-6 text-[100px] font-black text-white/5 select-none pointer-events-none uppercase">
                Industry
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services "React-Based" Accordion or Grid */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {[
              { id: '01', title: 'Architecture', desc: 'Symmetrical perfection and light play in high-end structural photography.' },
              { id: '02', title: 'Industrial', desc: 'Documenting the heavy metal, the grit, and the grandeur of large plants.' },
              { id: '03', title: 'Videography', desc: '4K Cinematic motion that moves with the pulse of your project.' }
            ].map((s, idx) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-black p-16 group hover:bg-brand transition-all duration-500"
              >
                <span className="text-brand group-hover:text-black font-black text-sm block mb-8 transition-colors">[{s.id}]</span>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-black transition-colors">{s.title}</h3>
                <p className="text-zinc-500 group-hover:text-black/70 leading-relaxed font-light transition-colors">{s.desc}</p>
                <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-px bg-black"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
