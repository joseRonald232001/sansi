import React from "react";
import UniversityIcon from "../icons/UniversityIcon";
import arrHome from "../pictures/arrHome.png";
import avisoof from "../pictures/avisoof.png";
const AccorHome = () => {
  const link = [
    { icon: <UniversityIcon />, name: "Enlaces Unidades UMSS" },
    { icon: <UniversityIcon />, name: "Servicios en-linea UMSS" },
    { icon: <UniversityIcon />, name: "Teléfonos y Correos Importantes" },
    { icon: <UniversityIcon />, name: "Facultades UMSS" },
    { icon: <UniversityIcon />, name: " Otras Universidades" },
    { icon: <UniversityIcon />, name: "Otros Enlaces" },
  ];

  return (
    <div>
      <button className="linkHome">
        <img className="flech" src={arrHome} alt="" />
        <UniversityIcon /> Avisos
      </button>
      <div className="aviss">
        <img src={avisoof} alt="" />
      </div>

      {link.map((link) => (
        <button className="linkHome" key={link.name}>
          <img className="flech" src={arrHome} alt="" />
          {link.icon}
          {link.name}
        </button>
      ))}
    </div>
  );
};

export default AccorHome;
