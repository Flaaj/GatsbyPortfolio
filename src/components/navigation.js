import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="menu">
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