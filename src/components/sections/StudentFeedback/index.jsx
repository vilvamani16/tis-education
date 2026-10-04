import { useState } from "react";

import "./index.css"

const sports = [
    { image: "./archery.png", name: "ARCHERY" },
    { image: "./cycling.png", name: "CYCLING" },
    { image: "./football.png", name: "FOOTBALL" },
    { image: "./volleyball1.png", name: "VOLLEY BALL" },
    { image: "./Cricket1.png", name: "CRICKET" },
    { image: "./basketball1.png", name: "BASKET BALL" },
    { image: "./tennis.png", name: "TENNIS" },
    { image: "./tableTennis.png", name: "TABLE TENNIS" },
    { image: "./riding.png", name: "HORSE RIDING" },
    { image: "./badminton.png", name: "BADMINTON" },
    { image: "./shooting.png", name: "SHOOTING" },
    { image: "./hockey.png", name: "HOCKEY" },
    { image: "./squash.png", name: "SQUASH" },
    { image: "./swimming.png", name: "SWIMMING" },
    { image: "./takewonda.png", name: "TAEKWONDO" }
];

const StudentFeedBack = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const startIndex = currentPage * itemsPerPage;
    const currentSports = sports.slice(
        startIndex,
        startIndex + itemsPerPage
    );
    return(
        <section className="student-feeedback-container">
            <div className="student-content">
                <div className="student-info">
                    <div className="students-text">
                        <h1 className="students-header">“We feel supported in what we do and nudged further to do more”</h1>
                        <p className="students-subtitle">At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.</p>
                    </div>
                    <img src="./students1.png" alt="students" className="students-image"/>
                </div>
                <div className="student-center-text">
                    <p className="students-center-subtitle">TULAS'S IS...</p>
                    <h1 className="students-center-header">MADE FOR THE <span>FUTURE</span></h1>
                </div>
                <div className="student-info">
                    <img src="./students2.png" alt="students" className="students-image"/>
                    <div className="students-text">
                        <h1 className="students-header">“Tulas helped me thrive and become the best version of myself”</h1>
                        <p className="students-subtitle">When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.</p>
                    </div>
                </div>
            </div>
            <div className="sports-content">
                <h1 className="sports-text">Sports?</h1>
                <p className="sport-subtitle">It’s not just a <span>facility</span>. At Tulas it’s the <span>Foundation</span>! 16+ sports curated to bring joy and discipline to your life.</p>
               <div className="sports-image-content">
                {currentSports.map((sport, index) => (
                    <div className="image-card" key={index}>
                        <img
                            src={sport.image}
                            alt={sport.name}
                            className="sports-image"
                        />
                        <p className="sports-name">
                            {sport.name}
                        </p>
                    </div>
                ))}
                </div>
                <div className="pagination">
                    <button
                        onClick={() =>
                            setCurrentPage(prev => Math.max(prev - 1, 0))
                        }
                        disabled={currentPage === 0}
                    >
                        ←
                    </button>
                    <span>
                        {currentPage + 1} / {Math.ceil(sports.length / itemsPerPage)}
                    </span>
                    <button
                        onClick={() =>
                            setCurrentPage(prev =>
                                Math.min(
                                    prev + 1,
                                    Math.ceil(sports.length / itemsPerPage) - 1
                                )
                            )
                        }
                        disabled={
                            currentPage ===
                            Math.ceil(sports.length / itemsPerPage) - 1
                        }
                    >
                        →
                    </button>
                </div>
            </div>
            <div className="student-info">
                    <img src="./students3.png" alt="students" className="students-image"/>
                    <div className="students-text">
                        <h1 className="students-header">At Tulas, we always ask, “What’s the secret to making school awesome?”</h1>
                        <p className="students-subtitle">The secret to making one's school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.</p>
                    </div>
                </div>
        </section>
    )
}

export default StudentFeedBack