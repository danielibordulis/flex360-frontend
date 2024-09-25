import { createContext, useState } from "react";

export const CarrinhoContext = createContext()

export function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([])


    function pegaPrecoTotal() {
        let valorTotal = 0.0

        for (let obj of carrinho) {
            valorTotal += (Number(obj.quantidade) * Number(obj.preco))
        }

        return valorTotal.toLocaleString('pt-BR')
    }

    function pegaItens() {
        return carrinho
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

    function adicionaItem(itemAdd) {
        let indiceBusca = carrinho.findIndex(itemBuscar => itemBuscar.id == itemAdd.id)
        if (indiceBusca !== -1) {

            let novoCarrinho = carrinho
            novoCarrinho[indiceBusca].quantidade += itemAdd.quantidade
            setCarrinho(novoCarrinho)
        } else {
            setCarrinho(prevCarrinho => ([...prevCarrinho, itemAdd]))
        }

        console.log("Item adicionado xd")
        return carrinho
    }

    function reduzQuantidade(idItem) {
        let indiceBusca = carrinho.findIndex(itemBuscar => itemBuscar.id == idItem)
        if (indiceBusca !== -1) {
            let novoCarrinho = [...carrinho]
            novoCarrinho[indiceBusca].quantidade--
            if (novoCarrinho[indiceBusca].quantidade <= 0) {
                novoCarrinho.splice(indiceBusca, 1)
                setCarrinho(novoCarrinho)
                return 0
            }

            setCarrinho(novoCarrinho)
            return novoCarrinho[indiceBusca].quantidade
        }

        return 0
    }

    function aumentaQuantidade(idItem) {
        let indiceBusca = carrinho.findIndex(itemBuscar => itemBuscar.id == idItem)
        if (indiceBusca !== -1) {

            let novoCarrinho = carrinho
            novoCarrinho[indiceBusca].quantidade++

            console.log("Item aumentado")
            setCarrinho(novoCarrinho)
            return novoCarrinho[indiceBusca].quantidade
        }

        return 0
    }

    function removeItem(idItem) {
        setCarrinho(prevCarrinho => prevCarrinho.filter(item => item.id !== idItem))
            return true
    }

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho, adicionaItem, aumentaQuantidade, pegaItens, pegaPrecoTotal, pegaPrecoTotalItem, pegaQuantidadeItem, reduzQuantidade, removeItem }}>
            {children}
        </CarrinhoContext.Provider>
    )
}