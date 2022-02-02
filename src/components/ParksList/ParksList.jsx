import './ParksList.css';
import { Link } from 'react-router-dom';

export default function ParksList({ parks, handleNext, handlePrev }) {
  return (
    <div className="ParksList">
      {parks.map((park) => (
        <div key={park.id} className="park-card">
          <h4 className="park-name">{park.fullName}</h4>
          <p>State: {park.states}</p>
          <Link to={`/park/${park.id}`}>
            <img className="park-image" src={park.images[0].url} />
          </Link>
        </div>
      ))}
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Previous</button>
    </div>
  );
}
