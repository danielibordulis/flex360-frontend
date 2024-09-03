import { useEffect, useState } from 'react';
import './PagCadastro.css';
import { validarCampo } from '../../utils/validation-user'
import Erro from '../../components/erro/Erro'

export default function PagCadastro() {

  const [erros, setErros] = useState({})
  const [inputNome, setInputNome] = useState("")
  const [inputSenha, setInputSenha] = useState("")
  const [inputRepetirSenha, setInputRepetirSenha] = useState("")
  const [inputEmail, setInputEmail] = useState("")


  useEffect(() => {
    const campos = document.querySelectorAll(".campo")

    function trataEvento(e) {
      
      let listaErros = {...erros}
      const elementoId = e.target.id
      listaErros[elementoId] = ""
      setErros(listaErros)

    }

    for (let obj of campos) {
      obj.addEventListener("keydown", trataEvento)
    }

    return() => {

      for(let obj of campos) {
        obj.removeEventListener("keydown", trataEvento)
      }

    }

  }, [erros])


  function cadastra(form) {
    form.preventDefault()
    let listaErros = {}

    listaErros.nomeCadastro = validarCampo(document.getElementById("nomeCadastro"))
    listaErros.senhaCadastro = validarCampo(document.getElementById("senhaCadastro"))
    listaErros.repetirSenhaCadastro = validarCampo(document.getElementById("repetirSenhaCadastro"), document.getElementById("senhaCadastro"))
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

          <form onSubmit={cadastra} noValidate>
            <div className='grupo-input'>
              <label htmlFor='nomeCadastro'>Nome</label>
              <input type='text' name='nome' onChange={e => setInputNome(e.target.value)} value={inputNome} id='nomeCadastro' className='campo' />
              <Erro mensagem={erros.nomeCadastro} />
            </div>
            <div className='grupo-input'>
              <label htmlFor='senhaCadastro'>Senha</label>
              <input type='password' name='senha' onChange={e => setInputSenha(e.target.value)} value={inputSenha} id='senhaCadastro' className='campo' />
              <Erro mensagem={erros.senhaCadastro} />
            </div>
            <div className='grupo-input'>
              <label htmlFor='repetirSenhaCadastro'>Confirmar Senha</label>
              <input type='password' name='confirmarSenha' onChange={e => setInputRepetirSenha(e.target.value)} value={inputRepetirSenha} id='repetirSenhaCadastro' className='campo' />
              <Erro mensagem={erros.repetirSenhaCadastro} />
            </div>
            <div className='grupo-input'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' name='email' onChange={e => setInputEmail(e.target.value)} value={inputEmail} id='email' className='campo' />
              <Erro mensagem={erros.email} />
            </div>
            <button className='btn-cadastrar' type='submit'>Cadastrar</button>
          </form>


        </div>
      </div>
    </section>
  );
}