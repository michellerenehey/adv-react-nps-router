import React from 'react';

export default function ParksList({ parks }) {
  return (
    <div>
      <p>hello i am parkslist component</p>
      {parks.map((park) => (
        <div key={park.id}>
          <p>{park.fullName}</p>
          <img src={park.images[0].url} />
        </div>
      ))}
    </div>
  );
}
