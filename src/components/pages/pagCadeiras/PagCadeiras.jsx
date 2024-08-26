import React from 'react'
import Header from '../../header/Header'
import Nav from '../../nav/Nav'
import "./PagCadeiras.css"
import Cadeira from '../../cadeira/Cadeira'

function PagCadeiras() {
  return (
    <>
        <Header />
        <Nav />
        <section className='body'>
            
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
