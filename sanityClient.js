import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '4p7bpl9b',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01'
})