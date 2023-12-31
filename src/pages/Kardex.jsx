import React from "react";
import NavPrinc from "../components/NavPrinc";
import UserIcon from "../icons/UserIcon";
import ExclamationIcon from "../icons/ExclamationIcon ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavSecond from "../components/NavSecond";
import Footer from "../components/Footer";

const Kardex = () => {
  const nav = [
    { name: "ESTUDIANTES" , to:"/init" },
    { name: "Info.Biografica" },
    { name: "Info.Academico" },
    { name: "Tramites" },
    { name: "Reg.Bio/Form/IDH" },
    { name: "inscripcion" ,to:"/estudiantess"},
  ];
  return (
    <div>
      <div className="lineKar">
        {nav.map((na) => (
          <div key={na.name} className="boxKar">
            <Link to={na.to}>
              <p className="p">{na.name}</p>
            </Link>
            <span style={{ marginLeft: "auto" }}>|</span>
          </div>
        ))}
      </div>
      <NavPrinc />
      <div className="nameK">
        <UserIcon /> SUMAYA ESTEFANIA IRAIZPS GARCIA
      </div>

      <div className="titleK">
        <ExclamationIcon />
        <p>Kardex</p>
      </div>

      <div className="info">
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          style={{ color: "#139645" }}
          className="iconW"
        />
        <h3 style={{ display: "inline" }}>
          SUMAYA ESTEFANIA IRAIZOS GARCIA (202102085)
        </h3>
        - La imformacion que se presenta es privada . La presentacion en fporma
        impresa electronica o por otro medio de esta imformacion no constittuye
        documento de la Universicdad Mayor de San Simon . Para fines legales,el
        documento debera ser emitido oficialmente por la Universidad Mayor de
        San Simon.
      </div>

      <div className="text3">
        Esta regustrado en el o los siguientes Planes de Estudio. Seleccione uno
        para poder ver su Kardex
        <br />
        plan de Estudios:
      </div>

      <input
        className="ink"
        type="text"
        placeholder="039503 -LIC.EN.MEDICINA VETERINARIA Y ZOOTECNIA"
      />

      <Link to={"/init"}>
        <button className="buK">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Ver Kardex
        </button>
      </Link>
      <br />
      <br />

      <NavSecond color={"1"} />
      <Footer />
    </div>
  );
};

export default Kardex;
