import "./index.css"

const Arrow = ({ targetId }) => {

    const scrollToNext = () => {
        const nextSection = document.getElementById(targetId);

        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <section className="arrow-content">
            <button
                className="arrow-btn"
                type="button"
                onClick={scrollToNext}
            >
                <img
                    src="./arrow.jpg"
                    alt="arrow"
                    className="arrow-image"
                />
            </button>
        </section>
    );
};

export default Arrow;