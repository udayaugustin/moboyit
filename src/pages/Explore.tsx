
import React from 'react';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

const Explore = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl mb-4">Explore</h1>
        <p className="text-gray-400">Coming soon...</p>
      </div>
    </div>
  );
};

export default Explore;
