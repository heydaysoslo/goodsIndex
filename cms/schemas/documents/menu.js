import React from 'react'
import EmojiIcon from '../../custom/components/EmojiIcon'
export default {
  name: 'menu',
  title: 'Navigation',
  type: 'document',
  icon: () => <EmojiIcon>🧭</EmojiIcon>,
  fields: [
    {
      title: 'Title',
      type: 'string',
      name: 'title'
    },
    {
      name: 'item',
      title: 'Items',
      type: 'array',
      of: [{ type: 'link' }, { type: 'internalLink' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      items: 'item'
    },
    prepare({ title }) {
      return {
        title: title || 'Menu'
      }
    }
  }
}
