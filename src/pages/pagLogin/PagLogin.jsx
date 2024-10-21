import './PagLogin.css';
import { validarCampo } from '../../utils/validation-user'
import Erro from '../../components/erro/Erro'
import { useEffect, useState } from 'react';
import { TiHome } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import httpClient from '../../services/httpClient';

export default function PagLogin() {
  const [erros, setErros] = useState({})
  const [emailINPT, setEmailINPT] = useState("")
  const [senha, setSenha] = useState("")
  const navigate = useNavigate()



  useEffect(() => {
    const inpts = document.querySelectorAll(".campo")

    function trataEvento(e) {
      let listaErros = { ...erros }
      const elementoId = e.target.id
      listaErros[elementoId] = ""
      setErros(listaErros)

    }

    for (let obj of inpts) {
      obj.addEventListener("keydown", trataEvento)
    }

    return () => {

      for (let obj of inpts) {
        obj.removeEventListener("keydown", trataEvento)
      }
    }

  }, [erros])


  async function entra(form) {
    form.preventDefault()
    let listaErros = {}
    let resposta = validarCampo(document.getElementById('email'))
    if (resposta) {
      listaErros.email = resposta
    }
    resposta = validarCampo(document.getElementById("senha"))
    if (resposta) {
      listaErros.senha = resposta
    }

    if (Object.keys(listaErros).length > 0) {
      setErros(listaErros)
      return
    }

    //let resultado = await pegaEValidaTokenLogin()

    const dadosUsuario = {
      email: emailINPT,
      senha: senha

    }

    httpClient().post('/auth/login', dadosUsuario)
    .then((response) => {

    const token = response.data.token
    localStorage.setItem("token", token)

      navigate('/home')

    })
    .catch(() => {
      alert("erro")
    })

  }



  return (

    <section className='body'>

      <img src='./logo-correta.png' alt='Logo Flex360' className='logo' />

      <div className='container-login'>
        <div className='formulario-login'>

          <h1 className='titulo'>Entrar</h1>
          <form onSubmit={entra} noValidate>
            <div className='grupo-input'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' onChange={(e) => setEmailINPT(e.target.value)} value={emailINPT} id='email' className='campo' />
              <Erro mensagem={erros.email} />
            </div>
            <div className='grupo-input'>
              <label htmlFor='senha'>Senha</label>
              <input type='password' name='senha' id='senha' onChange={(e) => setSenha(e.target.value)} value={senha} className='campo' />
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
            <button className='btn-cadastrar' onClick={() => navigate('/cadastro')}>Cadastrar</button>
          </div>
        </div>

      </div>
      <div className='imagem-login'>

      </div>

      <button className='botao-nav-home' onClick={() => navigate('/')}>
        <TiHome />
      </button>
    </section>
  );
}