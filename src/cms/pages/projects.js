const project_name = {
    label: "Project name",
    name: "Project_name",
    widget: "string",
    required: true,
};

const projects = {
    file: "content/pages/projects.md",
    label: "Projects",
    name: "Projects",
    fields: [
        {
            label: "Title",
            name: "title",
            widget: "list",
            types: [project_name],
        },
    ],
};

export default projects;
