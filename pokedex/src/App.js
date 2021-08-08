import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Info from './Components/Info';
import CardList from './Components/CardList';
import './Styles/main.scss';

export default function App() {

  return(
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={CardList} />
          <Route path="/sobre/:id" component={Info} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}