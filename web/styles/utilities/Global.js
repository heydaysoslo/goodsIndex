import Spacer from '@heydays/Spacer'
import { createGlobalStyle, css } from 'styled-components'
import { globalTypeStyle } from './Typography'

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
  @font-face {
  font-family: "SuisseIntl";
  src: url("fonts/SuisseIntl-Regular-WebM.eot?#iefix");
  src: url("fonts/SuisseIntl-Regular-WebM.eot?#iefix") format("embedded-opentype"),
    url("fonts/SuisseIntl-Regular-WebM.woff2") format("woff2"),
    url("fonts/SuisseIntl-Regular-WebM.woff") format("woff"),
    url("fonts/SuisseIntl-Regular-WebM.ttf") format("truetype"),
    url("fonts/SuisseIntl-Regular-WebM.svg") format("svg");
  font-weight: normal;
  font-style: normal;
  /* font-display: swap; */
}

@font-face {
  font-family: "Suisse Works";
  src: url("fonts/SuisseWorks-Regular-WebS.eot?#iefix");
  src: url("fonts/SuisseWorks-Regular-WebS.eot?#iefix") format("embedded-opentype"),
    url("fonts/SuisseWorks-Regular-WebS.woff2") format("woff2"),
    url("fonts/SuisseWorks-Regular-WebS.woff") format("woff"),
    url("fonts/SuisseWorks-Regular-WebS.ttf") format("truetype"),
    url("fonts/SuisseWorks-Regular-WebS.svg") format("svg");
  font-weight: normal;
  font-style: normal;
  /* font-display: swap; */
}
  :root {
    --header-height: 0;
  }
    html {
      font-size: 62.5%;
    }

    body {
      overflow-x: hidden;
      font-family: ${theme.fontFamily.sans};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: ${theme.colors.text};
      ${theme.fonts.body()}
      max-width: 100%;
      overflow-x: hidden;
    }

    ::selection {
      background: ${theme.colors.primary};
      color: white;
    }

    #___gatsby {
      transition: background-color 300ms ease;
    }

    figure {
      margin: 0;
      position: relative;
    }

    img {
      max-width: 100%;
      height: auto;
      vertical-align: middle; /*  remove space above/below images */
    }

    [role='button'] {
      cursor: pointer;
    }

    button {
      cursor: pointer;
      appearance: none;
      border-radius: 0;
      background: none;
      color: currentColor;
      font-size: inherit;
      border: none;
      padding: 0;
      vertical-align: baseline;
      font-family: ${theme.fontFamily.sans};
      ${theme.fonts.body()};

      &:disabled {
        cursor: default;
      }
    }

    select {
      cursor: pointer;
      appearance: none;
      border: none;
      background: none;
      font-family: ${theme.fontFamily.sans};

      ${theme.fonts.body()}
    }

    input {
      appearance: none;
      margin: 0;
      padding: 0;
      border-radius: 0;
    }

    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
    display: none;
    }


    input[type='number'] {
      appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      appearance: none;
    }

    hr {
      height: ${theme.borderWidth.large};
      width: 100%;
      background: ${theme.colors.border};
      border: none;
    }

    summary {
      cursor: pointer;
    }

    ul {
      list-style: none;
    }

    /* Typography */
    ${globalTypeStyle}

    /* Global styling from theme */
    ${theme.defaultStyle && theme.defaultStyle}

    /* Add visible tag that shows breakpoint for dev environment */
    ${process.env.NODE_ENV === 'development' &&
      css`
    body:after {
      content: "${theme.breakpoints[0]}";
      background: rgba(255, 255, 255, 0.5);
      position: fixed;
      ${theme.spacing.xs(['py', 'px', 'bottom', 'left'])}
      ${theme.fonts.body()}
      ${Object.keys(theme.breakpoints).map(key => {
        return css`
          ${theme?.bp?.[key]} {
            content: "${key}";
          }
        `
      })}
    }
  `}
  ${process.env.NODE_ENV === 'development' &&
    css`
      body.showSpacing ${Spacer} {
        /* background: orange; */
      }
    `}
  `
)
