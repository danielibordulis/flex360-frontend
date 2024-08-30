import React, { useState } from 'react'
import "./PaletaCor.css"

function PaletaCor({cores}) {

  // const corExemplo = {
  //   id: "12312aefef-aefaefaef-aefefefe"
  //   name: "Marrom",
  //   cod: "#a52a2a"
  // }
 
  const [corSelecionada, setCorSelecionada] = useState(cores[0])

  const handleClick = (cor) => {
    setCorSelecionada(cor);
  };

  return (
    <div className='paleta'>
      <div className='container-paleta'>
        
          {
            cores.length > 0 && cores.map((cor, index) => (

                  <button  
                    className={`btn-cor ${corSelecionada.cod === cor.cod ? 'cor-selecionada' : ''}`}
                    key={index} 
                    style={{backgroundColor: cor.cod}}
                    onClick={() => {handleClick(cor)}}
                  />

            ))
          }

      </div>
      <span>{corSelecionada.name}</span>
    </div>
  )
}

export default PaletaCor
