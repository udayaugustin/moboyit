
import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center space-y-0 text-white">
      <Link to="/about" className="hover:text-cyan-400 transition-colors duration-200">
        <span className="text-xs uppercase tracking-wider"><span className="text-lg">A</span>BOUT</span>
      </Link>
      <Link to="/about" className="hover:text-cyan-400 transition-colors duration-200">
        <span className="text-xs uppercase tracking-wider"><span className="text-lg">M</span>OBOYIT</span>
      </Link>
    </div>
  );
};

export default AboutSection;
