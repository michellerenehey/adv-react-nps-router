import './ParksList.css';

export default function ParksList({ parks }) {
  return (
    <div className="ParksList">
      {parks.map((park) => (
        <div key={park.id} className="park-card">
          <p>{park.fullName}</p>
          <img className="park-image" src={park.images[0].url} />
        </div>
      ))}
    </div>
  );
}
