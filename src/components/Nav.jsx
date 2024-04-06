import React from 'react';
import NavSearch from './NavSearch.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

function Nav() {

  return (
    <div className="bg-blue-500 flex flex-row justify-center h-12 p-2">
      <div className= "text-white flex space-x-10 text-2xl hover:cursor-pointer">
      <p className= "hover:bg-blue-900">Adopt</p>
      <p className= "hover:bg-blue-900">Services</p>
      <p className= "hover:bg-blue-900">Programs</p>
      <p className="hover:bg-blue-900">Support</p>
      <p className= "hover:bg-blue-900">About</p>
      <p className= "hover:bg-blue-900">Employment</p>
      <button className="bg-green-600 hover:bg-green-500 text-white border border-green-700 rounded px-4 p-0 transition duration-300 ">Donate</button>
      {/* <NavSearch /> */}
      </div>
    </div>
  )
}

export default Nav;