import './landing.css';
import Process from '../process/process'
import Projects from '../projects/projects'
import Articles from '../Articles/articles'
import Updates from '../Updates/updates'
const Landing = () => {
  return (
    <div className="App" >
      <div >
       
          <header className="NavBar">
            <h3>
              Helal Atef
            </h3>
            <a href="helalatef.com">
              Info
            </a>
          </header>
        <div className='section'>
          <div className="heroSection" >
            <h1>UI/UX <span style={{ display: 'block' }}>Designer</span></h1>
            <p>Passionate UI/UX designer specializing in creating exceptional user experiences. Through a harmonious blend of aesthetics and functionality.
            </p>
          </div>
        </div>
        <Updates />
        <Process />
        <Projects />
        <Articles />
        <div className='section'>
          <div className="footer">
            <p>Designed and Developed by <span>Helal Atef</span></p>
            <p>
              © Helal Atef · 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
