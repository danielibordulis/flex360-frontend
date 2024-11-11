import React, { useContext, useEffect, useState } from 'react';
import "./PagCadeiraIndividual.css";
import Header from '../../components/header/Header';
import PaletaCor from '../../components/paletaCor/PaletaCor';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import httpClient from '../../services/httpClient'
import { CarrinhoContext } from '../../contexts/CarrinhoContext';

function PagCadeiraIndividual() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cadeiraId, corId } = location.state || {};
  const [corSelecionada, setCorSelecionada] = useState({});
  const [imagemCarregada, setImagemCarregada] = useState(true);


  // Estado para armazenar os detalhes da cadeira
  const [cadeira, setCadeira] = useState(null);

  const { adicionaItem } = useContext(CarrinhoContext)

  // Função que será chamada ao carregar a página
  useEffect(() => {
    carregaCadeira();
  }, [cadeiraId]);

  useEffect(() => {

    if (cadeira) {
      cadeira.cores_disponiveis.forEach((cor) => {
        const img = new Image();
        img.src = cor.foto_cadeira;
      });
    }
  }, [cadeira?.cores_disponiveis]);


  const handleClick = (cor) => {
    setImagemCarregada(false);
    setCorSelecionada(cor);
};

  async function carregaCadeira() {
    if (cadeiraId) {
      // Busca a cadeira no JSON usando o id

      const cadeiraSelecionada = await httpClient().get(`/cadeira/buscarPorId/${cadeiraId}`, false)
      console.log(cadeiraSelecionada)
      setCadeira(cadeiraSelecionada);

      const corEncontrada = cadeiraSelecionada.cores_disponiveis.find(obj => obj.id === corId)
      setCorSelecionada(corEncontrada)

    }

  }

  // Função para adicionar a cadeira ao carrinho e navegar para a página do carrinho
  const adicionarAoCarrinho = async () => {

    await adicionaItem(cadeira)

    navigate('/carrinho'); // Redireciona para a página do carrinho e passa a cadeira no estado
  };

  if(!cadeira) return null

  return (
    <>
      <Header />
      <section className='body'>
        <div className='sub-containers'>
          <h2 className='nome-cadeira'>{cadeira?.nome || 'Nome da cadeira'}</h2>

          <div className='container-selo-abnt'>
            <img src="./selo.png" alt="Selo" />
            <h3>Certificação pela norma ABNT</h3>
          </div>

          <p className='texto-info'>{cadeira?.informacoes || ""}</p>

          <div className='container-dimensoes-prod'>
            <h4>Dimensões do produto</h4>
            <img src={cadeira?.foto_dimencoes || " "} alt={cadeira?.dimencoes} />
          </div>
        </div>

        <div className='sub-containers'>
          <div className='img-top' />

          <div className='container-info-cadeira'>
            <div className='container-top'>
              <div className='box-foto-cadeira'>
                <img src={corSelecionada.foto_cadeira} alt="" className='foto-cadeira-p' />
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
                <div className='container-paleta-de-cor'>

                  <div className='paleta'>
                    <div className='container-paleta'>

                      {
                        cadeira.cores_disponiveis.length > 0 && cadeira.cores_disponiveis.map((cor) => (

                          <button
                            className={`btn-cor ${corSelecionada.codigo === cor.codigo ? 'cor-selecionada' : ''}`}
                            key={cor.id}
                            style={{ backgroundColor: cor.codigo }}
                            onClick={() => { handleClick(cor) }}
                            aria-label={cor.name} aria-current={corSelecionada.name === cor.name}>
                          </button>

                        ))
                      }

                    </div>

                    <span>{corSelecionada.name}</span>
                  </div>
                </div>
              </div>

              <div className='right-side-ind'>
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
