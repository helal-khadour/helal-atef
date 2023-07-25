import React, { useState, useEffect, useRef } from 'react';
import './process.css'
const ProcessSection = () => {


  const [showCircle, setShowCircle] = useState(false);
  const svgContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const container = svgContainerRef.current;
      if (container) {
        const viewportHeight = window.innerHeight;
        if (scrollPosition >= (viewportHeight - 200)) {
          setShowCircle(true);
        }
        else {
          setShowCircle(false);

        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className="helloSection" ref={svgContainerRef}>
      <svg width="90vw" height="100vh" viewBox="0 0 1022 495" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="s">
          <path className={showCircle ? 'outer-circles active' : 'outer-circles '} d="M0 247.499H26M26 247.499C26 247.499 114 237.499 114 157.499C114 77.4992 186 82.4992 186 82.4992M26 247.499C26 247.499 114 259.499 114 339.499C114 419.499 186.5 414.499 186.5 414.499M26 247.499H538M538 247.499C538 247.499 606.5 237.499 606.5 157.499C606.5 77.4992 695.5 82.4992 695.5 82.4992M538 247.499C538 247.499 606.5 262.499 606.5 338.499C606.5 414.499 695.5 414.499 695.5 414.499M538 247.499H858.5" />
        </g>
        <g className="outer-circle-container">
          <circle id="s" className={showCircle ? 'ss outer-circle active ss' : 'ss outer-circle'} cx="940" cy="245.5" r="81" fill="none" stroke="black" style={{ filter: 'drop-shadow(4px 8px 0px rgba(0, 0, 0, 1))' }} />
          <text className={showCircle ? 's outer-type active' : 's outer-type'} x="940" y="245.5" textAnchor="middle" dominantBaseline="middle" >
            Iteration
          </text>
        </g>
        <g className="outer-circle-container">
          <circle className={showCircle ? 'outer-circle active' : 'outer-circle'} cx="267" cy="413.5" r="81" fill="#E0E0E0" stroke="black"
          />

          <text className={showCircle ? 'outer-type active' : 'outer-type'} fill="#000000" x="267" y="413.5" textAnchor="middle" dominantBaseline="middle">
          Discovery 
          </text>
        </g>

        <g className="outer-circle-container">
          <circle className={showCircle ? 'outer-circle active' : 'outer-circle'} cx="267" cy="81.5" r="81" fill="#E0E0E0" stroke="black" />

          <text className={showCircle ? 'outer-type active' : 'outer-type'} fill="#000000" x="267" y="81.5" textAnchor="middle" dominantBaseline="middle">
            Definition
          </text>
        </g>
        <g className="outer-circle-container">
          <circle className={showCircle ? 'outer-circle active' : 'outer-circle'} cx="777" cy="413.5" r="81" fill="#E0E0E0" stroke="black" />

          <text className={showCircle ? 'outer-type active' : 'outer-type'} fill="#000000" x="777" y="413.5" textAnchor="middle" dominantBaseline="middle">
            Design system
          </text>
        </g>

        <g className="outer-circle-container">
          <circle className={showCircle ? 'outer-circle active' : 'outer-circle'} cx="777" cy="81.5" r="81" fill="#E0E0E0" stroke="black" />
          <text className={showCircle ? 'outer-type active' : 'outer-type'} fill="#000000" x="777" y="81.5" textAnchor="middle" dominantBaseline="middle">
            High Fidelity
          </text>
        </g>


        <g className="outer-circle-container">
          <circle className={showCircle ? 'outer-circle active ' : 'outer-circle'} cx="415" cy="245.5" r="81" fill="#E0E0E0" stroke="black" />
          <text className={showCircle ? 'outer-type active' : 'outer-type'} fill="#000000" x="415" y="245.5" textAnchor="middle" dominantBaseline="middle">
            Wireframe
          </text>
        </g>
        <circle className={showCircle ? 'outer-circle active' : 'outer-circle'} cx="30" cy="247.5" r="3" fill="#E0E0E0" stroke="black" />
        <circle className={showCircle ? 'outer-circle active' : 'outer-circle'} cx="541" cy="247.5" r="3" fill="#E0E0E0" stroke="black" />
      </svg>



    </div>
  );
};

export default ProcessSection;







