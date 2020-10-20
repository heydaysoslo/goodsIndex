import React from 'react'
import styled, { css } from 'styled-components'
import Spacer, { SpacerProps } from './Spacer'

type Props = {
  className?: string
  size: SpacerProps['size']
  reverse?: boolean
  direction?: 'row' | 'column'
}

const Stack: React.FC<Props> = ({ className, children, size = 'md' }) => {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <>
              {child}
              {i !== children.length - 1 && <Spacer size={size} />}
            </>
          ))
        : children}
    </div>
  )
}

export default styled(Stack)(
  ({ reverse, direction = 'column' }) => css`
    display: flex;
    flex-direction: ${direction};
    ${reverse
      ? css`
          flex-direction: ${direction}-reverse;
        `
      : css`
          flex-direction: ${direction};
        `}
  `
)
