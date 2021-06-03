import { css, DefaultTheme } from 'styled-components'

import { remSize } from '../utilities/Converters'
import breakpointsFactory, {
  bp as bpObject
} from '../utilities/breakpointsFactory'
import spacingFactory from '../utilities/spacingFactory'
import fontFactory, { fontFuncs } from 'styles/utilities/fontFactory'
import color from 'styles/utilities/Colors'

const baseColors = {
  green: '#687C66',
  white: 'white'
}

export const colors = {
  ...baseColors,
  primary: baseColors.green,
  text: baseColors.green,
  border: baseColors.green,
  background: baseColors.white
}

export const breakpoints = {
  xs: 0,
  sm: 550,
  md: 870,
  lg: 1200,
  xl: 1600,
  xxl: 1800
}

export const spacingUnit = {
  xs: remSize(6),
  sm: remSize(12),
  md: remSize(12 * 2),
  lg: remSize(12 * 3),
  section: remSize(12 * 10),
  gutter: remSize(40),
  gap: remSize(20),
  container: remSize(1440),
  pixel: '1px'
}

export const responsiveSpacing = {
  xs: {
    xs: 'xs',
    sm: 'sm'
  },
  sm: {
    xs: 'sm'
  },
  md: {
    xs: 'md'
  },
  lg: {
    xs: 'lg'
  },
  section: {
    xs: 'section'
  },
  gutter: {
    xs: '8px',
    md: 'gap',
    lg: 'gutter'
  },
  container: {
    xs: 'gutter'
  },
  pixel: {
    xs: '1px'
  }
}

export const grid = {
  columns: 12
}

export const fontFamily = {
  sans: `'SuisseIntl', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
  serif: `'Suisse Works', times, serif`
}

export const responsiveFonts = {
  small: {
    // xs: '20px/24px',
    xs: '24px/32px',
    md: '24px/32px'
  },
  body: {
    xs: '24px/1.375',
    lg: '32px/1.375'
  },
  title: '24px/1.2',
  h1: {
    xs: '40px/50px',
    lg: '60px/1.2'
  },
  h2: {
    xs: '32px/1.16666666666',
    lg: '48px/1.16666666666'
  },
  h3: {
    xs: '24px/1.2'
  }
}

export const aspect = {
  portrait: 7 / 6,
  landscape: 2 / 3,
  square: 1,
  widescreen: 9 / 16,
  panorama: 11 / 16
}

export const elevation = {
  1: 9,
  2: 99,
  3: 999,
  4: 9999
}

export const radius = {
  button: remSize(60)
}

export const contentWidth = {
  small: remSize(600),
  large: remSize(1200)
}

export const icons = {
  small: remSize(40),
  medium: remSize(80),
  large: remSize(160)
}

export const trans = {
  fast: `0.1s ease`,
  slow: `1s ease`
}

export const borderWidth = {
  small: remSize(2),
  large: remSize(3)
}

/**
 * Usage:
 * {
 *  border-left: ${theme.border.large()}
 * }
 */
export const border = {
  large: () => ({ theme }) =>
    `${theme.borderWidth.large} solid ${theme.colors.border};`,
  small: () => ({ theme }) =>
    `${theme.borderWidth.small} solid ${theme.colors.border};`
}

const bp: bpObject = breakpointsFactory(breakpoints)
const spacing = spacingFactory({
  responsiveSpacing,
  bp: {
    sm: bp.sm,
    md: bp.md,
    lg: bp.lg,
    xl: bp.xl,
    xxl: bp.xxl
  }
})

const fonts: fontFuncs = fontFactory({ responsiveFonts, bp })

const theme: DefaultTheme = {
  name: 'defaultTheme',
  colors,
  breakpoints,
  color,
  bp,
  spacingUnit,
  grid,
  fontFamily,
  aspect,
  elevation,
  radius,
  fonts,
  responsiveFonts,
  spacing,
  responsiveSpacing,
  contentWidth,
  trans,
  icons,
  borderWidth,
  border
}

export default theme
