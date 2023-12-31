import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tower from "../icons/tower";
import UserCircleIcon from "../icons/UserCircleIcon";
import bur from "../pictures/bur.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigateArray = [
    { name: "INICIO", navigate: "/" },
    { name: "UMSS", navigate: "/umss" },
    { name: "AUTORIDADES", navigate: "/autoridades" },
    { name: "DOCENTES", navigate: "/docente" },
    { name: "ESTUDIANTES", navigate: "/estudiantes" },
    { name: "USR-SIS", navigate: "/usr" },
    { name: "POSTULANTES", navigate: "/postulantes" },
  ];

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img
              src={bur}
              alt="icon"
              className="bur"
              onClick={() => setIsOpen(!isOpen)}
            />
            <h1>WEBSISS</h1>
          </div>

          <nav className={isOpen ? "navViss" : "navHidden"}>
            <ul>
              {navigateArray.map((page) => (
                <li key={page.name}>
                  <Link to={page.navigate}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={isOpen ? "clickIcons" : "clickIcons2"}>
            <Tower />
            <UserCircleIcon />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
