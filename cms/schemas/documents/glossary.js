import React from 'react'
import EmojiIcon from '../../custom/components/EmojiIcon'
export default {
  name: 'glossary',
  title: 'Glossary',
  type: 'document',
  icon: () => <EmojiIcon>📖</EmojiIcon>,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'editor'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'reference',
          to: [{ type: 'tag' }]
        }
      ]
    }
  ]
}
