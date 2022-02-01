import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <h1>National Parks Are Cool</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
