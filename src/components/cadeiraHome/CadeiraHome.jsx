import React from 'react'
import './CadeiraHome.css'
import { useNavigate } from 'react-router-dom'


function CadeiraHome({id, cor, nome,preco}) {
  

  const navigate = useNavigate()

    function navegarParaCadeiraIndividual() {

        navigate("/cadeiraIndividual", {
            state: { cadeiraId: id, corId: cor.id },
        });

    }
  return (
    <>
      <div className='container-cadeiraHome'>
        <img  className='cadeiraHome-img' src={cor.foto_cadeira} alt=''/>
        <h2 className='cadeiraHome-titulo'>{nome}</h2>
        <h3 className='valor-cadeiraHome'>R$ {preco}</h3>

        <button onClick={navegarParaCadeiraIndividual} className='cadeiraHome-botao'>Ver mais</button>
      </div>
    </>
  )
}

export default CadeiraHome