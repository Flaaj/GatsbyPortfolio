/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`query MyQuery { site { siteMetadata { description author title }}}`).site.siteMetadata

  return (
    <main className={container}>
      <title>{data.title}</title>
      <nav>
        <div className="logo">{data.title}</div>
        <p>{data.description}</p>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
