import { useState } from 'react';
import { Link } from 'react-router-dom';
import { primeiraLetra } from '../Lib/utils';

export default function Info(info) {

  const [pokemons, setPokemons] = useState(info.location.state);

  let id = ('000' + pokemons.id).slice(-3);

  return (
    <div className="container">
      <div className="info">

        <div className="info__header">
          <h2>{primeiraLetra(pokemons.name)}</h2>
        </div>

        <div className="info__body">
          <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id + ".png"} alt={pokemons.name} />

          <div className="info__body__characteristics">
            <p><strong>Altura:</strong> {pokemons.height}</p>
            <p><strong>Peso:</strong> {pokemons.weight}</p>
          </div>

          <div className="info__body__abilities">
            <p><strong>Habilidades</strong></p>
            {
              pokemons.abilities.map((item) => (
                <p key={item.ability.name}>{primeiraLetra(item.ability.name)}</p>
              ))
            }
          </div>
          
          <div className="info__body__status">
            <p><strong>Estatísticas</strong></p>
            {
              pokemons.stats.map((item) => (
                <p><strong>{primeiraLetra(item.stat.name)}:</strong> {item.base_stat}</p>
              ))
            }
          </div>

          <div className="info__body__moves">
            <p><strong>Movimentos</strong></p>
            <p>
              {
                pokemons.moves.map((item) => (
                  primeiraLetra(item.move.name) + ', '
                ))
              }
            </p>
          </div>

          <div className="info__body__type">
            <p><strong>Tipo</strong></p>
            {
              pokemons.types.map((item) => (
                <span key={item.type.name} className={"info__body__type__button info__body__type__button--" + item.type.name}>{primeiraLetra(item.type.name)}</span>
              ))
            }
          </div>
        </div>

        <div className="info__footer">
          <Link className="info__footer__link" to="/">Voltar</Link>
        </div>
      </div>
    </div>

  );
}