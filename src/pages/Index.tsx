import React from "react";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="w-full max-w-[960px] mx-auto flex flex-col min-h-screen bg-black overflow-hidden">
      <Navbar />

      <div className="w-full max-w-[960px] mx-auto  flex items-center justify-center">        
        {/* Main Robot Image */}
        <div className="flex items-center justify-center">
          <img
            src="/lovable-uploads/e0d83103-f4f1-4e6d-8186-6446740eb0b8.png"
            alt="Moboyit Robots Collection"
            className="mt-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
