import { client } from './sanityClient'

export async function fetchDrops() {
  const query = `*[_type == "drop"] | order(releaseDate desc){
    _id,
    title,
    releaseDate,
    "imageUrl": heroImage.asset->url,
    description
  }`

  try {
    const drops = await client.fetch(query)
    console.log('Fetched Drops:', drops)
    return drops
  } catch (error) {
    console.error('Failed to fetch drops:', error)
    return []
  }
}
