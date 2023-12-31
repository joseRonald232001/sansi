import React from "react";
import NavPrincUm from "../components/navPrincUm";
import NavPrinc from "../components/NavPrinc";
import Bienv from "../components/Bienv";
import NavSecond from "../components/NavSecond";
import Footer from "../components/Footer";
import ContentIUmss from "../components/ContentIUmss";

const Umss = () => {
  return (
    <>
      <NavPrincUm />
      <NavPrinc />
      <Bienv color={"1"}/>
      <ContentIUmss/>
      <NavSecond color={"1"} />
      <Footer />
    </>
  );
};

export default Umss;
