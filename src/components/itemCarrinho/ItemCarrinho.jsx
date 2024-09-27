import { useContext } from 'react'
import "./ItemCarrinho.css"
import ControleQuantidade from '../controleQuantidade/ControleQuantidade'
import PaletaCor from '../paletaCor/PaletaCor'
import { CarrinhoContext } from '../../contexts/CarrinhoContext'

function ItemCarrinho({ item }) {

  if (!item) return null


  const { removeItem } = useContext(CarrinhoContext)


  return (
    <div className='item-container'>
      <div className='container-img-carrinho'>
        <img src={item.foto_cadeira ? item.foto_cadeira : item.foto} alt="" />
      </div>
      <div className='container-info-item'>

        <div className='container-top-item'>
          <div className='container-nome-item'>
            <h2>{item.nome}</h2>
          </div>
          <div className='container-deletar-item'>
            <button onClick={() => removeItem(item.id)}>
              <img src="botao-deletar.png" alt="Remover do carrinho" />
            </button>
          </div>
        </div>
        <div className='container-middle-item'>
          <ControleQuantidade id={item.id} quantidade={item.quantidade} />
        </div>
        <div className='container-top-bottom'>
          {item.cores_disponiveis && (
            <PaletaCor cores={item.cores_disponiveis} />
          )}
          <span className={`item-preco ${!item.cores_disponiveis ? "isAcessorio" : ""}`} >{Number(item.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
        </div>

      </div>
    </div>
  )
}

export default ItemCarrinho