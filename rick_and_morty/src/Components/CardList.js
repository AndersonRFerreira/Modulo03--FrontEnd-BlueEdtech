import { useEffect, useState } from 'react';
import Card from './Card';
import SearchBox from './SearchBox';

export default function CardList() {


  const[personagens, setPersonagens] = useState([]);
  const[loading, setLoading] = useState(false); // quando os dados estiverem sendo carregados...
  const[busca, setBusca] =useState([]);

  const getData = () => {
    fetch('https://rickandmortyapi.com/api/character?page=1')
    .then( res => res.json() )
    .then( (result) => {
      setPersonagens(result.results)
      setBusca(result.results)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(true)
    })
  }

  const filterPersonagens = (e) => {
    const filtered = busca.filter(item => item.name.includes(e.target.value));
    setPersonagens(filtered)
  }

  useEffect( () => {
    getData();
  }, []);
  
  return(
    <>
      
      <SearchBox placeholder="Buscar personagem" action={filterPersonagens}></SearchBox>   
      
      <div className="app__list">
        
        {
          loading ? (
            <Card></Card>
          ) : (
            personagens.map( (item) => (
              <Card key={item.name} info={item}></Card>
            ))
          )
        }
      </div>
    </>
  )
}