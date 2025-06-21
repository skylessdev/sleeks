import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '4p7bpl9b',
  dataset: 'production',
  apiVersion: '2023-06-20',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN
})