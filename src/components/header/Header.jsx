import React from 'react'
import "./Header.css"
import Nav from '../nav/Nav'

function Header() {
  return (
    <>
        <header>
            <div className='container-logo'>
                <img className='imagem-logo' alt='Logo' src='./logo-grande.png'/>
            </div>
            <div className='container-search-input'>
                <input placeholder='O que você procura?...'/>
            </div>
            <div className='container-botao-nav'>
                <button>
                    <img alt='Imagem do botão perfil' src='./perfil.png' className='botao-perfil'/>
                </button>
                <button>
                    <img alt='Imagem do botão carrinho' src='./carrinho.png' className='botao-carrinho'/>
                </button>
            </div>
        </header>
        <Nav />
    </>
  )
}

export default Header
