import './ParkDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchParkById } from '../../services/natparks';

export default function ParkDetail() {
  const { parkId } = useParams();
  const [parkDetails, setParkDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchParkById(parkId);
      setParkDetails(data);
      setLoading(false);
    };
    fetchData();
  }, [parkId]);

  if (loading) return <p>Loading...</p>;
  console.log(parkDetails);

  const { activities, fullName } = parkDetails;
  console.log(activities);

  return (
    <div>
      <h1>{fullName}</h1>

      {activities.map((activity) => {
        return (
          <div key={activity.id}>
            <p>{activity.name}</p>
          </div>
        );
      })}
    </div>
  );
}
