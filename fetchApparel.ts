import { client } from '../../../sanityClient';

export async function fetchApparel() {
  try {
    const query = `
      *[_type == "apparel"] {
        _id,
        name,
        price,
        "imageUrl": productImage.asset->url,
        "buyLink": buyNowLink
      }
    `;
    
    const apparel = await client.fetch(query);
    console.log('Fetched Apparel:', apparel);
    return apparel;
  } catch (error) {
    console.error('Error fetching apparel:', error);
    return [];
  }
}