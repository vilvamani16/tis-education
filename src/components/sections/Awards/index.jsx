import "./index.css"

const awardImages = [
    {
        image: "./award1.jpg"
    },
    {
        image: "./award2.jpg"
    },
    {
        image: "./award3.jpg"
    }
];

const Awards = () => {
    return(
        <section className="award-container">
            <div className="award-content">
                <h1 className="award-title">Awards</h1>
                <p className="award-description">We believe in celebrating the hard work and perseverance of the best!</p>
            </div>
            <div className="award-image-card">
                {awardImages.map((item, index) => (
                    <div className="award-image-content" key={index}>
                        <img src={item.image} alt="award image" className="award-image"/>
                    </div>
                ))}
            </div>
            <button type="button" className="award-btn">SEE MORE</button>
        </section>
    )
}

export default Awards