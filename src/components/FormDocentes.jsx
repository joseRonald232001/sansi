import React, { useState } from "react";

import aviso from "../pictures/aviso.png";
import aviso2 from "../pictures/aviso2.png";
import formDoc from '../pictures/formDoc.png'
import UserIcon from "../icons/UserIcon";
import IconLlav from "../icons/IconLlav";
import IconMano from "../icons/IconMano";
import buttonDoc from '../pictures/buttonDoc.png'
import code2 from '../pictures/code2.png'
import arrHome from '../pictures/arrHome.png'
const FormDocentes = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <section className="sectionDocCON">
        <section>
          <div className="formDocente">
            <img src={formDoc} alt="" />
        

          <div className="boxDoc">
            <UserIcon/>
            <p>Cuenta</p>
            <input type="text" />
          </div>
          <div className="boxDoc">
            <IconLlav/>
            <p>contraseña</p>
            <input type="text" />
          </div>
          <div className="boxCode2">
        <img src={code2} alt="img" />
        <p>Copie el código que aparece en la imagen de la izquierda</p>

      </div>
          <div className="boxDoc">
            <IconMano/>
            <p>Codigo</p>
            <input type="text" />
          </div>
          <div className="buttonDoc">
            <img src={buttonDoc} alt="" />
          </div>
          </div>
          
        </section>
        
     
        <section className="acorDoc">

        <button onClick={()=>setIsOpen(!isOpen)} >    <img className="flech" src={arrHome} alt="" />Avisos Importantes</button>
          
          {isOpen && (
            <div className="avisos">
              
              <img src={aviso} alt="img" />
              <img src={aviso2} alt="img" />
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default FormDocentes;
