import React from 'react';
import './Produto.css';
import { useNavigate } from 'react-router-dom';

export default function Produto({ id, nome, foto, preco }) {
  const navigate = useNavigate();

  const adicionarAoCarrinho = () => {
    const produto = { id, nome, foto, preco };
    servicoCarrinho.adicionaItem(produto);
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
          <img src="public/botaoCarrinho.png" alt="Carrinho" />
        </button>
      </div>
    </div>
  );
}
