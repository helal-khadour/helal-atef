import '../../App.css';
import './projects.css'

import P01 from "../../Img/Mealtime Mobile App.png"
import P02 from "../../Img/Self Ordring Kiosk App.png"
import P03 from "../../Img//BakerSof Web App.png"
import P04 from "../../Img/Metrowatch Mobile App.png"
import P05 from "../../Img/ReviewIt Mobile App.png"
import P06 from "../../Img/Disrupt-x Web App.png"
import P07 from "../../Img/MuslimApp Mobile App.png"
import P08 from "../../Img/Outline Mobile App.png"
import LockedIcon from "../../Img/LockedIcon.svg"

const rowsData = [
  {
    id: 1,
    cards: [
      { id: 1, image: P01, title: "Mealtime Mobile App", content: "BakerSoft, 2023", chips01: "Style Guide", chips02: "Interactions", chips03: "User Interface (UI)" },
      { id: 2, image: P02, title: "BakerSoft Kiosk App", content: "BakerSoft, 2023", chips01: "Interactions", chips02: "White Label", chips03: "Redesigning" }
    ],
  },
  {
    id: 2,
    cards: [
      { id: 3, image: P03, title: "BakerSoft Dashboard App", content: "BakerSoft, 2022", chips01: "Interactions", chips02: "Design System", chips03: "Redesigning" },
    ],
  },
  {
    id: 3,
    cards: [
      { id: 4, image: P04, title: "Metrowtach Mobile App", content: "Disrupt-X, 2021", chips01: "Interactions", chips02: "Style Guide", chips03: "User Interface (UI)" },
      { id: 5, image: P05, title: "ReviewIt Mobile App", content: "ReviewIt, 2021", chips01: "Style Guide", chips02: "User Interface (UI)", chips03: "Wireframing" },
    ],
  },
  {
    id: 4,
    cards: [
      { id: 6, image: P06, title: "Disrupt-X Dashboard App", content: "Disrupt-X, 2021", chips01: "Design Thinking", chips02: "Design System", chips03: "Wireframing" },
    ],
  },
  {
    id: 5,
    cards: [
      { id: 7, image: P07, title: "MuslimApp Mobile App", content: "UnifiSoultions, 2020", chips01: "Style Guide", chips02: "Interaction ", chips03: "Redesigning" },
      { id: 8, image: P08, title: "Outline Mobile App", content: "Outline, 2019", chips01: "Style Guide", chips02: "User Interface (UI)", chips03: "Wireframing" },
    ],
  },
];



const Projects = () => {

  return (
    <div className="projects" >
      <div className="section">
        <div className="column" >
          {rowsData.map((row) => (
            <div key={row.id} className="row">
              {row.cards.map((card) => (
                <div key={card.id} className="projectContainer" id={`card-${card.id}`}>
                  <div className="projectImg">
                    <div className="lockedIcon">
                      <img src={LockedIcon} alt="Locked" />
                    </div>
                    <img src={card.image} alt="SVG" />
                  </div >
                  <div className="projectTitle">
                    <h3>{card.title}</h3>
                    <p>{card.content}</p>
                    {/* <div className="chipsContainer">
                      <div className='chip'>{card.chips01}</div>
                      <div className='chip'>{card.chips02}</div>
                      <div className='chip'>{card.chips03}</div>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

