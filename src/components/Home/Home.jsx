import photo from '../../assets/homephoto.png';
import './Home.css';

export default function Home() {
  return (
    <div className="Home">
      <h1>National Parks Are Cool!</h1>
      <img src={photo} />
    </div>
  );
}
