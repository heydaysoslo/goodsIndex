import { css, DefaultTheme } from 'styled-components'
import defaultTheme from 'styles/themes/defaultTheme'

const theme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: defaultTheme.colors.white,
    text: defaultTheme.colors.white,
    border: defaultTheme.colors.white,
    background: defaultTheme.colors.green
  },
  defaultStyle: ({ theme }) => css`
    body {
      background: ${theme?.colors?.background};
    }
  `
}

export default theme
