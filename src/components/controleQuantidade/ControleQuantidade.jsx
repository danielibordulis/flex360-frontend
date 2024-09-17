import React from 'react'
import "./ControleQuantidade.css"

function ControleQuantidade() {
  return (
    <div className='container-controle-quantidade'>
      <button>
        <img src="./icon-mais.png" alt="" />
      </button>

      <span>1</span>

      <button>
        <img src="./icon-menos.png" alt="" />
      </button>
    </div>
  )
}

export default ControleQuantidade