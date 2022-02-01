import { fetchParks } from './services/natparks';
import { useEffect, useState } from 'react';

export default function Home() {
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchParks();
      setParks(data);
      console.log(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p>hello i am home component</p>
      {parks.map((park) => (
        <p key={park.id}>{park.name}</p>
      ))}
    </div>
  );
}
