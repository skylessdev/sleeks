
import { client } from '../../../sanityClient';

export async function fetchLookbook() {
  try {
    const query = `
      *[_type == "lookbook"] | order(_createdAt desc) {
        _id,
        title,
        "imageUrl": image.asset->url,
        description
      }
    `;
    
    const lookbook = await client.fetch(query);
    console.log('Fetched Lookbook:', lookbook);
    return lookbook;
  } catch (error) {
    console.error('Error fetching lookbook:', error);
    return [];
  }
}
