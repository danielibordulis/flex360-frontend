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
      <Header/>
      <section className='bodyHome'>
            <div className='bannerPrincipal'>
             <img src="./bannerOrigin.png" alt="Banner grande"/>
            </div>
            <div className='elementosBody'>
                <div className='cadeiraHome-div'>
                  {
                    cadeiras.map((cadeira,index) => <CadeiraHome  key={cadeira.id} id={cadeira.id} cor={cadeira.cores_disponiveis[0]} nome={cadeira.nome} preco={cadeira.preco}/>)
                  }
                 
                  
                </div>               
                <div className='quemSomos'>
                    <img src="./trabalhador.png.png" alt="imagem de um homem sentado no escritorio com seu notebook"/>
                    <h2>Quem somos</h2>
                    <p>Bem-vindo à Flex360!
                    Cadeiras ergonômicas e consultoria para um ambiente de trabalho saudável.
                    Explore nossas soluções: cadeiras ergonômicas, assessoria e consultoria de ergonomia conforme a NR17.</p>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default PagHome
