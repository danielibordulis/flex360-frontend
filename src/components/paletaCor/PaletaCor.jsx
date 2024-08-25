import React from 'react'
import "./PaletaCor.css"

function PaletaCor({cores}) {

  // const corExemplo = {
  //   name: "Marrom",
  //   cod: "#a52a2a"
  // }

  return (
    <div className='paleta'>
      <div className='container-paleta'>
        
          {
            cores.length > 0 && cores.map((cor, index) => (

                  <button className='btn-cor' key={index} style={{backgroundColor: cor.cod}}></button>

            ))
          }

      </div>
      <span>{cores[0].name}</span>
    </div>
  )
}

export default PaletaCor
