import React from "react";

const NavHome = () => {
  const navigateHome = [
    { name: "INICIO" },
    { name: "Introducción" },
    { name: "Noticias" },
    { name: "Sugerencias" },
    { name: "Acerca de la UPSI" },
  ];

  return (
    <div className="navHome">
      <section className="navHomeRes">
        <p> INICIO</p>
        <select className="selectHome" id="">
          <option value="">INICIO</option>
          <option value="">Introducción</option>
          <option value="">Noticias</option>
          <option value="">Sugerencias</option>
          <option value="">Acerca de la UPSI</option>
        </select>
      </section>





        {navigateHome.map((nav) => (
          <div className="box" key={nav.name}>
      
            <p>{nav.name} </p> <span>|</span>
          </div>
        ))}
    
    
    </div>
  );
};

export default NavHome;
