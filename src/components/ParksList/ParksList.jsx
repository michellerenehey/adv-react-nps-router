import './ParksList.css';
import { Link, useLocation } from 'react-router-dom';

export default function ParksList({ parks, handleNext, handlePrev }) {
  const { search } = useLocation();
  // slice the search and save as diff variable, then change variable in 11
  console.log(search);

  return (
    <div className="ParksList">
      {parks.includes(search) ? (
        <>
          {parks.map((park) => (
            <div key={park.id} className="park-card">
              <h4 className="park-name">{park.fullName}</h4>
              <p>State: {park.states}</p>
              <Link to={`/park/${park.id}`}>
                <img className="park-image" src={park.images[0].url} />
              </Link>
            </div>
          ))}
        </>
      ) : (
        <p>no matches found</p>
      )}
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Previous</button>
    </div>
  );
}
