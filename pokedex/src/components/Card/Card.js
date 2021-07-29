import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card (info){  

    const [pokemon, setPokemon] = useState({});
    
    useEffect( () => {
        setPokemon(info.info);

    },[info.info] );

    return(
        <Link className="link" to={{pathname: "/sobre/" + pokemon.id, state: pokemon}}>
            <div className="card">
                <img src={pokemon.img} alt={pokemon.name} />
                <div className="card-info">
                    <p className="card-id">{pokemon.id}</p>
                    <h2 className="card-name">{pokemon.name}</h2>
                    {/*<div className="card-category">
                        <span className="grass">Grass</span>
                        <span className="poison">Poison</span>
                    </div> */}
                </div>
            </div>
        </Link>
    )
}

//isso é um hooks 
// como vamos alterar o estado de um component tem que ter uma const que vai segurar as infos 
//( pokemon (segura), setPokemon(altera))
// ({}) objeto vazio , vai chegar em algum momento as infos 
// o card est recebendo uma informação (info) 
