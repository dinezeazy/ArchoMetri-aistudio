
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-6xl font-bold uppercase tracking-tighter mb-8">About ArchoMetri</h1>
          <p className="text-xl text-zinc-500 leading-relaxed">
            Founded by a collective of visual artists and former engineers, ArchoMetri was born 
            from a desire to bridge the gap between technical blueprinting and fine art photography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-0 bg-zinc-200 mb-24">
          <div className="bg-white p-16">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-400 underline decoration-zinc-200 underline-offset-8">The Philosophy</h3>
            <p className="text-lg leading-relaxed text-zinc-800">
              We believe every structure has a story of human ingenuity. Our role is to 
              strip away the noise and let the lines, volumes, and textures speak for themselves. 
              Neutrality is our greatest strength.
            </p>
          </div>
          <div className="bg-white p-16">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-zinc-400 underline decoration-zinc-200 underline-offset-8">The Process</h3>
            <p className="text-lg leading-relaxed text-zinc-800">
              Technology meets craftsmanship. We utilize medium format systems for maximum detail 
              and the latest stabilized cinema rigs for our video work, ensuring that every 
              deliverable is ready for both archival and billboard display.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-400 mb-12">Trusted By Global Firms</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale">
             {/* Mock Partner Logos */}
             <div className="text-2xl font-black uppercase italic">Structure-X</div>
             <div className="text-2xl font-black uppercase">SteelBound</div>
             <div className="text-2xl font-black uppercase tracking-tighter">Urban.LY</div>
             <div className="text-2xl font-black uppercase tracking-widest">ARC-TEC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
