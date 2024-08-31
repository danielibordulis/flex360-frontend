// PagPerfil.js
import React from 'react';
import Header from '../../header/Header';
import Nav from '../../nav/Nav';
import './PagPerfil.css';
import ScrollComponent from '../../scroll/ScrollComponent';



function PagPerfil() {
  return (
    <>
      <Header />
      <Nav />
      <section className='body'>

        <div className='lado-esquerdo'>
          <h2 className='Titulo'>Meu perfil</h2>
          <div className='botoesEditar'>
            <div className='alinharBotoes'>
              <p className='nome'>Nome:</p>
              <div className='checkEedit'>
                <input className='inpNome'></input>
                <button className='check'><img src="./check.png" alt="Check" /></button>
                <button className='lapis'><img src="./lapis.png" alt="Edit" /></button>
              </div>
            </div>
            <div className='alinharBotoes'>
              <p className='nome'>Nº de telefone:</p>
              <div className='checkEedit'>
                <input className='inpNome'></input>
                <button className='check'><img src="./check.png" alt="Check" /></button>
                <button className='lapis'><img src="./lapis.png" alt="Edit" /></button>
              </div>
            </div>
              <div className='alinharBotoes'>
                <p className='email'>Email:</p>
                <input className='inpEmail'></input>
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
      
  



