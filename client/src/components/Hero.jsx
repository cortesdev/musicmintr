import React from "react";
import { logo } from "../assets";

export const Hero = () => {
  return (
    <div className="hero flex flex-wrap">
      <div className="hero-card max-w-[190px] pr-[20px]">
        <img src={logo} className="" alt="logo" />
      </div>

      <div className=" text-white   mt-[20px] gap-[26px]">
        <h1 className="  text-[60px]">MusikMint</h1>
        <p>
          The first music crowdfunding that mint crowdfund for supporting
          musicians is live.
        </p>
      </div>
    </div>
  );
};
