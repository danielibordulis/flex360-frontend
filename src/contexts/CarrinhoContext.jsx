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

    async function limpaCarrinho() {

        await httpClient().deleteOne("/carrinho/limparCarrinho", pegaEValidaTokenLogin());
        setCarrinho(prevCarrinho => [])
    }

    async function adicionaItem(itemAdd) {

        const result = await httpClient().post("/carrinho/adiciona", {
                id: itemAdd.id,
                quantidade: 1
            }, pegaEValidaTokenLogin()
        )

        const carrinhoFormatado = formataCarrinho(result)
        setCarrinho(carrinhoFormatado)
        
        return carrinhoFormatado
    }

    async function reduzQuantidade(idItem) {


        const result = await httpClient().put("/carrinho/remove", {
            id: idItem,
            quantidade: 1
        }, pegaEValidaTokenLogin()
    )

    const carrinhoFormatado = formataCarrinho(result)
    setCarrinho(carrinhoFormatado)
    
        const buscandoItem = carrinhoFormatado.find(obj => obj.id === idItem)

        if(buscandoItem) return buscandoItem.quantidade
        return null

    }

    async function aumentaQuantidade(idItem) {

        const atualiza = await adicionaItem({id: idItem, quantidade: 1})

        const buscandoItem = atualiza.find(obj => obj.id === idItem)

        if(buscandoItem) return buscandoItem.quantidade
        return 0
    }

    async function removeItem(idItem) {
        await httpClient().deleteOne(`/carrinho/deleta/produto/${idItem}`, pegaEValidaTokenLogin())
        setCarrinho(await pegaItens())
    }

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho, adicionaItem, aumentaQuantidade, pegaItens, pegaPrecoTotal, pegaPrecoTotalItem, pegaQuantidadeItem, reduzQuantidade, removeItem, limpaCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    )
}