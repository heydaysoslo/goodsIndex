import React from 'react'
import styled, { css } from 'styled-components'
import { applyModifier, remSize } from '../../styles/utilities'

type Modifiers = 'secondary' | 'small' | 'active' | 'disabled' | 'noButton'

type Props = {
  children: React.ReactNode
  className?: string
  modifiers?: Modifiers | Modifiers[] | undefined
  onClick?: () => void
}

const Button: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={className}
      onMouseDown={e => e.preventDefault}
      {...props}
    >
      {children}
    </button>
  )
}

export default styled(Button)(
  ({ theme }) => css`
    appearance: none;
    background: none;
    display: inline-block;
    border: ${theme.border.small};
    border-radius: ${remSize(60)};
    color: ${theme.colors.text};
    transition: 0.15s ease background-color, color;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.text};
      color: ${theme.colors.background};
    }

    ${applyModifier(
      'small',
      css`
        ${theme.fonts.small()};
        padding-left: 0.5em;
        padding-right: 0.5em;
        padding-top: 0.1em;
        padding-bottom: 0.2em;
      `
    )}

    ${applyModifier(
      'active',
      css`
        background-color: ${theme.colors.text};
        color: ${theme.colors.background};
      `
    )}

    ${applyModifier(
      'disabled',
      css`
        opacity: 0.5;
        cursor: none;
      `
    )}
    ${applyModifier(
      'noButton',
      css`
        border: none;
      `
    )}
  `
)
