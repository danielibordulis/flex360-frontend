import React from 'react';
import './PagCadastro.css';

export default function PagCadastro() {
  return (
    <section className='body-cadastro'>

      {/* Div para a imagem de cadastro à esquerda */}
      <div className='imagem-cadastro' />

      <div className='container-cadastro'>

        {/* Div para o formulário de cadastro à direita */}
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

