import React, { useState } from 'react'
import "./ControleQuantidade.css"
import ServicoCarrinho from '../../services/servico-carrinho'

function ControleQuantidade({id, quantidade}) {

  const[quantidadeItem, setQuantidadeItem] = useState(quantidade)

  function aumentaQuantidade() {
    setQuantidadeItem(ServicoCarrinho.aumentaQuantidade(id))
  }

  function reduzQuantidade() {

    setQuantidadeItem(ServicoCarrinho.reduzQuantidade(id))
  }

  return (
    <div className='container-controle-quantidade'>
      <button onClick={aumentaQuantidade}>
        <img src="./icon-mais.png" alt="" />
      </button>

      <span>{quantidadeItem}</span>

      <button onClick={reduzQuantidade} disabled={quantidadeItem === 1}>
        <img src="./icon-menos.png" alt="" />
      </button>
    </div>
  )
}

export default ControleQuantidade