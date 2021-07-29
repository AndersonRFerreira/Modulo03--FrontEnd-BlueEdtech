import { useState } from 'react';
import './info.css';
import { Link } from 'react-router-dom';

export default function Info() {

    const [pokemons, setPokemons] = useState(info.location.state);

    //useEffect(() => {
    //setPokemons(info.location.state);
    //}, [info.location.state])

    return(
        <section className="info">
            <div className="info-card">
            <div className="info-header">{pokemons.name}</div>
            <div className="info-body">
                <img src={pokemons.img} alt={pokemons.name} />
            <div className="info-block">
                <p><strong>Altura:</strong> {pokemons.altura}</p>
                <p><strong>Peso:</strong> {pokemons.peso}</p>
                <p><strong>Habilidades:</strong></p>
            {
              pokemons.habilidades.map( (item) => (
                <p key={item}>{item}</p>
              ))
            }
            </div>
            <div className="type">
                <p><strong>Tipo</strong></p>
                <span className="grass">Grass</span>
                <span className="poison">Poison</span>
            </div>
            </div>
                <div className="info-footer">
            <Link className="link" to="/">← Voltar</Link>
            </div>
            </div>
        </section>

    )
    
}