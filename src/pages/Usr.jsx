import React from "react";
import NavPrinc from '../components/NavPrinc'
import Bienv from '../components/Bienv'
import Footer from "../components/Footer";
import NavSecond from "../components/NavSecond";
import usr from '../pictures/usr.png'
const Usr = () => {
  return (
    <>
      <div className="lineUsr"></div>
      <NavPrinc/>
      <Bienv color={"4"} />
      <section className="sectionUsr">

        <img src={usr} alt="" className="bb"/>

      </section>
      <NavSecond color={"4"}/>
      <Footer/>
      
    </>
  );
};

export default Usr;
