import React from 'react';
import Accessibility from './Img/AccessibilityDesign.svg';
import Interaction from './Img/Interaction Design.svg';
import Research from './Img/User Research.svg';
import './App.css';
const Loading = () => {
    return (
        <div className="Loading">
            <div className="columnLoading">
                <h1>Helal Atef</h1>
                <div className="rowLoading">
                    <img src={Accessibility} alt="SVG" />
                    <img src={Research} alt="SVG" />
                    <img src={Interaction} alt="SVG" />
                </div>
            </div>
        </div>
    )

}

export default Loading;
