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
                    label: "Slug",
                    name: "slug",
                    widget: "string",
                    required: true,
                },
                {
                    label: "Featured Image",
                    name: "featured",
                    widget: "image",
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
                    label: "Content",
                    name: "body",
                    widget: "markdown",
                    required: true,
                },
                {
                    label: "Categories",
                    name: "categories",
                    widget: "list",
                    fields: [
                        {
                            label: "Category name",
                            name: "name",
                            widget: "string",
                            required: true
                        }
                    ]
                },
                {
                    label: "Tags",
                    name: "tags",
                    widget: "list",
                    fields: [
                        {
                            label: "Tag name",
                            name: "name",
                            widget: "string",
                            required: true
                        }
                    ]
                },
            ],
        },
    ],
};

export default blog;
