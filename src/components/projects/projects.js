import '../../App.css';
import './projects.css'
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import P01 from "../../Img/LilaPro.png"
import P02 from "../../Img/BakerPro.png"
import P03 from "../../Img/BakerPro.png"
import P04 from "../../Img/OutlinePro.png"
import P05 from "../../Img/MuslimPro.png"
import P06 from "../../Img/MetroPro.png"
// gsap.registerPlugin(ScrollTrigger);

const rowsData = [
  {
    id: 1,
    cards: [
      { id: 1, image: P01, title: "BakerSoft Koisk", content: "BakerSoft, 2023" },
      { id: 2, image: P02, title: "BakerSoft Dashboard", content: "BakerSoft, 2022" },
    ],
  },
  {
    id: 2,
    cards: [
      { id: 3, image: P03, title: "POS Dashboard", content: "UnifiSoultions, 2021" },
      { id: 4, image: P04, title: "Outkine App", content: "Outline, 2021" },
    ],
  },
  {
    id: 3,
    cards: [
      { id: 5, image: P05, title: "MuslimApp", content: "UnifiSoultions, 2021" },
      { id: 6, image: P06, title: "MetroWatch App", content: "Disrupt-X, 2020" },
    ],
  },
];



const Projects = () => {
  // const ref = useRef(null);

  // useEffect(() => {
  //   const element = ref.current;

  //   gsap.to(element, {
  //     translateX: 0,
  //     duration: 3,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: element,
  //       start: "top center",
  //       end: "bottom center",
  //       toggleActions: "play pause reverse pause",
  //       scrub:true,
  //     },
  //   });
  // }, []);
  return (
    <div className="projects" >
      <div className="section">
        <div className="column" >
          <div className='titleContainer'>
            <p>Projects</p>
            <h2 >Keep it clear and cool</h2>
          </div>
          {rowsData.map((row) => (
            <div key={row.id} className="row">
              {row.cards.map((card) => (
                <div key={card.id} className="projectContainer">
                  <div className="projectImg">
                    <img src={card.image} alt="SVG" />
                  </div >
                  <div className="projectTitle">
                    <h3>{card.title}</h3>
                    <p>{card.content}</p>
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

