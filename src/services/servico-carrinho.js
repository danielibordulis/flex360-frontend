function ServicoCarrinho() {
    let carrinho = []

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
        let indiceBusca = carrinho.findIndex(itemBuscar => itemBuscar.id == itemAdd.id)
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
            carrinho[indiceBusca].quantidade += itemAdd.quantidade
        }
        else carrinho.push(itemAdd)

        console.log("Item adicionado")
        return carrinho
    }

    function reduzItem(idItem) {
        let indiceBusca = carrinho.findIndex(itemBuscar => itemBuscar.id == itemAdd.id)
        if (indiceBusca !== -1) {
            carrinho[indiceBusca].quantidade--

            if (carrinho[indiceBusca].quantidade <= 0) {
                carrinho.splice(indiceBusca, 1)
            }

            console.log("Item reduzido")
        }

        return carrinho
    }

    function removeItem(idItem) {
        carrinho = carrinho.filter(item => item.id !== idItem)


        console.log("Item removido.")
        return carrinho
    }

    return {
        pegaItens,
        pegaPrecoTotal,
        pegaPrecoTotalItem,
        pegaQuantidadeItem,
        adicionaItem,
        reduzItem,
        removeItem
    }
}


export default ServicoCarrinho()
