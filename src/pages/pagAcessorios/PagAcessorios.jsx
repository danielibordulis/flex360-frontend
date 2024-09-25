
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Produto from '../../components/produto/Produto';
import './PagAcessorios.css';

export default function PagAcessorios() {
  const [produtos] = useState([
    {
      id: "efhmef97aehf-a9e7fh9e7mfhae-a9e7fhngae97f",
      nome: "Carregador por indução",
      foto: "./rodinha-acessorios.png",
      preco: 13.40
    },
    {
      id: "efhmef97aehf-a9e7fh9e7mfhae-a9e7fhngae97f",
      nome: "Pistão á gás para cadeiras até 150 Kilos",
      foto: "./rodinha-acessorios.png",
      preco: 12.40
    },
    {
      id: "efhmef97aehf-a9e7fh9e7mfhae-a9e7fhngae97f",
      nome: "Rodizio em gel c/ capa preta",
      foto: "./rodinha-acessorios.png",
      preco: 11.40
    },
    {
      id: "efhmef97aehf-a9e7fh9e7mfhae-a9e7fhngae97f",
      nome: "Suporte para monitor",
      foto: "./rodinha-acessorios.png",
      preco: 10.40
    },
    {
      id: "efhmef97aehf-a9e7fh9e7mfhae-a9e7fhngae97f",
      nome: "Suporte para notebook",
      foto: "./rodinha-acessorios.png",
      preco: 17.40
    },
    {
      id: "efhmef97aehf-a9e7fh9e7mfhae-a9e7fhngae97f",
      nome: "Apoio de pé ergonômico e ajustável",
      foto: "./rodinha-acessorios.png",
      preco: 18.40
    }
  ]);

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
    </>
  );
}
