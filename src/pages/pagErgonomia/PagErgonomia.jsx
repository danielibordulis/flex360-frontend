import { useState } from 'react';
import Header from '../../components/header/Header';
import './PagErgonomia.css';
import Footer from '../../components/footer/Footer';
import httpClient from '../../services/httpClient';

export default function PagErgonomia() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [sugestao, setSugestao] = useState("");
  const [opcaoDesign, setOpcaoDesign] = useState(""); // Agora apenas uma opção de design será armazenada

  function encontrarSugestao(e) {
    e.preventDefault();

    const dadosErgonomia = {
      altura: parseFloat(altura),
      peso: parseFloat(peso),
      design: opcaoDesign, // Envia apenas uma opção de design
    };

    httpClient.post('/api/ergonomia/sugestao', dadosErgonomia)
      .then(response => {
        setSugestao(response.data);
      })
      .catch(() => {
        alert("Erro ao buscar sugestão");
      });
  }

  function handleRadioChange(e) {
    setOpcaoDesign(e.target.value);
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
            
            <h2 className="titulo-ergonomia">Estilos De Design:</h2>
            <div className="design-opcoes">
              <label className="opcao-design">
                <input 
                  type="radio" 
                  name="design" 
                  value="contemporaneo" 
                  checked={opcaoDesign === "contemporaneo"}
                  onChange={handleRadioChange}
                />
                Contemporâneo
              </label>
              <label className="opcao-design">
                <input 
                  type="radio" 
                  name="design" 
                  value="minimalista" 
                  checked={opcaoDesign === "minimalista"}
                  onChange={handleRadioChange}
                />
                Minimalista
              </label>
              <label className="opcao-design">
                <input 
                  type="radio" 
                  name="design" 
                  value="classico" 
                  checked={opcaoDesign === "classico"}
                  onChange={handleRadioChange}
                />
                Clássico
              </label>
            </div> 
            
            <button type="submit" className="botao-encontrar">Encontrar</button>
          </form>

          {sugestao && <p className="sugestao-resultado">Sugestão: {sugestao}</p>}
        </div>
        <div className="container-direita" />
      </section>
      <Footer />
    </>
  );
}
