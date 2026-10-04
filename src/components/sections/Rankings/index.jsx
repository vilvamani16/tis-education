import "./index.css"

const rankings = [
    {
        rankingNo: "01",
        state: "Uttarakhand",
        description: "One of the leading schools in Uttarakhand for academic excellence and overall student development."
    },
    {
        rankingNo: "02",
        state: "Dehradun",
        description: "Recognized for providing quality education with a strong focus on academics, sports and activities."
    },
    {
        rankingNo: "01",
        state: "North India",
        description: "A school committed to holistic learning, encouraging students to discover their talents and build confidence."
    },
    {
        rankingNo: "04",
        state: "India",
        description: "Creating future-ready students through education, discipline, creativity, leadership and teamwork."
    }
];

const Ranking = () => {
    return(
        <section className="ranking-container">
            <div className="ranking-content">
                <img src="./ranking1.png" alt="ranking-image" className="ranking-image"/>
                <img src="./arrow-bg.png" alt="arrow" className="arrow-bg-img"/>
            </div>
            <div className="ranking-info">
                {rankings.map((list, index) => (
                    <div className="ranking-card" key={index}>
                        <h1 className="rankingno">{list.rankingNo}</h1>
                        <p className="state">{list.state}</p>
                        <p className="description">{list.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Ranking