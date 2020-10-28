import React from 'react'
import EmojiIcon from '../../custom/components/EmojiIcon'

export default {
  name: 'energy',
  title: 'Energy',
  type: 'document',
  icon: () => <EmojiIcon>⚡️</EmojiIcon>,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'pagebuilder',
      title: 'Page builder',
      type: 'pagebuilder'
    }
  ]
}
