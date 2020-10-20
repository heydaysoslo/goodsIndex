import { GlobalStyle } from '../styles/utilities/Global'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import 'lazysizes/plugins/respimg/ls.respimg.js'
import 'lazysizes/plugins/attrchange/ls.attrchange.js'
import 'lazysizes'

import 'styles/reset.css'

import theme from 'styles/themes/defaultTheme'
import darkTheme from 'styles/themes/darkTheme'
import Header from 'components/Header'
import SEO from 'components/SEO'
import useIsDarkMode from '@heydays/useIsDarkMode'
import { useEffect } from 'react'
import { SanityProvider } from 'components/context/sanityContext'

function App({ Component, pageProps }) {
  const isSystemDarkMode = useIsDarkMode()
  const [isDark, setIsDark] = React.useState(isSystemDarkMode)

  useEffect(() => {
    setIsDark(isSystemDarkMode)
  }, [isSystemDarkMode])

  return (
    <SanityProvider>
      <ThemeProvider theme={isDark ? darkTheme : theme}>
        <SEO
          page={pageProps?.frontpage || pageProps?.article || pageProps?.page}
        />
        <Header isDark={isDark} setIsDark={setIsDark} />
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </SanityProvider>
  )
}

export default App
