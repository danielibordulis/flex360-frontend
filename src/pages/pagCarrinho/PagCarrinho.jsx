import { useContext, useEffect } from 'react'
import "./PagCarrinho.css"

import Header from '../../components/header/Header'
import ItemCarrinho from '../../components/itemCarrinho/ItemCarrinho.jsx'
import { CarrinhoContext } from '../../contexts/CarrinhoContext.jsx'

function PagCarrinho() {

    const { carrinho, adicionaItem, removeItem, pegaItens, pegaPrecoTotal, limpaCarrinho } = useContext(CarrinhoContext)

    async function finalizaCompra() {

        await limpaCarrinho()
        alert("Compra finalizada!")
    }

    useEffect(() => {
        pegaItens()
    }, [])


    return (
        <>
            <Header />
            <section className='body-carrinho'>

                <div className='container-carrinho'>
                    <div className='carrinho'>

                        {carrinho && carrinho.map((obj) => (
                            <ItemCarrinho key={obj.id} item={obj} />
                        ))}

                    </div>
                </div>

                <div className='right-side'>

                    <div className='container-preco-total'>

                        <div className='preco-total'>

                            <h3>Valor total</h3>

                            <span>{pegaPrecoTotal().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>

                            <button onClick={ async() => await finalizaCompra()}>Finalizar Compra</button>

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