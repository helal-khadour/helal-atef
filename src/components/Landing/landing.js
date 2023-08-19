import './landing.css';
import Process from '../process/process'
import Projects from '../projects/projects'
import Hero from './Hero'
// import Articles from '../Articles/articles'
// import Updates from '../Updates/updates'

const Landing = () => {
  return (
    <div className="Landing" >


      {/* <Updates /> */}
      <Hero />
      <Process />
      <Projects />
      {/* <Articles /> */}

    </div>
  );
}

export default Landing;
