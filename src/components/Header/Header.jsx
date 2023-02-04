import "../../style/colors.css"
import "./Header.css"

import logoSrc from "./assets/Bara-logo.png"
import mail from "./assets/mail-logo.png"
import linkedin from "./assets/linkedin-logo.png"
import discord from "./assets/discord-logo.png"

const Header = () => {

    return(
        <header className="header">
            <div className="navigation">
                <div className="logo-box">
                    <img src={logoSrc} alt="Bara portfolio Logo" className="logo" />
                </div>
                <div className="title-box">
                    <h2 className="title">Bara Matejova</h2>
                </div>
                <div className="contact-wrapper">
                    <div className="contact-box">
                        <img src={mail} alt="Mail Logo" className="contact-logo" />
                        <span className="contact-text">mail</span>
                    </div>
                    <div className="contact-box">
                        <img src={linkedin} alt="Linkedin Logo" className="contact-logo" />
                        <span className="contact-text">linkedin</span>
                    </div>
                    <div className="contact-box">
                        <img src={discord} alt="Discord Logo" className="contact-logo" />
                        <span className="contact-text">discord</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header