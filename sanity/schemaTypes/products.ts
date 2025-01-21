import { defineType } from "sanity";

export const productSchema = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "customerReviews",
      title: "Customer Reviews",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "reviewerName", title: "Reviewer Name", type: "string" },
            { name: "rating", title: "Rating", type: "number", validation: (Rule) => Rule.min(0).max(5) },
            { name: "comment", title: "Comment", type: "text" },
          ],
        },
      ],
    },
    {
      name: "size",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: ["XS", "S", "M", "L", "XL"],
      },
    },
    {
      name: "colors",
      title: "Available Colors",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Black", value: "black" },
          { title: "White", value: "white" },
          { title: "Gray", value: "gray" },
          { title: "Blue", value: "blue" },
          { title: "Red", value: "red" },
        ],
      },
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
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
      name: "wishlist",
      title: "Add to Wishlist",
      type: "boolean",
      initialValue: false,
      description: "Mark this product to be added to the wishlist.",
    },
    {
      name: "isInStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
      description: "Is the product available in stock?",
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Featured", value: "featured" },
          {
            title: "Follow products and discounts on Instagram",
            value: "instagram",
          },
          { title: "Gallery", value: "gallery" },
        ],
      },
    },
  ],
});
