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

function App({ Component, pageProps }) {
  const [isDark, setIsDark] = React.useState(false)
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
