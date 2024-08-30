import React from 'react'
import "./PagCarrinho.css"
import Header from '../../header/Header'
import Nav from '../../nav/Nav'
import ItemCarrinho from '../../itemCarrinho/ItemCarrinho'

function PagCarrinho() {
    return (
        <>
            <Header />
            <Nav />
            <section className='body-carrinho'>

                <div className='container-carrinho'>
                    <div className='carrinho'>
                        <ItemCarrinho />
                        <ItemCarrinho />
                        
                    </div>
                </div>

                <div className='right-side'>

                    <div className='container-preco-total'>

                        <div className='preco-total'>

                            <h2>Valor Total</h2>

                            <span>R$ 1500.00</span>

                            <button>Finalizar Compra</button>

                        </div>

                    </div>

                    <div className='container-text'>

                       <img src="foto-certificacao.png" alt="" />

                        <p>“Soluções flexíveis e completas para melhorar a ergonomia no ambiente de trabalho”</p>

                    </div>

                </div>

            </section>
        </>
    )
}

export default PagCarrinho
