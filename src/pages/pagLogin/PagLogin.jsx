import './PagLogin.css';
import { validarCampo } from '../../utils/validation-user'
import Erro from '../../components/erro/Erro'
import { useEffect, useState } from 'react';
import { TiHome } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import httpClient from '../../services/httpClient';
import { toast, Bounce } from 'react-toastify';

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

    const dadosUsuario = {
      email: emailINPT,
      password: senha

    }

    httpClient().post('/auth/login', dadosUsuario)
      .then((response) => {

        const token = response.token
        localStorage.setItem("token", token)

        toast.success('Login efetuado com sucesso!', {
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

        navigate('/')

      })
      .catch((e) => {

        toast.error('Erro em efetuar o login', {
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

        console.log(e)
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
              <input type='email' name='email' onChange={(e) => setEmailINPT(e.target.value)} value={emailINPT} id='email' className='campo' autoFocus/>
              <Erro mensagem={erros.email} />
            </div>
            <div className='grupo-input'>
              <label htmlFor='senha'>Senha</label>
              <input type='password' name='senha' id='senha' onChange={(e) => setSenha(e.target.value)} value={senha} className='campo' />
              <Erro mensagem={erros.senha} />
            </div>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <button className='btn-entrar' type='submit'>Entrar</button>
            </div>
          </form>
          <button className="btn-ir-cadastro" onClick={() => navigate('/cadastro')}>
            Não possuo cadastro
          </button>
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