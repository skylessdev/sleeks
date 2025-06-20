import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import deskStructure from './deskStructure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'  // ✅ named import

export default defineConfig({
  name: 'default',
  title: 'Sleeks',

  projectId: '4p7bpl9b',
  dataset: 'production',

  plugins: [deskTool({ structure: deskStructure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

