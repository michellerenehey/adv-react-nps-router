import './ParkList.css';
import { useRouteMatch, Link, Route } from 'react-router-dom';
import ParkDetails from '../ParkDetails/ParkDetails';

export default function ParkList({ parks }) {
  const { url, path } = useRouteMatch();

  return (
    <div className="ParkList">
      {parks.map(({ fullName, id, images }) => {
        return (
          <div className="parkCard" key={id}>
            <p>
              <Link className="name-link" to={`${url}/${id}`}>
                {fullName}
              </Link>
            </p>
            <img src={images[0].url} />
          </div>
        );
      })}
      <hr />;
      <Route path={`${path}/:parkId`}>
        <ParkDetails parks={parks} />
      </Route>
    </div>
  );
}
