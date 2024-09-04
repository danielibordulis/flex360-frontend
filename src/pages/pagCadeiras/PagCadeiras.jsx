import React from 'react'
import Header from '../../components/header/Header'
import "./PagCadeiras.css"
import Cadeira from '../../components/cadeira/Cadeira'

function PagCadeiras() {
  return (
    <>
        <Header />
        <section className='body-cadeiras'>
            
            <div className='container-numero-cadeira'>
              <button>
                <img src="./flecha-esquerda.svg" alt="Voltar" />
              </button>
              <span>1</span>
              <button>
                <img src="./flecha-direita.svg" alt="Próximo" />
              </button>
            </div>

            <section className='container-cadeiras'>
              <Cadeira />
              <Cadeira />
              <Cadeira />
            </section>

            <div className='container-numero-cadeira'>
              <button>
                <img src="./flecha-esquerda.svg" alt="Voltar" />
              </button>
              <span>1</span>
              <button>
                <img src="./flecha-direita.svg" alt="Próximo" />
              </button>
            </div>

        </section>
    </>
  )
}

export default PagCadeiras
