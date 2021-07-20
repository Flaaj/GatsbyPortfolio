import CMS from "netlify-cms-app";
import pages from "./pages";

window.CMS_MANUAL_INIT = true;

CMS.init({
    config: {
        load_config_file: false,
        backend: {
            name: "github",
            branch: "master",
            repo: "Flaaj/GatsbyPortfolio",
        },
        media_folder: "/content/media",
        public_folder: "/public",
        collections: [pages],
    },
});
