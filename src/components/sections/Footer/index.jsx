import "./index.css";

const Footer = () => {
    return (
        <footer className="footer-container">

            <div className="footer-main">

                {/* School Information */}
                <div className="footer-school">

                    <img
                        src="./school-logo.png"
                        alt="Tulas International School"
                        className="footer-logo"
                    />

                    <h2 className="footer-school-name">
                        Tulas International School
                    </h2>

                    <a
                        href="https://www.google.com/maps/place/Tula's+International+School+-+Best+Boarding+School+in+Dehradun"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-address"
                    >
                        Dhoolkot, P.O – Selaqui, Chakrata Road,
                        <br />
                        Dehradun-248011 (Uttarakhand)
                    </a>

                    <p className="footer-contact">
                        Landline No. 0135-2699444, 0135-2699666
                    </p>

                    <p className="footer-contact">
                        Admission Helpline No. +91-9837983791
                    </p>

                    <a
                        href="mailto:info@tis.edu.in"
                        className="footer-email"
                    >
                        info@tis.edu.in
                    </a>

                </div>


                {/* Useful Links */}
                <div className="footer-links">

                    <h3>Useful Links</h3>

                    <a href="#">FAQ</a>

                    <a href="#">Calendar</a>

                    <a href="#">Brochure</a>

                    <a href="#">Privacy Policy</a>

                    <a href="#">Terms & Conditions</a>

                    <a href="#">Disclaimer</a>

                    <a href="#">Disciplinary Policy</a>

                    <a href="#">Mobile Phone Policy</a>

                    <a href="#">Child Welfare & Safety Policy</a>

                </div>


                {/* Important Links */}
                <div className="footer-actions">

                    <a href="#" className="footer-action-btn">
                        Virtual Tour
                    </a>

                    <a href="#" className="footer-action-btn">
                        Apply Now
                    </a>

                    <a
                        href="https://tis.fedena.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-action-btn"
                    >
                        Fedena Login
                    </a>

                </div>

            </div>


            {/* Social Media */}
            <div className="footer-social">

                <a
                    href="https://www.facebook.com/tulasinternationalschool/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                >
                    Facebook
                </a>

                <a
                    href="https://twitter.com/tulas_intschool"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                >
                    Twitter
                </a>

                <a
                    href="https://www.linkedin.com/school/tulas-international-school/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                >
                    LinkedIn
                </a>

                <a
                    href="https://www.instagram.com/tulasinternationalschool/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                >
                    Instagram
                </a>

                <a
                    href="https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                >
                    YouTube
                </a>

            </div>


            {/* Bottom */}
            <div className="footer-bottom">

                <p>
                    Copyright © 2026 Tulas International School,
                    Dehradun | All Rights Reserved
                </p>

                <p>
                    Designed and Managed By{" "}
                    <a
                        href="https://netpuppys.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        NetPuppys
                    </a>
                </p>

            </div>

        </footer>
    );
};

export default Footer;