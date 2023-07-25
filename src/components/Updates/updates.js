import Accessibility from '../../Img/Arrow.svg';
import './updates.css'
const sectionsData = [
    { id: 1, title: "Outline App", subTitle: "From projects"},
    { id: 2, title: "Microinteractions", subTitle: "From articls"},
    { id: 3, title: "POS system", subTitle: "From Projects"},
    { id: 3, title: "Data visualisation", subTitle: "From articls"},
];
const Updates = () => {

    return (
        <div className="App" >
            <div className="section">
                <div className="column">
                    <div className='titleContainer'>
                        <p>Updates</p>
                        <h2 >last upadtes</h2>
                    </div>
                    <div className="row">
                        {sectionsData.map((section) => (
                            <div className="updatesContainer">
                                <div className='updateImg'>
                                <img  src={Accessibility} alt="SVG" />
                                </div>
                                
                          
                                    <div key={section.id} className="textContainer">
                                        <h4 >{section.title}</h4>
                                        <p className='subTitle'>{section.subTitle}</p>
                                    </div>
                                

                            </div>
                        ))}


                    </div>

                </div>
            </div>
        </div>
    );
}

export default Updates;