
import React from 'react';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import AuthButtons from '@/components/AuthButtons';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-between relative">
        {/* Logo Section */}
        <div className="mt-16">
          <Logo />
        </div>
        
        {/* Auth Buttons on left side */}
        <AuthButtons />
        
        {/* About Section on right side */}
        <AboutSection />
        
        {/* Main Robot Image */}
        <div className="mt-8 mb-0">
          <img 
            src="/lovable-uploads/7006a3be-a04a-46ce-a459-1ba86f5a47ba.png" 
            alt="Moboyit Robots Collection" 
            className="max-w-3xl h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

