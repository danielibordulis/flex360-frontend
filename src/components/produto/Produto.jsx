
import React, { useState } from 'react';
import './Produto.css';

export default function Produto({ imagem, descricao, preco }) {
  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => setQuantidade(quantidade + 1);
  const diminuirQuantidade = () => {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  };

  return (
    <div className="produto">
      {/* Imagem do produto */}
      <img src={imagem} alt={descricao} className="produto-imagem" />

      {/* Descrição do produto */}
      <p className="produto-descricao">{descricao}</p>

      {/* Controle de quantidade */}
      <div className="controle-quantidade">
        <button className="botao-quantidade" onClick={diminuirQuantidade}>-</button>
        <span className="numero-quantidade">{quantidade}</span>
        <button className="botao-quantidade" onClick={aumentarQuantidade}>+</button>
      </div>

      {/* Botão de carrinho */}
      <img src="public/botaoCarrinho.png" alt="Carrinho" className="botao-carrinho" />

      {/* Preço do produto */}
      <p className="produto-preco">R${preco.toFixed(2)}</p>
    </div>
  );
}

