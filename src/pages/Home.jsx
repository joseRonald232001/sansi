import React from "react";
import NavHome from "../components/NavHome";
import NavPrinc from "../components/NavPrinc";
import Bienv from "../components/Bienv";
import ContentHome from "../components/ContentHome";
import NavSecond from "../components/NavSecond";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavHome />
      <NavPrinc />
      <Bienv color={"1"} />
      <ContentHome />
      <br />
      <br />
      <NavSecond color={"1"} />

      <Footer />
    </div>
  );
};

export default Home;
