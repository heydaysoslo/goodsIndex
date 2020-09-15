import React from 'react'
import styled, { css } from 'styled-components'
import { bp, color } from '../../styles/utilities'

type Modifiers = 'secondary' | 'small' | 'active'

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

export default styled(Button)<Props>(
  ({ theme, modifiers }) => css`
    appearance: none;
    background: none;
    display: inline-block;
    border: 2px solid transparent;
    background-color: ${theme.colors.text};
    color: ${theme.colors.background};
    font-size: 2rem;
    padding: 20px;
    transition: 0.15s ease background-color, color;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
      border-color: black;
    }

    ${
      modifiers === 'small' || modifiers?.includes?.('small')
        ? css`
            padding: 0;
          `
        : ''
    }

    ${
      modifiers === 'secondary' || modifiers?.includes?.('secondary')
        ? css`
            color: ${theme.colors.primary};
            background-color: ${theme.colors.secondary};
          `
        : null
    }

    ${
      modifiers === 'active' || modifiers?.includes?.('active')
        ? css`
            color: black;
            background-color: white;
            border-color: black;
          `
        : null
    }
  `
)
