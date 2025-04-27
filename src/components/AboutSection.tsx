
import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center space-y-0 text-white">
      <Link to="/about" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
        ABOUT
      </Link>
      <Link to="/about" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
      MOBOYIT
      </Link>
    </div>
  );
};

export default AboutSection;
