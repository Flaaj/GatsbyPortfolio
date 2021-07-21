import React, { useState } from "react";
import { Link } from "gatsby";

const Navigation = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <nav className="navigation">
            <div
                className="hamburger"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                <div className="ingredient ingredient--top-bun"></div>
                <div className="ingredient ingredient--meat"></div>
                <div className="ingredient ingredient--bottom-bun"></div>
            </div>
            <ul className={"menu" + (showMobileMenu ? " show" : "")}>
                <li className="menu__item">
                    <Link to="/" className="menu__link">
                        Home
                    </Link>
                </li>
                <li className="menu__item">
                    <Link to="/about" className="menu__link">
                        About
                    </Link>
                </li>
                <li className="menu__item">
                    <Link to="/my-projects" className="menu__link">
                        My projects
                    </Link>
                </li>
                <li className="menu__item">
                    <Link to="/contact" className="menu__link">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
