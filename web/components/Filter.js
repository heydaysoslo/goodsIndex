import React from 'react'
import styled, { css } from 'styled-components'
import Button from '@heydays/Button'
import Stack from '@heydays/Stack'

const Filter = ({ className, tags, setTag, tag: currentTag }) => {
  return (
    <div className={className}>
      <Stack direction="row" size="xs">
        {tags &&
          tags.map((tag, i) => (
            <Button
              className="filter-button"
              key={tag._id}
              onClick={() => (tag === currentTag ? setTag(null) : setTag(tag))}
              modifiers={[
                tag.title.toLowerCase() === currentTag?.title?.toLowerCase() &&
                  'active',
                'small'
              ]}
            >
              {tag.title}
              <sup>{i}</sup>
            </Button>
          ))}
      </Stack>
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

    .filter-button {
      margin-bottom: ${theme.responsiveSpacing.xs.xs};

      ${theme.bp.lg} {
        margin-bottom: 0;
      }
    }
  `
)
