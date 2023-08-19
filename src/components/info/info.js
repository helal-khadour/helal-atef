import './info.css';
import Avatar from '../../Img/Avatar.png';
const Info = () => {
  return (

    <div className="Info" >


      <div className='leftSection'>
        <h2>About</h2>
        <p className="height">I'm a UX/UI designer passionate about creating engaging experiences. Throughout my career, I've had the opportunity to learn and grow from various challenges, from designing web dashboards and mobile apps to developing comprehensive design systems. At BakerSoft, I developed a comprehensive design system for the dashboard, ensuring consistency across platforms. As a UI/UX Designer at Disrupt-X, I crafted wireframes, UI designs, and prototypes. At Unifi Solutions, I led a team and designed a visually appealing UI. I'm dedicated to enhancing user experiences and delivering high-quality design solutions.</p>
      </div>

      <div className='rightSection'>
        <img src={Avatar} alt="Avatar" />
      </div>



    </div>

  );
}
export default Info;
