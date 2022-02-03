import './ParksList.css';
import { Link, useLocation } from 'react-router-dom';

export default function ParksList({ parks, handleNext, handlePrev }) {
  const { search } = useLocation();
  const searching = new URLSearchParams(search);
  const searchedPark = searching.get('q');

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
