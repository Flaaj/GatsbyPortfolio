const blog = {
    file: "content/pages/blog.md",
    label: "Blog",
    name: "blog",
    fields: [
        {
            label: "Posts",
            name: "posts",
            widget: "list",
            fields: [
                {
                    label: "Post Title",
                    name: "title",
                    widget: "string",
                    required: true,
                },
                {
                    label: "Author's name",
                    name: "author",
                    widget: "string",
                    required: true,
                },
                {
                    label: "Published date",
                    name: "date",
                    widget: "date",
                    required: true,
                },
                {
                    label: "Page Description Wysiwyg",
                    name: "body",
                    widget: "markdown",
                    required: true,
                },
            ],
        },
    ],
};

export default blog;
