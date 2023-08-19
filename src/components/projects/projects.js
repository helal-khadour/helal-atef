import '../../App.css';
import './projects.css'
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import P01 from "../../Img/LilaPro.png"
import P02 from "../../Img/BakerPro.png"
import P03 from "../../Img/ReviewPro.png"
import P04 from "../../Img/OutlinePro.png"
import P05 from "../../Img/MuslimPro.png"
import P06 from "../../Img/MetroPro.png"

gsap.registerPlugin(ScrollTrigger);

const rowsData = [
  {
    id: 1,
    cards: [
      { id: 1, image: P01, title: "BakerSoft Kiosk", content: "BakerSoft, 2023", initialTranslateY: 500, initialScale: 0.5 },
      { id: 2, image: P02, title: "BakerSoft Dashboard", content: "BakerSoft, 2022", initialTranslateY: 500, initialScale: 0.5 }
    ],
  },
  {
    id: 2,
    cards: [
      { id: 3, image: P03, title: "ReviewIt App", content: "ReviewIt, 2021", initialTranslateY: 500, initialScale: 0.5 },
      { id: 4, image: P04, title: "Outline App", content: "Outline, 2021", initialTranslateY: 500, initialScale: 0.5 },
    ],
  },
  {
    id: 3,
    cards: [
      { id: 5, image: P05, title: "MuslimApp", content: "UnifiSoultions, 2021", initialTranslateY: 500, initialScale: 0.5 },
      { id: 6, image: P06, title: "MetroWatch App", content: "Disrupt-X, 2020", initialTranslateY: 500, initialScale: 0.5 },
    ],
  },
];



const Projects = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      rowsData.map((rows) => {
        rows.cards.map((card) => {
          const cardElement = document.getElementById(`card-${card.id}`);

          gsap.to(cardElement, {
            scrollTrigger: {
              trigger: cardElement,
              start: "top bottom",
              end: "bottom top",

            },
            scale: 1,
            translateY: 0,
            duration: 1.5,
            ease: "power2.out",

          });

        });

      });
    })
    return () => ctx.revert();
  }, []);
  return (
    <div className="projects" >
      <div className="section">
        <div className="column" >
          <div className='titleContainer'>
            <p>Projects</p>
            <h2 >Streamlined. Distinctive.</h2>
          </div>
          {rowsData.map((row) => (
            <div key={row.id} className="row">
              {row.cards.map((card) => (
                <div key={card.id} className="projectContainer" style={{
                  transform: `  scale(${card.initialScale}) translateY(${card.initialTranslateY}px)`,
                }} id={`card-${card.id}`}>
                  {/* <Link to={`/project/${card.id}`}> */}
                  <div className="projectImg">
                    <img src={card.image} alt="SVG" />
                  </div >
                  <div className="projectTitle">
                    <h3>{card.title}</h3>
                    <p>{card.content}</p>
                  </div>
                  {/* </Link> */}
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

