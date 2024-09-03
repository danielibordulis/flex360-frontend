import React from 'react'
import "./PagCadeiraIndividual.css"
import Header from '../../header/Header'
import Nav from '../../nav/Nav'
import PaletaCor from '../../paletaCor/PaletaCor'
import ControleQuantidade from '../../controleQuantidade/ControleQuantidade'

function PagCadeiraIndividual() {
  return (
    <>
        <Header />
        <Nav />
        <section className='body'>
            <div className='sub-containers'>

                <h1 className='nome-cadeira'>Nome da cadeira</h1>

                <div className='container-selo-abnt'>
                    <img src="./selo.png" alt="Selo"/>
                    <h2>Certificação pela norma ABNT</h2>
                </div>

                <p className='texto-info'>Desenvolvida pelos renomados designers Baldanzi & Novelli, a cadeira LED possui um design particular marcado pelas linhas retas, além de proporcionar ao usuário conforto e liberdade de movimentos.</p>

                <div className='container-dimensoes-prod'>
                    <h3>Dimensões do produto</h3>

                    <img src="./dimensao-ex-cadeira.png" alt="" />
                </div>

            </div>

            <div className='sub-containers'>

                <div className='img-top'/>

                <div className='container-info-cadeira'>

                    <div className='container-top'>   

                        <div className='box-foto-cadeira'>
                            <img src="./cadeira-ex.png" alt="" className='foto-cadeira-p'/>
                        </div>

                        <div className='desc-cadeira'>
                            <div className='descricao'>
                                <p>Cadeira Led Shadow Black / Flexform
                                Tela na cor preto. Assento revetido na cor vermelho. Apoia braços na cor preto e base Carbon Grey (Grafite).</p>
                                <span>5 anos de garantia*</span>
                            </div>
                            
                            <div className='container-preco'>
                                <span>R$ 1500.00</span>
                                <div className='box-quant'>
                                    <ControleQuantidade />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='container-bottom'>

                        <div className='left-side'>
                            <PaletaCor cores={[{name: "Marrom", cod: "#a52a2a", id: ""},{name: "Preto", cod: "#1E0303", id: ""},{name: "Roxo", cod: "#7C1FF1", id: ""}]}/>
                        </div>

                        <div className='right-side'>
                            <button>Adicionar ao Carrinho</button>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    </>
  )
}

export default PagCadeiraIndividual
