import './ParkDetails.css';
import { useParams } from 'react-router-dom';

export default function ParkDetails({ parks }) {
  const { parkId } = useParams();

  const park = parks.find((item) => item.id === parkId);
  const parkActivities = park.activities;

  return (
    <div className="ParkDetails">
      {parkActivities.map(({ name, id }) => {
        return <p key={id}>{name}</p>;
      })}
    </div>
  );
}
