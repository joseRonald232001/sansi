import React from "react";
import ChevronCircleLeftIcon from "../icons/ChevronCircleLeftIcon";
import HomeIcon from "../icons/HomeIcon";
import SyncIcon from "../icons/SyncIcon";
import AnotherCustomPathIcon from "../icons/AnotherCustomPathIcon";
import CustomArrowButt from "../icons/CustomArrowButt";
import CustomImpress from "../icons/CustomImpress";

const NavSecond = ({ color }) => {
  const navigateHome = [
    { id: "1", icon: <ChevronCircleLeftIcon /> },
    { id: "5", icon: <HomeIcon /> },
    { id: "6", icon: <SyncIcon /> },
    { id: "2", icon: <AnotherCustomPathIcon /> },
    { id: "4", icon: <CustomArrowButt /> },
    { id: "3", icon: <CustomImpress /> },
  ];

  return (
    <div
      style={{
        background: color == "1" ? "#215f88" : color == "2" ? "#336633" :color==3?"#005E69":color=="4"?"#690057":"",
      }}
    >
      <section className="navSecond">
        {navigateHome.map((icon) => (
          <div key={icon.id}>{icon.icon}</div>
        ))}
      </section>
    </div>
  );
};

export default NavSecond;
