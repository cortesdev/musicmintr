import React, { useState } from "react";
import { sun } from "../assets";
import { moon } from "../assets";
import { Icon } from "./Icon";

export const Switcher = ({ theme, handleThemeSwitch }) => {
  return (
    <button type="button" onClick={handleThemeSwitch}>
      <Icon
        styles="bg-[#f1f1f1] dark:bg-[#000]"
        imgUrl={theme === "dark" ? sun : moon}
      />
    </button>
  );
};
