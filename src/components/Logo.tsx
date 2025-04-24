import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center mb-2">
      <div className="w-24 h-24 mb-2">
        <img
          src="/lovable-uploads/96ae12cc-c715-435f-b938-932281b82edd.png"
          alt="Moboyit Logo"
          className="w-full h-full object-contain"
        />
      </div>
      {/* <div className="text-white tracking-[0.5em] text-2xl font-light mt-4">
        M O B O Y I T
      </div> */}
    </div>
  );
};

export default Logo;
