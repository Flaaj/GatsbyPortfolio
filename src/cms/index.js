import CMS from "netlify-cms-app";
import pages from "./pages";
import components from "./components";

// import "netlify-cms-widget-richtext";

window.CMS_MANUAL_INIT = true;

// const Control = window.RichTextControl;
// const Preview = window.RichTextPreview;

// CMS.registerWidget("richtext", Control, Preview);
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
