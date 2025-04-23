
import React from "react";
import { Link } from "react-router-dom";

const AuthButtons = () => {
  return (
    <div className="flex flex-col items-center space-y-1 text-white">
      <Link to="/register" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
        Register
      </Link>
      <Link to="/signin" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
        Sign In
      </Link>
    </div>
  );
};

export default AuthButtons;
