
import './articles.css'
import Accessibility from '../../Img/AccessibilityDesign.svg';
import Arrow from '../../Img/Arrow.svg';
const sectionsData = [
    { id: 1, title: "User Interface Visualizations", subTitle: "Jun, 2023", chips01: "Interactions", chips02: "UI" },
    { id: 2, title: "Building a Robust Design System", subTitle: "Jul, 2022", chips01: "UI", chips02: "Design System"  },
    
];
const Articles = () => {
    return (
        <div className="articles" >
            <div className="section">
                <div className="column">
                    <div className='titleContainer'>
                        <p>Articales</p>
                        <h2>Inspiration in Brief</h2>
                    </div>
                    {sectionsData.map((section) => (
                        <div className="articleContainer">
                            <div className="articalImg">
                                <img src={Accessibility} alt="SVG" />
                            </div>
                            <div key={section.id} className="textContainer">
                                <p >{section.subTitle}</p>
                                <h3 >{section.title}</h3>
                                <div className="chipsContainer">
                                    <div className='chip'>{section.chips01}</div>
                                    <div className='chip'>{section.chips02}</div>
                                </div>
                            </div>
                            <img src={Arrow} alt="SVG" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Articles;
