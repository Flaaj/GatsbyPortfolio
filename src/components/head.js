import React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
    return (
        <Helmet>
            <title>Portfolio - Michał Wołek</title>
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                crossorigin="anonymous"
            />
        </Helmet>
    );
};

export default Head;
