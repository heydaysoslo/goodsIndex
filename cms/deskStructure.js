import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import config, {
  createMenuDeskStructure,
  createCustomTypeDeskStructure
} from './heydays-config'

import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'
import FaFileO from 'react-icons/lib/fa/file-text-o'

import SeoPreview from './custom/components/previews/seo/SeoPreviews'
import Preview from './custom/components/previews/preview/Preview'
import EmojiIcon from './custom/components/EmojiIcon'

// Create menus

const customTypesWithOrderPage = createCustomTypeDeskStructure(
  config.customTypes
)

const hiddenCustomTypes = config.customTypes.reduce((res, item) => {
  const typesToHide = [item.typeId, item.orderTypeId]
  res.push(...typesToHide)
  return res
}, [])

const hiddenDocTypes = listItem =>
  ![
    'companyInfo',
    'siteSettings',
    'article',
    'frontpage',
    'person',
    'personOrder',
    'about',
    'energy',
    'menu',
    'tag',
    'glossary',
    ...config.pageTypes,
    ...hiddenCustomTypes
  ].includes(listItem.getId())

const createSingleton = (id, options = {}) => {
  const { withPreviews = true, icon = FaFileO } = options
  const title = `${id.slice(0, 1).toUpperCase()}${id.slice(1, id.length)}`
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(
      S.editor()
        .id(id)
        .schemaType(id)
        .documentId(id)
        .views(
          withPreviews && [
            S.view.form().icon(EditIcon),
            S.view
              .component(SeoPreview)
              .icon(EyeIcon)
              .title('SEO Preview'),
            S.view
              .component(Preview)
              .icon(EyeIcon)
              .title('Preview')
          ]
        )
    )
}

const createDocsList = (id, options = {}) => {
  const { withPreviews = true } = options
  // Make first letter capital
  const title = `${id.slice(0, 1).toUpperCase()}${id.slice(1, id.length)}`
  return S.listItem()
    .title(title)
    .schemaType(id)
    .child(
      S.documentTypeList(id)
        .title(title)
        .child(documentId =>
          S.document()
            .documentId(documentId)
            .schemaType(id)
            .views(
              withPreviews && [
                S.view.form().icon(EditIcon),
                S.view
                  .component(SeoPreview)
                  .icon(EyeIcon)
                  .title('SEO Preview'),
                S.view
                  .component(Preview)
                  .icon(EyeIcon)
                  .title('Preview')
              ]
            )
        )
    )
}

export default () =>
  S.list()
    .title('Content')
    .items([
      createDocsList('menu'),
      createDocsList('frontpage'),
      createSingleton('about', {
        withPreviews: true,
        icon: () => <EmojiIcon>🙋🏻‍♀️</EmojiIcon>
      }),
      createSingleton('energy', {
        withPreviews: true,
        icon: () => <EmojiIcon>⚡️</EmojiIcon>
      }),
      createDocsList('glossary'),
      createDocsList('tag'),
      // createDocsList('page'),
      // createDocsList('article'),
      ...customTypesWithOrderPage,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.divider(),
      createSingleton('companyInfo', {
        withPreviews: false,
        icon: () => <EmojiIcon>🏢</EmojiIcon>
      }),
      S.listItem()
        .title('Settings')
        .icon(() => <EmojiIcon>⚙️</EmojiIcon>)
        .child(
          S.list()
            .title('Settings')
            .items([
              createSingleton('siteSettings', {
                withPreviews: false,
                icon: () => <EmojiIcon>⚙️</EmojiIcon>
              })
            ])
        )
    ])
