
import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-24 h-24 mb-2">
        <img 
          src="/lovable-uploads/1e8b0495-84d0-4070-9328-780aff5f927a.png" 
          alt="Moboyit Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-white tracking-[0.5em] text-2xl font-light mt-4">
        M O B O Y I T
      </div>
    </div>
  );
};

export default Logo;

