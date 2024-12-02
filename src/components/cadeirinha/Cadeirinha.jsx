import './Cadeirinha.css'
import { useNavigate } from 'react-router-dom'

function Cadeirinha({ id, nomeCadeira, precoCadeira, cor }) {

  const navigate = useNavigate()

  function navegarParaCadeiraIndividual() {
    navigate("/cadeiraIndividual", {
      state: { cadeiraId: id, corId: cor.id}
    })
  }

  return (
    <>
      <div className='container-cadeirinha' onClick={navegarParaCadeiraIndividual} >
        <div className='div-img'>
          <img src={cor.foto_cadeira} alt="cadeirinha" />
        </div>
        <div className='texto'>
          <p className='nomeCadeirinha'> {nomeCadeira}</p>
          <p className='preçoCadeirinha'>R$ {Number(precoCadeira).toLocaleString('pt-BR')}</p>
        </div>
      </div>
    </>
  )
}

export default Cadeirinha
