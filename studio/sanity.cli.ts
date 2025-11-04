import {defineCliConfig} from "sanity/cli"

export default defineCliConfig({
  api: {
    projectId: "qgqhhhlf",   // ← your Sanity project ID
    dataset: "production",   // ← your dataset
  },
  // Optional: pick a pretty subdomain for hosted Studio
  // studioHost: "nova-threads", // uncomment & set if you want mysite.sanity.studio
})