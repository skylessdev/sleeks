import { client } from '../../../sanityClient'

export async function fetchKits() {
  const query = `*[_type == "kit"] | order(_createdAt desc)`

  try {
    const kits = await client.fetch(query)
    console.log('Full Kit Data Structure:', JSON.stringify(kits, null, 2))
    return kits
  } catch (error) {
    console.error('Failed to fetch kits:', error)
    return []
  }
}