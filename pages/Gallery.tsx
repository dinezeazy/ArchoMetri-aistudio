
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VIDEO_PROJECTS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Architecture' | 'Industrial'>('All');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Filter logic
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return VIDEO_PROJECTS;
    return VIDEO_PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeVideo]);

  return (
    <div className="bg-black text-white selection:bg-brand selection:text-black min-h-screen">
      {/* Page Header */}
      <section className="pt-48 pb-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10"
          >
            <div>
              <span className="bg-brand/10 text-brand px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-6 block w-fit">The Archive</span>
              <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                Visual <br /><span className="text-outline-white italic">Legacies.</span>
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-zinc-500 font-medium text-lg leading-relaxed">
                A curated selection of high-fidelity documentation projects spanning across the Indian subcontinent's industrial and architectural frontiers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 md:top-24 z-30 bg-black/80 backdrop-blur-md border-b border-white/5 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {['All', 'Architecture', 'Industrial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-brand border-brand text-black shadow-[0_0_20px_rgba(169,247,25,0.4)]' 
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group relative"
                >
                  <div className="relative aspect-video overflow-hidden rounded-[3rem] border border-white/5 shadow-2xl bg-zinc-900">
                    {/* Thumbnail */}
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                      <button 
                        onClick={() => setActiveVideo(project.videoUrl)}
                        className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(169,247,25,0.6)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                      >
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-8 left-8">
                      <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-brand">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-8 px-4 flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 group-hover:text-brand transition-colors text-white">
                        {project.title}
                      </h3>
                      <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-sm">
                        {project.description}
                      </p>
                    </div>
                    <span className="text-zinc-800 text-4xl font-black italic tracking-tighter">
                      0{idx + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-10 right-10 text-white z-[110] p-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all"
              onClick={() => setActiveVideo(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="w-full max-w-6xl aspect-video bg-black shadow-[0_0_100px_rgba(169,247,25,0.2)] relative border border-white/10 rounded-[3rem] overflow-hidden"
            >
              <iframe 
                src={`${activeVideo}${activeVideo.includes('?') ? '&' : '?'}autoplay=1`} 
                className="w-full h-full"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" 
                allowFullScreen
              ></iframe>
            </motion.div>
            
            {/* Click outside to close */}
            <div className="absolute inset-0 z-[-1]" onClick={() => setActiveVideo(null)} />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-40 bg-zinc-950 rounded-t-[5rem]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none text-white">
              Capture your <br /><span className="text-brand">Infrastructure.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#/contact"
                className="px-16 py-7 bg-brand text-black font-black uppercase text-xs tracking-[0.4em] hover:bg-white hover:scale-110 transition-all duration-500 rounded-full shadow-[0_20px_50px_rgba(169,247,25,0.2)]"
              >
                Inquire Project
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;