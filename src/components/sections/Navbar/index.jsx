import { TiThMenu } from "react-icons/ti";

import "./index.css";

const Navbar = () => (
    <div className="navbar-container">
        <img src="./school-logo.png" alt="school logo" className="school-logo"/>
        <nav className="navbar-card">
            <div className="dropdown">
                <a href="#" className="nav-link">ABOUT TIS</a>
                <div className="dropdown-menu">
                    <a href="#" className="menu-link">About TIS</a>
                    <a href="#" className="menu-link">Our Mission</a>
                    <a href="#" className="menu-link">Our Vision</a>  
                </div>
            </div>
            <div className="dropdown">
                <a href="#" className="nav-link">ACADEMICS</a>
                <div className="dropdown-menu">
                    <a href="#" className="menu-link">Programs</a>
                    <a href="#" className="menu-link">Admissions</a>
                    <a href="#" className="menu-link">Calendar</a>  
                </div>
            </div>
            <div className="dropdown">
                <a href="#" className="nav-link">BOARDING LIFE</a>
                <div className="dropdown-menu">
                    <a href="#" className="menu-link">Pastoral Care</a>
                    <a href="#" className="menu-link">Food & Nutrition</a>
                    <a href="#" className="menu-link">Facilities</a>
                    <a href="#" className="menu-link">Infirmary & medical facilities</a>
                    <a href="#" className="menu-link">Our House System</a>
                    <a href="#" className="menu-link">Teacher Profile</a>
                </div>
            </div>
            <div className="dropdown">
                <a href="#" className="nav-link">BEYOND ACADEMICS</a>
                <div className="dropdown-menu">
                    <a href="#" className="menu-link">Sports</a>
                    <a href="#" className="menu-link">Beyond The Curriculum</a>
                    <a href="#" className="menu-link">Clubes and Scoities</a>
                    <a href="#" className="menu-link">Celebration</a>
                    <a href="#" className="menu-link">Mentor & Mentee System</a>
                    <a href="#" className="menu-link">Career Counselling</a>
                </div>
            </div>
            <div className="dropdown">
                <a href="#" className="nav-link">EVENTS</a>
                <div className="dropdown-menu">
                    <a href="#" className="menu-link">Sports Day</a>
                    <a href="#" className="menu-link">38th National Games</a>
                    <a href="#" className="menu-link">Founder Day</a>
                    <a href="#" className="menu-link">Sports Achievement</a>
                    <a href="#" className="menu-link">Confluence</a>
                    <a href="#" className="menu-link">Promient Personalities</a>
                </div>
            </div>
            <div className="dropdown">
                <a href="#" className="nav-link">ADMISSIONS</a>
                <div className="dropdown-menu">
                    <a href="#" className="menu-link">Admissions Producer</a>
                    <a href="#" className="menu-link">Online Fee pay</a>
                    <a href="#" className="menu-link">Admission Requirements</a>
                    <a href="#" className="menu-link">Fee Structure</a>
                    <a href="#" className="menu-link">Online Application</a>
                    <a href="#" className="menu-link">Testimonials</a>
                </div>
            </div>
            <div className="dropdown">
                <a href="#" className="nav-link">MANDATORY DISCLOSURE</a>
                <div className="dropdown-menu">
                    <a href="#" className="menu-link">Mandatory Disclosure</a>
                </div>
            </div>
            <div className="dropdown">
                <a href="#" className="nav-link">ALUMNI NETWORKS</a>
                <div className="dropdown-menu">
                    <a href="#" className="menu-link">Alumni Association</a>
                </div>
            </div>
            <div className="dropdown">
                <a href="#" className="nav-link">QUICK LINKS</a>
                <div className="dropdown-menu">
                    <a href="#" className="menu-link">Transfer Certificate</a>
                    <a href="#" className="menu-link">Contact</a>
                    <a href="#" className="menu-link">Newsletter</a>
                    <a href="#" className="menu-link">Careers</a>
                    <a href="#" className="menu-link">Blogs</a>
                    <a href="#" className="menu-link">Parent Testimonials</a>
                </div>
            </div>
        </nav>
        <div className="hamburger-menu-card">
            <TiThMenu className="hamburger-menu-icon" size={30} color="white"/>
        </div>
    </div>
)

export default Navbar