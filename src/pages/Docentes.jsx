import React from "react";
import NavPrinc from "../components/NavPrinc";
import Bienv from "../components/Bienv";
import NavSecond from "../components/NavSecond";
import Footer from "../components/Footer";
import FormDocentes from "../components/FormDocentes";

const Docentes = () => {
  return (
    <>
      <div className="lineDocen"></div>
      <NavPrinc />
      <Bienv color={"3"} />
      <section className="sectionFormDoce">
        <FormDocentes />
      </section>
      <NavSecond color={"3"} />
      <Footer />
    </>
  );
};

export default Docentes;
