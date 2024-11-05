import  { useState } from 'react';
import Header from '../../components/header/Header';
import './PagErgonomia.css';
import Footer from '../../components/footer/Footer';
import httpClient from '../../services/httpClient';

export default function PagErgonomia() {
  // Estados para capturar a altura, peso e a sugestão retornada
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [sugestao, setSugestao] = useState("");

  // Função para lidar com a submissão do formulário e enviar os dados para o back-end
  function encontrarSugestao(e) {
    e.preventDefault();

    const dadosErgonomia = {
      altura: parseFloat(altura),
      peso: parseFloat(peso),
    };

    httpClient.post('/api/ergonomia/sugestao', dadosErgonomia)
      .then(response => {
        setSugestao(response.data);
      })
      .catch(() => {
        alert("Erro ao buscar sugestão");
      });
  }

  return (
    <>
      <Header /> 
      <section className="body-ergonomia">
        <div className="container-esquerda">
          <img className="imagem-certificacao" src="./foto-certificacao.png" alt="Certificação" />
          <h1 className="titulo-principal">Encontre sua cadeira ergonômica:</h1>

          <form className="form-ergonomia" onSubmit={encontrarSugestao}>
            <div>
              <label className="form-label" htmlFor="altura">Sua altura:</label>
              <input 
                id="altura" 
                type="text" 
                placeholder="Digite sua altura" 
                value={altura}
                onChange={e => setAltura(e.target.value)}
              />
            </div>
            
            <div>
              <label className="form-label" htmlFor="peso">Seu peso:</label>
              <input 
                id="peso" 
                type="text" 
                placeholder="Digite seu peso" 
                value={peso}
                onChange={e => setPeso(e.target.value)}
              />
            </div>
            
            <button type="submit" className="botao-encontrar">Encontrar</button>
          </form>

          {/* Exibe a sugestão recebida do back-end */}
          {sugestao && <p className="sugestao-resultado">Sugestão: {sugestao}</p>}

          <h2 className="titulo-ergonomia">Estilos De Design:</h2>
          <div className="design-opcoes">
            <p className="opcao-design">Contemporâneo?</p>
            <p className="opcao-design">Minimalista?</p>
            <p className="opcao-design">Clássico?</p>
          </div>
        </div>
        <div className="container-direita" />
      </section>
      <Footer />
    </>
  );
}
