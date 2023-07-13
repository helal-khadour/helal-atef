
import './articles.css'
import Accessibility from '../../Img/AccessibilityDesign.svg';
import Arrow from '../../Img/Arrow.svg';
const sectionsData = [
    { id: 1, title: "Wireframing and Prototyping", subTitle: "Content for Section 1", chips01: "sdsd", chips02: "sdsd" },
    { id: 2, title: "Section 2", subTitle: "Content for Section 2", chips01: "sdsd", chips02: "sdsd" },
    { id: 3, title: "Section 3", subTitle: "Content for Section 3", chips01: "sdsd", chips02: "sdsd" },
];
const Articles = ()=> {
    return (
        <div className="articles" >
            <div className="section">
                <div className="column">
                <div className='titleContainer'>
                        <p>Articales</p>
                        <h2>Small space to share ideas</h2>
                    </div>
                    {sectionsData.map((section) => (
                        <div className="articleContainer">
                            <div className="articalImg">
                                <img src={Accessibility} alt="SVG" />
                            </div>

                            <div className="textContainer">
                                <div key={section.id} >
                                    <p >{section.subTitle}</p>
                                    <h3 >{section.title}</h3>
                                    <div className="chipsContainer">
                                        <div className='chip'>{section.chips01}</div>
                                        <div className='chip'>{section.chips02}</div>
                                    </div>
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
