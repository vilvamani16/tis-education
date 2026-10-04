import Header from "../../components/sections/Header"
import Navbar from "../../components/sections/Navbar"
import Hero from "../../components/sections/Hero"
import Chatbot from "../../components/sections/Chatbot"
import Whatsapp from "../../components/sections/Whatsapp"
import ApplyNow from "../../components/sections/ApplyNow"
import Arrow from "../../components/sections/Arrow"
import Contactus from "../../components/sections/Contactus"
import StudentFeedBack from "../../components/sections/StudentFeedback"
import Ranking from "../../components/sections/Rankings"
import Achievers from "../../components/sections/Achievers"
import Awards from "../../components/sections/Awards"
import Review from "../../components/sections/GoogleReview"
import Collabaration from "../../components/sections/Collabaration"
import Footer from "../../components/sections/Footer"


import "./index.css"

const HomePage = () => (
    <div className="home-page-container">
        <ApplyNow/>
        <Whatsapp/>
        <Chatbot/>
        <Arrow/>
        <div className="top-section">
            <Header/>
            <Navbar/>
        </div>
        <Hero/>
        <Contactus/>
        <StudentFeedBack/>
        <Ranking/>
        <Achievers/>
        <Awards/>
        <Review/>
        <Collabaration/>
        <Footer/>
    </div>
)

export default HomePage