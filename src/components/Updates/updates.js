import Accessibility from '../../Img/Arrow.svg';
import './updates.css'
const sectionsData = [
    { id: 1, title: "Section 01", subTitle: "Content for Section 1", chips01: "sdsd", chips02: "sdsd" },
    { id: 2, title: "Section 2", subTitle: "Content for Section 2", chips01: "sdsd", chips02: "sdsd" },
    { id: 3, title: "Section 3", subTitle: "Content for Section 3", chips01: "sdsd", chips02: "sdsd" },
    { id: 3, title: "Section 3", subTitle: "Content for Section 3", chips01: "sdsd", chips02: "sdsd" },
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
 <img className="updateImg" src={Accessibility} alt="SVG" />
 <div className="textContainer">
                                <div key={section.id} >
                                    <h4 >{section.title}</h4>
                                    <p >{section.subTitle}</p>
                                </div>
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