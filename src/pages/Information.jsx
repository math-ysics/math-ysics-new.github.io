import React from 'react';

const Information = () => {
  return (
    <div className="pt-16 flex flex-col h-screen">
      <div className="flex h-1/2 border-b border-white">
        <div className="w-2/5 border-r border-white p-4">
          <p className="leading-relaxed text-gray-200">
            I am a second-year undergraduate student in the Department of Computing + Mathematical Sciences at the California Institute of Technology. My research interests are in automated machine learning, language models, dimensionality reduction, and scientific applications of AI. I also enjoy statistical manifolds, computational physics, and theoretical astrophysics.
          </p>
        </div>
        <div className="w-3/5 p-4 flex items-center justify-center">
          <div className="relative w-full h-full">
            <img 
              src="/images/nemophila-bg.jpg"
              alt="Nemophila flowers background"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex h-1/2">
        <div className="w-3/5 border-r border-white p-4 flex items-center justify-center">
          <div className="relative w-full h-full">
            <img 
              src="/images/sky.jpg"
              alt="Sky background"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="w-2/5 p-4">Bottom Right</div>
      </div>
    </div>
  );
};

export default Information; 