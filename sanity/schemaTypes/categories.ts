import { defineType } from "sanity";

export const categorySchema = defineType({
  name: "categories",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: "description",
      title: "Category Description",
      type: "text",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          `${input.toLowerCase().replace(/\s+/g, "-")}-${Math.floor(
            Math.random() * 100000
          )}`,
      },
    },
    {
      name: "featured",
      title: "Featured Category",
      type: "boolean",
      initialValue: false,
      description: "Mark this category as featured.",
    },
    {
      name: "priority",
      title: "Priority",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.min(1).max(10),
      description: "Set the display priority of this category (1 = highest).",
    },
    {
      name: "relatedProducts",
      title: "Related Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "products" }],
        },
      ],
      description: "Link related products to this category.",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "New Arrival", value: "new-arrival" },
          { title: "Best Seller", value: "best-seller" },
          { title: "Limited Edition", value: "limited-edition" },
        ],
      },
    },
  ],
});
