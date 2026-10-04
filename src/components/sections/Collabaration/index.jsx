import "./index.css"

const companyList = [
    {
        image: "./collaboration1.png"
    },
    {
        image: "./collaboration2.jpg"
    },
    {
        image: "./collaboration3.jpg"
    },
    {
        image: "./collaboration4.jpg"
    },
    {
        image: "./collaboration5.jpg"
    },
    {
        image: "./collaboration6.png"
    },
    {
        image: "./collaboration7.jpg"
    },
    {
        image: "./collaboration8.png"
    },
    {
        image: "./collaboration9.png"
    }
];

const Collabaration = () => {
    return(
        <section className="collab-container">
            <h1 className="collab-header">12+ Collabarations</h1>
            <div className="collab-content">
                {companyList.map((item, index) => (
                    <div className="collab-card" key={index}>
                        <img src={item.image} alt="collab company" className="collab-image"/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Collabaration