import CMS from "netlify-cms-app";
import pages from "./pages";
import components from "./components";

import "netlify-cms-widget-richtext";
setTimeout(() => {
    console.log(window.RichTextControl);
}, 5000);
window.CMS_MANUAL_INIT = true;

CMS.registerWidget("richtext", window.RichTextControl, window.RichTextPreview);
CMS.init({
    config: {
        load_config_file: false,
        backend: {
            name: "github",
            branch: "master",
            repo: "Flaaj/GatsbyPortfolio",
        },
        media_folder: "/static",
        public_folder: "/",
        collections: [pages, components],
    },
});
