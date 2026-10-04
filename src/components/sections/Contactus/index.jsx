import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";

import "./index.css"

const Contactus = () => {
    return(
        <section className="contact-container">
            <div className="contact-content">
                <div className="contact-card">
                    <h1 className="contact-title">Contact Us.</h1>
                    <div className="contact-info">
                        <FaPhoneAlt/>
                        <p className="contact">Admission Helpline No. +91-9876543210</p>
                    </div>
                    <div className="contact-info">
                        <IoMdMail/>
                        <p className="contact">info@tis.edu.in</p>
                    </div>
                    <div className="contact-info">
                        <FaLocationDot/>
                        <p className="contact">Tulas International School Dhoolkat, P.O-Selaqui, Chakarata road, Dehruan(Uttarakhand)</p>
                    </div>
                    <div className="contact-info">
                        <TbDeviceLandlinePhone/>
                        <p className="contact">Landline No. 0135-2699444, 0135-2699666</p>
                    </div>
                    <div className="school-logo-card">
                        <img src="./school-logo.png" alt="school logo" className="school-logo-image"/>
                    </div>
                </div>
                <div className="enquire-card">
                    <h1 className="enquire-title">Enquire Now!</h1>
                    <div className="input-content">
                        <div className="input-card">
                            <input type="text" placeholder="Enter the Name" />
                        </div>
                        <div className="input-card">
                            <input type="text" placeholder="Enter the Email(Optional)"/>
                        </div>
                    </div>
                    <div className="input-content">
                        <div className="input-card">
                            <input type="text" placeholder="+91"/>
                        </div>
                        <div className="input-card">
                            <input type="number" placeholder="Eneter the Phone number"/>
                        </div>
                        <button type="button" className="input-btn">Send OTP</button>
                    </div>
                    <div className="input-content">
                        <div className="input-card">
                            <input type="text" placeholder="Enter the OTP"/>
                        </div>
                        <button type="button" className="input-btn">Verify OTP</button>
                    </div>
                    <div className="input-content">
                        <div className="input-card">
                            <select>
                                <option>Select the Class</option>
                                <option>Class1</option>
                                <option>Class2</option>
                            </select>
                        </div>
                        <div className="input-card">
                            <select>
                                <option>Select the State</option>
                                <option>Uttarkhand</option>
                                <option>Mumbai</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-content">
                        <input type="checkbox"/>
                        <p className="checkbox-text">I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun</p>
                    </div>
                    <button className="enquire-btn" type="submit">Enquire Now</button>
                </div>
            </div>
        </section>
    )
}

export default Contactus