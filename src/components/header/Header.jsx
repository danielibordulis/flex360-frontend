import React, { useState } from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import Nav from '../nav/Nav'

function Header() {
  // Estado para controlar se o menu está visível e se o usuário está logado
  const [menuVisivel, setMenuVisivel] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(false); // Defina como true se o usuário estiver logado
  const navigate = useNavigate();
  
  // Função para alternar a visibilidade do menu
  const alternarMenu = () => {
    setMenuVisivel(!menuVisivel);
  };
  
  function irPara(destino) {

        navigate(`/${destino}`)
    
  }

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

                <button onClick={alternarMenu}>
                    <img alt='Imagem do botão perfil' src='./perfil.png' className='botao-perfil'/>
                </button>
                <button onClick={() => irPara("carrinho")}>
                    <img alt='Imagem do botão carrinho' src='./carrinho.png' className='botao-carrinho'/>
                </button>
            </div>
            {/* Menu que aparece ao clicar no botão de perfil */}
            {menuVisivel && (
              <div className='menu-perfil'>
                {!usuarioLogado ? (
                  <button onClick={() => alert('Entrar')}>Entrar</button>
                ) : (
                  <>
                    <button onClick={() => alert('Meu Perfil')}>Meu Perfil</button>
                    <button onClick={() => setUsuarioLogado(false)}>Sair</button>
                  </>
                )}
              </div>
            )}
        </header>
        <Nav />
    </>
  )

}

export default Header;

