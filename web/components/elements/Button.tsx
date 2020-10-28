import React from 'react'
import styled, { css } from 'styled-components'
import { applyModifier, remSize } from '../../styles/utilities'

type Modifiers =
  | 'secondary'
  | 'small'
  | 'active'
  | 'disabled'
  | 'noButton'
  | 'noButtonActive'

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
      onMouseDown={e => e.preventDefault()}
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
    border-radius: ${theme.radius.button};
    color: ${theme.colors.text};
    transition: 0.15s ease background-color, color;
    cursor: pointer;

    &:hover {
      border-style: dashed;
    }

    ${applyModifier(
      'small',
      css`
        ${theme.fonts.small()};
        padding-left: 0.5em;
        padding-right: 0.5em;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
      `
    )}

    ${applyModifier(
      'active',
      css`
        color: ${theme.colors.background};

        &:hover {
          border-style: solid;
        }
      `
    )}

    ${applyModifier(
      'disabled',
      css`
        pointer-events: none;
      `
    )}
    ${applyModifier(
      'noButton',
      css`
        border: none;
        background: none;

        &:hover {
          border: none;
        }
      `
    )}
    ${applyModifier(
      'noButtonActive',
      css`
        border: none;
        background: ${theme.color.rgba(theme.colors.text, 0.2)};

        &:hover {
          border: none;
          background: ${theme.color.rgba(theme.colors.text, 0.2)};
        }
      `
    )}
  `
)
