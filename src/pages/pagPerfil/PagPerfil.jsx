import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import './PagPerfil.css';
import ScrollComponent from '../../components/scroll/ScrollComponent';
import httpClient from '../../services/httpClient';
import { validaToken, pegaEValidaTokenLogin } from '../../utils/validation-user';
import { useNavigate } from 'react-router-dom';


function PagPerfil() {

  const [cadeirasRecentes, setCadeirasRecentes] = useState([])
  const [inputNome, setInputNome] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const navigate = useNavigate();

  const [campoNomeDesabilitado, setCampoNomeDesabilitado] = useState(true)

  function sair() {
    localStorage.removeItem('token')
    navigate('/entrar')
  }

  async function getUser() {

    const isAuthenticated = await validaToken()

    if (!isAuthenticated) {

      navigate('/entrar')

    }

    const token = localStorage.getItem("token")

    const usuarioLogado = await httpClient().get("/usuario/buscarPerfil", token)
    if (usuarioLogado) {
      setInputNome(usuarioLogado.nome)
      setInputEmail(usuarioLogado.email)
    }

  }

  useEffect(() => {

    async function buscaCadeirasRecentes() {
      const result = localStorage.getItem('ultimasCadeiras')
      if(result !== null) {
        setCadeirasRecentes(JSON.parse(result))
      }

    }

    getUser()

    buscaCadeirasRecentes()


  }, [])


  async function atualizaPerfil(campo, valor) {
    const body = {
      nome: inputNome,
      email: inputEmail
    }

    try {
      await httpClient().put('/usuario/editar', body, pegaEValidaTokenLogin())
    } catch (e) {
      console.log(`Erro ao atualizar perfil: ${e}`)
    }
  }

  return (
    <>
      <Header />
      <section className='body'>

        <div className='lado-esquerdo'>
          <h2 className='Titulo'>Meu perfil</h2>
          <div className='botoesEditar'>
            <div className='alinharBotoes'>
              <p className='nome'>Nome:</p>
              <div className='checkEedit'>
                <input className='inpNome' onChange={e => setInputNome(e.target.value)} value={inputNome || ""} disabled={campoNomeDesabilitado} />
                {!campoNomeDesabilitado && (
                  <button className='check'><img src="./check.png" alt="Check" onClick={() => {
                    atualizaPerfil("nome", inputNome)
                    setCampoNomeDesabilitado(true)
                  }} /></button>
                )}
                {campoNomeDesabilitado && (<button className='lapis' onClick={() => setCampoNomeDesabilitado(false)}><img src="./lapis.png" alt="Edit" /></button>
                )}
              </div>
            </div>
            <div className='alinharBotoes'>
              <p className='email'>Email:</p>
              <input className='inpEmail' onChange={e => setInputEmail(e.target.value)} value={inputEmail || ""} disabled />
            </div>
          </div>
        </div>
        <div className='lado-direito'>
          {cadeirasRecentes.length > 0 && (
            <>
              <h2 className='Titulo'>Vistos recentemente:</h2>
              <ScrollComponent cadeiras={cadeirasRecentes} />
            </>
          )}
        </div>

        <button className="sair" onClick={sair}>Sair</button>

      </section>
    </>
  );
}

export default PagPerfil