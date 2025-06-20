export default {
  name: 'kit',
  title: 'Club Kit',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Kit Name' },
    { name: 'price', type: 'number', title: 'Price (ZAR)' },
    { name: 'unitCount', type: 'number', title: 'Units Included' },
    { name: 'displayType', type: 'string', title: 'Display Type' },
    { name: 'image', type: 'image', title: 'Product Image' },
    { name: 'buyLink', type: 'url', title: 'Buy Now Link' }
  ]
}

