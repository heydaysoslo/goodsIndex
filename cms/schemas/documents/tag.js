import React from 'react'
import EmojiIcon from '../../custom/components/EmojiIcon'
export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: () => <EmojiIcon>🏷</EmojiIcon>,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'editor'
    }
  ]
}
