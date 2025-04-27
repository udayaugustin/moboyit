
import React from "react";
import { Link } from "react-router-dom";

const AuthButtons = () => {
  return (
    <div className="flex flex-col items-center space-y-0 text-white">
      <Link to="/register" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
        REGISTER
      </Link>
      <Link to="/signin" className="hover:text-cyan-400 transition-colors duration-200 text-sm">
        SIGN IN
      </Link>
    </div>
  );
};

export default AuthButtons;
