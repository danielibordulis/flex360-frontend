import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import "./PagCadeiras.css"
import Cadeira from '../../components/cadeira/Cadeira'
import cadeirasJson from '../../utils/json/cadeira.json'
import Footer from '../../components/footer/Footer'

function PagCadeiras() {

  const [grupoAmostra, setGrupoAmostra] = useState(1)
  const [grupoCadeiras, setGrupoCadeiras] = useState([])

  function pegarCadeiras() {

    const todasCadeiras = cadeirasJson
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


  return (
    <>
        <Header />
        <section className='body-cadeiras'>
            
            <div className='container-numero-cadeira'>
              <button onClick={voltarCadeiras}>
                <img src="./flecha-esquerda.svg" alt="Voltar" />
              </button>
              <span>{grupoAmostra}</span>
              <button onClick={proxCadeiras}>
                <img src="./flecha-direita.svg" alt="Próximo" />
              </button>
            </div>

            <section className='container-cadeiras'>
              {
                grupoCadeiras[grupoAmostra - 1] && grupoCadeiras[grupoAmostra - 1].map((cadeira) => <Cadeira key={cadeira.id} cadeiraData={cadeira}/>)
              }
            </section>

            <div className='container-numero-cadeira'>
              <button onClick={voltarCadeiras}>
                <img src="./flecha-esquerda.svg" alt="Voltar" />
              </button>
              <span>{grupoAmostra}</span>
              <button onClick={proxCadeiras}>
                <img src="./flecha-direita.svg" alt="Próximo" />
              </button>
            </div>

        </section>
        <Footer/>
    </>
  )
}

export default PagCadeiras
