import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="mt-auto flex  text-black dark:text-white  mb-[35px] gap-6 flex flex-col ">
      <hr />
      <div className="flex hero-card max-w-[50px] pr-[20px] mb-2">
        <img src={logo} className="" alt="logo" />
        <h2 className="font-bold ml-3 text-lg">MusikMintr</h2>
      </div>
      <small className=" ">
        Developed by Ricardo Cortes-
        <a rel="stylesheet" href="http://cortesdev.de">
          cortesdev.de
        </a>
      </small>
    </div>
  );
};

export default Footer;
