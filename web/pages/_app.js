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
import { useEffect, useState } from 'react'
import { SanityProvider } from 'components/context/sanityContext'
import useAppContext from '@heydays/useAppContext'
import { AppProvider } from 'components/context/appContext'

function App({ Component, pageProps }) {
  return (
    <SanityProvider>
      <AppProvider>
        <Inner pageProps={pageProps} Component={Component} />
      </AppProvider>
    </SanityProvider>
  )
}

const Inner = ({ pageProps, Component }) => {
  const isSystemDarkMode = useIsDarkMode()
  const [isDark, setIsDark] = React.useState(isSystemDarkMode)
  const [showSpacing, setShowSpacing] = useState(false)

  useEffect(() => {
    setIsDark(isSystemDarkMode)
  }, [isSystemDarkMode])

  useEffect(() => {
    const state = !state?.showSpacing
    window.addEventListener('keydown', e => {
      if (e.key === '9') {
        if (document.body.classList.contains('showSpacing')) {
          document.body.classList.remove('showSpacing')
          setShowSpacing(false)
        } else {
          document.body.classList.add('showSpacing')
          setShowSpacing(true)
        }
      }
    })
  }, [])
  return (
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
  )
}

export default App
