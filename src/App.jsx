import './App.css';
import { BrowserRouter, Route, useRouteMatch, Link, useParams } from 'react-router-dom';
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
  function ParkDetails() {
    const { parkId } = useParams();

    const park = parks.find((item) => item.id === parkId);
    const parkActivities = park.activities;

    return (
      <>
        {parkActivities.map(({ name, id }) => {
          return <p key={id}>{name}</p>;
        })}
      </>
    );
  }
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
