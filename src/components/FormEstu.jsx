import React from "react";
import formEstu from "../pictures/formEstu.png";
import UserIcon from "../icons/UserIcon";
import IconLlav from "../icons/IconLlav";
import CalendarIcon from "../icons/CalendarIcon";
import code3 from "../pictures/code3.png";
import IconMano from "../icons/IconMano";
import buttonEst from "../pictures/buttonEst.png";
import { Link, useNavigate } from "react-router-dom";

const FormEstu = () => {

  const navigate = useNavigate() 

  return (
    <div className="formEstudi">
      <img src={formEstu} alt="" />

      <div className="boxEstu">
        <UserIcon />
        <p>Código SIS</p>
        <input type="text" />
      </div>

      <div className="boxEstu">
        <IconLlav />
        <p>Contraseña</p>
        <input type="text" />
      </div>

      <div className="boxEstuNumber">
        <CalendarIcon />
        <p>
          fecha de <br /> nacimiento
        </p>
        <select className="v" name="" id="">
          <option value="01">1</option>
          <option value="01">2</option>
          <option value="01">3</option>
          <option value="01">4</option>
          <option value="01">5</option>
          <option value="01">6</option>
          <option value="01">7</option>
          <option value="01">8</option>
          <option value="01">9</option>
          <option value="01">10</option>
          <option value="01">11</option>
          <option value="01">12</option>
          <option value="01">13</option>
          <option value="01">14</option>
          <option value="01">15</option>
          <option value="01">16</option>
          <option value="01">17</option>
          <option value="01">18</option>
          <option value="01">19</option>
          <option value="01">20</option>
          <option value="01">21</option>
          <option value="01">22</option>
          <option value="01">23</option>
          <option value="01">24</option>
          <option value="01">25</option>
          <option value="01">26</option>
          <option value="01">27</option>
          <option value="01">28</option>
          <option value="01">29</option>
          <option value="01">30</option>
          <option value="01">31</option>
        </select>
      </div>

      <select name="" id="" className="optionDate v">
        <option value="">1 - Enero</option>
        <option value="">2 - Febrero</option>
        <option value="">3 - Marzo</option>
        <option value="">4 - Abril</option>
        <option value="">5 - Mayo</option>
        <option value="">6 - Junio</option>
        <option value="">7 - Julio</option>
        <option value="">8 - Agosto</option>
        <option value="">9 - Septiembre</option>
        <option value="">10 - Octubre</option>
        <option value="">11 - Noviembre</option>
        <option value="">12 - Diciembre</option>
      </select>

      <select className="optionYear v" name="" id="">
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
        <option value="2001">2001</option>
        <option value="2000">2000</option>
        <option value="1999">1999</option>
        <option value="1998">1998</option>
        <option value="1997">1997</option>
        <option value="1996">1996</option>
        <option value="1995">1995</option>
        <option value="1994">1994</option>
        <option value="1993">1993</option>
        <option value="1992">1992</option>
        <option value="1991">1991</option>
        <option value="1990">1990</option>
        <option value="1989">1989</option>
        <option value="1988">1988</option>
        <option value="1987">1987</option>
        <option value="1986">1986</option>
        <option value="1985">1985</option>
        <option value="1984">1984</option>
        <option value="1983">1983</option>
        <option value="1982">1982</option>
        <option value="1981">1981</option>
        <option value="1980">1980</option>
        <option value="1979">1979</option>
        <option value="1978">1978</option>
        <option value="1977">1977</option>
        <option value="1976">1976</option>
        <option value="1975">1975</option>
        <option value="1974">1974</option>
        <option value="1973">1973</option>
        <option value="1972">1972</option>
        <option value="1971">1971</option>
        <option value="1970">1970</option>
        <option value="1969">1969</option>
        <option value="1968">1968</option>
        <option value="1967">1967</option>
        <option value="1966">1966</option>
        <option value="1965">1965</option>
        <option value="1964">1964</option>
        <option value="1963">1963</option>
        <option value="1962">1962</option>
        <option value="1961">1961</option>
        <option value="1960">1960</option>
        <option value="1959">1959</option>
        <option value="1958">1958</option>
        <option value="1957">1957</option>
        <option value="1956">1956</option>
        <option value="1955">1955</option>
        <option value="1954">1954</option>
        <option value="1953">1953</option>
        <option value="1952">1952</option>
        <option value="1951">1951</option>
        <option value="1950">1950</option>
        <option value="1949">1949</option>
        <option value="1948">1948</option>
        <option value="1947">1947</option>
        <option value="1946">1946</option>
        <option value="1945">1945</option>
        <option value="1944">1944</option>
        <option value="1943">1943</option>
        <option value="1942">1942</option>
        <option value="1941">1941</option>
        <option value="1940">1940</option>
        <option value="1939">1939</option>
        <option value="1938">1938</option>
        <option value="1937">1937</option>
        <option value="1936">1936</option>
        <option value="1935">1935</option>
        <option value="1934">1934</option>
        <option value="1933">1933</option>
        <option value="1932">1932</option>
        <option value="1931">1931</option>
        <option value="1930">1930</option>
        <option value="1929">1929</option>
        <option value="1928">1928</option>
        <option value="1927">1927</option>
        <option value="1926">1926</option>
        <option value="1925">1925</option>
        <option value="1924">1924</option>
        <option value="1923">1923</option>
        <option value="1922">1922</option>
        <option value="1921">1921</option>
        <option value="1920">1920</option>
      </select>

      <div className="code3">
        <img src={code3} alt="" />
        <p>Copie el código que aparece en la imagen de la izquierda</p>
      </div>

      <div className="boxAuto">
        <IconMano />
        <p>Codigo</p>
        <input type="text" />
      </div>

      <div className="boxEstu">
       <Link to={"/kardex"}  >
       <img src={buttonEst} alt="" />
       </Link> 
       
      </div>
    </div>
  );
};

export default FormEstu;
