import { Link } from 'react-router-dom'
import logo from '../Img/logo.png'

export default function SearchBox(filter) {
  return(
    <div className="app__list__searchbox">
      <div className="app__list__searchbox__container">
        <img src={logo} alt="Pokémon"></img>
        <input 
          type="text"
          placeholder={filter.placeholder}
          onChange={filter.action}
        />
        
        <button>
          <Link to="/about">Sobre</Link>
        </button>
      </div>
      
    </div>
  )
}