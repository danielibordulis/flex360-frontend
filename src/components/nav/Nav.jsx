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
          aria-expanded={dropDown}
        >
          <img src={dropDown ? './x.png' : './hamb.png'} alt='Menu' style={{width: dropDown ? "27px" : "35px"}}/>
        </button>
        <button className={dropDown ? "dropDownButton" : ""} onClick={() => irPara("")}>Home</button>
        <button className={dropDown ? "dropDownButton" : ""} onClick={() => irPara("cadeiras")}>Cadeiras</button>
        <button className={dropDown ? "dropDownButton" : ""} onClick={() => irPara("acessorios")}>Acessorios</button>
        <button className={dropDown ? "dropDownButton" : ""} onClick={() => irPara("ergonomia")}>Sugestão Ergonômica</button>
    </nav>
  )
}

export default Nav
