import React, { useState } from 'react'
import "./ControleQuantidade.css"
import ServicoCarrinho from '../../services/servico-carrinho'

function ControleQuantidade({id}) {

  const[quantidadeItem, setQuantidadeItem] = useState(ServicoCarrinho.pegaQuantidadeItem(id))

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

      <button onClick={reduzQuantidade}>
        <img src="./icon-menos.png" alt="" />
      </button>
    </div>
  )
}

export default ControleQuantidade