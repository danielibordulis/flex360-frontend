import React, { useEffect, useState } from 'react';
import './PagCadastro.css';
import { validarCampo } from '../../../utils/validation-user';
import Erro from '../../erro/Erro';

export default function PagCadastro() {

  const [erros, setErros] = useState({})
  const [emailINPT, setEmailINPT] = useState("")
  const [senha, setSenha] = useState("")

  useEffect(() => {

    const inpts = document.querySelectorAll(".campo")
    for (let obj of inpts) {
      obj.addEventListener("keydown", (e) => {
        let listaErros = erros;
        const elementoId = e.target.id
        listaErros[elementoId] = ""
        setErros(listaErros)
      })
    }

  }, [])

  function cadastrar(form) {
    form.preventDefault()
    let listaErros = {}

    let resposta = validarCampo(document.getElementById('email'))
    if (resposta) {
      listaErros.email = resposta
    }
    resposta = validarCampo(document.getElementById("senhaCadastro"))
    if (resposta) {
      listaErros.senha = resposta
    }

    resposta = validarCampo(document.getElementById('nomeCadastro'))
    if (resposta) {
      listaErros.nome = resposta
    }
    resposta = validarCampo(document.getElementById("repetirSenhaCadastro"))
    if (resposta) {
      listaErros.confirmarSenha = resposta
    }

    if (Object.keys(listaErros).length > 0) {
      setErros(listaErros)
      return
    }
  }

  return (
    <section className='body'>

      {/* Div para a imagem de cadastro à esquerda */}
      <div className='imagem-cadastro' />

      <div className='container-cadastro'>

        {/* Div para o formulário de cadastro à direita */}
        <div className='formulario-cadastro'>
          <h1 className='titulo'>Cadastrar</h1>

          <form onSubmit={cadastrar}>
            <div className='grupo-input'>
              <label>Nome</label>
              <input id='nomeCadastro' type='text' name='nome' className='campo'/>
              <Erro mensagem={erros.nome} />
            </div>
            <div className='grupo-input'>
              <label>Senha</label>
              <input id='senhaCadastro' type='password' name='senha' className='campo'/>
              <Erro mensagem={erros.senha} />
            </div>
            <div className='grupo-input'>
              <label>Confirmar Senha</label>
              <input id='repetirSenhaCadastro' type='password' name='confirmarSenha' className='campo'/>
              <Erro mensagem={erros.confirmarSenha} />
            </div>
            <div className='grupo-input'>
              <label>Email</label>
              <input id='email' type='email' name='email' className='campo'/>
              <Erro mensagem={erros.email} />
            </div>
            <button className='btn-cadastrar'>Cadastrar</button>
          </form>

          
        </div>
      </div>
    </section>
  );
}


