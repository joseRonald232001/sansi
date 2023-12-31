import React from "react";
import AccorHome from "./accorHome";

const ContentHome = () => {
  return (
    <div className="containerContentHome">
      <section className="textHome">
        <br />
        <br />
        <div className="sectionImgHome">
          <img src="https://websis.umss.edu.bo/imagenes/serv_ini.jpg" alt="" />
          <br />
          <p>
            Bienvenidos a la nueva versión 7.08.TNT del{" "}
            <span className="homeTitle">webSISS.</span>
            <span className="homeTitle2">umss.edu.bo </span>
          </p>
        </div>
        <div>
            <br />
          <p>
            La versión 7.08.TNT del webSISS.umss.edu.bo (Sistema de Información
            San Simón) incluye múltiples mejoras para brindar un mejor servicio
            a las autoridades, estudiantes y docentes de la UMSS. Las
            principales nuevas caracteristicas son:
          </p>
          <br />
          <ul>
            <li>Nuevo Diseño Web Responsivo para dispositivos móviles.</li>
            <li>Mayor seguridad.</li>
            <li>
              Posibilidad de que los Estudiantes puedan cambiar su contraseña
            </li>
            <li>
            Posibilidad de que los Estudiantes reciban sus códigos de inscripción en su cuenta de correo electrónico considerando el cronograma de inscripciones.
            </li>
            <li>
              considerando el cronograma de inscripciones. Rediseño y mejoras en
              el proceso de inscripciones de los Estudiantes.
            </li>
          </ul>
        </div>

        <br />
        <p >
        Cualquier sugerencia por favor haganosla llegar a traves de la página de{" "}
        <span>sugerencias.</span>
        </p>
    
      </section>

      <section className="accordionHome">
         <AccorHome/>
      </section>
    </div>
  );
};

export default ContentHome;
