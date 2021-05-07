import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Button from '@heydays/Button'
import Stack from '@heydays/Stack'
import { AnimateSharedLayout, motion } from 'framer-motion'

const Filter = ({ className, tags, setTag, tag: currentTag, hitsInTags }) => {
  console.log('📄 Filter.js:8 -> hitsInTags', hitsInTags)
  return (
    <div className={className}>
      <AnimateSharedLayout type="crossfade">
        <Stack direction="row" space="sm">
          <Button
            className="filter-button"
            onClick={() => setTag(null)}
            modifiers={[currentTag === null && 'active', 'small']}
          >
            {currentTag === null && (
              <motion.div animate layoutId="backdrop" className="backdrop" />
            )}
            <span className="text">
              All
              <sup>{hitsInTags.all}</sup>
            </span>
          </Button>
          {tags &&
            tags.map((tag, i) => (
              <Button
                className="filter-button"
                key={tag._id}
                onClick={() =>
                  tag === currentTag ? setTag(null) : setTag(tag)
                }
                modifiers={[
                  tag.title.toLowerCase() ===
                    currentTag?.title?.toLowerCase() && 'active',
                  'small'
                ]}
              >
                {tag.title.toLowerCase() ===
                  currentTag?.title?.toLowerCase() && (
                  <motion.div
                    animate
                    layoutId="backdrop"
                    className="backdrop"
                  />
                )}
                <span className="text">
                  {tag.title}
                  <sup>{hitsInTags[tag.title.toLowerCase()]}</sup>
                </span>
              </Button>
            ))}
        </Stack>
      </AnimateSharedLayout>
    </div>
  )
}

export default styled(Filter)(
  ({ theme }) => css`
    display: flex;
    align-items: baseline;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;

    .backdrop {
      position: absolute;
      top: -2px;
      left: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      background: ${theme.colors.text};
      border-radius: ${theme.radius.button};
    }

    .filter-button {
      position: relative;
    }
    .text {
      position: relative;
      z-index: 1;
    }
  `
)
