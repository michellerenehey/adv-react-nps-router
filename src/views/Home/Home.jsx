import { fetchParks } from '../../services/natparks';
import { useEffect, useState } from 'react';
import ParksList from '../../components/ParksList/ParksList';
import { useHistory } from 'react-router-dom';
// import Search from '../Search/Search';

export default function Home() {
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startPage, setStartPage] = useState(0);
  const [search, setSearch] = useState('');

  const history = useHistory();

  // const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchParks(startPage);
      setParks(data);
      setLoading(false);
    };
    fetchData();
  }, [startPage]);

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
    history.push(`/?q=${search}`);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* <Search /> */}
      <div>
        <h1>form form building a form</h1>
        <form onSubmit={handleSubmit}>
          <label>Search for a park:</label>
          <input value={search} onChange={(e) => setSearch(e.target.value)} />
          <button>Submit</button>
        </form>
      </div>
      <ParksList parks={parks} handleNext={handleNext} handlePrev={handlePrev} />
    </>
  );
}
