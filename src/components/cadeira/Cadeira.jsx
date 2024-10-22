import React from 'react'
import "./Cadeira.css"
import PaletaCor from '../paletaCor/PaletaCor'
import Line from '../line/Line'
import { useNavigate } from 'react-router-dom'

function Cadeira({cadeiraData}) {

    const navigate = useNavigate()

    function comprar() {

        navigate("/cadeiraIndividual", {
            state: { cadeiraId: cadeiraData.id },
        });

    }

    return (
        <div className='container-cadeira'>

            <div className='container-foto-cadeira'>
                <img className='foto-cadeira' src='./cadeira-ex.png' alt='Descrição imagem cadeira'/>
            </div>
            
            <div className='container-paleta-de-cor'>
                <PaletaCor cores={cadeiraData.cores_disponiveis}/>
            </div>
            
            <h1>{cadeiraData.nome}</h1>

            <span className='preco-cadeira'>R$ {cadeiraData.preco}</span>

            <Line />

            <div className='container-descricao'>
                <img src="./encosto-icon.png" aria-hidden='true' style={{width: "50px"}}/>
                <p>{cadeiraData.desc_encosto}</p>
            </div>

            <Line />

            <div className='container-descricao'>
                <img src="./apoio-icon.png" aria-hidden='true' style={{width: "80px"}}/>
                <p>{cadeiraData.desc_apoio}</p>
            </div>

            <Line />

            <div className='container-descricao'>
                <img src="./rodizio-icon.png" aria-hidden='true' style={{width: "80px"}}/>
                <p>{cadeiraData.desc_rodinha}</p>
            </div>

            <Line />

            <div className='container-descricao'>
                <img src="./ajuste-altura-icon.png" aria-hidden='true' style={{width: "80px"}}/>
                <p>{cadeiraData.desc_ajuste_altura}</p>
            </div>

            <Line />

            <div className='container-descricao'>
                <img src="./revestimento-icon.png" aria-hidden='true' style={{width: "80px"}}/>
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
