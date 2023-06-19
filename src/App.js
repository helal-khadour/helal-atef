import logo from './Hero.svg';
import './App.css';


function App() {
  const styles = {
    main: {
      backgroundColor: "#f1f1f1",
      width: "100%",
    },
    inputText: {
      padding: "10px",
      color: "red",
    },
  };
  
  return (
    <div className="App">
      <div className="HeroSection">
      <header className="NavBar">
        <a href="helalatef.com">
          Helal Atef
        </a>
        <div className="navBarLeft">
        <a href="helalatef.com">
          Projects
        </a>
        <a href="helalatef.com" style={{color:"red"}}>
          articals
        </a>
        <a href="helalatef.com">
          Info
        </a>
        <button className="b">Say Hello</button>
        </div>
      </header>
      <img src={logo} alt="Hero" className="heroImg" />
      </div>
      <div className="ArticalesSections">
      <div className="list">
        <h1>list title</h1>
        <p>project contents</p>

      </div>
      <div className="list">
        <h1>list title</h1>
        <p>project contents</p>

      </div>
      <div className="list">
        <h1>list title</h1>
        <p>project contents</p>
      </div>
      </div>

      <div className='ProjectsSections'>
        <div className='row'>
            <div className="project">
            <img src={logo} alt="Hero" className="heroImg" />
            <p>project name</p>
            <p>lorem ipsom lorem ipsom lorem ipsom</p>
            </div>
            <div className="project">
            <img src={logo} alt="Hero" className="heroImg" />
            <p>project name</p>
            <p>lorem ipsom lorem ipsom lorem ipsom</p>
            </div>
        </div>
        <div className='row'>
            <div className="project">
            <img src={logo} alt="Hero" className="heroImg" />
            <p>project name</p>
            <p>lorem ipsom lorem ipsom lorem ipsom</p>
            </div>
            <div className="project">
            <img src={logo} alt="Hero" className="heroImg" />
            <p>project name</p>
            <p>lorem ipsom lorem ipsom lorem ipsom</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
