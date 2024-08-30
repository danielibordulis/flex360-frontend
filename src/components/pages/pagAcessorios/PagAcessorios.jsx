
import React from 'react';
import Header from '../../header/Header';
import Nav from '../../nav/Nav';
import Produto from '../../produto/Produto'
import './PagAcessorios.css';


export default function PagAcessorios() {
  const produtos = [
    {
      imagem: '/carregador-acessorios.png',
      descricao: 'Carregador por indução',
      preco: 250.00,
    },
    {
      imagem: '/pistao-acessorios.png',
      descricao: 'Pistão á gás',
      preco: 280.00,
    },
    {
      imagem: '/rodinha-acessorios.png',
      descricao: 'Rodízio em gel c/ capa preta',
      preco: 80.00,
    },
    {
      imagem: '/monitor-acessorios.png',
      descricao: 'Suporte para monitor',
      preco: 1154.23,
    },
    {
      imagem: '/notebook-acessorios.png',
      descricao: 'Suporte para notebook',
      preco: 893.00,
    },
    {
      imagem: '/apoiaPes-acessorios.png',
      descricao: 'Apoia pés ergonômico',
      preco: 230.23,
    },
  ];

  return (
    <>
      <Header/>
      <Nav />
      <section className="body">
        {produtos.map((produto, index) => (
          <Produto
            key={index}
            imagem={produto.imagem}
            descricao={produto.descricao}
            preco={produto.preco}
          />
        ))}
      </section>
    </>
  );
}