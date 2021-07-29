import { BrowserRouter, Switch, Route } from 'react-router-dom';  ///coisas externas é bom sempre por primeiro acima
import Info from './components/info/info';
import CardList from './components/CardList/CardList';
import './styles/main.css';


export default function App(){
  return(
    <div className="app">
      <BrowserRouter>
        <Switch>
        <Route path="/" exact={true} component={CardList} />
          <Route path="/sobre/001" component={Info} />
          
        </Switch>
      </BrowserRouter>
    </div>
  )

}