import React, { useState } from 'react'
import "./Nav.css"

function Nav() {

  const [dropDown, setDropDown] = useState(false)

  return (
    <nav className={dropDown ? "dropDownNav" : ""}>
        <button 
          className='button-menu'
          onClick={() => {setDropDown(!dropDown)}} 
        >
          <img src={dropDown ? './x.png' : './hamb.png'} alt='Botão Menu' style={{width: dropDown ? "27px" : "35px"}}/>
        </button>
        <button className={dropDown ? "dropDownButton" : ""}>Home</button>
        <button className={dropDown ? "dropDownButton" : ""}>Cadeiras</button>
        <button className={dropDown ? "dropDownButton" : ""}>Sugestão Ergonomia</button>
        <button className={dropDown ? "dropDownButton" : ""}>botao</button>
    </nav>
  )
}

export default Nav
