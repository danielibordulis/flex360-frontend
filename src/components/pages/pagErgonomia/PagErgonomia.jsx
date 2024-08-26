import React from 'react';
import Header from '../../header/Header'
import Nav from '../../nav/Nav'
import './PagErgonomia.css';

export default function PagErgonomia() {
  return (
    <div className="pag-ergonomia">
      <Header /> 
      <Nav /> 
      
      <section className="body">
        <div className="container-esquerda">

          <img className="imagem-certificacao" src="./foto-certificacao.png" alt="Certificação" />
          <h1 className="titulo">Encontre sua cadeira ergonômica:</h1>

          <form className="form-ergonomia">

            <label className="titulo" for="altura">Sua altura:</label>
            <input id="altura" type="text" placeholder="Digite sua altura" />

            <label className="titulo" for="peso">Seu peso:</label>
            <input id="peso" type="text" placeholder="Digite seu peso" />

          </form>

          <h2 className="titulo">Estilos De Design:</h2>

          <div className="design-opcoes">
            <p className="opcao-design">Contemporâneo?</p>
            <p className="opcao-design">Minimalista?</p>
            <p className="opcao-design">Clássico?</p>
          </div>

          <button className="botao-encontrar">Encontrar</button>
        </div>

        <div className="container-direita">
          <img className="imagem-ergonomia" src="./foto-ergonomia.png" alt="Ergonomia" />
        </div>
        
      </section>
    </div>
  );
}
