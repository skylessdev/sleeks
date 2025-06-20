import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '4p7bpl9b',          // Your actual Sanity project ID
  dataset: 'production',
  apiVersion: '2023-06-20',       // Use today's date
  useCdn: true                    // Speeds up public reads
})