import './App.css';

import Accessibility from './Img/AccessibilityDesign.svg';
import DS from './Img/designSystem.svg';
import Interaction from './Img/Interaction Design.svg';
import UI from './Img/UI.svg';
import Research from './Img/User Research.svg';
import Arrow from './Img/Arrow.svg';
import Wireframing from './Img/Wireframing and Prototyping.svg';
import PoojectBacker from "./Img/BakerSoftProject.png"
import Plan from './planSection'
import PoojectLila from "./Img/BakerSoftProject.png"

import T from './test02'

const Info = () => {

  return (

    <div className="App" >
      <T />
      <div >
        <div className='section' >
          <header className="NavBar">
            <h3>
              Helal Atef
            </h3>
            <a href="helalatef.com">
              Info
            </a>
          </header>
        </div>
        <div className='section'>
          <div className="heroSection" >
            <h1>UI/UX <span style={{ display: 'block' }}>Designer</span></h1>
            <p>Passionate UI/UX designer specializing in creating exceptional user experiences. Through a harmonious blend of aesthetics and functionality.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="column">
            <div className='titleContainer'>
              <p>Updates</p>
              <h2 >last upadtes</h2>
            </div>
            <div className="row">
              <div className="updatesContainer">
                <div className="updateImg">
                  <img src={Accessibility} alt="SVG" />
                </div>
                <div className="textContainer">
                  <h4>Wireframing and Prototyping</h4>
                  <p>From projects</p>
                </div>
              </div>
              <div className="updatesContainer">
                <img className="updateImg" src={Accessibility} alt="SVG" />
                <div className="textContainer">
                  <h4>Wireframing and Prototyping</h4>
                  <p>From articals</p>
                </div>
              </div>
              <div className="updatesContainer">
                <img className="updateImg" src={Accessibility} alt="SVG" />
                <div className="textContainer">
                  <h4>Wireframing and Prototyping</h4>
                  <p>From projects</p>
                </div>
              </div>
              <div className="updatesContainer">
                <img className="updateImg" src={Accessibility} alt="SVG" />
                <div className="textContainer">
                  <h4>Wireframing and Prototyping</h4>
                  <p>From projects</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="section">
          <div className="column">

            <div className='titleContainer'>
              <p>Process</p>
              <h2 >Think Create Test Repeate   </h2>
            </div>
            <Plan />

            <div className="row">
              <div className="serviceContainer">
                <img src={Research} alt="SVG" />
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


        <div className="section">
          <div id="ss" className="scroll-container" >

            <div className='titleContainer'>
              <p>Projects</p>
              <h2 >Keep it clear and cool</h2>
            </div>
            <div className="row">
              <div className="projectContainer">
                <div className="projectImg">
                  <img src={PoojectLila} alt="SVG" />
                </div>
                <h3>BakerSoft Kiosk</h3>
                <p>BakerSoft, 2023</p>
              </div>
              <div className="projectContainer">
                <img className="projectImg" src={PoojectBacker} alt="SVG" />
                <h3>BakerSoft Dashboard</h3>
                <p>BakerSoft, 2023</p>
              </div>
              <div className="projectContainer">
                <img className="projectImg" src={PoojectBacker} alt="SVG" />
                <h3>BakerSoft Dashboard</h3>
                <p>BakerSoft, 2023</p>
              </div>
              <div className="projectContainer">
                <img className="projectImg" src={PoojectBacker} alt="SVG" />
                <h3>BakerSoft Dashboard</h3>
                <p>BakerSoft, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="column">


            <div className='titleContainer'>
              <p>Articales</p>
              <h2>Small space to share ideas</h2>
            </div>


            <div className="articleContainer">
              <div className="articalImg">
                <img src={Accessibility} alt="SVG" />
              </div>
              <div className="textContainer">
                <p>From projects</p>
                <h3>Wireframing and Prototyping</h3>
                <div className="chipsContainer">
                  <div className='chip'>chip</div>
                  <div className='chip'>chip</div>
                </div>
              </div>
              <img src={Arrow} alt="SVG" />
            </div>
            <div className="articleContainer">
              <div className="articalImg">
                <img src={Accessibility} alt="SVG" />
              </div>
              <div className="textContainer">
                <p>From projects</p>
                <h3>Wireframing and Prototyping</h3>
                <div className="chipsContainer">
                  <div className='chip'>chip</div>
                  <div className='chip'>chip</div>
                </div>
              </div>
              <img src={Arrow} alt="SVG" />
            </div>
            <div className="articleContainer">
              <div className="articalImg">
                <img src={Accessibility} alt="SVG" />
              </div>
              <div className="textContainer">
                <p>From projects</p>
                <h3>Wireframing and Prototyping</h3>
                <div className="chipsContainer">
                  <div className='chip'>chip</div>
                  <div className='chip'>chip</div>
                </div>
              </div>
              <img src={Arrow} alt="SVG" />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="column">
            <div className='titleContainer'>
              <p>Collections</p>
              <h2 > Small space to share ideas</h2>
            </div>
            <div className="row">

              <div className="projectContainer">
                <img className="projectImg" src={PoojectBacker} alt="SVG" />


              </div>
              <div className="projectContainer">
                <img className="projectImg" src={PoojectBacker} alt="SVG" />


              </div>

            </div>
            <div className="row">

              <div className="projectContainer">
                <img className="projectImg" src={PoojectBacker} alt="SVG" />


              </div>
              <div className="projectContainer">
                <img className="projectImg" src={PoojectBacker} alt="SVG" />


              </div>
              <div className="projectContainer">
                <img className="projectImg" src={PoojectBacker} alt="SVG" />


              </div>
            </div>
            <div className="row">
              <div className="projectContainer">
                <div className="projectImg">
                  <img src={PoojectLila} alt="SVG" />
                </div>


              </div>
              <div className="projectContainer">
                <img className="projectImg" src={PoojectBacker} alt="SVG" />


              </div>


            </div>
          </div>
        </div>

        {/* 
         Warning!
         message prop requires a string 
          <CirclePointer/>
  */}<div className='section'>
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

export default Info;
