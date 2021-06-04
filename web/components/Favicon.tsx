import Head from 'next/head'
import React from 'react'

const PATH = '_next/static/assets/'

const Favicon = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`${PATH}apple-touch-icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${PATH}apple-touch-icon-60x60.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${PATH}apple-touch-icon-72x72.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${PATH}apple-touch-icon-76x76.png`}
      />
      {/* <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`${PATH}apple-touch-icon-114x114.png`}
      /> */}
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${PATH}apple-touch-icon-120x120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`${PATH}apple-touch-icon-144x144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${PATH}apple-touch-icon-152x152.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href={`${PATH}apple-touch-icon-167x167.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${PATH}apple-touch-icon-180x180.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="1024x1024"
        href={`${PATH}apple-touch-icon-1024x1024.png`}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)"
        href={`${PATH}apple-touch-startup-image-320x460.png`}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"
        href={`${PATH}apple-touch-startup-image-640x920.png`}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        href={`${PATH}apple-touch-startup-image-640x1096.png`}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        href={`${PATH}apple-touch-startup-image-750x1294.png`}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)"
        href={`${PATH}apple-touch-startup-image-1182x2208.png`}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)"
        href={`${PATH}apple-touch-startup-image-1242x2148.png`}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)"
        href={`${PATH}apple-touch-startup-image-748x1024.png`}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"
        href={`${PATH}apple-touch-startup-image-1496x2048.png`}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)"
        href={`${PATH}apple-touch-startup-image-768x1004.png`}
      />
      <link
        rel="apple-touch-startup-image"
        media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)"
        href={`${PATH}apple-touch-startup-image-1536x2008.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${PATH}favicon-16x16.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${PATH}favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="228x228"
        href={`${PATH}coast-228x228.png`}
      />
      <link rel="manifest" href={`${PATH}manifest.json`} />
      <link rel="shortcut icon" href={`${PATH}favicon.ico`} />
      <link
        rel="yandex-tableau-widget"
        href={`${PATH}yandex-browser-manifest.json`}
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" />
      <meta name="application-name" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta
        name="msapplication-TileImage"
        content={`${PATH}mstile-144x144.png`}
      />
      <meta name="msapplication-config" content={`${PATH}browserconfig.xml`} />
      <meta name="theme-color" content="#fff" />
    </Head>
  )
}

export default Favicon
