
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
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=2070" 
            alt="Hero - Modern Indian Architecture"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
          <div className="max-w-5xl mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="inline-block px-5 py-1.5 bg-brand text-black text-[9px] font-black uppercase tracking-[0.3em] mb-8 rounded-full shadow-[0_0_20px_rgba(169,247,25,0.3)]">
                India's Premier Visuals Studio
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-5xl md:text-[110px] font-extrabold uppercase leading-[0.9] tracking-tighter mb-10"
            >
              Documenting <br />
              <span className="text-outline-white italic">The Growth.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '120px' }}
              transition={{ delay: 1, duration: 1 }}
              className="h-1.5 bg-brand mb-10 shadow-[0_0_15px_#A9F719] rounded-full mx-auto md:mx-0"
            />

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium mb-14 mx-auto md:mx-0"
            >
              Capturing the scale of Indian infrastructure and the finesse of modern architecture with cinematic precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-6 justify-center md:justify-start"
            >
              <a 
                href="#/gallery" 
                className="px-12 py-5 bg-white text-black font-black uppercase text-[11px] tracking-widest hover:bg-brand transition-all duration-500 rounded-full shadow-2xl shadow-white/5"
              >
                Explore Works
              </a>
              <a 
                href="#/services" 
                className="px-12 py-5 border border-white/20 hover:border-brand/50 text-white font-black uppercase text-[11px] tracking-widest transition-all duration-500 rounded-full backdrop-blur-md"
              >
                Our Expertise
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-brand/30 rounded-full flex justify-center p-1">
            <motion.div animate={{ y: [0, 16, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1.5 h-1.5 bg-brand rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Modern Grid Feature */}
      <section className="py-40 bg-zinc-950 rounded-[4rem] relative z-20 -mt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 space-y-10"
            >
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Engineering <br /> <span className="text-brand">Milestones.</span>
              </h2>
              <p className="text-zinc-500 text-xl leading-relaxed font-medium">
                From high-speed rail corridors to industrial smart-cities, we document the building blocks of the new India. Our visuals communicate precision, strength, and legacy.
              </p>
              <div className="pt-4">
                <a href="#/gallery" className="flex items-center space-x-6 group cursor-pointer inline-flex p-3 pr-8 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/5">
                  <div className="w-14 h-14 rounded-full border border-brand/30 flex items-center justify-center group-hover:bg-brand transition-all duration-500 group-hover:scale-110">
                    <svg className="w-6 h-6 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="uppercase text-[10px] font-black tracking-[0.3em] text-zinc-300 group-hover:text-brand transition-colors">Project Archives</span>
                </a>
              </div>
            </motion.div>

            <div className="md:col-span-7 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 aspect-[4/3] overflow-hidden rounded-[3rem] shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Industrial India" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                />
              </motion.div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="absolute -bottom-10 -left-10 w-64 h-64 border-2 border-brand/20 -z-0 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: '01', title: 'Architecture', desc: 'Symmetrical perfection and light play in India\'s high-end structural landscape.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600' },
              { id: '02', title: 'Industrial', desc: 'Capturing the power of Indian industry, from steel plants to high-tech manufacturing.', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600' },
              { id: '03', title: 'Videography', desc: '4K Cinematic motion that brings the heartbeat of your projects to life.', img: 'https://images.unsplash.com/photo-1590050752117-23a9d7fc992c?auto=format&fit=crop&q=80&w=600' }
            ].map((s, idx) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-zinc-900/40 group hover:bg-brand transition-all duration-700 cursor-default rounded-[3rem] border border-white/5 relative overflow-hidden flex flex-col h-[500px]"
              >
                <div className="h-1/2 w-full overflow-hidden">
                   <img src={s.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                </div>
                <div className="p-10 relative z-10 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-brand group-hover:text-black font-black text-xs block mb-4 transition-colors bg-white/5 w-fit px-3 py-1 rounded-full group-hover:bg-black/10">[{s.id}]</span>
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-black transition-colors">{s.title}</h3>
                    <p className="text-zinc-500 group-hover:text-black/70 leading-relaxed font-medium transition-colors text-base">{s.desc}</p>
                  </div>
                  <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                       <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                       </svg>
                     </div>
                  </div>
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
