
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Ready to start?</span>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              Let's <br /> Build <br /> <span className="text-outline-white">Imagery.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="group">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4 group-hover:text-brand transition-colors">Headquarters</h3>
                <p className="text-zinc-300 leading-relaxed font-light">
                  102 Horizon Towers<br />
                  BKC, Mumbai 400051
                </p>
              </div>
              <div className="group">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4 group-hover:text-brand transition-colors">Direct</h3>
                <p className="text-zinc-300 leading-relaxed font-light">
                  hello@archometri.com<br />
                  +91 98765 43210
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12 bg-zinc-900/30 p-12 border border-white/5 backdrop-blur-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-6">
              <div className="relative group">
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-brand transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-xs font-bold uppercase tracking-widest text-zinc-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4">
                  Full Name
                </label>
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-brand transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-xs font-bold uppercase tracking-widest text-zinc-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4">
                  Email Address
                </label>
              </div>
            </div>
            
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Service Category</label>
              <div className="flex flex-wrap gap-4">
                {['Architecture', 'Industrial', 'Motion'].map((s) => (
                  <button 
                    key={s}
                    type="button"
                    className="px-6 py-2 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:border-brand hover:text-brand transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative group">
              <textarea 
                rows={3}
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-brand transition-colors peer"
                placeholder=" "
              ></textarea>
              <label className="absolute left-0 top-4 text-xs font-bold uppercase tracking-widest text-zinc-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-brand peer-[:not(:placeholder-shown)]:-top-4">
                Project Details
              </label>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-brand text-black font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-brand/10"
            >
              Submit Inquiry
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
