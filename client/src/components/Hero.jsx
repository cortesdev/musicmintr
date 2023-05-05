import React from "react";
import { logo } from "../assets";

export const Hero = () => {
  return (
    <div className="relative hero flex flex-wrap mt-[15px]">
      <div className="hero-card max-w-[190px] pr-[20px]">
        <img src={logo} className="" alt="logo" />
      </div>

      <div className=" text-white mt-[20px] gap-[26px]">
        <h1 className="  text-[60px]">MusikMintr</h1>
        <p>
          The first music crowdfunding that mint funds for supporting musicians.
        </p>
      </div>
      <div
        className="
            p-2
            text-center 
            color-[#fff]
            bg-[#3bf97d]
            rounded-xl
            absolute
            right-3
            top-3
          "
      >
        ⦿ testnet
      </div>
    </div>
  );
};
