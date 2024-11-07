import { useState } from 'react';
import Header from '../../components/header/Header';
import './PagErgonomia.css';
import Footer from '../../components/footer/Footer';
import httpClient from '../../services/httpClient';
import { useNavigate } from 'react-router-dom';

export default function PagErgonomia() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [opcaoDesign, setOpcaoDesign] = useState(""); 
  const [error, setError] = useState("");
  const navigate = useNavigate()

  function encontrarSugestao(e) {
    e.preventDefault();

   
    const alturaFloat = parseFloat(altura.replace(',', '.'));
    const pesoFloat = parseFloat(peso.replace(',', '.'));

    
    if (alturaFloat < 1.4 || alturaFloat > 2.0) {
      setError("A altura deve estar entre 1,4 m e 2,0 m para uma postura ergonômica.");
      return;
    }
    if (pesoFloat < 40 || pesoFloat > 150) {
      setError("O peso deve estar entre 40 kg e 150 kg para uma postura ergonômica.");
      return;
    }
    
    
    setError("");

    const dadosErgonomia = {
      altura: alturaFloat,
      peso: pesoFloat,
      categoria: [opcaoDesign], 
    };

    const token = localStorage.getItem('token')

    httpClient().post('/cadeira/sugestaoErgonomica', dadosErgonomia, token)
      .then(response => {

        navigate("/cadeiraIndividual", {
          state: { cadeiraId: response.id, corId: response.cores_disponiveis[0].id },
      });


      })
      .catch((e) => {
        console.error("erro: " + e)
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
                placeholder="Digite sua altura em metros" 
                value={altura}
                onChange={e => setAltura(e.target.value)}
              />
            </div>
            
            <div>
              <label className="form-label" htmlFor="peso">Seu peso:</label>
              <input 
                id="peso" 
                type="text" 
                placeholder="Digite seu peso em kg" 
                value={peso}
                onChange={e => setPeso(e.target.value)}
              />
            </div>
            
            {error && <p className="error-message">{error}</p>}
            
            <h2 className="titulo-ergonomia">Estilos De Design:</h2>
            <div className="design-opcoes">
              <label className="opcao-design">
                <input 
                  type="radio" 
                  name="design" 
                  value="Contemporânea" 
                  checked={opcaoDesign === "Contemporânea"}
                  onChange={handleRadioChange}
                />
                Contemporâneo
              </label>
              <label className="opcao-design">
                <input 
                  type="radio" 
                  name="design" 
                  value="Minimalista" 
                  checked={opcaoDesign === "Minimalista"}
                  onChange={handleRadioChange}
                />
                Minimalista
              </label>
              <label className="opcao-design">
                <input 
                  type="radio" 
                  name="design" 
                  value="Clássica" 
                  checked={opcaoDesign === "Clássica"}
                  onChange={handleRadioChange}
                />
                Clássico
              </label>
            </div> 
            
            <button type="submit" className="botao-encontrar">Encontrar</button>
          </form>
        </div>
        <div className="container-direita" />
      </section>
      <Footer />
    </>
  );
}
