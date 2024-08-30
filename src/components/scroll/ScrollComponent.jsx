// ScrollComponent.jsx
import React from 'react';
import './ScrollComponent.css'; 

const ScrollComponent = () => {
  return (
      <div className='scrollable-content'>
        <div className='container-cadeirinha'>
          <div className='div-img'>
            <img src="./cadeirinha.png" alt="cadeirinha" />
          </div>
          <div className='texto'>
            <p className='nomeCadeira'>Cadeira led Black n white</p>
            <p className='preço'>R$ 1.999,00</p>
          </div>

          
        </div>  
      </div>
  );
};

export default ScrollComponent
