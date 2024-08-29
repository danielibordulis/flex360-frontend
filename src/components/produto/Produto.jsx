
import React, { useState } from 'react';
import './Produto.css';
import ControleQuantidade from "../controleQuantidade//ControleQuantidade"

export default function Produto({ imagem, descricao, preco }) {
  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => setQuantidade(quantidade + 1);
  const diminuirQuantidade = () => {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  };

  return (
    <div className="produto">

      <div className='container-image-prod'>
        <img src={imagem} alt={descricao} className="produto-imagem" />
      </div>

      <div className='container-descricao-prod'>
        <p className="produto-descricao">{descricao}</p>
      </div>

      <div className='container-controle-quantidade'>
       <ControleQuantidade />
      </div>

      <div className='container-preco-prod'>
        <button className="botao-carrinho">
          <img src="public/botaoCarrinho.png" alt="Carrinho"  />
        </button>
        <span className="produto-preco">R${preco.toFixed(2)}</span>
      </div>
      
    </div>
  );
}

