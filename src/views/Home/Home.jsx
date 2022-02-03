import { fetchParks } from '../../services/natparks';
import { useEffect, useState } from 'react';
import ParksList from '../../components/ParksList/ParksList';
// import { useHistory } from 'react-router-dom';
import Search from '../../components/Search/Search';

export default function Home() {
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startPage, setStartPage] = useState(0);
  const [query, setQuery] = useState('');
  // const history = useHistory();
  console.log('QUERY IN HOME', query);
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   history.push(`/?q=${query}`);
  // };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Search query={query} setQuery={setQuery} />
      <ParksList parks={parks} handleNext={handleNext} handlePrev={handlePrev} />
    </>
  );
}
