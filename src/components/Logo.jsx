import React from 'react';
import logoImage from '../images/logo.png';

function Logo() {
  return (
    <div className=" bg-gray-100  flex justify-center items-center">
     <img src={logoImage} alt="logo" height="200" width="450" />
      <img src={logoImage} alt="logo" className=" m-10" height="200" width="450" />
     <img src={logoImage} alt="logo" height="200" width="450"/>
    </div>
  )
}

export default Logo;