import sanityClient from '@sanity/client'

const options = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production'
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
}

const BASE_ARTICLE = `
  _id,
  title,
  slug {
  current
  },
  mainImage
`

export const PAGEBUILDER = `
pagebuilder {
  sections[]{
    seeAllLink {
      reference->{slug, title,_type},
      ...
    },
    cardsList[]{
      content->{...},
      ...
    },
    ...
  },
  ...
}
`

const client = sanityClient(options)

export const getFrontpage = () => {
  const query = `
  *[_id == 'siteSettings'] {
    frontpage->{
      ...,
      ${PAGEBUILDER}
    }
    }
  `
  return client.fetch(query)
}

export const getAbout = () => {
  const query = `*[_id == 'about']`
  return client.fetch(query)
}

export const getSettings = () => {
  const query = `*[_type == 'siteSettings']{
    ...,
    primaryMenu->,
    secondaryMenu->,
    frontpage->{
      ...,
      ${PAGEBUILDER}
    },
    privacypage->,
    designTokens->
  }`
  return client.fetch(query).then(res => res[0])
}

export const getCompanyInfo = () => {
  const query = `*[_type == 'companyInfo']`
  return client.fetch(query)
}

export const getGlobalSettings = () => {
  const query = `*[_type == 'global']`
  return client.fetch(query)
}

export const getGlossary = () => {
  const query = `*[_type == 'glossary']{
    ...,
    tags[]->{
      ...
    }
  }
  `
  return client.fetch(query)
}

export const getTags = () => {
  const query = `*[_type == 'tag']{
    ...,
  }
  `
  return client.fetch(query)
}

export const getArticles = () => {
  const query = `*[_type == 'article'] {
    ${BASE_ARTICLE},
    seo
  }
  `
  return client.fetch(query)
}

export const getArticle = params => {
  const query = `*[_type == 'article' && slug.current == $slug] {
    ${BASE_ARTICLE}
  }
  `
  return client.fetch(query, params)
}

export const getPreview = (previewClient, query, params) => {
  return previewClient.fetch(query, params)
}

export default client
