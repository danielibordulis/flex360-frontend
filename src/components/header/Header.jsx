import React, { useState } from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import Nav from '../nav/Nav'

function Header() {
  const navigate = useNavigate();
  const [campoBusca, setCampoBusca] = useState("")
  
  function fazerBusca(e) {
    if(e.charCode === 13) {
      
    }
  }

  const alternarMenu = () => {

    const token = localStorage.getItem('token')

    // se for preciso, validar o token aqui

    if (token) {
      navigate("/perfil")
    } else {
      navigate("/entrar")
    }
  
  };
  
  function irPara(destino) {

        navigate(`/${destino}`)
    
  }

  return (
    <>
        <header>
            <div className='container-logo'>
                <img className='imagem-logo' src='./logo-grande.png' alt='Logo FLEX360. O logo mostra um bonequinho da cor preta sentado em uma cadeira, com a palavra "Flex360" escrita à direita, em vermelho.'/>
            </div>
            <div className='container-search-input'>
                <input placeholder='O que você procura?...' onChange={e => setCampoBusca(e.target.value)} value={campoBusca} onKeyPress={ fazerBusca} />
            </div>
            <div className='container-botao-nav'>

                <button onClick={alternarMenu}>
                    <img alt='Perfil' src='./perfil.png' className='botao-perfil'/>
                </button>
                <button onClick={() => irPara("carrinho")}>
                    <img alt='Visualizar carrinho' src='./carrinho.png' className='botao-carrinho-header'/>
                </button>
            </div>
        </header>
        <Nav />
    </>
  )

}

export default Header;

