import * as React from "react";
import PropTypes from "prop-types";
import Navigation from "./navigation";

const Header = ({ pageTitle }) => (
  <header className="header">
    <div className="container">
      {/* <h1 className="page-title">{pageTitle}</h1> */}
      <Navigation />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
