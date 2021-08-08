import { useEffect, useState } from 'react';
import Card from './Card';
import SearchBox from './searchBox';

export default function CardList() {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);

  const getData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
    .then( res => res.json() )
    .then( (result) => {
      setPokemons(result.results)
      setFilter(result.results)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(true)
    })
  }

  const filterPokemon = (e) =>{
    const filtered = filter.filter( item => item.name.includes(e.Target.value));
    setPokemons(filtered);

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