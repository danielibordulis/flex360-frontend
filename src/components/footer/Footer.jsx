import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='fimDaPagina'>
      <div className='icones'>
        <button className='estiloBotoes'><img src="./localizacao.png" alt="icone de localização"/></button>
        <button className='estiloBotoes'><img src="./emailicon.png" alt="icone de email"/></button>
        <button className='estiloBotoes'><img className= "imgInsta" src="./instagramicon.png" alt="icone do instagram"/></button>
      </div>
    </div>
  )
}

export default Footer
