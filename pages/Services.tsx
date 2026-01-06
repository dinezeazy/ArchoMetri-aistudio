
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold uppercase tracking-tighter mb-12">Expertise</h1>
          <p className="text-2xl text-zinc-500 leading-relaxed mb-24">
            We provide a comprehensive suite of visual documentation tools for the built environment. 
            From initial site breaks to the final architectural masterpiece.
          </p>
        </div>

        <div className="space-y-32">
          {/* Service 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
                alt="Architecture"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold uppercase tracking-widest">Architectural Photography</h2>
              <p className="text-zinc-600 leading-relaxed">
                Our approach to architecture is rooted in understanding the architect's intent. 
                We use perspective correction lenses and wait for the precise moment when natural light 
                defines the volume of the space.
              </p>
              <ul className="space-y-3 text-sm font-bold uppercase tracking-widest text-zinc-400">
                <li className="flex items-center space-x-3">
                  <span className="w-4 h-[1px] bg-black"></span>
                  <span>Exterior & Facade Documentation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-4 h-[1px] bg-black"></span>
                  <span>Interior Atmosphere Capture</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-4 h-[1px] bg-black"></span>
                  <span>Twilight & Night Photography</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl font-bold uppercase tracking-widest">Industrial Documentation</h2>
              <p className="text-zinc-600 leading-relaxed">
                Industrial sites are environments of organized chaos. We find the beauty in the machinery, 
                the scale of the pipelines, and the precision of the manufacturing line. 
                Our team is fully certified for safety in high-risk zones.
              </p>
              <ul className="space-y-3 text-sm font-bold uppercase tracking-widest text-zinc-400">
                <li className="flex items-center space-x-3">
                  <span className="w-4 h-[1px] bg-black"></span>
                  <span>Time-Lapse Construction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-4 h-[1px] bg-black"></span>
                  <span>Aerial Drone Survey</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-4 h-[1px] bg-black"></span>
                  <span>Asset Cataloguing</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
