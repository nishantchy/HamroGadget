import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="text-6xl uppercase font-bold flex justify-center items-center py-7">
        <Link to="/">Logo</Link>
      </div>
      <div className="text-center text-1xl">
        Developed By Nishant &copy;LOGO
      </div>
    </div>
  );
};

export default Footer;
