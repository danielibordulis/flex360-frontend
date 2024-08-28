import React from 'react'
import "./ItemCarrinho.css"
import ControleQuantidade from '../controleQuantidade/ControleQuantidade'
import PaletaCor from '../paletaCor/PaletaCor'

function ItemCarrinho() {
  return (
    <div className='item-container'>
      <div className='container-img-carrinho'>
        <img src="./cadeira-ex.png" alt="" />
      </div>
      <div className='container-info-item'>

            <div className='container-top-item'>
                <div className='container-nome-item'>
                    <h2>Nome do produto</h2>
                </div>
                <div className='container-deletar-item'>
                    <button>
                        <img src="botao-deletar.png" alt="" />
                    </button>
                </div>
            </div>
            <div className='container-middle-item'>
                <ControleQuantidade />
            </div>
            <div className='container-top-bottom'>
                <PaletaCor cores={[{name: "Marrom", cod: "#a52a2a", id: ""},{name: "Preto", cod: "#1E0303", id: ""},{name: "Roxo", cod: "#7C1FF1", id: ""}]}/>
                <span className='item-preco'>R$1500.00</span>
            </div>

      </div>
    </div>
  )
}

export default ItemCarrinho
