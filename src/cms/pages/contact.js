const contact_fields = [
    {
        Label: "Label",
        name: "label",
        widget: "string",
        required: true,
    },
    {
        Label: "Contact link url",
        name: "contact_link_url",
        widget: "text",
        required: true,
    },
    {
        Label: "Contact link text",
        hint: "if this is not provided, the link text will copy the link url",
        name: "contact_link_text",
        widget: "string",
        required: false,
    },
];

const contact = {
    file: "content/pages/contact.md",
    label: "Contact",
    name: "contact",
    fields: [
        {
            label: "Page Title",
            name: "contact_page_title",
            widget: "string",
            required: true,
        },
        {
            label: "Page Description",
            name: "contact_page_description",
            widget: "text",
            required: false,
        },
        {
            label: "Contact fields",
            name: "contact_fields",
            widget: "list",
            fields: contact_fields,
        },
    ],
};
