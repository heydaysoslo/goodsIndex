const config = {
  siteUrl: 'https://mano.pizza',
  siteName: 'Mano',
  locale: 'en_US',
  twitter: {
    handle: '@handle', // content creator/author
    site: '@site', // the website
    cardType: 'summary_large_image',
  },
}

export const defaultSeo = {
  title: config.siteName,
  description: 'An awesome website for projects',
  openGraph: {
    type: 'website',
    locale: config.locale,
    url: config.siteUrl,
    site_name: config.siteName,
    images: [
      {
        url: '_next/static/assets/images/default-og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: config.twitter,
  // facebook: {
  //   appId: null
  // }
}

export default config
