import React from 'react';
import bg_mobile from "../images/bg-sidebar-mobile.svg";

const Top = () => {
  return (
    <div className="desktop md:w-1/3 md:m-4 md:rounded-md">      
        <div className="w-full absolute -z-10 object-cover bg-white overflow-hidden
        md:relative ">
            <img src={bg_mobile} alt="" className="w-screen md:hidden" />
          </div>
    </div>
  )
}

export default Top;