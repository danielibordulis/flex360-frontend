import React from 'react'
import './CadeiraHome.css'
import { useNavigate } from 'react-router-dom'


function CadeiraHome({id, foto_cadeira, nome,preco}) {
  

  const navigate = useNavigate()

    function navegarParaCadeiraIndividual() {

        navigate("/cadeiraIndividual", {
            state: { cadeiraId: id },
        });

    }
  return (
    <>
      <div className='container-cadeiraHome'>
        <img  className='cadeiraHome-img' src={foto_cadeira}/>
        <h2 className='cadeiraHome-titulo'>{nome}</h2>
        <h1 className='valor-cadeiraHome'>R$ {preco}</h1>

        <button onClick={navegarParaCadeiraIndividual} className='cadeiraHome-botao'>Ver mais</button>
      </div>
    </>
  )
}

export default CadeiraHome
