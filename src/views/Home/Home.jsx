import { fetchParks } from '../../services/natparks';
import { useEffect, useState } from 'react';
import ParksList from '../../components/ParksList/ParksList';
import Search from '../Search/Search';

export default function Home() {
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startPage, setStartPage] = useState(0);
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

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Search />
      <ParksList parks={parks} handleNext={handleNext} handlePrev={handlePrev} />
    </>
  );
}
