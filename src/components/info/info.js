import React from 'react';
import './info.css';
import Avatar from '../../Img/Avatar.png';
import Skill from '../process/process';
import Work from '../Articles/articles';

const Info = () => {

  const handleSayHello = () => {
    window.location.href = "mailto:helal.khadour@gmail.com";
  };

  const handleVisitLinkedIn = () => {
    window.open("https://www.linkedin.com/in/helal-khadour");
  };

  const handleDownloadCV = () => {
    const cvUrl = 'https://drive.google.com/uc?export=download&id=1Z_Pk8Ku6ygLieGYd66_7U5BFxBQhveWs';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'HelalAtef_CV.pdf';
    link.click();
  };

  return (
    <div className="Info" >
      <div className="section">
        <div className="InfoSection">
          <h2>About</h2>
          <div className="column">
            <div className='leftSection'>
              <p className="height">I'm a UX/UI designer passionate about creating engaging experiences. Throughout my career, I've had the opportunity to learn and grow from various challenges, from designing web dashboards, kiosk apps, and mobile apps to developing comprehensive design systems.</p>
              <div className='row'>
                <button className="primaryButton" onClick={handleSayHello}>Say Hello 👋</button>
                <button onClick={handleDownloadCV}>Download Resume</button>
                <button onClick={handleVisitLinkedIn}>LinkedIn</button>
              </div>
            </div>
            <div className='rightSection'>
              <img src={Avatar} alt="Avatar" />
            </div>
          </div>
        </div>
      </div>
      <Work />
      <Skill />
    </div>
  );
}

export default Info;
