import './Park.css';

export default function Park({ parkDetails, returnHome }) {
  const { activities, fullName } = parkDetails;
  return (
    <div className="ParkDetail">
      <h1>{fullName}</h1>

      {activities.map((activity) => {
        return (
          <div key={activity.id} className="activity">
            <p>{activity.name}</p>
          </div>
        );
      })}
      <button onClick={returnHome}>Home</button>
    </div>
  );
}
