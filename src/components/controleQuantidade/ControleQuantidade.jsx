import React, { useState } from 'react'
import "./ControleQuantidade.css"
import ServicoCarrinho from '../../services/servico-carrinho'

function ControleQuantidade({id}) {

  const[quantidadeItem, setQuantidadeItem] = useState(ServicoCarrinho)

  return (
    <div className='container-controle-quantidade'>
      <button onClick={() => ServicoCarrinho.adicionaItem(id)}>
        <img src="./icon-mais.png" alt="" />
      </button>

      <span>1</span>

      <button>
        <img src="./icon-menos.png" alt="" />
      </button>
    </div>
  )
}

export default ControleQuantidade