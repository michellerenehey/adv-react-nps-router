import { fetchParks } from '../../services/natparks';
import { useEffect, useState } from 'react';
import ParksList from '../../components/ParksList/ParksList';

export default function Home() {
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchParks();
      setParks(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return <ParksList parks={parks} />;
}
