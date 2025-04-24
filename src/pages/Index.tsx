import React from "react";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import AuthButtons from "@/components/AuthButtons";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4">
        {/* Logo and Buttons Section */}
        <div className="container mx-auto max-w-2xl flex items-center justify-center gap-8 mb-8">
          <AuthButtons />
          <Logo />
          <AboutSection />
        </div>
        <div className="text-white tracking-[0.5em] text-2xl font-light mb-8">
          M O B O Y I T
        </div>
        {/* Main Robot Image */}
        <div className="flex-1 flex items-center justify-center max-h-[50vh]">
          <img
            src="/lovable-uploads/e0d83103-f4f1-4e6d-8186-6446740eb0b8.png"
            alt="Moboyit Robots Collection"
            className="max-w-4xl w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
