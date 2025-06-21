import { client } from '../../../sanityClient';

export async function fetchKits() {
  try {
    const query = `
      *[_type == "kit"] {
        _id,
        name,
        price,
        "imageUrl": image.asset->url,
        buyLink
      }
    `;
    
    const kits = await client.fetch(query);
    console.log('Fetched Kits:', kits);
    return kits;
  } catch (error) {
    console.error('Error fetching kits:', error);
    return [];
  }
}