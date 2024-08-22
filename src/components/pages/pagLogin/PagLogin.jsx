import React from 'react';
import './PagLogin.css';

export default function PagLogin() {
  return (
    <section className='body'>
      <div className='container-login'>
        <div className='formulario-login'>

          <img src='./logo-correta.png' alt='Logo Flex360' className='logo' />
          
          <h1 className='titulo'>Entrar</h1>

          <form>
            <div className='grupo-input'>
              <label>Email</label>
              <input type='email' name='email' />
            </div>
            <div className='grupo-input'>
              <label>Senha</label>
              <input type='password' name='senha' />
            </div>
            <div className='grupo-checkbox'>
              <input type='checkbox' id='lembrar' />
              <label htmlFor='lembrar'>Lembrar de mim</label>
            </div>
            <button className='btn-entrar'>Entrar</button>
          </form>

          <div className='cadastro'>
            <p>Não possui cadastro?</p>
            <button className='btn-cadastrar'>Cadastrar</button>
          </div>
          
        </div>
        
        <div className='imagem-login'>
          <img src='./foto-login.jpg' alt='Ilustração de Login' />
        </div>
      </div>
    </section>
  );
}
