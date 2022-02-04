import './App.css';
import { BrowserRouter, Route, useRouteMatch, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchParks } from '../src/services/natparks';

function App() {
  const [parks, setParks] = useState([]);
  // const [parkDetails, setParkDetails] = useSate([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchParks();
      setParks(data);
    };
    fetchData();
  }, []);
  console.log(parks);

  // PARK DETAILS
  function ParkDetails() {
    const { parkId } = useParams();
    console.log('parkId', parkId);
    console.log('hello');
    const { url, path } = useRouteMatch();
    // console.log(url, path);

    const park = parks.find((item) => item.id === parkId);
    const parkActivities = park.activities;
    console.log(parkActivities);

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
    console.log('URL PARKLIST', url);
    console.log('PATH PARKLIST', path);

    return (
      <>
        {parks.map(({ fullName, id }) => {
          return (
            <p key={id}>
              <Link to={`${url}/${id}`}>{fullName}</Link>
            </p>
          );
        })}
        <Route path={`${path}/:parkId`}>
          <ParkDetails />
        </Route>
        ;
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
