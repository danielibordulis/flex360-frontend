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

      const jsonCadeiras = [
        {
          "id": "fnbefyihaef-aeofjaeum9f-oe97fhae7809fh",
          "nome": "Cadeira Tecton",
          "informacoes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus interdum sem sit ametarcuconsequat, sit amet dignissim felis tincidunt. Vivamus convallis orci ac lectus egestas, non malesuada turpis aliquam.Suspendisse potenti. Cras ut odio nec libero gravida fermentum. Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac turpis egestas.",
          "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus interdum sem sit ametarcuconsequat, sit amet dignissim felis tincidunt. Vivamus convallis orci ac lectus egestas, non malesuada turpis aliquam.Suspendisse potenti. Cras ut odio nec libero gravida fermentum. Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac turpis egestas.",
          "temp_cagarantia": 5,
          "preco": 1000.34,
          "cores_disponiveis": [
            {
              "id": "aiundaiyuwdn -3927hdht28hd-d19872ghd1",
              "nome": "Marrom",
              "codigo": "#a52a2a"
            },
            {
              "id": "aiundaiyuwdn -3927hdht28hd-d19872ghd1",
              "nome": "Roxo",
              "codigo": "#7C1FF1"
            }
          ],
          "dimensoes": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus interdum sem sit ametarcuconsequat, sit amet dignissim felis tincidunt. Vivamus convallis orci ac lectus egestas, non malesuada turpis aliquam.",
          "foto_cadeira": "./cadeira-ex.png",
          "foto_dimensoes": "./dimensao-ex-cadeira.png",
          "desc_encosto": "Encosto com estrutura injetada em resina plastica, com regulagem de altura.",
          "desc_apoio": "Apoia braços  2D, regulável na altura e largura.",
          "desc_rodinha": "Rodizio especial com freio, suporta alta capacidade de peso",
          "desc_ajuste_altura": "Mecanismo ajuste de altura do assento. Inclinação do encosto com 4 pontos de parada, possui movimento relax.",
          "desc_revestimento": "Revestimento em pvc sintético ."
        },
      ]

      setCadeirasRecentes(jsonCadeiras)
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
    } catch(e) {
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

        <button onClick={sair}>Sair</button>
      </section>
    </>
  );
}

export default PagPerfil