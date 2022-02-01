import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import ParkDetail from './views/ParkDetail/ParkDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>National Parks Are Cool</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/park/:parkId">
            <ParkDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// add a /park/:id Route, which when you click it brings up the activites?
