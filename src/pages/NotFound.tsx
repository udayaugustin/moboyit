
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <Logo />
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-4">Page not found</p>
        <Link to="/" className="text-cyan-400 hover:text-cyan-500 underline transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
