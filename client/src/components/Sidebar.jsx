import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { logo, sun, moon, logout } from "../assets";
import { navlinks } from "../constants";
import { Switcher } from "./Switcher";
import { Icon } from "./Icon";
import { useDisconnect } from "@thirdweb-dev/react";

const Sidebar = ({ connected, theme, handleThemeSwitch }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon
          styles="w-[52px] h-[52px] bg-[#ccc] dark:bg-[#1c1c24]"
          imgUrl={logo}
        />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#ccc] dark:bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        <Switcher theme={theme} handleThemeSwitch={handleThemeSwitch} />
      </div>
    </div>
  );
};

export default Sidebar;
