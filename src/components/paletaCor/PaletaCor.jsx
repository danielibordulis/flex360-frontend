import React, { useState } from 'react'
import "./PaletaCor.css"

function PaletaCor({cores}) {
 
  const [corSelecionada, setCorSelecionada] = useState(cores[0])
  console.log(corSelecionada)

  const handleClick = (cor) => {
    setCorSelecionada(cor);
  };

  return (
    <div className='paleta'>
      <div className='container-paleta'>
        
          {
            cores.length > 0 && cores.map((cor) => (

                  <button  
                    className={`btn-cor ${corSelecionada.codigo === cor.codigo ? 'cor-selecionada' : ''}`}
                    key={cor.id} 
                    style={{backgroundColor: cor.codigo}}
                    onClick={() => {handleClick(cor)}}
                  />

            ))
          }

      </div>
      <span>{corSelecionada.nome}</span>
    </div>
  )
}

export default PaletaCor
