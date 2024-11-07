import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from  '../../components/footer/Footer'
import Produto from '../../components/produto/Produto';
import httpClient from '../../services/httpClient'
import './PagAcessorios.css';

export default function PagAcessorios() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {

    httpClient().get('/acessorio/buscarTodos')
      .then(response => {

        setProdutos(response)

      })
      .catch((e) => {
        alert("erro")
        console.error("Erro: " + e)
      })

  }, [])

  return (
    <>
      <Header />
      <section className="body-acessorios">
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <Produto
              key={produto.id}
              id={produto.id}
              foto={produto.foto}
              nome={produto.nome}
              preco={produto.preco}
            />
          ))
        ) : (
          <p className='mensagem'>Carregando acessórios...</p>
        )}
      </section>
      <Footer />
    </>
  );
}
