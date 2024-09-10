import React from 'react'
import './CadeiraHome.css'
import { useNavigate } from 'react-router-dom'


function CadeiraHome({ foto_cadeira, nome,preco}) {
  
    const navigate = useNavigate();

    function irPara() {

      navigate(`/cadeiraIndividual`)

  }
  return (
    <>
      <div className='container-cadeiraHome'>
        <img  className='cadeiraHome-img' src={foto_cadeira}/>
        <h2 className='cadeiraHome-titulo'>{nome}</h2>
        <h1 className='valor-cadeiraHome'>R$ {preco}</h1>

        <button onClick={irPara} className='cadeiraHome-botao'>Ver mais</button>
      </div>
    </>
  )
}

export default CadeiraHome
