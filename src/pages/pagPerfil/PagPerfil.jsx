import { useEffect, useState } from 'react';
import ServicoUsuario from '../../services/servico-usuario';
import Header from '../../components/header/Header';
import './PagPerfil.css';
import ScrollComponent from '../../components/scroll/ScrollComponent';
import httpClient from '../../services/httpClient'; 
import { useNavigate } from 'react-router-dom';

function PagPerfil() {
  const [cadeirasRecentes, setCadeirasRecentes] = useState([]);
  const [inputNome, setInputNome] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [campoNomeDesabilitado, setCampoNomeDesabilitado] = useState(true);
  const navigate = useNavigate()

  function getData() {
    const token = localStorage.getItem("token")

    if (!token) {
      alert("deu erro")
      navigate("/")
    }

    httpClient().get('/usuario/buscarPerfil', token)
      .then((response) => {

        setInputNome(response.nome)
        setInputEmail(response.email)

      })
      .catch(() => {
        alert("erro")
      })
  }


  function pegarCadeiras(cadeirasId) {

    if (!cadeirasId) {
  return 
    }

    for (let id of cadeirasId) {

      httpClient().get(`/cadeira/buscarPorid/${id}`)
        .then((response) => {

          setCadeirasRecentes([...cadeirasRecentes, response])

        })
        .catch(() => {
          alert("erro")
        })

    }
    console.log(cadeirasRecentes)


  }
useEffect(() => {
  const cadeirasVistas = JSON.parse(localStorage.getItem('cadeirasRecentes')) || [];
  setCadeirasRecentes(cadeirasVistas);

  getData()
  pegarCadeiras()
}, []);

function atualizaPerfil(campo, valor) {
  // Implementação futura: Atualizar no banco de dados
}

return (
  <>
    <Header />
    <section className='body'>
      <div className='lado-esquerdo'>
        <h2 className='Titulo'>Meu perfil</h2>
        <div className='botoesEditar'>
          <div className='alinharBotoes'>
            <p className='nome'>Nome:</p>
            <div className='checkEedit'>
              <input
                className='inpNome'
                onChange={e => setInputNome(e.target.value)}
                value={inputNome || ''}
                disabled={campoNomeDesabilitado}
              />
              {!campoNomeDesabilitado ? (
                <button
                  className='check'
                  onClick={() => {
                    atualizaPerfil('nome', inputNome);
                    setCampoNomeDesabilitado(true);
                  }}
                >
                  <img src='./check.png' alt='Check' />
                </button>
              ) : (
                <button
                  className='lapis'
                  onClick={() => setCampoNomeDesabilitado(false)}
                >
                  <img src='./lapis.png' alt='Edit' />
                </button>
              )}
            </div>
          </div>
          <div className='alinharBotoes'>
            <p className='email'>Email:</p>
            <input className='inpEmail' value={inputEmail || ''} disabled />
          </div>
        </div>
      </div>

      <div className='lado-direito'>
        <h2 className='Titulo'>Vistos recentemente:</h2>
        {cadeirasRecentes.length > 0 ? (
          <ScrollComponent cadeiras={cadeirasRecentes} />
        ) : (
          <p className='mensagem'>Não há cadeiras vistas recentemente.</p>
        )}
      </div>
    </section>
  </>
);
}

export default PagPerfil;
