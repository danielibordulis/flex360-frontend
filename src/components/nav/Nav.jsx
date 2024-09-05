import React, { useState } from 'react'
import "./Nav.css"
import { useNavigate } from 'react-router-dom'

function Nav() {

  const [dropDown, setDropDown] = useState(false)
  const navigate = useNavigate();

  function irPara(destino) {

    navigate(`/${destino}`)

  }

  return (
    <nav className={dropDown ? "dropDownNav" : ""}>
        <button 
          className='button-menu'
          onClick={() => {setDropDown(!dropDown)}} 
        >
          <img src={dropDown ? './x.png' : './hamb.png'} alt='Botão Menu' style={{width: dropDown ? "27px" : "35px"}}/>
        </button>
        <button className={dropDown ? "dropDownButton" : ""} onClick={() => irPara("")}>Home</button>
        <button className={dropDown ? "dropDownButton" : ""} onClick={() => irPara("cadeiras")}>Cadeiras</button>
        <button className={dropDown ? "dropDownButton" : ""} onClick={() => irPara("ergonomia")}>Sugestão Ergonômica</button>
        <button className={dropDown ? "dropDownButton" : ""} onClick={() => irPara("")}>Botão</button>
    </nav>
  )
}

export default Nav
