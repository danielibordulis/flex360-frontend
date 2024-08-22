import React from 'react';
import './PagCadastro.css';

export default function PagCadastro() {
  return (
    <section className='body'>
      <div className='container-cadastro'>

        <div className='imagem-cadastro'>
          <img src='./foto-cadastro.jpg' alt='Imagem de Cadastro' />
        </div>

        <div className='formulario-cadastro'>
          <h1 className='titulo'>Cadastrar</h1>

          <form>
            <div className='grupo-input'>
              <label>Nome</label>
              <input type='text' name='nome' />
            </div>
            <div className='grupo-input'>
              <label>Senha</label>
              <input type='password' name='senha' />
            </div>
            <div className='grupo-input'>
              <label>Confirmar Senha</label>
              <input type='password' name='confirmarSenha' />
            </div>
            <div className='grupo-input'>
              <label>Email</label>
              <input type='email' name='email' />
            </div>
            <button className='btn-cadastrar'>Cadastrar</button>

          </form>
         

        </div>
      </div>
      
    </section>
  );
}


