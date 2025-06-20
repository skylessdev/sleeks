import { client } from '../../../sanityClient'

export async function fetchKits() {
  const query = `*[_type == "kit"] | order(_createdAt desc){
    _id,
    name,
    price,
    "imageUrl": image.asset->url,
    buyLink
  }`

  try {
    const kits = await client.fetch(query)
    console.log('Fetched Kits:', kits)
    return kits
  } catch (error) {
    console.error('Failed to fetch kits:', error)
    return []
  }
}