// schemas/book.js
export default {
  name: 'book',
  type: 'document',
  title: 'Book',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Book title'
    },
    {
      name: 'author',
      type: 'string',
      title: 'Book author'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Book cover'
    }
  ]
}
