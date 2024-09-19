import React, { useEffect, useState } from 'react'
import "./PagCarrinho.css"

import Header from '../../components/header/Header'
import ItemCarrinho from '../../components/itemCarrinho/ItemCarrinho'
import ServicoCarrinho from '../../services/servico-carrinho'

function PagCarrinho() {

    const [itensCarrinho, setItensCarrinho] = useState([])

    function removeItem(id) {
        const carrinhoAtualizado = ServicoCarrinho.removeItem(id)
        setItensCarrinho(carrinhoAtualizado)
    }



    useEffect(() => {
        if (itensCarrinho.length == 0) {

            const novoCarrinho = [
                {
                    "id": "fnbefyihaef-aeofjaeum934f-oe97fhae7809fh",
                    "nome": "Cadeira Tecton",
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
                    "foto_cadeira": "./cadeira-ex.png",
                    "quantidade": 1
                },
                {
                    "id": "fnbefy23ih3f3-aeoghaeum9f-oe97f56e7809fh",
                    "nome": "Cadeira Tecton 2",
                    "preco": 1000.56,
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
                    "foto_cadeira": "./cadeira-ex.png",
                    "quantidade": 1
                },
                {
                    "id": "fnsdfyihaef-aeosdaeum9f-oe97sdae347809fh",
                    "nome": "Cadeira Tecton 3",
                    "preco": 1000.21,
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
                    "foto_cadeira": "./cadeira-ex.png",
                    "quantidade": 1
                },
                {
                    "id": "efhme56f9767hf-a9e7fh9e7mfhae-a9e7fhngae97f",
                    "nome": "Carregador por indução 1",
                    "foto": "./rodinha-acessorios.png",
                    "preco": 13.20,
                    "quantidade": 1
                },
                {
                    "id": "34hmef97aehf-a9e7fh9e7mfhae-a9e787fhngae97f",
                    "nome": "Carregador por indução 2",
                    "foto": "./rodinha-acessorios.png",
                    "preco": 11.40,
                    "quantidade": 1
                },
                {
                    "id": "efhmef2783aehf-a9e7fh9e7mfhae-a9e7fhngae97f",
                    "nome": "Carregador por indução 3",
                    "foto": "./rodinha-acessorios.png",
                    "preco": 8.40,
                    "quantidade": 1
                }
            ]

            for (let obj of novoCarrinho) {
                ServicoCarrinho.adicionaItem(obj)
            }
            setItensCarrinho(ServicoCarrinho.pegaItens())
        }

    }, [])


    return (
        <>
            <Header />
            <section className='body-carrinho'>

                <div className='container-carrinho'>
                    <div className='carrinho'>
                        {itensCarrinho.map((item => (
                            <ItemCarrinho key={item.id} item={item}/>
                        )))}

                    </div>
                </div>

                <div className='right-side'>

                    <div className='container-preco-total'>

                        <div className='preco-total'>

                            <h2>Valor Total</h2>

                            <span>R$ {ServicoCarrinho.pegaPrecoTotal()}</span>

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
