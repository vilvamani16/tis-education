import {useState, useEffect} from "react"
import "./index.css"

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);
    const [mouse, setMouse] = useState({x:0, y:0})

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMouse({x, y});
    }

    return (
        <section className="hero-container">
            <section className="hero-content" onMouseMove={handleMouseMove}>
                <div className="left-image-card">
                    <img src="./basketball-bg.webp" alt="left image" className="left-image left-1" style={{transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`}} />
                    <img src="./cricket-bg.webp" alt="left image" className="left-image left-2" style={{transform: `translate(${mouse.x * 35}px, ${mouse.y * 20}px)`}} />
                    <img src="./football-bg.webp" alt="left image" className="left-image left-3" style={{transform: `translate(${mouse.x * 50}px, ${mouse.y * 20}px)`}} />
                    <img src="./pottery-bg.webp" alt="left image" className="left-image left-4" style={{transform: `translate(${mouse.x * 65}px, ${mouse.y * 20}px)`}} />  
                </div>
                <div className="center-content" style={{
                         transform: `translateY(${scrollY * 0.5}px)`
                    }}>
                    <h1 className="center-title">LET'S DO it With Tulas</h1>
                </div>
                <div className="right-image-card">
                    <img src="./bharathanatyam-bg.webp" alt="right image" className="right-image right-1" style={{transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`}} />
                    <img src="./karate-bg.webp" alt="right image" className="right-image right-2" style={{transform: `translate(${mouse.x * 35}px, ${mouse.y * 20}px)`}} />
                    <img src="./shooting-bg.webp" alt="right image" className="right-image right-3" style={{transform: `translate(${mouse.x * 50}px, ${mouse.y * 20}px)`}} />
                    <img src="./artist-bg.webp" alt="right image" className="right-image right-4" style={{transform: `translate(${mouse.x * 65}px, ${mouse.y * 20}px)`}} /> 
                </div>
            </section>
            <div className="hero-subtitle">
                <p className="subtitle-text">Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.</p>
            </div>
        </section>
    )
}
export default Hero