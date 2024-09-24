
import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Produto from '../../components/produto/Produto';
import './PagAcessorios.css';

export default function PagAcessorios() {
  const [produtos, setProdutos] = useState([]);

 
  const buscarAcessorios = async () => {
    try {
      const response = await fetch('/api/acessorios'); // Mude esta rota para  API
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error('Erro ao buscar acessórios:', error);
    }
  };

  // useEffect para buscar os acessórios quando a página carregar
  useEffect(() => {
    buscarAcessorios();
  }, []);

  return (
    <>
      <Header/>
      <section className="body-acessorios">
        {produtos.length > 0 ? (
          produtos.map((produto, index) => (
            <Produto
              key={index}
              imagem={produto.imagem}
              descricao={produto.descricao}
              preco={produto.preco}
            />
          ))
        ) : (
          <p className='mensagem'>Carregando acessórios...</p>
        )}
      </section>
    </>
  );
}
