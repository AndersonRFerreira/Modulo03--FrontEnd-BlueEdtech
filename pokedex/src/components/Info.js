import { useState } from 'react';
import { Link } from 'react-router-dom';
import { primeiraLetra } from './Lib/utils';

export default function Info(info) {

  const [pokemons, setPokemons] = useState(info.location.state);

  let id = ('000' + pokemons.id).slice(-3);

  return (
    <section className="info">
      <div className="info-card">
        <div className="info-header">{primeiraLetra(pokemons.name)}</div>
        <div className="info-body">
          <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id + ".png"} alt={pokemons.name} />

          <div className="info-block">
            <p><strong>Altura:</strong> {pokemons.height}</p>
            <p><strong>Peso:</strong> {pokemons.weight}</p>
            <p><strong>Habilidades:</strong></p>
            {
              pokemons.abilities.map((item) => (
                <p key={item.ability.name}>{primeiraLetra(item.ability.name)}</p>
              ))
            }
          </div>

          <div className="info-block">
            <p><strong>Status</strong></p>
            {
              pokemons.stats.map((item) => (
                <p><strong>{primeiraLetra(item.stat.name)}:</strong> {item.base_stat}</p>
              ))
            }
          </div>

          <div className="info-block">
            <p><strong>Movimentos</strong></p>
            <p>
            {
              pokemons.moves.map((item) => (
                item.move.name + ', '
              ))
            }
            </p>
          </div>

          <div className="type">
            <p><strong>Tipo</strong></p>
            {
              pokemons.types.map((item) => (
                <span key={primeiraLetra(item.type.name)} className="category">{primeiraLetra(item.type.name)}</span>
              ))
            }
          </div>
        </div>
        <div className="info-footer">
          <Link className="link" to="/">Voltar</Link>
        </div>
      </div>
    </section>
  );
}