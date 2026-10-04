import './index.css'

const achievers = [
    {
        image: "./sakshi-malik.webp",
        name: "Sakshi Malik",
        description:
            "First Indian wrestler to win a medal at the Rio 2016 Olympics. Olympics Bronze Medalist in Wrestling, Silver Medalist at the 2014 Commonwealth Games, Rajiv Gandhi Khel Ratna Awardee 2016 and Padma Shri Awardee 2017."
    },
    {
        image: "./vishesh-bhriguvanshi.webp",
        name: "Vishesh Bhriguvanshi",
        description:
            "Indian Basketball Team Captain and major FIBA Asia Championship player. Under his captaincy, Team India won a 3x3 Basketball Gold Medal at the Asian Beach Games in 2008."
    },
    {
        image: "./prakashi-chandro-tomar.webp",
        name: "Prakashi Tomar & Late Ms Chandro Tomar",
        description:
            "Popularly known as the Shooter Dadis. Their inspiring real-life story was portrayed in the biopic movie Saand Ki Aankh, featuring Bhumi Pednekar and Taapsee Pannu. They were winners of multiple National Championships."
    },
    {
        image: "./abhishek-verma.webp",
        name: "Abhishek Verma",
        description:
            "Archery champion with a top world ranking, Arjuna Awardee and Asian Games Gold Medalist in Archery."
    },
    {
        image: "./aditi-gopichand-swami.webp",
        name: "Aditi Gopichand Swami",
        description:
            "World-class Indian archer, Arjuna Awardee and World Champion in Archery."
    },
    {
        image: "./jeevan-jyot-singh-teja.webp",
        name: "Jeevan Jyot Singh Teja",
        description:
            "Dronacharya Awardee in Archery, recognized for his contribution to developing and mentoring archery talent."
    },
    {
        image: "./ojus-devtale.webp",
        name: "Ojus Devtale",
        description:
            "Indian archery champion, Arjuna Awardee and World Champion who has achieved a top position in the world rankings."
    },
    {
        image: "./rajat-chauhan.webp",
        name: "Rajat Chauhan",
        description:
            "Indian archery champion, former top-ranked archer and Arjuna Awardee 2016."
    },
    {
        image: "./devendra-singh-bisht.webp",
        name: "Devendra Singh Bisht",
        description:
            "Football professional associated with the selection of players for the Under-18 School Indian Football Team."
    }
];


const Achievers = () => {
    return(
        <section className='achieve-container' >
            <div className='achieve-card'>
                <h1 className='achieve-heading'>Influential Personalities On Campus</h1>
                <p className="achieve-description">Sports Person/Social Media Influencers</p>
            </div>
            <div className='achieve-image-card'>
                {achievers.map((item, index) => (
                    <div className="achiever-person-card" key={index}>
                        <img
                            src={item.image}
                            alt={item.state}
                            className="achiever-image"
                        />
                        <p className="achieve-name">{item.name}</p>
                        <p className='achieve-description'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Achievers