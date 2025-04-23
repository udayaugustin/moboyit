
import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex space-x-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-1 w-1 bg-cyan-400 rounded-full" />
        ))}
      </div>
      <div className="w-24 h-24 mb-2">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="fill-white">
          <polygon points="50,0 95,25 95,75 50,100 5,75 5,25" fill="none" stroke="white" strokeWidth="2" />
          <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="white" strokeWidth="2" />
          <polygon points="50,40 65,47.5 65,62.5 50,70 35,62.5 35,47.5" fill="none" stroke="white" strokeWidth="2" />
          <rect x="48" y="50" width="4" height="10" fill="#FFB830" />
        </svg>
      </div>
      <div className="text-white tracking-[0.5em] text-2xl font-light mt-4">
        M O B O Y I T
      </div>
    </div>
  );
};

export default Logo;
