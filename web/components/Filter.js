import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Button from '@heydays/Button'
import Stack from '@heydays/Stack'
import { AnimateSharedLayout, motion } from 'framer-motion'

const Filter = ({ className, tags, setTag, tag: currentTag }) => {
  const [isAnimationDone, setIsAnimationDone] = useState(true)
  return (
    <div className={className}>
      <AnimateSharedLayout type="crossfade">
        <Stack direction="row" space="xs">
          {tags &&
            tags.map((tag, i) => (
              <Button
                className="filter-button"
                key={tag._id}
                onClick={() => {
                  tag === currentTag ? setTag(null) : setTag(tag)
                  setIsAnimationDone(false)
                }}
                modifiers={[
                  tag.title.toLowerCase() ===
                    currentTag?.title?.toLowerCase() &&
                    isAnimationDone &&
                    'active',
                  'small'
                ]}
              >
                {tag.title.toLowerCase() ===
                  currentTag?.title?.toLowerCase() && (
                  <motion.div
                    onViewportBoxUpdate={() => {
                      setIsAnimationDone(true)
                    }}
                    animate
                    layoutId="backdrop"
                    className="backdrop"
                  />
                )}
                <span className="text">
                  {tag.title}
                  <sup>{i + 1}</sup>
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
    overflow-x: overflow;

    .backdrop {
      position: absolute;
      top: -1px;
      left: -1px;
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background: ${theme.colors.text};
      border-radius: ${theme.radius.button};
    }

    .filter-button {
      position: relative;
      margin-bottom: ${theme?.spacingUnit?.xs};

      ${theme.bp.lg} {
        margin-bottom: 0;
      }
    }
    .text {
      position: relative;
      z-index: 1;
    }
  `
)
