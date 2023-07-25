import './process';
import Accessibility from '../../Img/AccessibilityDesign.svg';
import DS from '../../Img/designSystem.svg';
import Interaction from '../../Img/Interaction Design.svg';
import UI from '../../Img/UI.svg';
import Research from '../../Img/User Research.svg';
import Wireframing from '../../Img/Wireframing and Prototyping.svg';
import Plan from './planSection'
const rowsData = [
  {
    id: 1,
    cards: [
      { id: 1, image: Research, title: "User Research", content: "Conducting in-depth user research to gain insights into user behaviors, needs, and preferences, ensuring the design aligns with user expectations." },
      { id: 2, image: Wireframing, title: "Wireframing and Prototyping", content: "Creating wireframes and interactive prototypes to visualize the structure, layout, and user flow of the digital product, allowing for early testing and iteration." },
      { id: 3, image: Interaction, title: "Interaction Design", content: "Defining interactive elements, animations, and microinteractions to enhance user engagement and provide seamless interactions within the digital product." },
    ],
  },
  {
    id: 2,
    cards: [
      { id: 4, image: UI, title: "User Interface (UI) Design", content: "Designing visually appealing interfaces that are user-friendly, intuitive, and aligned with brand identity, considering factors such as typography, color schemes, and iconography." },
      { id: 5, image: DS, title: "Design Systems", content: "Developing design systems and style guides to maintain consistency and scalability throughout the design process, enabling efficient collaboration and future iterations." },
      { id: 6, image: Accessibility, title: "Accessibility Design", content: "Integrating inclusive design principles to ensure that digital products are accessible to users with disabilities, adhering to WCAG guidelines and best practices." },
    ],
  },
];

const Process = () => {

  return (
    <div className="process" >
      <div className="section">
        <div className="column">
          <div className='titleContainer'>
            <p>Process</p>
            <h2 >Think. Create. Test. Repeate.</h2>
          </div>
          <Plan />
          {rowsData.map((row) => (
            <div key={row.id} className="row">
              {row.cards.map((card) => (
                <div key={card.id} className="serviceContainer">
                  <img src={card.image} alt="SVG" />
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-content">{card.content}</p>
                </div>
              ))}
            </div>
          ))}



        </div>
      </div>
    </div>
  );
}

export default Process;



