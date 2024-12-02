import { useEffect, useRef, useState } from 'react';
import './PagCadastro.css';
import { validarCampo } from '../../utils/validation-user'
import Erro from '../../components/erro/Erro'
import { useNavigate } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import httpClient from '../../services/httpClient';
import { Bounce, toast } from 'react-toastify';

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
  const navigate = useNavigate()


  useEffect(() => {
    const campos = [nomeRef, senhaRef, repetirSenhaRef, emailRef]

    function trataEvento(e) {

      const elementoId = e.target.id
      setErros(prevState => ({ ...prevState, [elementoId]: "" }))

    }

    campos.forEach(elemento => {
      elemento.current.addEventListener("keydown", trataEvento)
    })

    return () => {

      for (let obj of campos) {

        if (!obj.current) continue

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

    const dadosUsuario = {
      nome: inputNome,
      email: inputEmail,
      password: inputSenha,
    }

    httpClient().post('/auth/register', dadosUsuario)
      .then(() => {

        toast.success('Cadastro efetuado com sucesso!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });

        navigate('/entrar')

      })
      .catch(() => {
        
        toast.error('Erro em efetuar o cadastro', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        })

      })

  }


  return (
    <section className='body-cadastro'>


      <div className='imagem-cadastro' />

      <div className='container-cadastro'>


        <div className='formulario-cadastro'>
          <h1 className='titulo'>Cadastrar</h1>

          <form onSubmit={cadastra} noValidate>
            <div className='grupo-input'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' name='email' onChange={e => setInputEmail(e.target.value)} value={inputEmail} id='email' className='campo' ref={emailRef} />
              <Erro mensagem={erros.email} />
            </div>
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
            <button className='btn-cadastrar' type='submit'>Cadastrar</button>
          </form>
          <button className="btn-login" onClick={() => navigate('/entrar')}>
            Já possuo cadastro
          </button>
        </div>
      </div>

      <button className='botao-nav-home-cadastro' onClick={() => navigate('/')}>
        <TiHome />
      </button>
    </section>
  );
}
