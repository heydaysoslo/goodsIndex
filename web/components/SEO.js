import { NextSeo } from 'next-seo'
import { cldGetImage } from 'utils/cloudinary'
import { toPlainText } from 'utils/helpers'

/*
SEO Headers generated by:
https://github.com/garmeeh/next-seo

Opengraph: https://ogp.me/#types

TODO:
• Add SEO object debug to preview mode header
• Cleanup logic
• Add excerpt to page
• Fetch default SEO from CMS
• Add JsonLd types for
- Blog
- BlogPost
- Article (done)
- Local Business
- Logo
- Breadcrumb (maybe)
• Should all pages have a "last updated" tag (?)

*/

const truncateString = (str, maxLength, ellipsis = '…') => {
  if (typeof str !== 'string' || !str) {
    return str
  }
  if (str.length <= maxLength) {
    return str
  }
  return `${str.substring(0, maxLength)}${ellipsis}`
}

const SEO = ({ page }) => {
  const canonical = `https://index.goods.no`
  const title = page?.seo?.title || page?.title || null

  const description =
    page?.seo?.description ||
    (page?.excerpt && truncateString(toPlainText(page?.excerpt)), 160, '') ||
    (page?.body && truncateString(toPlainText(page?.body)), 160, '') ||
    null

  const imageNode = page?.seo?.cldImage || page?.mainImage?.cldImage || null
  const image = cldGetImage(imageNode, { width: 1200, height: 630 })
  /*
  Image should be array of objects like this:
  [
    {
      url: 'https://www.example.ie/og-image-01.jpg',
      width: 800,
      height: 600,
      alt: 'Og Image Alt',
    }
  ]
  */

  const ogArticle =
    (page?._type === 'article' && {
      publishedTime: page?.publishDate || page?._createdAt,
      modifiedTime: page?._updatedAt
      // expirationTime: '2022-12-21T22:04:11Z',
    }) ||
    null
  /*
  https://www.npmjs.com/package/next-seo#article
  article: {
    publishedTime: '2017-06-21T23:04:13Z',
    modifiedTime: '2018-01-21T18:04:43Z',
    expirationTime: '2022-12-21T22:04:11Z',
    authors: [
      'https://www.example.com/authors/@firstnameA-lastnameA',
      'https://www.example.com/authors/@firstnameB-lastnameAB,
    ],
    section: 'Category (e.g. technology)',
    tags: ['Tag A', 'Tag B', 'Tag C'],
  }
  JSON-LD: https://www.npmjs.com/package/next-seo#article-1
  */

  /**
   * JSON-LD: https://www.npmjs.com/package/next-seo#json-ld
   * This is extra!
   *
   * Most relevant types: Article, Blog, Corporate Contact, FAQ Page, Job Posting, Local Business, Product, News Article
   *
   */

  const nextSeoProps = {
    titleTemplate: `%s`,
    title,
    description,
    canonical,
    openGraph: {
      url: canonical,
      title,
      description,
      images: image && [{ ...image, url: image.src }],
      type: page?._type === 'article' ? 'article' : 'website', // https://www.npmjs.com/package/next-seo#open-graph,
      article: ogArticle
    }
  }

  return (
    <>
      {/* <div style={{ flexShrink: 0 }}>
        <pre>{JSON.stringify(nextSeoProps, null, 2)}</pre>
        <pre>{JSON.stringify(page, null, 2)}</pre>
      </div> */}
      <NextSeo {...nextSeoProps} />
    </>
  )
}

export default SEO
