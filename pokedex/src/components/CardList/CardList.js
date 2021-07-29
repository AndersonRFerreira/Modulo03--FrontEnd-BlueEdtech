import { useState} from 'react';
import  Card from '../Card/Card';
import './CardList.css';

export default function CardList(){

const [pokemons, setPokemons] = useState([]);

let listPokemons = () => {
    setPokemons([
    
    {
        "id": 1,
        "name": "bulbassauro",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    {
        "id": 2,
        "name": "ivysaur",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
    }
])}


    return(
        <>
            <div className="card-list">
                {
                pokemons.map( (item) => 
                    <Card info={item} key={item.id}></Card>
                )
                }
            </div>
            <button onClick={listPokemons}>Listar Pokemons</button>
        </>
    )
}
    

// quando a gente trabalhar com a API ela vai buscar e trazer os dados pra nós
// hoje trocamos os cards por um botão, que dispara uma funçao que vai carregar os dados que estarão numa variavel que
// vai simular os dados da API
// não se declara variavel dentro do return
// nesse usestate utiliza um vetor {[]} e nao um obejto pq virão varios elementos e nao somente um .