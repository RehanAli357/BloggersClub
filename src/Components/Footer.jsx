import React from "react";
import "../Assets/Style/Footer/Footer.css";
import Insta from "../Assets/Images/instagram.png";
import Whatsapp from "../Assets/Images/whatsapp.png";
import Github from "../Assets/Images/github.png";
import Linkedin from "../Assets/Images/linkedin.png";
const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className="Footer">
                    <h1>Blooger'sClub</h1>
                    <p>Share your thoughts and read other thoughts on different topics</p>
                </div>
                <div className="Footer">
                    <ul className="Contact">
                        ContactUs
                        <li>+91-7017337726</li>
                        <li>mohdrehanali40@gmail.com</li>
                        <li>E4/280-F TajNagri Phase 2, Agra</li>
                    </ul>
                    <div className="Follow">
                    <a href="https://www.instagram.com/invites/contact/?=8xqkt1kh3gt&utm_content=cdnjx65"><img src={Insta} alt="icon" /></a>
                        <a href="https://wa.me/917017337726"><img src={Whatsapp} alt="icon" /></a>
                        <a href="https://github.com/RehanAli357"><img src={Github} alt="icon" /></a>
                        <a href="https://www.linkedin.com/in/rehan-ali-b97964247"><img src={Linkedin} alt="icon" /></a>
                    </div>

                </div>

            </footer>
        </React.Fragment>
    );
}

export default Footer;