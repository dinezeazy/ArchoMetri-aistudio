
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-brand/10 text-brand px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.5em] mb-10 block w-fit">Consultation</span>
            <h1 className="text-7xl md:text-[120px] font-black uppercase tracking-tighter leading-[0.8] mb-12">
              Let's <br /> Build <br /> <span className="text-outline-white italic">Imagery.</span>
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-24">
              <div className="group p-8 bg-zinc-900/30 rounded-[2.5rem] border border-white/5 hover:border-brand/20 transition-all">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-6 group-hover:text-brand">Headquarters</h3>
                <p className="text-zinc-300 leading-relaxed font-medium text-lg">
                  102 Horizon Towers<br />
                  BKC, Mumbai 400051
                </p>
              </div>
              <div className="group p-8 bg-zinc-900/30 rounded-[2.5rem] border border-white/5 hover:border-brand/20 transition-all">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-6 group-hover:text-brand">Direct</h3>
                <p className="text-zinc-300 leading-relaxed font-medium text-lg">
                  hello@archometri.com<br />
                  +91 98765 43210
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10 bg-zinc-900/30 p-12 md:p-16 rounded-[4rem] border border-white/5 backdrop-blur-xl shadow-2xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-10">
              <div className="relative group">
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 pt-10 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all peer text-white font-medium"
                  placeholder=" "
                />
                <label className="absolute left-6 top-7 text-[10px] font-black uppercase tracking-widest text-zinc-500 pointer-events-none transition-all peer-focus:top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-4">
                  Full Name
                </label>
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 pt-10 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all peer text-white font-medium"
                  placeholder=" "
                />
                <label className="absolute left-6 top-7 text-[10px] font-black uppercase tracking-widest text-zinc-500 pointer-events-none transition-all peer-focus:top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-4">
                  Email Address
                </label>
              </div>
            </div>
            
            <div className="space-y-6">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-4">Project Category</label>
              <div className="flex flex-wrap gap-3">
                {['Architecture', 'Industrial', 'Cinematic Motion'].map((s) => (
                  <button 
                    key={s}
                    type="button"
                    className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-brand hover:text-brand transition-all active:scale-95"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative group">
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-6 pt-10 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all peer text-white font-medium resize-none"
                placeholder=" "
              ></textarea>
              <label className="absolute left-6 top-7 text-[10px] font-black uppercase tracking-widest text-zinc-500 pointer-events-none transition-all peer-focus:top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-4">
                Tell us about the project
              </label>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-7 bg-brand text-black font-black uppercase text-xs tracking-[0.4em] hover:bg-white transition-all shadow-2xl shadow-brand/20 rounded-full mt-6"
            >
              Submit Project
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
