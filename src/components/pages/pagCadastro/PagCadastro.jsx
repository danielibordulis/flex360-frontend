import './PagCadastro.css';
import { validarCampo } from '../../../utils/validation-user'
import Erro from '../../erro/Erro'
import { useState } from 'react';

export default function PagCadastro() {

  const [erros, setErros] = useState({})
  const [inputNome, setInputNome] = useState("")
  const [inputSenha, setInputSenha] = useState("")
  const [inputRepetirSenha, setInputRepetirSenha] = useState("")
  const [inputEmail, setInputEmail] = useState("")


  // const campos = document.querySelectorAll(".campo")
  // for (let obj of campos) {
  //   obj.addEventListener("keydown", (e) => {
  //     let listaErros = erros;
  //     const elementoId = e.target.id
  //     listaErros[elementoId] = ""
  //     setErros(listaErros)
  //   })
  // }


  function cadastra(form) {
    form.preventDefault()
    let listaErros = {}

    listaErros.nome = validarCampo(document.getElementById("nomeCadastro"))
    listaErros.senha = validarCampo(document.getElementById("senhaCadastro"))
    listaErros.repetirSenha = validarCampo(document.getElementById("repetirSenhaCadastro"), document.getElementById("senhaCadastro"))
    listaErros.email = validarCampo(document.getElementById("email"))

    setErros(listaErros)
  }


  return (
    <section className='body'>

      {/* Div para a imagem de cadastro à esquerda */}
      <div className='imagem-cadastro' />

      <div className='container-cadastro'>

        {/* Div para o formulário de cadastro à direita */}
        <div className='formulario-cadastro'>
          <h1 className='titulo'>Cadastrar</h1>

          <form onSubmit={cadastra}>
            <div className='grupo-input'>
              <label htmlFor='nomeCadastro'>Nome</label>
              <input type='text' name='nome' onChange={e => setInputNome(e.target.value)} value={inputNome} id='nomeCadastro' className='campo' />
              <Erro mensagem={erros.nome} />
            </div>
            <div className='grupo-input'>
              <label htmlFor='senhaCadastro'>Senha</label>
              <input type='password' name='senha' onChange={e => setInputSenha(e.target.value)} value={inputSenha} id='senhaCadastro' className='campo' />
              <Erro mensagem={erros.senha} />
            </div>
            <div className='grupo-input'>
              <label htmlFor='repetirSenhaCadastro'>Confirmar Senha</label>
              <input type='password' name='confirmarSenha' onChange={e => setInputRepetirSenha(e.target.value)} value={inputRepetirSenha} id='repetirSenhaCadastro' className='campo' />
              <Erro mensagem={erros.repetirSenha} />
            </div>
            <div className='grupo-input'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' name='email' onChange={e => setInputEmail(e.target.value)} value={inputEmail} id='email' className='campo' />
              <Erro mensagem={erros.email} />
            </div>
            <button className='btn-cadastrar' onClick={cadastra}>Cadastrar</button>
          </form>


        </div>
      </div>
    </section>
  );
}


