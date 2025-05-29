import React from "react";
import { getImagePath } from "@/utils/paths";

const Logo = () => {
  return (
    <div className="flex flex-col items-center mb-2">
      <div className="mb-2">
        <img
          src={getImagePath("lovable-uploads/logo.png")}
          alt="Moboyit Logo"
          className="w-full h-full object-contain"
        />
      </div>      
    </div>
  );
};

export default Logo;
