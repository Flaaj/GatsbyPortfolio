import CMS from "netlify-cms-app";
import pages from "./pages";
import components from "./components";
import { RichTextControl, RichTextPreview } from "netlify-cms-widget-richtext";

window.CMS_MANUAL_INIT = true;

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
CMS.registerWidget("richtext", RichTextControl, RichTextPreview);
