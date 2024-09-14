// PagPerfil.js
import React, { useEffect, useRef, useState } from 'react';
import ServicoUsuario from '../../services/servico-usuario'
import Header from '../../components/header/Header';
import './PagPerfil.css';
import ScrollComponent from '../../components/scroll/ScrollComponent';



function PagPerfil() {

  const [inputNome, setInputNome] = useState("")
  const [inputTelefone, setInputTelefone] = useState("")
  const [inputEmail, setInputEmail] = useState("")

  const [campoNomeDesabilitado, setCampoNomeDesabilitado] = useState(true)
  const [campoTelefoneDesabilitado, setCampoTelefoneDesabilitado] = useState(true)

  useEffect(() => {
    const usuarioLogado = ServicoUsuario.pegaUsuarioLogado()
    if (usuarioLogado) {
      setInputNome(usuarioLogado.nome)
      setInputTelefone(usuarioLogado.telefone)
      setInputEmail(usuarioLogado.email)
    }

  }, [])


  function atualizaPerfil(campo, valor) {
    //Colocar a requisição para o banco depois
  }

  return (
    <>
      <Header />
      <section className='body'>

        <div className='lado-esquerdo'>
          <h2 className='Titulo'>Meu perfil</h2>
          <div className='botoesEditar'>
            <div className='alinharBotoes'>
              <p className='nome'>Nome:</p>
              <div className='checkEedit'>
                <input className='inpNome' onChange={e => setInputNome(e.target.value)} value={inputNome} disabled={campoNomeDesabilitado} />
                {!campoNomeDesabilitado && (
                  <button className='check'><img src="./check.png" alt="Check" onClick={() => {
                    atualizaPerfil("nome", inputNome)
                    setCampoNomeDesabilitado(true)
                  }} /></button>
                )}
                {campoNomeDesabilitado && (<button className='lapis' onClick={() => setCampoNomeDesabilitado(false)}><img src="./lapis.png" alt="Edit" /></button>
              )}
              </div>
            </div>
            <div className='alinharBotoes'>
              <p className='nome'>Nº de telefone:</p>
              <div className='checkEedit'>
                <input className='inpNome' onChange={e => setInputTelefone(e.target.value)} value={inputTelefone} disabled={campoTelefoneDesabilitado} />
                {!campoTelefoneDesabilitado && (
                  <button className='check'><img src="./check.png" alt="Check" onClick={() => {
                    atualizaPerfil("telefone", inputTelefone)
                    setCampoTelefoneDesabilitado(true)
                  }} /></button>
                )}
                {campoTelefoneDesabilitado && (
                  <button className='lapis' onClick={() => setCampoTelefoneDesabilitado(false)}><img src="./lapis.png" alt="Edit" /></button>
                  )}
              </div>
            </div>
            <div className='alinharBotoes'>
              <p className='email'>Email:</p>
              <input className='inpEmail' onChange={e => setInputEmail(e.target.value)} value={inputEmail} disabled />
            </div>
          </div>
        </div>
        <div className='lado-direito'>
          <h2 className='Titulo'>Vistos recentemente:</h2>
          <ScrollComponent />
        </div>

      </section>
    </>
  );
}

export default PagPerfil;




