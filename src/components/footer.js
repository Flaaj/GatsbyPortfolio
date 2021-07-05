import React from "react";

const Footer = () => (
    <footer className="footer">
        <div className="contact container">
            <span className="">Contact me:</span>
            <ul className="contact__list">
                <li className="contact__element">
                    <a  
                        type="email"
                        href="michal.wolek96@gmail.com"
                        className="contact__link"
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                </li>
                <li className="social">
                    <a
                        href="https://linkedin.com/in/michal-wolek"
                        className="contact__link"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className="social">
                    <a
                        href="https://github.com/flaaj"
                        className="contact__link"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
);

export default Footer;
