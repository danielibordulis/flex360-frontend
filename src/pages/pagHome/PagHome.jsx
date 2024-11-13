import React, { useEffect, useState } from 'react'
import "./PagHome.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CadeiraHome from '../../components/cadeiraHome/CadeiraHome'
import cadeiraJson from '../../utils/json/cadeira.json'
import httpClient from '../../services/httpClient'


function PagHome() {
  const [cadeiras, setCadeiras] = useState([]);

  // Função para buscar as cadeiras e selecionar algumas aleatoriamente
  const fetchRandomCadeiras = async () => {

    let todasCadeiras

    const resultado = await httpClient().get('/cadeira/buscarTodas', false)

    if (resultado) {
      todasCadeiras = resultado
    }

    const shuffled = [...todasCadeiras].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);

    setCadeiras(selected);
  };

  useEffect(() => {
    fetchRandomCadeiras();
  }, []);

  return (
    <>
      <Header />
      <section className='bodyHome'>
        <div className='bannerPrincipal'>
          <img src='./bannerOrigin.png' alt='Banner Flex360. Do lado esquerdo do banner, um fundo azul-acinzentado bem suave com a frase "O CONFORTO QUE VOCÊ MERECE" escrita em letras grandes e brancas, aparece bem chamativo. Embaixo, em letras menores e itálicas, diz: "Escritório ergonômico, tenha sua cadeira dos sonhos!".  Já do lado direito, uma foto de um escritório moderno e super iluminado. É possível ver mesas claras, cadeiras ergonômicas estilosas (pretas e cinzas). É possível avistar uma janela e pessoas trabalhando em harmonia.' />
        </div>

        <div className="imagens-secao">
          <img src="../../../public/conforto1.png" alt="Imagem ilustrativa escrito: escolha a cadeira certa para você" className="imagemEstilo" />
          <img src="../../../public/conforto2.png" alt="imagem ilustrativa escrito: o melhor para sua saude" className="imagemEstilo" />
          <img src="../../../public/conforto3.png" alt="Imagem ilustrativa escrito: design unico" className="imagemEstilo" />
          <img src="../../../public/conforto4.png" alt="Imagem ilustrativa escrito: o conforto que você precisa" className="imagemEstilo" />
        </div>
        <div className='elementosBody'>

          <h1 className='tituloCadeira'>Cadeiras ergonômicas para seu dia a dia: </h1>
          <div className='cadeiraHome-div'>
            {
              cadeiras.map((cadeira, index) => <CadeiraHome key={cadeira.id} id={cadeira.id} cor={cadeira.cores_disponiveis[0]} nome={cadeira.nome} preco={cadeira.preco} />)
            }


          </div>
          <div className='quemSomos'>
            <img src="./trabalhador.png.png" alt="Imagem de um homem sentado no escritório com seu notebook" />
            <h3>Quem somos</h3>
            <p className='tituloBemVindo'>Bem-vindo à Flex360!
              Cadeiras ergonômicas e consultoria para um ambiente de trabalho saudável.
              Explore nossas soluções: cadeiras ergonômicas, assessoria e consultoria de ergonomia conforme a NR17.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PagHome
