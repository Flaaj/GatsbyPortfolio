const about = {
    file: "content/pages/about.md",
    label: "About",
    name: "about",
    public_folder: "",
    media_folder: "",
    fields: [
        {
            label: "Page Title",
            name: "about_page_title",
            widget: "string",
            required: true,
        },
        {
            label: "Page Description",
            name: "about_text",
            widget: "text",
            required: true,
        },
    ],
};

export default about;
