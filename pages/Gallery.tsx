
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VIDEO_PROJECTS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Architecture' | 'Industrial'>('All');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredProjects = filter === 'All' 
    ? VIDEO_PROJECTS 
    : VIDEO_PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-40 pb-32 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <div>
            <span className="text-brand text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Motion Portfolio</span>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              The <span className="text-outline-white">Archive.</span>
            </h1>
          </div>
          
          <div className="flex space-x-6 border-b border-white/10 pb-4">
            {['All', 'Architecture', 'Industrial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`text-[10px] font-black uppercase tracking-widest transition-all relative ${
                  filter === cat ? 'text-brand' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div 
                    layoutId="filter-dot"
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(project.videoUrl)}
              >
                <div className="relative aspect-video bg-zinc-900 overflow-hidden border border-white/5">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Custom Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full border border-brand bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <svg className="w-6 h-6 text-brand ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 4l12 8-12 8V4z" />
                      </svg>
                    </motion.div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand mb-1 block">{project.category}</span>
                      <h3 className="text-xl font-bold uppercase tracking-tight">{project.title}</h3>
                    </div>
                    <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                      0{idx + 1} / View Project
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-12"
          >
            <motion.button 
              whileHover={{ scale: 1.1, color: '#A9F719' }}
              className="absolute top-8 right-8 text-white z-50"
              onClick={() => setActiveVideo(null)}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl aspect-video bg-black shadow-[0_0_100px_rgba(169,247,25,0.1)] relative border border-white/10"
            >
              <iframe 
                src={`${activeVideo}?autoplay=1`} 
                className="w-full h-full"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" 
                allowFullScreen
              ></iframe>
              <div className="absolute -bottom-8 left-0 text-brand text-[10px] font-bold uppercase tracking-widest">
                Bunny.net Stream Delivery Network
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
