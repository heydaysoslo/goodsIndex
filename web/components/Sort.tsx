import Button from '@heydays/Button'
import Stack from '@heydays/Stack'
import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

type Sort = {
  className?: string
  sort: string
  sortOptions: string[]
  setSort: () => void
}

const Sort = ({ className, sortOptions, sort: currentSort, setSort }) => {
  const [isAnimationDone, setIsAnimationDone] = useState(true)
  return (
    <div className={className}>
      <AnimateSharedLayout type="crossfade">
        <Stack space="sm" direction="row">
          {sortOptions.map((sort: string) => (
            <Button
              className="sort-button"
              key={`${sort}`}
              onClick={() => {
                currentSort === sort ? setSort('Newest first') : setSort(sort)
                setIsAnimationDone(false)
              }}
              modifiers={
                sort === currentSort && isAnimationDone
                  ? ['small', 'active']
                  : ['small']
              }
            >
              {sort === currentSort && (
                <motion.div
                  onViewportBoxUpdate={() => {
                    setIsAnimationDone(true)
                  }}
                  animate
                  layoutId="backdrop"
                  className="backdrop"
                />
              )}
              <span className="text">{sort}</span>
            </Button>
          ))}
        </Stack>
      </AnimateSharedLayout>
    </div>
  )
}

export default styled(Sort)(
  ({ theme }) => css`
    .sort-button {
      position: relative;
    }
    .backdrop {
      position: absolute;
      top: -1px;
      left: -1px;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background: ${theme.colors.text};
      border-radius: ${theme.radius.button};
    }
    .text {
      position: relative;
      z-index: 1;
    }
  `
)
