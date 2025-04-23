
import React from 'react';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import AuthButtons from '@/components/AuthButtons';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Navbar />
      
      <div className="flex-1 relative pb-16 px-4">
        {/* Top section with buttons and logo */}
        <div className="w-full flex justify-between items-center mt-16">
          <div className="flex-1">
            <AuthButtons />
          </div>
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
          <div className="flex-1 flex justify-end">
            <AboutSection />
          </div>
        </div>
        
        {/* Main Robot Image */}
        <div className="mt-8 mb-0">
          <img 
            src="/lovable-uploads/e0d83103-f4f1-4e6d-8186-6446740eb0b8.png" 
            alt="Moboyit Robots Collection" 
            className="max-w-4xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
