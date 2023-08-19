import './notFound.css';
import { Link } from 'react-router-dom';
import P06 from "../../Img/404.png"


const NotFound = () => {

  return (
    <div className="notFound" >
      <div className="column">
        <img src={P06} alt="SVG" />
        <h3>The page you’re looking for can’t be found.</h3>
        <Link to="/">
          <p className="CTAButton">Go Home</p></Link>
      </div>
    </div>
  );
}

export default NotFound;



