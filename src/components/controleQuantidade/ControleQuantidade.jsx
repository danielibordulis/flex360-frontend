import React, { useContext, useState } from 'react'
import "./ControleQuantidade.css"
import {CarrinhoContext} from '../../contexts/CarrinhoContext.jsx'

function ControleQuantidade({id, quantidade}) {

  const { aumentaQuantidade, reduzQuantidade} = useContext(CarrinhoContext)
  const[quantidadeItem, setQuantidadeItem] = useState(quantidade)


  return (
    <div className='container-controle-quantidade'>
      <button onClick={() => setQuantidadeItem(aumentaQuantidade(id))}>
        <img src="./icon-mais.png" alt="" />
      </button>

      <span>{quantidadeItem}</span>

      <button onClick={() => setQuantidadeItem(reduzQuantidade(id))} disabled={quantidadeItem === 1}>
        <img src="./icon-menos.png" alt="" />
      </button>
    </div>
  )
}

export default ControleQuantidade