import React from 'react'
import styled, { css } from 'styled-components'
import Button from '@heydays/Button'

const Filter = ({ className, tags, setTag, tag: filterTag }) => {
  return (
    <div className={className}>
      <p className="sans small">Filter by</p>
      {tags.map((tag, i) => (
        <Button
          className="filter-button"
          key={tag._id}
          onClick={() => setTag(tag)}
          modifiers={[
            tag.title.toLowerCase() === filterTag?.title?.toLowerCase() &&
              'active',
            'small'
          ]}
        >
          {tag.title}
          <sup>{i}</sup>
        </Button>
      ))}
    </div>
  )
}

export default styled(Filter)(
  ({ theme }) => css`
    position: sticky;
    top: var(--header-height);
    display: flex;
    align-items: baseline;
    ${theme.spacing.md('py')};
    width: 100%;
    max-width: 100%;
    overflow-x: overflow;

    .filter-button {
      ${theme.spacing.xs(['mx', 'mb'])};
    }
  `
)
