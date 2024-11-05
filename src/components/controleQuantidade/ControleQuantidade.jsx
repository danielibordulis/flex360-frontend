import { useContext, useState } from 'react'
import "./ControleQuantidade.css"
import {CarrinhoContext} from '../../contexts/CarrinhoContext.jsx'

function ControleQuantidade({id, quantidade}) {

  const { aumentaQuantidade, reduzQuantidade} = useContext(CarrinhoContext)
  const[quantidadeItem, setQuantidadeItem] = useState(quantidade)


  return (
    <div className='container-controle-quantidade'>
      <button onClick={async() => setQuantidadeItem(await aumentaQuantidade(id))
      }>
        <img src="./icon-mais.png" alt="Aumentar quantidade" />
      </button>

      <span aria-live='polite'>{quantidadeItem}</span>

      <button onClick={ async() => setQuantidadeItem(await reduzQuantidade(id))} disabled={quantidadeItem === 1}>
        <img src="./icon-menos.png" alt="Diminuir quantidade" />
      </button>
    </div>
  )
}

export default ControleQuantidade