import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { primeiraLetra } from '../Lib/utils';

export default function Card(info) {

  const [pokemon, setPokemon] = useState(info.info);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(() => {
    fetch(info.info.url)
      .then(res => res.json())
      .then((result) => {
        setPokemon(result)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(true)
      })
  }, [info.info.url]);

  useEffect(() => {
    getData();
  }, [getData])

  let id = ('000' + pokemon.id).slice(-3);

  return (
    <div className="app__list__card">
      <Link className="app__list__card__link"to={{ pathname: "/info/" + pokemon.id, state: pokemon }}>
        <img className="app__list__card__img" src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id + ".png"} alt={pokemon.name} />
        <div className="app__list__card__info">
          <p className="app__list__card__id">{'#' + id}</p>
          <h2 className="app__list__card__name">{primeiraLetra(pokemon.name)}</h2>
          <div className="app__list__card__category">
            {
              loading ? <span className="app__list__card__category__button"></span> :

                pokemon.types.map((item) => (
                  <Link to={'/' + item.type.name}>
                    <span key={item.type.name} className={'app__list__card__category__button app__list__card__category__button--' + item.type.name}>{primeiraLetra(item.type.name)}</span>
                  </Link>
                ))
            }
          </div>
        </div>
      </Link>
    </div>
  )
}