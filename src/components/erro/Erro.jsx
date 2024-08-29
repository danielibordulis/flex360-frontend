function Erro({mensagem}) {
    if(!mensagem) return null
  return (
    <p className="cor-erro">
      {mensagem}
    </p>
  )
}

export default Erro