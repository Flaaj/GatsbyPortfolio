const project_fields = [
    {
        Label: "Project name",
        name: "name",
        widget: "string",
        required: true,
    },
    {
        Label: "Project description",
        name: "description",
        widget: "text",
        required: true,
    },
    {
        Label: "Thumbnail",
        name: "thumbnail",
        widget: "image",
        required: false,
    },
    {
        Label: "Project link",
        name: "link",
        widget: "string",
        required: true,
    },
    {
        Label: "Github link",
        name: "github",
        widget: "string",
        required: true,
    },
    {
        Label: "Technologies used",
        name: "technologies",
        widget: "string",
        required: true,
    },
];

const projects = {
    file: "content/pages/projects.md",
    label: "Projects",
    name: "projects",
    fields: [
        {
            label: "Page Title",
            name: "projects_page_title",
            widget: "string",
            required: true,
        },
        {
            label: "Page Description",
            name: "projects_page_description",
            widget: "text",
            required: false,
        },
        {
            label: "Project list",
            name: "project_list",
            widget: "list",
            fields: project_fields,
        },
    ],
};

export default projects;
