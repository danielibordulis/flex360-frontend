import { useState } from 'react'
import "./PaletaCor.css"

function PaletaCor({ cores }) {

  const [corSelecionada, setCorSelecionada] = useState(cores[0])

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
              style={{ backgroundColor: cor.codigo }}
              onClick={() => { handleClick(cor) }}
              aria-label={cor.nome} aria-current={corSelecionada.nome === cor.nome}>
              </button>

          ))
        }

      </div>
      <span>{corSelecionada.nome}</span>
    </div>
  )
}

export default PaletaCor