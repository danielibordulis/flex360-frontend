// ScrollComponent.jsx
import React from 'react';
import './ScrollComponent.css'; 
import Cadeirinha from '../cadeirinha/Cadeirinha.jsx';


const ScrollComponent = ({cadeiras}) => {
  return (
      <div className='scrollable-content'>
        {cadeiras.map((cadeira) => (
              <Cadeirinha 
                key={cadeira.id} 
                id={cadeira.id} 
                nomeCadeira={cadeira.nome}
                precoCadeira={cadeira.preco} 
              />
        ))}
      </div>
  );
};

export default ScrollComponent
