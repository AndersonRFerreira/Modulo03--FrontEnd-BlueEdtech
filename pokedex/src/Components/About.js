import { Link } from 'react-router-dom'
import Eu from '../Img/Eu.png';

export default function About() {
  return(
    <div className="app__about">
      <div className="app__about__container">
        <h2>Bem Vindos!</h2>
        <img className="app__about__me" src={Eu} alt="Anderson" />
        <p className="app__about__header"> Me chamo anderson tenho 31 anos e estou no mundo da programação a cerca de 7 meses, minha linguagem favorita é o Javascript! gosto de futebol, montanhismo, skateboard e estar com as pessoas que gosto!</p>
        

        <p className="app__about__close">Me siga nas minhas redes </p>

        <div className="app__about__links">
          <a href="https://github.com/AndersonRFerreira" target="_blank" rel="noreferrer">
            <i class="im im-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/anderson-reis-90/" target="_blank" rel="noreferrer">
            <i class="im im-linkedin"></i>
          </a>
        </div>


        <Link className="app__about__link" to="/">Voltar</Link>
      </div>
      
    </div>
  )
}