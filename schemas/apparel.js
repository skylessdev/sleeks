export default {  
  name: 'apparel', 
  title: 'Apparel',
  type: 'document',
  fields: [
    { name: 'name', title: 'Apparel Name', type: 'string' },
    { name: 'price', title: 'Price (ZAR)', type: 'number' },
    { name: 'sizesAvailable', title: 'Sizes Available', type: 'string' },
    {
      name: 'productImage',
      title: 'Product Image',
      type: 'image',
      options: { hotspot: true }
    },
    { name: 'buyNowLink', title: 'Buy Now Link', type: 'url' }
  ]
}


