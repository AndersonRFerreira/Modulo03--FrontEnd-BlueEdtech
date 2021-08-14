import { useState } from 'react';
import { Link } from 'react-router-dom';
import { primeiraLetra } from '../Lib/utils';

export default function Info(info) {

  const [personagens, setPersonagens] = useState(info.location.state);

  // let id = ('000' + personagens.id).slice(-3);

  return (
    <div className="container">
      <div className="info">

        <div className="info__header">
          <h2>{primeiraLetra(personagens.name)}</h2>
        </div>

        <div className="info__body">
          <img src={personagens.image} alt={personagens.name} />

          <div className="info__body__characteristics">
            <p><strong>Status:</strong> {personagens.status}</p>
            <p><strong>Genero:</strong> {personagens.gender}</p>
            <p><strong>Espécie:</strong> {personagens.species}</p>
          </div>
          
    
        </div>

        <div className="info__footer">
          <Link className="info__footer__link" to="/">Voltar</Link>
        </div>
      </div>
    </div>

  );
}