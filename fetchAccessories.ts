import { client } from '../../../sanityClient';

export async function fetchAccessories() {
  try {
    const query = `
      *[_type == "accessories"] {
        _id,
        name,
        price,
        "imageUrl": productImage.asset->url,
        "buyLink": buyNowLink
      }
    `;
    
    const accessories = await client.fetch(query);
    console.log('Fetched Accessories:', accessories);
    return accessories;
  } catch (error) {
    console.error('Error fetching accessories:', error);
    return [];
  }
}