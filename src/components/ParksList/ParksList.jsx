import './ParksList.css';
import { Link, useLocation } from 'react-router-dom';

export default function ParksList({ parks, handleNext, handlePrev }) {
  const { search } = useLocation();
  // my idea is to slice the search and save as diff variable, then change variable in 11
  // not sure how this connects to the query? i think maybe that's where i'm off. do i pass
  // query as a prop here, maybe?

  // obviously the way i have it now, the only thing that shows up is no matches found
  // since i haven't spliced the search

  // but i want it to show ALL of the parks, and then render the ones that i've searched for
  // i got myself into a tizzy / already threw away half a day's work of code and this just
  // exhausted me! haha. i want to understand useLocation...

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
