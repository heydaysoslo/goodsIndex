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
              }}
              modifiers={sort === currentSort ? ['small', 'active'] : ['small']}
            >
              {sort === currentSort && (
                <motion.div animate layoutId="backdrop" className="backdrop" />
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
      top: -2px;
      left: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      background: ${theme.colors.text};
      border-radius: ${theme.radius.button};
    }
    .text {
      position: relative;
      z-index: 1;
    }
  `
)
