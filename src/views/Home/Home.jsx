import { fetchParks } from '../../services/natparks';
import { useEffect, useState } from 'react';
import ParksList from '../../components/ParksList/ParksList';
import { useHistory } from 'react-router-dom';
import Search from '../../components/Search/Search';

// goal: when someone searches and clicks submit, the app uses useLocation to see if
// that search matches the name of a park.

// implementation ideas: input field, submit button. on submit, the page saves the search information
// as a search in useLocation. then, we say 'if that search matches a park.name, return only the park associated.

export default function Home() {
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startPage, setStartPage] = useState(0);
  const [query, setQuery] = useState('');
  // here i set a query state
  const history = useHistory();

  // added query to the data fetch (per julie's demo code - adding it as a URL parameter), see services
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchParks(startPage, query);
      setParks(data);
      setLoading(false);
    };
    fetchData();
  }, [startPage, query]);

  const handleNext = () => {
    setStartPage((prevState) => prevState + 11);
    setLoading(true);
  };

  const handlePrev = () => {
    setStartPage((prevState) => prevState - 11);
    setLoading(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/?q=${query}`);
  };
  // here i used history hook to grab the queried info - i do not think this is right lol

  if (loading) return <p>Loading...</p>;

  // in the return i created a search comopnent, which takes in the query stuff
  return (
    <>
      <Search query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <ParksList parks={parks} handleNext={handleNext} handlePrev={handlePrev} />
    </>
  );
}
