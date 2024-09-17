import React from 'react'
import "./ItemCarrinho.css"
import ControleQuantidade from '../controleQuantidade/ControleQuantidade'
import PaletaCor from '../paletaCor/PaletaCor'

function ItemCarrinho({item}) {
  
  if(!item) return null
  return (
    <div className='item-container'>
      <div className='container-img-carrinho'>
        <img src={item.foto_cadeira? item.foto_cadeira : item.foto} alt="" />
      </div>
      <div className='container-info-item'>

            <div className='container-top-item'>
                <div className='container-nome-item'>
                    <h2>{item.nome}</h2>
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
                {item.cores && item.cores.length > 0 && (
                  <PaletaCor cores={item.cores} />
                  )}
                <span className='item-preco'>R$1500.00</span>
            </div>

      </div>
    </div>
  )
}

export default ItemCarrinho
