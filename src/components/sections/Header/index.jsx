import { FaPhone } from "react-icons/fa6";
import "./index.css"

const Header = () => (
    <header className="header-container">
        <FaPhone size={20} color="black"/>
        <h1 className="header-title">ADMISSIONS HELPLINE NO. +91-9876543210</h1>
        <button className="header-button">Enquire Now</button>
    </header>
)

export default Header