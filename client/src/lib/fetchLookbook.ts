import { client } from '../../../sanityClient';

export async function fetchLookbook() {
  try {
    const query = `
      *[_type == "lookbookImage"] {
        _id,
        title,
        _createdAt,
        "imageUrl": image.asset->url
      }
    `;
    
    const lookbookImages = await client.fetch(query);
    console.log('Fetched Lookbook:', lookbookImages);
    return lookbookImages;
  } catch (error) {
    console.error('Error fetching lookbook:', error);
    return [];
  }
}