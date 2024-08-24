import './index.css'

function Erro({ mensagem }) {
    if(!mensagem) {
        return null
    }

  return (
    <p className="erro">
      {mensagem}
    </p>
  )
}

export default Erro
