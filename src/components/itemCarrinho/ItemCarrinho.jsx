import { useContext, useEffect, useState } from 'react'
import "./ItemCarrinho.css"
import ControleQuantidade from '../controleQuantidade/ControleQuantidade'
import PaletaCor from '../paletaCor/PaletaCor'
import { CarrinhoContext } from '../../contexts/CarrinhoContext'

function ItemCarrinho({ item }) {

  if (!item) return null

  let initialFoto

  if (item.coresDisponiveis) {
    initialFoto = item.coresDisponiveis[0].foto_cadeira
  }

  const { removeItem } = useContext(CarrinhoContext)
  const [fotoCorCadeira, setFotoCorCadeira] = useState(initialFoto);

  useEffect(() => {
    if (item.coresDisponiveis) {
      const corSelecionada = item.coresDisponiveis.find(obj => obj.id === item.corSelecionada.id);

      setFotoCorCadeira(corSelecionada.foto_cadeira)
    }
  }, [])


  return (
    <div className='item-container'>
      <div className='container-img-carrinho'>
        <img src={fotoCorCadeira ? fotoCorCadeira : item.foto} alt="" />
      </div>
      <div className='container-info-item'>

        <div className='container-top-item'>
          <div className='container-nome-item'>
            <h2>{item.nome}</h2>
          </div>
          <div className='container-deletar-item'>
            <button onClick={async () => await removeItem(item.id)}>
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
          <span className={`item-preco ${!item.cores_disponiveis ? "isAcessorio" : ""}`} >{Number(item.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>

      </div>
    </div>
  )
}

export default ItemCarrinho