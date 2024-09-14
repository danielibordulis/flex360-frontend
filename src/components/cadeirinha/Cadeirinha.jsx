import './Cadeirinha.css'
import { useNavigate } from 'react-router-dom'

function Cadeirinha({id, nomeCadeira, precoCadeira}) {

  const navigate = useNavigate()

  return (
    <>
      <div className='container-cadeirinha'>
            <div className='div-img'>
                <img src="./cadeirinha.png" alt="cadeirinha" />
            </div>
            <div className='texto'>
                <p className='nomeCadeira'> {nomeCadeira}</p>
                <p className='preço'>R$ {Number(precoCadeira).toLocaleString('pt-BR')}</p>
            </div>
          </div>
    </>
  )
}

export default Cadeirinha
