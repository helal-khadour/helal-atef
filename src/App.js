import './App.css';

import Accessibility from './Img/AccessibilityDesign.svg';
import DS from './Img/designSystem.svg';
import Interaction from './Img/Interaction Design.svg';
import UI from './Img/UI.svg';
import Research from './Img/User Research.svg';
import Arrow from './Img/Arrow.svg';
import Wireframing from './Img/Wireframing and Prototyping.svg';
import Process from './Img/Process.svg';
import Lila from './Img/Lila.png';
function App() {
  
  return (
    
    <div className="App">
      <header className="NavBar">
        <a href="helalatef.com">
          Helal Atef
        </a>
        <a href="helalatef.com">
          Info
        </a>  
      </header>
      <div className="heroSection" >
        <h1>UI/UX Designer</h1> 
        <p>Passionate UI/UX designer specializing in creating exceptional user experiences. Through a harmonious blend of aesthetics and functionality.
        </p>
        </div>
        


      
      <div className="sections">
        <div className="column">
        <div className="processContainer">
        <div className="container">
        <h2>Process</h2>
        <p>Conducting in-depth user research to gain insights into user behaviors, needs, and preferences, ensuring the design aligns with user expectations.</p>
        </div>
        <img src={Process } alt="SVG" />
        </div>
          <div className="row">
            <div className="serviceContainer">
            <img src={Research } alt="SVG" />
            <h3>User Research</h3>
            
              <p>Conducting in-depth user research to gain insights into user behaviors, needs, and preferences, ensuring the design aligns with user expectations.</p>
            </div>
            
            <div className="serviceContainer">
            <img src={Wireframing} alt="SVG" />
            <h3>Wireframing and Prototyping</h3>
              <p>Creating wireframes and interactive prototypes to visualize the structure, layout, and user flow of the digital product, allowing for early testing and iteration.</p>
            </div>
            
            <div className="serviceContainer">
            
            <img src={Interaction} alt="SVG" />
            <h3>Interaction Design</h3>
              <p>Defining interactive elements, animations, and microinteractions to enhance user engagement and provide seamless interactions within the digital product.</p>
            </div>
          </div>
          <div className="row">
            <div className="serviceContainer">
            <img src={UI} alt="SVG" />
              <h3>User Interface (UI) Design</h3>
              <p>Designing visually appealing interfaces that are user-friendly, intuitive, and aligned with brand identity, considering factors such as typography, color schemes, and iconography.</p>
            </div>
            
            <div className="serviceContainer">
            <img src={DS} alt="SVG" />
            <h3>Design Systems</h3>
              <p>Developing design systems and style guides to maintain consistency and scalability throughout the design process, enabling efficient collaboration and future iterations.</p>
            </div>
            
            <div className="serviceContainer">
            <img src={Accessibility} alt="SVG" />
            <h3>Accessibility Design</h3>
              <p>Integrating inclusive design principles to ensure that digital products are accessible to users with disabilities, adhering to WCAG guidelines and best practices.</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="sections">
        
        <div className="column">
        <h2>Articles</h2>
        <div className="articleContainer"> 
              <h3>User Research</h3>
              <p>Conducting in-depth user research to gain insights into user behaviors, needs, and preferences, ensuring the design aligns with user expectations. Conducting in-depth user research to gain insights into user behaviors, needs, and preferences, ensuring the design aligns with user expectations
              Conducting in-depth user research to gain insights into user behaviors, needs, and preferences, ensuring the design aligns with user expectations
              </p>
              <img src={Arrow } alt="SVG" />
            </div>

            <div className="articleContainer"> 
            <h3>User Research</h3>
              <p>Conducting in-depth user research to gain insights into user behaviors, needs, and preferences, ensuring the design aligns with user expectations.</p>
              <img src={Arrow } alt="SVG" />
            </div>
            <div className="articleContainer"> 
              <h3>User Research</h3>
              <p>Conducting in-depth user research to gain insights into user behaviors, needs, and preferences, ensuring the design aligns with user expectations.</p>
              <img src={Arrow} alt="SVG" />
            </div>
        </div>
      </div>

      
      <div className="sections">
        <div className="column">
        <h2 className='title'> Projects</h2>
          <div className="row">
            <div className="projectContainer">
              <div className="projectImg">
            <img  src={Lila} alt="SVG" />
            </div>
            <h3>Wireframing and Prototyping</h3>
              <p>Creating wireframes and interactive prototypes to visualize the structure, layout, and user flow of the digital product, allowing for early testing and iteration.</p>
            </div>
            <div className="projectContainer"> 
            <img className="projectImg" src={Accessibility} alt="SVG" />
            <h3>Interaction Design</h3>
              <p>Defining interactive elements, animations, and microinteractions to enhance user engagement and provide seamless interactions within the digital product.</p>
            </div>
          </div>
          <div className="row">
            <div className="projectContainer">
              <div className="projectImg">
            <img  src={Accessibility} alt="SVG" />
            </div>
            <h3>Wireframing and Prototyping</h3>
              <p>Creating wireframes and interactive prototypes to visualize the structure, layout, and user flow of the digital product, allowing for early testing and iteration.</p>
            </div>
            <div className="projectContainer"> 
            <img className="projectImg" src={Accessibility} alt="SVG" />
            <h3>Interaction Design</h3>
              <p>Defining interactive elements, animations, and microinteractions to enhance user engagement and provide seamless interactions within the digital product.</p>
            </div>
          </div>
          <div className="row">
            <div className="projectContainer">
              <div className="projectImg">
            <img  src={Accessibility} alt="SVG" />
            </div>
            <h3>Wireframing and Prototyping</h3>
              <p>Creating wireframes and interactive prototypes to visualize the structure, layout, and user flow of the digital product, allowing for early testing and iteration.</p>
            </div>
            <div className="projectContainer"> 
            <img className="projectImg" src={Accessibility} alt="SVG" />
            <h3>Interaction Design</h3>
              <p>Defining interactive elements, animations, and microinteractions to enhance user engagement and provide seamless interactions within the digital product.</p>
            </div>
          </div>
          <div className="row">
            <div className="projectContainer">
              <div className="projectImg">
            <img  src={Accessibility} alt="SVG" />
            </div>
            <h3>Wireframing and Prototyping</h3>
              <p>Creating wireframes and interactive prototypes to visualize the structure, layout, and user flow of the digital product, allowing for early testing and iteration.</p>
            </div>
            <div className="projectContainer"> 
            <img className="projectImg" src={Accessibility} alt="SVG" />
            <h3>Interaction Design</h3>
              <p>Defining interactive elements, animations, and microinteractions to enhance user engagement and provide seamless interactions within the digital product.</p>
            </div>
          </div>

        </div>
      </div>
      <header className="footer">
        <p>
        © Helal Atef · 2023
        </p>

        <a href="helalatef.com">
          helal.khadour@gmail.com
        </a>  
        <a href="helalatef.com">
          LinkedIn
        </a> 
        <a href="helalatef.com">
          Info
        </a>   
      </header>
    </div>
  );
}

export default App;
