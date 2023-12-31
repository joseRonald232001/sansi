import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSortDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ChevronCircleLeftIcon from '../icons/ChevronCircleLeftIcon'
import CustomArrowButt from '../icons/CustomArrowButt'
import AnotherCustomPathIcon from '../icons/AnotherCustomPathIcon'
import CustomImpress from '../icons/CustomImpress';
import HomeIcon from '../icons/HomeIcon';
import SyncIcon from '../icons/SyncIcon'

const NavPrinc = () => {
  
   const navigateHome = [
    { id:"1",icon:<ChevronCircleLeftIcon/>},
    { id:"5",icon:<HomeIcon/>},
    {id:"6",icon:<SyncIcon/>},
    { id:"2",icon:<AnotherCustomPathIcon/>},
    { id:"4",icon:<CustomArrowButt/>},
    { id:"3",icon: <CustomImpress/>},


   ] 


  return (
    <div className='navPrinc'>
      <div className='boxBurguerHome'>
        <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff",fontSize:"30px" }} />
        <FontAwesomeIcon icon={faSortDown} style={{color: "#ffffff",}} />
      </div>
      <div className='boxNavHome'>
        {navigateHome.map((nav)=>(
            <div key={nav.id}>
                {nav.icon}
            </div>
        ))}

      </div>
    </div>
  );
};

export default NavPrinc;
