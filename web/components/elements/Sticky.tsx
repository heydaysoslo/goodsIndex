import React from 'react'
import styled, { css } from 'styled-components'

type Sticky = {
  className?: string
  /**
   * css value determines when to stick from top.
   *
   * @example var(--header-height) | 20px | 50rem
   */
  top: string
}

const Sticky: React.FC<Sticky> = ({ className, children }) => {
  return <div className={className}>{children}</div>
}

export default styled(Sticky)(
  ({ top }) => css`
    position: sticky;
    ${top
      ? css`
          top: ${top};
        `
      : css`
          top: 0;
        `}
  `
)
