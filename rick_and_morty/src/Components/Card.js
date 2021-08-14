import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { primeiraLetra } from '../Lib/utils';

export default function Card(info) {

  const [personagens, setPersonagens] = useState(info.info);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(() => {
    fetch(info.info.url)
      .then(res => res.json())
      .then((result) => {
        setPersonagens(result)
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

  let id = ('000' + personagens.id).slice(-3);

  return (
    <div className="app__list__card">
      <Link className="app__list__card__link"to={{ pathname: "/info/" + personagens.id, state: personagens }}>
        <img className="app__list__card__img" src={personagens.image} alt={personagens.name} />
        <div className="app__list__card__info">
          <p className="app__list__card__id">{'#' + id}</p>
          <h2 className="app__list__card__name">{primeiraLetra(personagens.name)}</h2>)
          <div className="app__list__card__category">
            {
              loading ? <span className="app__list__card__category__button"></span> :(

              <div>
                <p><strong>Status:</strong> {personagens.status}</p>
                <span>{personagens.type || 'tipo indefinido'}</span>
              </div>

              )
            }
          </div>
        </div>
      </Link>
    </div>
  )
}