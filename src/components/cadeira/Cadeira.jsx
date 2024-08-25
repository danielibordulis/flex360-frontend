import React from 'react'
import "./Cadeira.css"
import PaletaCor from '../paletaCor/PaletaCor'
import Line from '../line/Line'

function Cadeira({cadeiraData_}) {

    const cadeiraData = {
        nome: "Nome da cadeira",
        cores: [{name: "Marrom", cod: "#a52a2a"},{name: "Marrom", cod: "#a52a2a"},{name: "Marrom", cod: "#a52a2a"}],
        preco: 1300.99,
        descEnconsto: "Encosto com estrutura injetada em resina plastica, com apoio lombar regulável na altura.",
        descApoio: "Apoia braço 360, regulável na altura, profundidade, abertura e ângulo.",
        descRodizio: "Rodizios / Rodinha com 65 mm de diâmetro indicado para qualquer tipom de piso.",
        descAjusteAltura: "Mecanismo ajuste de altura do assento. Inclinação do encosto com 4 pontos de parada, possui movemento relax.",
        descRevstimento: "Revestimento em pvc sintético de alta qualidade. Facilidade na assepsia e fogo retardante."
    }


    return (
        <div className='container-cadeira'>

            <div className='container-foto-cadeira'>
                <img className='foto-cadeira' src='./cadeira-ex.png'/>
            </div>
            
            <div className='container-paleta-de-cor'>
                <PaletaCor cores={cadeiraData.cores}/>
            </div>
            
            <h1>{cadeiraData.nome}</h1>

            <span className='preco-cadeira'>R$ {cadeiraData.preco}</span>

            <Line />

            <div className='container-descricao'>
                <img src="./encosto-icon.png" alt="Icone de encosto" style={{width: "50px"}}/>
                <p>{cadeiraData.descEnconsto}</p>
            </div>

            <Line />

            <div className='container-descricao'>
                <img src="./apoio-icon.png" alt="Icone de apoio" style={{width: "80px"}}/>
                <p>{cadeiraData.descApoio}</p>
            </div>

            <Line />

            <div className='container-descricao'>
                <img src="./rodizio-icon.png" alt="Icone de rodizio" style={{width: "80px"}}/>
                <p>{cadeiraData.descRodizio}</p>
            </div>

            <Line />

            <div className='container-descricao'>
                <img src="./ajuste-altura-icon.png" alt="Icone de ajuste e altura" style={{width: "80px"}}/>
                <p>{cadeiraData.descAjusteAltura}</p>
            </div>

            <Line />

            <div className='container-descricao'>
                <img src="./revestimento-icon.png" alt="Icone de revestimento" style={{width: "80px"}}/>
                <p>{cadeiraData.descRevstimento}</p>
            </div>

            <Line />


            <div className='container-btn-comprar'>
                <button className='btn-comprar'>Comprar</button>
            </div>

        </div>
    )
}

export default Cadeira
