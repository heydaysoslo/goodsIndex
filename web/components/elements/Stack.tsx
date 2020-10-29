import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { nanoid } from 'nanoid'

const ID = nanoid()

import { BreakpointKeys } from 'styles/utilities/breakpointsFactory'
import Spacer, { SpacerProps } from './Spacer'

type Direction = 'row' | 'column'

type Props = {
  className?: string
  /**
   * Space value only between elements.
   *
   * @note To set space at the ends use spaceEnds | spaceEndsStart | spaceEndsEnd
   */
  space?: SpacerProps['size']
  reverse?: boolean
  /**
   * Set the direction of the elements.
   * row for horizontal and column for vertical.
   * Takes either a string or a responsive object of the values above.
   * @note defaults to column (vertical)
   */
  direction?:
    | Direction
    | {
        [key in BreakpointKeys]: Direction
      }
  /**
   * Setting to true sets same space as others
   *
   * To set different spacing at the ends pass a spacing value.
   * @note If you want to space ends seperatly use spaceEndsStart | spaceEndsEnd
   */
  spaceEnds?: boolean | SpacerProps['size']
  /**
   * Sets spacing in the start of the stack
   * @note If you want the same space for end and start use spaceEnds
   */
  spaceEndsStart?: boolean | SpacerProps['size']
  /**
   * Sets spacing in the end of the stack
   * @note If you want the same space for end and start use spaceEnds
   */
  spaceEndsEnd?: boolean | SpacerProps['size']
}

const Stack: React.FC<Props> = ({
  className,
  children,
  space = 'md',
  spaceEnds,
  spaceEndsStart,
  spaceEndsEnd,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {spaceEnds && (
        <Spacer size={typeof spaceEnds === 'string' ? spaceEnds : space} />
      )}
      {spaceEndsStart && (
        <Spacer
          size={typeof spaceEndsStart === 'string' ? spaceEndsStart : space}
        />
      )}
      {Array.isArray(children)
        ? children.flat(1).map((child, i) => (
            <Fragment key={`${ID}-${i}`}>
              {child}
              {i !== children.flat(1).length - 1 && <Spacer size={space} />}
            </Fragment>
          ))
        : children}
      {spaceEndsEnd && (
        <Spacer
          size={typeof spaceEndsEnd === 'string' ? spaceEndsEnd : space}
        />
      )}
      {spaceEnds && (
        <Spacer size={typeof spaceEnds === 'string' ? spaceEnds : space} />
      )}
    </div>
  )
}

export default styled(Stack)(
  ({ theme, reverse, direction = 'column' }) => css`
    display: flex;
    ${typeof direction === 'string' &&
      css`
        flex-direction: ${direction};
      `};
    ${typeof direction === 'object' &&
      Object.keys(
        bp => css`
          ${theme.bp[bp]} {
            flex-direction: ${direction[bp]};
          }
        `
      )}
    ${reverse
      ? css`
          flex-direction: ${direction}-reverse;
        `
      : css`
          flex-direction: ${direction};
        `}
  `
)
