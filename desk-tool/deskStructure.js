// deskStructure.js
import S from 'sanity/desk'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('drop'),
      S.documentTypeListItem('kit'),
      S.documentTypeListItem('lookbook'),
      S.documentTypeListItem('apparel'),
      S.documentTypeListItem('accessories')
    ])

