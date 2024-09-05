import { useEffect, useRef, useState } from 'react';
import './PagCadastro.css';
import { validarCampo } from '../../utils/validation-user'
import Erro from '../../components/erro/Erro'

export default function PagCadastro() {

  const [erros, setErros] = useState({})

  const [inputNome, setInputNome] = useState("")
  const [inputSenha, setInputSenha] = useState("")
  const [inputRepetirSenha, setInputRepetirSenha] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const nomeRef = useRef(null)
  const senhaRef = useRef(null)
  const repetirSenhaRef = useRef(null)
  const emailRef = useRef(null)


  useEffect(() => {
    const campos = [nomeRef, senhaRef, repetirSenhaRef, emailRef]

    function trataEvento(e) {

      const elementoId = e.target.id
      console.log(erros)
      setErros(prevState =>({...prevState, [elementoId]: ""}))

    }

campos.forEach(elemento => {
  elemento.current.addEventListener("keydown", trataEvento)
  })

    return () => {

      for (let obj of campos) {
        obj.current.removeEventListener("keydown", trataEvento)
      }

    }

  }, [])


  function cadastra(form) {
    form.preventDefault()
    let listaErros = {
      nomeCadastro: validarCampo(nomeRef.current),
      senhaCadastro: validarCampo(senhaRef.current),
      repetirSenhaCadastro: validarCampo(repetirSenhaRef.current, senhaRef.current),
      email: validarCampo(emailRef.current)
    }

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
              <input type='text' name='nome' onChange={e => setInputNome(e.target.value)} value={inputNome} id='nomeCadastro' className='campo' ref={nomeRef} />
              <Erro mensagem={erros.nomeCadastro} />
            </div>
            <div className='grupo-input'>
              <label htmlFor='senhaCadastro'>Senha</label>
              <input type='password' name='senha' onChange={e => setInputSenha(e.target.value)} value={inputSenha} id='senhaCadastro' className='campo' ref={senhaRef} />
              <Erro mensagem={erros.senhaCadastro} />
            </div>
            <div className='grupo-input'>
              <label htmlFor='repetirSenhaCadastro'>Confirmar Senha</label>
              <input type='password' name='confirmarSenha' onChange={e => setInputRepetirSenha(e.target.value)} value={inputRepetirSenha} id='repetirSenhaCadastro' className='campo' ref={repetirSenhaRef} />
              <Erro mensagem={erros.repetirSenhaCadastro} />
            </div>
            <div className='grupo-input'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' name='email' onChange={e => setInputEmail(e.target.value)} value={inputEmail} id='email' className='campo' ref={emailRef} />
              <Erro mensagem={erros.email} />
            </div>
            <button className='btn-cadastrar' type='submit'>Cadastrar</button>
          </form>


        </div>
      </div>
    </section>
  );
}