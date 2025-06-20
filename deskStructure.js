// deskStructure.js

export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('drop'),
      S.documentTypeListItem('kit'),
      S.documentTypeListItem('lookbookImage'),
      S.documentTypeListItem('apparel'),
      S.documentTypeListItem('accessories'),
    ])


