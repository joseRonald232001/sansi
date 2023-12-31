import React from "react";
import NavPrinc from "../components/NavPrinc";
import NavSecond from "../components/NavSecond";
import Footer from "../components/Footer";
import Bienv from "../components/Bienv";
import FormEstu from "../components/FormEstu";
import estu from "../pictures/estu.png";
const Estudiantes = () => {
  return (
    <>
      <div className="lineEstu"></div>
      <NavPrinc />
      <Bienv color={"1"} />
      <section className="sectionFormEs">
        <FormEstu />

        <img src={estu} alt="" />
      </section>
      <NavSecond color={"1"} />
      <Footer />
    </>
  );
};

export default Estudiantes;
