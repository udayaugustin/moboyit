
import React from "react";
import { Link } from "react-router-dom";

const AuthButtons = () => {
  return (
    <div className="flex flex-col items-center space-y-0 text-white">
      <Link to="/register" className="hover:text-cyan-400 transition-colors duration-200">
        <span className="text-xs uppercase tracking-wider"><span className="text-lg">R</span>EGISTER</span>
      </Link>
      <Link to="/signin" className="hover:text-cyan-400 transition-colors duration-200">
        <span className="text-xs uppercase tracking-wider"><span className="text-lg">S</span>IGN <span className="text-lg">I</span>N</span>
      </Link>
    </div>
  );
};

export default AuthButtons;
