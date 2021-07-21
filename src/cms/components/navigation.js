const navigation = {
    file: "content/pages/navigation.md",
    label: "Menu",
    name: "navigation",
    fields: [
        {
            label: "Menu Items",
            name: "menu_items",
            widget: "list",
            fields: [
                {
                    label: "Menu Item Name",
                    name: "menu_item_name",
                    widget: "string",
                    required: true,
                },
                {
                    label: "Menu Item Link",
                    name: "menu_item_link",
                    widget: "string",
                    required: true,
                },
                {
                    label: "Internal",
                    name: "link_is_internal",
                    hint: "Does this link lead to this domain?",
                    widget: "boolean",
                    required: true,
                },
            ],
        },
    ],
};

export default navigation;
