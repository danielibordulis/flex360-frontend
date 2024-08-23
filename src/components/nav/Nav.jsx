import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <nav>
        <button>Home</button>
        <button>Cadeiras</button>
        <button>Sugestão Ergonomia</button>
        <button>botao</button>
        <button className='button-menu'>
          <img src='./hamb.png' alt='Botão Menu'/>
        </button>
    </nav>
  )
}

export default Nav
