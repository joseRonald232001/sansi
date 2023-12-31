import React from 'react';
import NavSecond from '../components/NavSecond';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import NavPrinc from '../components/NavPrinc';

const Inscripcion = () => {

  const nav = [
    { name: "ESTUDIANTES", to: "/init" },
    { name: "Info.Biografica" },
    { name: "Info.Academico" },
    { name: "Tramites" },
    { name: "Reg.Bio/Form/IDH" },
    { name: "inscripcion" ,to:"/estudiantess" },
  ];
    return (
        <div >
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
      <div class="nameK">
        <div class="icon icon2">
          <svg fill="currentColor" viewBox="0 0 512 512">
            <path d="M423.309 291.025L402.221 285C431.798 243.89 436 202.294 436 180 436 80.649 355.484 0 256 0 156.649 0 76 80.516 76 180c0 22.299 4.198 63.884 33.779 105l-21.088 6.025C21.28 310.285 0 371.59 0 408.605v25.681C0 477.138 34.862 512 77.714 512h356.571C477.138 512 512 477.138 512 434.286v-25.681c0-36.247-20.725-98.161-88.691-117.58zM256 48c72.902 0 132 59.099 132 132s-59.098 132-132 132-132-59.099-132-132S183.098 48 256 48zm208 386.286c0 16.41-13.304 29.714-29.714 29.714H77.714C61.304 464 48 450.696 48 434.286v-25.681c0-33.167 21.987-62.316 53.878-71.427l46.103-13.172C162.683 335.058 200.427 360 256 360s93.317-24.942 108.019-35.994l46.103 13.172C442.013 346.29 464 375.438 464 408.605v25.681z"></path>
          </svg>
        </div>{" "}
        SUMAYA ESTEFANIA IRAIZPS GARCIA
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

      <div className='j'>
      <p>
        Esta {"{o estuvo}"} registrado en el o los siguientes de Estudio.Seleccione el Plan y la gestion para poder ver su estado de inscripcion.
      </p>
      <br />

      <p>
      plan de Estudios:
      </p>
      <input className='inputg' type="text" placeholder='039503 - LIC.EN MEDICINA VETERINARIA Y ZOOTECNIA' />

      <p>
        Año:
      </p>
      <input className='inputg' type="text" placeholder='2023' />
      <p>
        Periodo
      </p>

      <input className='inputg' type="text" placeholder='1 - Primer Semestre' />
       
       <button className='l'>
       <FontAwesomeIcon icon={faMagnifyingGlass} />
       Ver estado de inscripcion
       </button>

      
      </div>
<br />
<br />
        
         

            <NavSecond color={"1"} />
            <Footer/>
            
        </div>
    );
};

export default Inscripcion;