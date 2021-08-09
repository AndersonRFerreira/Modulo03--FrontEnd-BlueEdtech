import { useEffect, useState } from 'react';
import Card from './Card';
import SearchBox from './SearchBox';

export default function CardList() {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState([]);

  const getData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
    .then( res => res.json() )
    .then( (result) => {
      setPokemons(result.results)
      setBusca(result.results)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(true)
    })
  }

  const filterPokemon = (e) => {
    const filtered = busca.filter(item => item.name.includes(e.target.value));
    setPokemons(filtered)
  }

  useEffect( () => {
    getData();
  }, []);
  
  return(
    <>
      
      <SearchBox placeholder="Buscar pokemon..." action={filterPokemon}></SearchBox>   
      
      <div className="app__list">
        
        {
          loading ? (
            <Card></Card>
          ) : (
            pokemons.map( (item) => (
              <Card key={item.name} info={item}></Card>
            ))
          )
        }
      </div>
    </>
  )
}