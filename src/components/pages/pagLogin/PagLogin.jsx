import './PagLogin.css';
import { validarCampo } from '../../../utils/validation-user'
import Erro from '../../erro/Erro'
import { useState } from 'react';

export default function PagLogin() {
  const [erros, setErros] = useState({})
  const [emailINPT, setEmailINPT] = useState("")
  const [senha, setSenha] = useState("")

  function entra(form) {
    form.preventDefault()
    let listaErros = {}
    let resposta = validarCampo(document.getElementById('email'))
    if(resposta) {
      listaErros.email = resposta
    }
    resposta = validarCampo(document.getElementById("senha"))
    if(resposta) {
      listaErros.senha = resposta
    }

    setErros(listaErros)
  }




  return (

    <section className='body'>

      <img src='./logo-correta.png' alt='Logo Flex360' className='logo' />

      <div className='container-login'>
        <div className='formulario-login'>

          <h1 className='titulo'>Entrar</h1>
          <form onSubmit={entra}>
            <div className='grupo-input'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' onChange={(e) => setEmailINPT(e.target.value)} value={emailINPT} id='email' />
              <Erro mensagem={erros.email} />
            </div>
            <div className='grupo-input'>
              <label htmlFor='senha'>Senha</label>
              <input type='password' name='senha' id='senha' onChange={(e) => setSenha(e.target.value)} value={senha} />
              <Erro mensagem={erros.senha} />
            </div>
            <div className='grupo-checkbox'>
              <input type='checkbox' id='lembrar' />
              <label htmlFor='lembrar' className='btn-lembrar-de-mim'>Lembrar de mim</label>
            </div>
            <button className='btn-entrar' type='submit'>Entrar</button>
          </form>
          <div className='cadastro'>
            <p>Não possui cadastro?</p>
            <button className='btn-cadastrar' >Cadastrar</button>
          </div>
        </div>

      </div>
      <div className='imagem-login'>
       
      </div>
    </section>
  );
}

