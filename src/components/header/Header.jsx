import React, { useState } from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import Nav from '../nav/Nav'

function Header() {
  const [menuVisivel, setMenuVisivel] = useState(false);
  const [usuarioLogado, setUsuarioLogado] = useState(false); // Defina como true se o usuário estiver logado
  const navigate = useNavigate();
  
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
                <img className='imagem-logo' src='./logo-grande.png' alt='Logo FLEX360. O logo mostra um bonequinho da cor preta sentado em uma cadeira, com a palavra "Flex360" escrita à direita, em vermelho.'/>
            </div>
            <div className='container-search-input'>
                <input placeholder='O que você procura?...'/>
            </div>
            <div className='container-botao-nav'>

                <button onClick={alternarMenu} aria-expanded={menuVisivel}>
                    <img alt='Perfil' src='./perfil.png' className='botao-perfil'/>
                </button>
                <button onClick={() => irPara("carrinho")}>
                    <img alt='Visualizar carrinho' src='./carrinho.png' className='botao-carrinho-header'/>
                </button>
            </div>
            {menuVisivel && (
              <div className='menu-perfil'>
                {!usuarioLogado ? (
                  <button onClick={() => navigate('/entrar')}>Entrar</button>
                ) : (
                  <>
                    <button onClick={() => navigate('/perfil')}>Meu Perfil</button>
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

