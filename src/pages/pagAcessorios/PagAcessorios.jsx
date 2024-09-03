
import React from 'react';
import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import Produto from '../../components/produto/Produto'
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
      <section className="body-acessorios">
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
