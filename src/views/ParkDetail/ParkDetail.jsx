import './ParkDetail.css';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchParkById } from '../../services/natparks';
import Park from '../../components/Park/Park';

export default function ParkDetail() {
  const { parkId } = useParams();
  const [parkDetails, setParkDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchParkById(parkId);
      setParkDetails(data);
      setLoading(false);
    };
    fetchData();
  }, [parkId]);

  if (loading) return <p>Loading...</p>;

  function returnHome() {
    history.push('/');
  }
  return <Park parkDetails={parkDetails} returnHome={returnHome} />;
}
