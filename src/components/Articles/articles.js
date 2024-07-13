
import './articles.css'
import Tetco from '../../Img/tetco.png';
import BakerSoft from '../../Img/BakerSoft.png';
import Unifi from '../../Img/unifi.png';
import DisruptX from '../../Img/disruptx.png';
import Mealtime from '../../Img/Mealtime.png';
import Freelance from '../../Img/freelance.png'
const sectionsData = [
    { id: 1, title: "Sr. UX/UI Designer", date: "Nov 2023 - Present", company: "Tatweer Educational Technologies", location: "Remote, KSA", img: Tetco },
    { id: 2, title: "Sr. UX/UI Designer", date: "Jul 2023 -  Present", company: "Mealtime", location: "Remote , Germany", img: Mealtime },
    { id: 3, title: "UX/UI Designer", date: "Oct 2022 -  Nov 2023", company: "BakerSoft", location: "Remote , Germany", img: BakerSoft },
    { id: 4, title: "Lead UX/UI Designer", date: "Feb 2021 - Sep 2022", company: "Disrupt-X", location: "Dubai, UAE", img: DisruptX },
    { id: 5, title: "Lead UI Designer", date: "Nov 2020 - Jun 2022", company: "Unifi Solutions", location: "Remote, Canada", img: Unifi },
    { id: 6, title: "UI Designer", date: "May 2019 - Oct 2020", company: "Freelance", location: "Syria", img: Freelance },

];
const Articles = () => {
    return (
        <div className="articles" >
            <div className="section">
                <div className="column">
                    <div className='titleContainer'>

                        <h2>Work Experiences</h2>
                    </div>
                    {sectionsData.map((section) => (
                        <div className="articleContainer">
                            <div className="articalImg">
                                <img src={section.img} alt="companyimage" />
                            </div>
                            <div key={section.id} className="textContainer">
                                <p >{section.date}</p>
                                <h3 >{section.title}</h3>
                                <dive className="row">
                                    <p >{section.company}</p>
                                    <p >{section.location}</p>
                                </dive>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Articles;
