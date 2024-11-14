import React, { useContext } from 'react';
import './Produto.css';
import { useNavigate } from 'react-router-dom';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import { validaToken } from '../../utils/validation-user';

export default function Produto({ id, nome, foto, preco }) {
  const navigate = useNavigate();
  const { adicionaItem } = useContext(CarrinhoContext)

  const adicionarAoCarrinho = async () => {
    const produto = { id, nome, foto, preco };

    const isAuthenticated = await validaToken()

    if (!isAuthenticated) {

      navigate('/entrar')
      return

    }

    adicionaItem(produto)
    navigate('/carrinho');
  };

  return (
    <div className="produto">
      <div className="container-image-prod">
        <img src={foto} alt={nome} className="produto-imagem" />
      </div>

      <div className="container-descricao-prod">
        <p className="produto-descricao">{nome}</p>
      </div>

      <div className="container-preco-prod">
        <span className="produto-preco">R$ {preco.toFixed(2)}</span> 
        
       
        <button className="botao-carrinho" onClick={adicionarAoCarrinho}>
          <img src="./botaoCarrinho.png" alt="Adicionar ao carrinho" />
        </button>
      </div>
    </div>
  );
}
