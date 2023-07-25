import '../../App.css';
import './projects.css'
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import P01 from "../../Img/LilaPro.png"
import P02 from "../../Img/BakerPro.png"
import P03 from "../../Img/ReviewPro.png"
import P04 from "../../Img/OutlinePro.png"
import P05 from "../../Img/MuslimPro.png"
import P06 from "../../Img/MetroPro.png"

gsap.registerPlugin(ScrollTrigger);
const ProjectDetails = () => {
    const cardElement02Ref = useRef(null);
    const cardElement01Ref = useRef(null);
    useEffect(() => {

        const container = cardElement02Ref.current;
        const leftSection = cardElement01Ref.current;
        let ctx = gsap.context(() => {
            gsap.to(container, {
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: 'bottom bottom',
                    pin: leftSection,
                    pinSpacing: false,
                    markers: true,
                    scrub: 0.5,

                },
            });
        })
        return () => ctx.revert();
    }, []);
    return (
        <div className="projects" >
            <div className='row sd'>
                <p>Projects</p>
                <h2 >Streamlined. Distinctive.</h2>
            </div>
            <div className='row sd'>
                <p>Projects</p>
                <h2 >Streamlined. Distinctive.</h2>
            </div>
            <div className="row ssss" ref={cardElement02Ref}>
                <div className="column suv" id='spo' ref={cardElement01Ref}>
                    <div className='titleContainer'>
                        <p>Projects</p>
                        <h2 >Streamlined. Distinctive.</h2>
                    </div>
                </div>
                <div className="column ss" >
                    <div className='column sd'>
                    <div className="">
                    <img src={P01} alt="SVG" />
                  </div >
                        <p>Projects</p>
                        <h2 >Streamlined. Distinctive.</h2>
                    </div>

                    <div className='column sd'>
                    <div className="">
                    <img src={P01} alt="SVG" />
                  </div >
                        <p>Projects</p>
                        <h2 >Streamlined. Distinctive.</h2>
                    </div>
                  
                    
                 
                    
                    
                  
                </div>
            </div>
           
        </div>
    );
}

export default ProjectDetails;
