import { css } from 'styled-components'
import { remSize } from './Converters'
export const globalTypeStyle = ({ theme }) => css`
  html {
    font-size: 62.5%;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: normal;
    font-family: ${theme.fontFamily.sans};
  }

  body {
    overflow-x: hidden;
    font-family: ${theme.fontFamily.serif};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.text};
    ${theme.fonts.body()};
  }

  ::selection {
    background: ${theme.colors.primary};
    color: white;
  }

  strong {
    font-weight: bold;
  }

  sup {
    vertical-align: super;
    font-size: ${remSize(8)};
  }

  *:focus {
    outline-color: ${theme.colors.primary};
  }

  a {
    font-family: ${theme.fontFamily.sans};
    cursor: pointer;
    position: relative;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }

  .link {
    display: inline-block;
    border-bottom: ${theme.colors.secondary};
    transition: border-color ${theme.trans.fast};

    &:hover {
      border-color: transparent;
    }
  }

  small,
  .small {
    ${theme.fonts.small()};
  }

  .sans {
    font-family: ${theme.fontFamily.sans};
  }

  .serif {
    font-family: ${theme.fontFamily.serif};
  }
`
