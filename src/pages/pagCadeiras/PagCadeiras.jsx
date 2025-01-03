import React, { useEffect, useState } from 'react'
import { toast, Bounce } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header'
import "./PagCadeiras.css"
import Cadeira from '../../components/cadeira/Cadeira'
import Footer from '../../components/footer/Footer'
import httpClient from '../../services/httpClient'

function PagCadeiras() {

  const location = useLocation();
  const navigate = useNavigate()
  const { busca } = location.state || {};

  const [grupoAmostra, setGrupoAmostra] = useState(1)
  const [grupoCadeiras, setGrupoCadeiras] = useState([])

  async function pegarCadeiras() {

    let todasCadeiras

    const rotaUsar = '/cadeira/' + (busca ? 'buscarPorNome/' + busca : 'buscarTodas')

    try {
      const resultado = await httpClient().get(rotaUsar)

      todasCadeiras = resultado

      const grupos = [[]]
      let index = 0

      for (let cadeira of todasCadeiras) {

        if (grupos[index].length < 3) {

          grupos[index].push(cadeira)

        } else {

          index++
          grupos.push([cadeira])

        }

      }

      setGrupoCadeiras(grupos)

    } catch (err) {
      toast.error('Nenhuma cadeira encontrada', {
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

      navigate("/")
      return
    }
  }

  function proxCadeiras() {

    const maxCadeiras = grupoCadeiras.length;

    if (grupoAmostra == maxCadeiras) return

    const novaAmostra = grupoAmostra + 1

    setGrupoAmostra(novaAmostra)

  }

  function voltarCadeiras() {

    if (grupoAmostra == 1) return

    const novaAmostra = grupoAmostra - 1

    setGrupoAmostra(novaAmostra)

  }

  useEffect(() => {

    pegarCadeiras()

  }, [])

  useEffect(() => {
    pegarCadeiras()
  }, [busca])


  return (
    <>
      <Header />
      <section className='body-cadeiras'>

        <h1 className='tituloCadeira'>Cadeiras</h1>
        <div className='container-numero-cadeira'>
          <button onClick={voltarCadeiras}>
            <img src="./flecha-esquerda.svg" alt="Catálogo anterior" />
          </button>
          <span>{grupoAmostra}</span>
          <button onClick={proxCadeiras}>
            <img src="./flecha-direita.svg" alt="Próximo catálogo" />
          </button>
        </div>

        <section className='container-cadeiras'>
          {
            grupoCadeiras[grupoAmostra - 1] && grupoCadeiras[grupoAmostra - 1].map((cadeira) => <Cadeira key={cadeira.id} cadeiraData={cadeira} />)
          }
        </section>

        <div className='container-numero-cadeira'>
          <button onClick={voltarCadeiras}>
            <img src="./flecha-esquerda.svg" alt="Catálogo anterior" />
          </button>
          <span>{grupoAmostra}</span>
          <button onClick={proxCadeiras}>
            <img src="./flecha-direita.svg" alt="Próximo catálogo" />
          </button>
        </div>

      </section>
      <Footer />
    </>
  )
}

export default PagCadeiras
