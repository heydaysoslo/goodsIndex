import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation
} from 'styled-components'

import { applyModifier } from '../../styles/utilities'

type Modifiers = 'lead' | 'small' | 'large'

type PModifiers = {
  theme: DefaultTheme
  modifiers?: Modifiers | Modifiers[] | null | undefined
}

export const P = styled.p<PModifiers>(
  ({ theme, modifiers = null }) => css`
  letter-spacing: -.3px;
    ${!modifiers &&
      css`
        ${theme.fonts.body()}
      `}
    ${applyModifier(
      'small',
      css`
        ${theme.fonts.small()};
      `
    )}
    ${applyModifier(
      'lead',
      css`
        ${theme.fonts.lead()};
        font-family: ${theme.fontFamily.sans};
      `
    )}
  `
)

export const H1 = styled.h1(
  ({ theme }) => css`
    ${theme.fonts.h1()}
  `
)

export const H2 = styled.h2(
  ({ theme }) => css`
    ${theme.fonts.h2()}
  `
)

export const H3 = styled.h3(
  ({ theme }) => css`
    ${theme.fonts.title?.()}
  `
)
