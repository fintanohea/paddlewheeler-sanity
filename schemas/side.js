export default {
    title: 'Side',
    name: 'side',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string'
      },
      {
        title: 'Price',
        name: 'price',
        type: 'number'
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true
            }
          }
        ]
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {type: 'category'}
          }
        ]
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'localeBlockContent'
      }
    ]
  }
  