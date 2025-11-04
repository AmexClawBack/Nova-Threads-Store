import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schematypes'

export default defineConfig({
  name: 'default',
  title: 'Nova CMS',
  projectId: 'qgqhhhlf',   // <= YOUR Sanity Project ID
  dataset: 'production',
  plugins: [deskTool()],
  schema: { types: schemaTypes },
})
