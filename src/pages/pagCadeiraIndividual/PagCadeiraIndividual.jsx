import React, { useEffect, useState } from 'react';
import "./PagCadeiraIndividual.css";
import Header from '../../components/header/Header';
import PaletaCor from '../../components/paletaCor/PaletaCor';
import { useLocation } from 'react-router-dom';
import cadeiras from '../../utils/json/cadeira.json'; 
import { useNavigate} from 'react-router-dom';
import servicoCarrinho from '../../services/servico-carrinho';

function PagCadeiraIndividual() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cadeiraId, corPreferida } = location.state || {};

  // Estado para armazenar os detalhes da cadeira
  const [cadeira, setCadeira] = useState(null);

  // Função que será chamada ao carregar a página
  useEffect(() => {
    if (cadeiraId) {
      // Busca a cadeira no JSON usando o id
      const cadeiraSelecionada = cadeiras.find(c => c.id === cadeiraId);
      setCadeira(cadeiraSelecionada);

    }
  }, [cadeiraId]);

   // Função para adicionar a cadeira ao carrinho e navegar para a página do carrinho
   const adicionarAoCarrinho = () => {

    servicoCarrinho.adicionaItem(cadeira)

    navigate('/carrinho'); // Redireciona para a página do carrinho e passa a cadeira no estado
  };


  return (
    <>
      <Header />
      <section className='body'>
        <div className='sub-containers'>
          <h1 className='nome-cadeira'>{cadeira?.nome || 'Nome da cadeira'}</h1>

          <div className='container-selo-abnt'>
            <img src="./selo.png" alt="Selo" />
            <h2>Certificação pela norma ABNT</h2>
          </div>

          <p className='texto-info'>{cadeira?.informacoes || ""}</p>

          <div className='container-dimensoes-prod'>
            <h3>Dimensões do produto</h3>
        <img src={cadeira?.foto_dimensoes || " "} alt="" />
          </div>
        </div>

        <div className='sub-containers'>
          <div className='img-top' />

          <div className='container-info-cadeira'>
            <div className='container-top'>
              <div className='box-foto-cadeira'>
                <img src= {cadeira?.foto_cadeira} alt="" className='foto-cadeira-p' />
              </div>

              <div className='desc-cadeira'>
                <div className='descricao'>
                  <p>{cadeira?.descricao || 'Descrição da cadeira'}</p>
                  <span>5 anos de garantia*</span>
                </div>

                <div className='container-preco'>
                  <span>R$ {cadeira?.preco?.toFixed(2) || 'Preço'}</span>
                  <div className='box-quant'>
                
                  </div>
                </div>
              </div>
            </div>

            <div className='container-bottom'>
              <div className='left-side'>
              {cadeira?.cores_disponiveis && cadeira.cores_disponiveis.length > 0 && (
                  <PaletaCor cores={cadeira.cores_disponiveis} />
                  )}
              </div>

              <div className='right-side'>
                <button onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PagCadeiraIndividual;
