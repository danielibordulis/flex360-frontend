// components/Alert.js
import React from 'react';
import './Alerta.css';
import { useEffect} from 'react';
const Alert = ({ message, type = 'info', onClose }) => {

    useEffect(() => {
        const timer = setTimeout(onClose, 3000); // Fecha após 3 segundos
        return () => clearTimeout(timer); // Limpa o timer ao desmontar
      }, [onClose]);

  return (
    <div className={`alert alert-${type}`}>
        <div className='alert-modal'>
            <span className='alertaMensagem'>{message}</span>
            <button onClick={onClose} className="alert-close">X</button>
        </div>
    </div>
  );
};

export default Alert;
