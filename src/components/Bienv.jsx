import React from 'react';

import UserWhite from '../icons/UserWhite';

const Bienv = ({color}) => {
    return (
        <div  style={{background:color=="1"?"#215f88":color=="2"?"#336633":color==3?"#005E69": color=="4"?"#690057":""}} className='bienv'>
          
             <UserWhite/>
            <p>Bienvenido.</p>            
           
        </div>
    );
};

export default Bienv;