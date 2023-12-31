import React from "react";

const navPrincUm = () => {
  const navigateHome = [
    { name: "Disp. Generales" },
    { name: "Historia UMSS" },
    { name: "Cronograma" },
    { name: "Carreras" },
    { name: "Enlaces" },
  ];

  return (
    <div className="navHome">
      <section className="navUmssRes">
        <p> UMSS</p>
        <select className="selectUmss" id="">
          <option value="">UMSS</option>
          <option value="">disp. Generales</option>
          <option value="">Historia UMSS</option>
          <option value="">Cronograma</option>
          <option value="">Carreras</option>
          <option value="">Enlaces</option>
        </select>
      </section>

      {navigateHome.map((icon) => (
        <div key={icon.name} className="box">
          <p>{icon.name} </p> <span>|</span>
        </div>
      ))}
    </div>
  );
};

export default navPrincUm;
