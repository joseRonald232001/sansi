import React from "react";
import NavPrinc from "../components/NavPrinc";
import Bienv from "../components/Bienv";
import NavSecond from "../components/NavSecond";
import Footer from "../components/Footer";
import fpost from '../pictures/fpost.png'
import po1 from '../pictures/po1.png'
import po22 from '../pictures/po22.png'
const Postulantes = () => {
  return (
    <>
      <div className="linePost"></div>
      <NavPrinc />
      <Bienv color={"1"} />


      

      <section className="sectionPost">

        <div className="kk">
          <img src={fpost} alt="img" />
          <img src={po1} alt="img" className="m" />
          <img src={po22} alt="img" className="m" />

        </div>
      



      </section>



      <NavSecond color={"1"} />

      <Footer />
    </>
  );
};

export default Postulantes;
