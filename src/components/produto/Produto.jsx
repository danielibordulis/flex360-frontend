
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
      <img src={imagem} alt={descricao} className="produto-imagem" />
      <p className="produto-descricao">{descricao}</p>

      <div className="controle-quantidade">
        <button className="botao-quantidade" onClick={diminuirQuantidade}>-</button>
        <span className="numero-quantidade">{quantidade}</span>
        <button className="botao-quantidade" onClick={aumentarQuantidade}>+</button>
      </div>
      
      <p className="produto-preco">R${preco.toFixed(2)}</p>
    </div>
  );
}
