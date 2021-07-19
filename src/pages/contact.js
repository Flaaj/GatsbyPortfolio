import * as React from "react";
import Layout from "../layouts/layout";
import Card from "../components/card";

const Contact = () => {
    return (
        <Layout>
            <h1 class="title">Here are some ways to contact me:</h1>
            <Card items={items} />
        </Layout>
    );
};

export default Contact;

const items = [
    {
        label: "Phone",
        link: "tel: +48604606621",
        text: "604 606 621"
    },
    {
        label: "Email",
        link: "mailto: michal.wolek96@gmail.com",
        text: "michal.wolek96@gmail.com",
    },
    {
        label: "LinkedIn",
        link: "https://linkedin.com/in/michal-wolek",
    },
    {
        label: "GitHub",
        link: "https://github.com/flaaj/",
    },
    {
        link: "/CV_Michal_Wolek.pdf",
        text: "Get my CV",
        download: true
    },

];
