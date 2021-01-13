export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number'
    },
    {
      name: 'sides',
      title: 'Sides',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'side'}
        }
      ]
    },
    {
      name: 'modifiers',
      title: 'Modifiers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'modifier'}
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
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]'
    }
  }
}
