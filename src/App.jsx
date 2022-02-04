import './App.css';
import { BrowserRouter, Route, useRouteMatch, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchParks } from '../src/services/natparks';

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
  function ParkList() {
    const { url, path } = useRouteMatch();

    return (
      <>
        {parks.map(({ fullName, id, images }) => {
          return (
            <div className="parkCard" key={id}>
              <p>
                <Link to={`${url}/${id}`}>{fullName}</Link>
              </p>
              <img src={images[0].url} />
            </div>
          );
        })}
        <Route path={`${path}/:parkId`}>
          <ParkDetails />
        </Route>
      </>
    );
  }

  // HOME COMPONENT
  function Home() {
    return <h1>National Parks Are Cool</h1>;
  }

  // ROOT ROUTE
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/parks">Park List</Link>
          </p>
        </div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/parks">
          <ParkList />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
