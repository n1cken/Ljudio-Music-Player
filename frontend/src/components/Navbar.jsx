import React, { useState } from 'react'
import Hamburgermenu from "../assets/svgFiles/bars-solid.svg";
import '../styles/NavBar.css';
const initValue = false;

function Navbar(props) {
  const [status, setStatus] = useState(initValue);
  return (

    <div className="hamburgerDiv">
      <button type="button" src={Hamburgermenu} alt="menu" className="Hamburgermenu" onClick={() => setStatus(!status)} />
      <p className="hamburgerItems" onClick={() => setStatus(!status)}>{status && props.children}</p>
    </div>


  )
}

export default Navbar
