const metadata = {
    file: "content/seo/metadata.md",
    public_folder: "",
    media_folder: "",
    label: "Metadata",
    name: "metadata",
    fields: [
        {
            Label: "Site Title",
            name: "title",
            widget: "string",
            required: true,
        },
        {
            Label: "Site Description",
            name: "description",
            widget: "text",
            required: true,
        },
        {
            Label: "Site Logo",
            name: "logo",
            widget: "image",
            required: true,
        },
        {
            Label: "keywords",
            name: "keywords",
            widget: "list",
            required: true,
            fields: [
                {
                    Label: "Keyword",
                    name: "keyword",
                    widget: "string",
                    required: true,
                },
            ],
        },
        {
            Label: "Site Author",
            name: "author",
            widget: "string",
            required: true,
        },
    ],
};

export default metadata;
