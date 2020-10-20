import React from 'react'
import EmojiIcon from '../../custom/components/EmojiIcon'

export default {
  name: 'pagebuilder',
  title: 'pagebuilder',
  type: 'object',
  fields: [
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        // Section
        {
          name: 'section',
          title: 'Section',
          type: 'section'
        },
        // Cards
        {
          name: 'cardSection',
          title: 'Card Section',
          type: 'cardSection'
        },
        // Text section
        {
          name: 'textSection',
          title: 'Text Section',
          type: 'textSection'
        },
        // Full Image
        {
          name: 'imageSection',
          title: 'Full Image Section',
          type: 'imageSection'
        },
        // Text Image Split
        {
          name: 'textImageSplit',
          title: 'Text Image Split',
          type: 'textImageSplit'
        },
        {
          name: 'glossary',
          title: 'Glossary',
          type: 'object',
          icon: () => <EmojiIcon>📖</EmojiIcon>,
          fields: [
            {
              name: 'name',
              title: 'name',
              type: 'string',
              description:
                "Not used for anything. Name it something you'll understand"
            }
          ]
        }
        // Carousel
        // {
        //   name: "carousel",
        //   title: "Carousel",
        //   type: "carousel"
        // },
        // Tabs
        // {
        //   name: "tabs",
        //   title: "Tabs",
        //   type: "tabs"
        // },
        // Video Section
        // {
        //   name: "videoSection",
        //   title: "Video Section",
        //   type: "videoSection"
        // }
      ]
    }
  ]
}
