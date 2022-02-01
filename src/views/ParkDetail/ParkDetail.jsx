import './ParkDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchParkById } from '../../services/natparks';

export default function ParkDetail() {
  const { parkId } = useParams();
  const [parkDetails, setParkDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchParkById(parkId);
      setParkDetails(data);
    };
    fetchData();
  }, [parkId]);

  return (
    <div>
      <h1>{parkDetails?.fullName}</h1>
    </div>
  );
}
