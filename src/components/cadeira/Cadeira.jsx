import React, { useEffect, useState } from 'react'
import "./Cadeira.css"
import PaletaCor from '../paletaCor/PaletaCor'
import Line from '../line/Line'
import { useNavigate } from 'react-router-dom'

function Cadeira({ cadeiraData }) {

    const navigate = useNavigate();

   
    const [corSelecionada, setCorSelecionada] = useState(cadeiraData.cores_disponiveis[0]);
    const [imagemCarregada, setImagemCarregada] = useState(true);

   
    useEffect(() => {
        cadeiraData.cores_disponiveis.forEach((cor) => {
            const img = new Image();
            img.src = cor.foto_cadeira;
        });
    }, [cadeiraData.cores_disponiveis]);

    
    const handleClick = (cor) => {
        setImagemCarregada(false);
        setCorSelecionada(cor);
    };

    function comprar() {
        navigate("/cadeiraIndividual", {
            state: { cadeiraId: cadeiraData.id, corId: corSelecionada.id },
        });
    }

    return (
        <div className='container-cadeira'>

            <div className='container-foto-cadeira'>
                <img className='foto-cadeira' src={corSelecionada.foto_cadeira} alt='Descrição imagem cadeira' />
            </div>

            <div className='container-paleta-de-cor'>

                <div className='paleta'>
                    <div className='container-paleta'>

                        {
                            cadeiraData.cores_disponiveis.length > 0 && cadeiraData.cores_disponiveis.map((cor) => (

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

            <h1>{cadeiraData.nome}</h1>

            <span className='preco-cadeira'>R$ {cadeiraData.preco}</span>

            <Line />

            <div className='container-descricao'>
                <img src="./encosto-icon.png" aria-hidden='true' style={{ width: "50px" }} />
                <p>{cadeiraData.desc_encosto}</p>
            </div>

            <Line />

            <div className='container-descricao'>
                <img src="./apoio-icon.png" aria-hidden='true' style={{ width: "80px" }} />
                <p>{cadeiraData.desc_apoio}</p>
            </div>

            <Line />

            <div className='container-descricao'>
                <img src="./rodizio-icon.png" aria-hidden='true' style={{ width: "80px" }} />
                <p>{cadeiraData.desc_rodinha}</p>
            </div>

            <Line />

            <div className='container-descricao'>
                <img src="./ajuste-altura-icon.png" aria-hidden='true' style={{ width: "80px" }} />
                <p>{cadeiraData.desc_ajuste_altura}</p>
            </div>

            <Line />

            <div className='container-descricao'>
                <img src="./revestimento-icon.png" aria-hidden='true' style={{ width: "80px" }} />
                <p>{cadeiraData.desc_revestimento}</p>
            </div>

            <Line />

            <div className='container-btn-comprar'>
                <button className='btn-comprar' onClick={comprar}>Comprar</button>
            </div>

        </div>
    )
}

export default Cadeira
