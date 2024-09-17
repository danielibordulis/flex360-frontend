function ServicoCarrinho() {
    let carrinho = []
    
    function adicionaItem(itemAdd) {
    let indiceBusca = carrinho.findIndex(itemBuscar => itemBuscar.id == itemAdd.id)
        if(indiceBusca !==-1) {
            carrinho[indiceBusca].quantidade += itemAdd.quantidade
        }
        else carrinho.push(itemAdd)

        console.log("Item adicionado")
        return carrinho
    }


    function reduzItem(idItem) {
        let indiceBusca = carrinho.findIndex(itemBuscar => itemBuscar.id == itemAdd.id)
            if(indiceBusca !== -1) {
                carrinho[indiceBusca].quantidade--

                if(carrinho[indiceBusca].quantidade <= 0) {
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

    function pegaItens() {
        return carrinho
    }

    return {
        adicionaItem,
        removeItem,
        pegaItens
    }
}


export default ServicoCarrinho()
