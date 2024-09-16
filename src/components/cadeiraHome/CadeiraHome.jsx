import React from 'react'
import './CadeiraHome.css'

function CadeiraHome() {
  return (
    <>
      <div className='container-cadeiraHome'>
        <img  className='cadeiraHome-img' src='./cadeira-ex.png'/>
        <h2 className='cadeiraHome-titulo'>nome da cadeira</h2>
        <h1 className='valor-cadeiraHome'>R$ 950,00</h1>

        <button className='cadeiraHome-botao'>Ver mais</button>
      </div>
    </>
  )
}

export default CadeiraHome
