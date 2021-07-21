import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const query = graphql`
    query {
        markdownRemark(
            fileAbsolutePath: { regex: "/components/navigation.md/" }
        ) {
            frontmatter {
                menu_items {
                    menu_item_name
                    menu_item_link
                    link_is_internal
                }
            }
        }
    }
`;

const Navigation = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const data = useStaticQuery(query)
    const menuItems = data.markdownRemark.frontmatter.menu_items

    return (
        <nav className="navigation">
            <button
                className={"hamburger" + (showMobileMenu ? " on" : "")}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                <div className="ingredient ingredient--top-bun"></div>
                <div className="ingredient ingredient--meat"></div>
                <div className="ingredient ingredient--bottom-bun"></div>
            </button>
            <ul className={"menu" + (showMobileMenu ? " show" : "")}>
                {menuItems.map(
                    ({ menu_item_name, menu_item_link, link_is_internal }) => (
                        <li key={menu_item_name} className="menu__item">
                            <Link to={menu_item_link} className="menu__link">
                                {menu_item_name}
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
