const about = {
    file: "content/pages/about.md",
    label: "About",
    name: "about",
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
        {
            label: "Page Description Wysiwyg",
            name: "about_wysiwyg",
            widget: "richtext",
            required: true,
        },
    ],
};

export default about;
