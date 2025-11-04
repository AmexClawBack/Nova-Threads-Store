import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: r => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: r => r.required() }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "images", type: "array", of: [{ type: "image" }], options: { layout: "grid" } }),
    defineField({ name: "price", type: "number", description: "USD cents", validation: r => r.required().min(1) }),
    defineField({ name: "stripePriceId", type: "string", description: "Stripe Price ID (price_...)", validation: r => r.required() }),
    defineField({ name: "active", type: "boolean", initialValue: true }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
  ],
});
