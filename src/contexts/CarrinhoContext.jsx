import { createContext, useState } from "react";
import httpClient from '../services/httpClient'
import { pegaEValidaTokenLogin } from '../utils/validation-user.js'

export const CarrinhoContext = createContext()

export function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([])

    function formataCarrinho(result) {
        
        const carrinhoFormatado = [...result.produtosDTO.cadeiras, ...result.produtosDTO.acessorios]
        setCarrinho(carrinhoFormatado)
        return carrinhoFormatado
    }

    function pegaPrecoTotal() {
        let valorTotal = 0.0

        for (let obj of carrinho) {
            valorTotal += (Number(obj.quantidade) * Number(obj.preco))
        }

        return valorTotal
    }

    async function pegaItens() {

        const result = await httpClient().get('/carrinho/buscar', pegaEValidaTokenLogin())
        const carrinhoFormatado = formataCarrinho(result)
        setCarrinho(carrinhoFormatado)
        return carrinhoFormatado
    }

    function pegaQuantidadeItem(id) {
        let indiceBusca = carrinho.findIndex(itemBuscar => itemBuscar.id == id)
        if (indiceBusca !== -1) {
            return carrinho[indiceBusca].quantidade
        }
        return 0
    }

    function pegaPrecoTotalItem(id) {

        let indiceBusca = carrinho.findIndex(itemBuscar => itemBuscar.id == id)
        if (indiceBusca !== -1) {
            return (carrinho[indiceBusca].preco * carrinho[indiceBusca].quantidade).toLocaleString('pt-BR')
        }
        return 0
    }

    function limpaCarrinho() {
        setCarrinho(prevCarrinho => [])
    }

    async function adicionaItem(itemAdd) {

        const result = await httpClient().post("/carrinho/adiciona", {
                id: itemAdd.id,
                quantidade: 1
            }, pegaEValidaTokenLogin()
        )

        setCarrinho(formataCarrinho(result))
        
    }

    function reduzQuantidade(idItem) {

        let quantidadeAtualizada = 0

        const novoCarrinho = carrinho.map(item => {
            if (item.id === idItem) {
                quantidadeAtualizada = item.quantidade - 1

                if (quantidadeAtualizada <= 0) {
                    return null
                }

                return { ...item, quantidade: quantidadeAtualizada }
            }

            return item
        }).filter(item => item !== null)

        setCarrinho(novoCarrinho)
        return quantidadeAtualizada
    }

    function aumentaQuantidade(idItem) {

        let quantidadeAtualizada = 0

        const novoCarrinho = carrinho.map(item => {
            if (item.id === idItem) {
                quantidadeAtualizada = item.quantidade + 1
                return { ...item, quantidade: quantidadeAtualizada }
            }
            return item
        })

        setCarrinho(novoCarrinho)

        return quantidadeAtualizada
    }

    function removeItem(idItem) {
        setCarrinho(prevCarrinho => prevCarrinho.filter(item => item.id !== idItem))
        return true
    }

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho, adicionaItem, aumentaQuantidade, pegaItens, pegaPrecoTotal, pegaPrecoTotalItem, pegaQuantidadeItem, reduzQuantidade, removeItem, limpaCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    )
}