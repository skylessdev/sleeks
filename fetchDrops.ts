import { client } from '../../../sanityClient';

export async function fetchDrops() {
  try {
    const query = `
      *[_type == "drop"] {
        _id,
        title,
        description,
        "imageUrl": heroImage.asset->url,
        releaseDate
      }
    `;
    
    const drops = await client.fetch(query);
    console.log('Fetched Drops:', drops);
    return drops;
  } catch (error) {
    console.error('Error fetching drops:', error);
    return [];
  }
}