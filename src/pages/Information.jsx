import React from 'react';

const Information = () => {
  return (
    <div className="pt-16 flex flex-col h-screen">
      <div className="flex h-1/2 border-b border-white">
        <div className="w-2/5 border-r border-white p-4">Top Left</div>
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