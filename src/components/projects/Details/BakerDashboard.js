
import './projectDetails.css'
import React from "react";
import Banner from '../../../Img/projects/Banner.png'

import Scr03 from '../../../Img/UI.svg';
const Projects = () => {

    return (
        <div className="BakerDashboard" >


            <div className='bannerSection'>
                <img className='bannerImg' src={Banner} alt="SVG" />
            </div>

            <div className='projectInfo'>
                <div className='leftSection'>
                    <img className='bannerImg' src={Banner} alt="SVG" />
                    <h1>About the project</h1>
                    <p>ReviewIt is an innovative mobile application designed to enhance the user experience when exploring and evaluating various places. With ReviewIt, users can effortlessly rate and review places, while also gaining valuable insights from the comments and ratings shared by other users.</p>
                </div>
                <div className='rightSection'></div>
                <div className='row'>
                    <p>Client</p>
                    <p>Review It</p>
                </div>
                <div className='row'>
                    <p>Role</p>
                    <p>UI/UX designer</p>
                </div>
                <div className='row'>
                    <p>Date</p>
                    <p>2023</p>
                </div>
            </div>

            <div className='scrensSection'>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>

            <div className='principles'>

                <div className='row'>


                    <div className="serviceContainer">
                        <img src={Scr03} alt="SVG" />
                        <h3 className="card-title">Effortless Reviews</h3>
                        <p className="card-content">Enable users to easily review and rate places with a seamless and intuitive interface.</p>
                    </div>
                    <div className="serviceContainer">
                        <img src={Scr03} alt="SVG" />
                        <h3 className="card-title">Effortless Reviews</h3>
                        <p className="card-content">Enable users to easily review and rate places with a seamless and intuitive interface.</p>
                    </div>
                    <div className="serviceContainer">
                        <img src={Scr03} alt="SVG" />
                        <h3 className="card-title">Effortless Reviews</h3>
                        <p className="card-content">Enable users to easily review and rate places with a seamless and intuitive interface.</p>
                    </div>
                    <div className="serviceContainer">
                        <img src={Scr03} alt="SVG" />
                        <h3 className="card-title">Effortless Reviews</h3>
                        <p className="card-content">Enable users to easily review and rate places with a seamless and intuitive interface.</p>
                    </div>
                </div>
            </div>

            <div className='principles'>

                <div className='row'>


                    <div className="serviceContainer">
                        <img src={Scr03} alt="SVG" />
                        <h3 className="card-title">Effortless Reviews</h3>
                        <p className="card-content">Enable users to easily review and rate places with a seamless and intuitive interface.</p>
                    </div>
                    <div className="serviceContainer">
                        <img src={Scr03} alt="SVG" />
                        <h3 className="card-title">Effortless Reviews</h3>
                        <p className="card-content">Enable users to easily review and rate places with a seamless and intuitive interface.</p>
                    </div>
                    <div className="serviceContainer">
                        <img src={Scr03} alt="SVG" />
                        <h3 className="card-title">Effortless Reviews</h3>
                        <p className="card-content">Enable users to easily review and rate places with a seamless and intuitive interface.</p>
                    </div>
                    <div className="serviceContainer">
                        <img src={Scr03} alt="SVG" />
                        <h3 className="card-title">Effortless Reviews</h3>
                        <p className="card-content">Enable users to easily review and rate places with a seamless and intuitive interface.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;

