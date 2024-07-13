import './landing.css';
import Process from '../process/process'
import Projects from '../projects/projects'
import Hero from './Hero'


const Landing = () => {
  return (
    <div className="Landing" >



      <Hero />
      <Projects />
      {/* <Process /> */}

    </div>
  );
}

export default Landing;
