import React from 'react'
import "./PagHome.css"
import Header from '../../components/header/Header'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import CadeiraHome from '../../components/cadeiraHome/CadeiraHome'



function PagHome() {
  return (
    <>
      <Header/>
      <section className='bodyHome'>
            <div className='bannerPrincipal'>
             <img src="./bannerOrigin.png" alt="Banner grande"/>
            </div>
            <div className='elementosBody'>
                <div className='cadeiraHome-div'>
                  <CadeiraHome/>
                  <CadeiraHome/>
                  <CadeiraHome/>
                  <CadeiraHome/>
                  <CadeiraHome/>
                </div> 
                <div className='cadeiraHome-div2'>
                  <CadeiraHome/>
                  <CadeiraHome/>
                  <CadeiraHome/>
                  <CadeiraHome/>
                  <CadeiraHome/>
                </div>                 
                <div className='quemSomos'>
                    <img src="./trabalhador.png.png" alt="imagem de um homem sentado no escritorio com seu notebook"/>
                    <p>Quem somos</p>
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
