import CMS from "netlify-cms-app";
import pages from "./pages";
import components from "./components";

import richText from "netlify-cms-widget-richtext";
const {RichTextControl, RichTextPreview} = richText;

window.CMS_MANUAL_INIT = true;

CMS.registerWidget("richtext", RichTextControl, RichTextPreview);
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
