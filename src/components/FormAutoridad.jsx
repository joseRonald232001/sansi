import React from "react";
import autoridad from "../pictures/autoridad.png";
import UserIcon from "../icons/UserIcon";
import IconLlav from "../icons/IconLlav";
import code from '../pictures/code.png'
import IconMano from '../icons/IconMano'
import buttonAu from '../pictures/buttonAu.png'
const FormAutoridad = () => {
  return (
    <div className="formAuto">
      <img src={autoridad} alt="" />

      <div className="boxAuto">
        <UserIcon />
        <p>Autoridad</p>

        <input type="text" />
      </div>

      <div className="boxAuto">
        <IconLlav />
        <p>Contraseña</p>
        <input type="text" />
      </div>

      <div className="boxCode">
        <img src={code} alt="img" />
        <p>Copie el código que aparece en la imagen de la izquierda</p>

      </div>

      <div className="boxAuto">
        <IconMano/>
        <p>Codigo</p>
        <input type="text" />
      </div>
      <div className="buttonau">
        <img src={buttonAu} alt="" />
      </div>
    </div>
  );
};

export default FormAutoridad;
