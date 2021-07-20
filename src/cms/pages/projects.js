const project_fields = [
    {
        Label: "Project name",
        name: "project_name",
        widget: "string",
        required: true,
    },
    {
        Label: "Project description",
        name: "project_descriptione",
        widget: "string",
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
        name: "project_link",
        widget: "string",
        required: true,
    },
    {
        Label: "Github link",
        name: "github_link",
        widget: "string",
        required: true,
    },
    {
        Label: "Technologies uses",
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
            label: "list",
            name: "list",
            widget: "list",
            fields: project_fields,
        },
    ],
};

export default projects;
