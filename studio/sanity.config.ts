import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemaTypes from "./schematypes"; // studio/schematypes/index.ts should export default array

export default defineConfig({
  name: "default",
  title: "Nova Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "qgqhhhlf",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/admin", // <-- critical for embedded Studio at /admin
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
});