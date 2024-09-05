import React, { useState } from 'react'
import "./PagCarrinho.css"

import Header from '../../components/header/Header'
import ItemCarrinho from '../../components/itemCarrinho/ItemCarrinho'
import ServicoCarrinho from '../../services/servico-carrinho'

function PagCarrinho() {

    const [itensCarrinho, setItensCarrinho] = useState(ServicoCarrinho.pegaItens())

    function removeItem(id) {
        const carrinhoAtualizado = ServicoCarrinho.removeItem(id)
        setItensCarrinho(carrinhoAtualizado)
    }

    return (
        <>
            <Header />
            <section className='body-carrinho'>

                <div className='container-carrinho'>
                    <div className='carrinho'>
                        {itensCarrinho.map((item => (
                            <ItemCarrinho key={item.id} />
                        )))}
                        
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
