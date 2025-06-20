export default {
  name: 'accessories',
  title: 'Accessories',
  type: 'document',
  fields: [
    { name: 'name', title: 'Accessory Name', type: 'string' },
    { name: 'price', title: 'Price (ZAR)', type: 'number' },
    { name: 'unitsIncluded', title: 'Units Included', type: 'string' },
    { name: 'displayType', title: 'Display Type', type: 'string' },
    { name: 'productImage', title: 'Product Image', type: 'image', 
options: { hotspot: true } },
    { name: 'buyNowLink', title: 'Buy Now Link', type: 'url' }
  ]
}

