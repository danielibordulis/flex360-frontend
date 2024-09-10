// PagPerfil.js
import React, { useEffect, useState } from 'react';
import ServicoUsuario from '../../services/servico-usuario'
import Header from '../../components/header/Header';
import './PagPerfil.css';
import ScrollComponent from '../../components/scroll/ScrollComponent';



function PagPerfil() {

  const [inputNome, setInputNome] = useState("")
  const [inputTelefone, setInputTelefone] = useState("")
  const [inputEmail, setInputEmail] = useState("")

  useEffect(() => {
    const usuarioLogado = ServicoUsuario.pegaUsuarioLogado()
    console.log(usuarioLogado)
    if(usuarioLogado) {
    setInputNome(usuarioLogado.nome)
    setInputTelefone(usuarioLogado.telefone)
    setInputEmail(usuarioLogado.email)
    }

}, [])


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
                <input className='inpNome' onChange={e => setInputNome(e.target.value)} value={inputNome} disabled/>
                <button className='check'><img src="./check.png" alt="Check" /></button>
                <button className='lapis'><img src="./lapis.png" alt="Edit" /></button>
              </div>
            </div>
            <div className='alinharBotoes'>
              <p className='nome'>Nº de telefone:</p>
              <div className='checkEedit'>
                <input className='inpNome' onChange={e => setInputTelefone(e.target.value)} value={inputTelefone} disabled/>
                <button className='check'><img src="./check.png" alt="Check" /></button>
                <button className='lapis'><img src="./lapis.png" alt="Edit" /></button>
              </div>
            </div>
              <div className='alinharBotoes'>
                <p className='email'>Email:</p>
                <input className='inpEmail' onChange={e => setInputEmail(e.target.value)} value={inputEmail} disabled/>
              </div>
          </div>  
        </div> 
        <div className='lado-direito'>
          <h2 className='Titulo'>Vistos recentemente:</h2>
           <ScrollComponent/>
        </div>
        
      </section>   
    </>
  );
}

export default PagPerfil;
      
  


