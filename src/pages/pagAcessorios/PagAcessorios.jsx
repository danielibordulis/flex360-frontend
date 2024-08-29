
import React from 'react';
import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import Produto from '../../components/produto/Produto'
import './PagAcessorios.css';


export default function PagAcessorios() {
  const produtos = [
    {
<<<<<<< HEAD
      imagem: '/carregador-acessorios.png',
=======
      imagem: 'public/carregador-acessorios.png',
>>>>>>> 52dc0dd (produtos e descricao)
      descricao: 'Carregador por indução',
      preco: 250.00,
    },
    {
<<<<<<< HEAD
      imagem: '/pistao-acessorios.png',
=======
      imagem: 'public/pistao-acessorios.png',
>>>>>>> 52dc0dd (produtos e descricao)
      descricao: 'Pistão á gás',
      preco: 280.00,
    },
    {
<<<<<<< HEAD
      imagem: '/rodinha-acessorios.png',
=======
      imagem: 'public/rodinha-acessorios.png',
>>>>>>> 52dc0dd (produtos e descricao)
      descricao: 'Rodízio em gel c/ capa preta',
      preco: 80.00,
    },
    {
<<<<<<< HEAD
      imagem: '/monitor-acessorios.png',
=======
      imagem: 'public/monitor-acessorios.png',
>>>>>>> 52dc0dd (produtos e descricao)
      descricao: 'Suporte para monitor',
      preco: 1154.23,
    },
    {
<<<<<<< HEAD
      imagem: '/notebook-acessorios.png',
=======
      imagem: 'public/notebook-acessorios.png',
>>>>>>> 52dc0dd (produtos e descricao)
      descricao: 'Suporte para notebook',
      preco: 893.00,
    },
    {
<<<<<<< HEAD
      imagem: '/apoiaPes-acessorios.png',
=======
      imagem: 'public/apoiaPes-acessorios.png',
>>>>>>> 52dc0dd (produtos e descricao)
      descricao: 'Apoia pés ergonômico',
      preco: 230.23,
    },
  ];

  return (
<<<<<<< HEAD
    <>
=======
    <div className="pag-acessorios">
>>>>>>> 52dc0dd (produtos e descricao)
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
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> 52dc0dd (produtos e descricao)
  );
}
