import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchParks } from '../src/services/natparks';

import Home from './components/Home/Home';
import ParkList from './components/ParkList/ParkList';

function App() {
  const [parks, setParks] = useState([]);

  // GRAB DATA FROM API
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchParks();
      setParks(data);
    };
    fetchData();
  }, []);

  // PARK DETAILS

  // LIST OF PARKS

  // HOME COMPONENT

  // ROOT ROUTE
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/parks">Park List</Link>
          </div>
        </div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/parks">
          <ParkList parks={parks} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
