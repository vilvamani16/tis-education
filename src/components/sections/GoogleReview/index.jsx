import {useState} from "react"

import "./index.css"

const reviewers = [
    {
        image: "./reviewer1.png",
        name: "Reviewer Name 1",
        relation: "Parent",
        description:
            "A wonderful learning environment with supportive teachers and excellent opportunities for students."
    },
    {
        image: "./reviewer2.png",
        name: "Reviewer Name 2",
        relation: "Parent",
        description:
            "The school provides a great balance between academics, sports and extracurricular activities."
    },
    {
        image: "./reviewer3.png",
        name: "Reviewer Name 3",
        relation: "Student",
        description:
            "I had a great experience at the school. The teachers are friendly, supportive and encouraging."
    },
    {
        image: "./reviewer4.png",
        name: "Reviewer Name 4",
        relation: "Parent",
        description:
            "The school focuses on overall development and gives students many opportunities to explore their talents."
    },
    {
        image: "./reviewer5.png",
        name: "Reviewer Name 5",
        relation: "Alumni",
        description:
            "The school helped me build confidence, discipline and the skills needed for my future."
    }
];

const Review = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const reviewersPerPage = 2;

    const startIndex = currentPage * reviewersPerPage;

    const currentReviewers = reviewers.slice(
        startIndex,
        startIndex + reviewersPerPage
    );

    const totalPages = Math.ceil(
        reviewers.length / reviewersPerPage
    );
    return(
        <section className="review-container">
            <h1 className="review-header">Google Reviews</h1>
            <div className="review-content">
                {currentReviewers.map((item, index) => (
                    <div className="review-list-card" key={index}>
                        <img src={item.image} alt="reviewer image" className="reviewer-image"/>
                        <h1 className="reviewer-name">{item.name}</h1>
                        <p className="reviewer-relation">{item.relation}</p>
                        <p className="reviewer-description">{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="reviewer-pagination">
                <button
                    type="button"
                    onClick={() =>
                        setCurrentPage(prev =>
                            Math.max(prev - 1, 0)
                        )
                    }
                    disabled={currentPage === 0}
                >
                    ←
                </button>
                <span>
                    {currentPage + 1} / {totalPages}
                </span>
                <button
                    type="button"
                    onClick={() =>
                        setCurrentPage(prev =>
                            Math.min(
                                prev + 1,
                                totalPages - 1
                            )
                        )
                    }
                    disabled={currentPage === totalPages - 1}
                >
                    →
                </button>
            </div>
        </section>
    )
}

export default Review