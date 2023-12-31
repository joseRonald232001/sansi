import React from "react";
import NavPrinc from "../components/NavPrinc";
import NavSecond from "../components/NavSecond";
import Footer from "../components/Footer";
import Bienv from "../components/Bienv";
import FormAutoridad from "../components/FormAutoridad";

const Autoridades = () => {
  return (
    <>
      <div className="lineAutori"></div>
      <NavPrinc />
      <Bienv color={"2"}/>
      <section className="sectionFormAuto">
        <FormAutoridad/>

      </section>
      <NavSecond color={"2"} />
      <Footer />
    </>
  );
};

export default Autoridades;
