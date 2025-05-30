
import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="text-white">
      <Link to="/about" className="flex flex-col items-center hover:text-cyan-400 transition-colors duration-200">
        <span className="text-[10px] uppercase tracking-wider block h-[16px]"><span className="text-[16px]">A</span>BOUT</span>
        <span className="text-[10px] uppercase tracking-wider block h-[16px]"><span className="text-[16px]">M</span>OBOYIT</span>
      </Link>
    </div>
  );
};

export default AboutSection;
