import './ParkList.css';
import { useRouteMatch, Link, Route } from 'react-router-dom';
import ParkDetails from '../ParkDetails/ParkDetails';

export default function ParkList({ parks }) {
  const { url, path } = useRouteMatch();

  return (
    <>
      {parks.map(({ fullName, id, images }) => {
        return (
          <div className="parkCard" key={id}>
            <p>
              <Link to={`${url}/${id}`}>{fullName}</Link>
            </p>
            <img src={images[0].url} />
          </div>
        );
      })}
      <Route path={`${path}/:parkId`}>
        <ParkDetails />
      </Route>
    </>
  );
}
