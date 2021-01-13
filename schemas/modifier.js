export default {
    title: 'Modifier',
    name: 'modifier',
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
        name: 'modifierCategory',
        title: 'Modifier Category',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {type: 'modifierCategory'}
          }
        ]
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
  