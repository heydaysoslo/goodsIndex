import React from 'react'
import styled, { css } from 'styled-components'
import Button from '@heydays/Button'
import { spacing } from '../styles/utilities'

const Filter = ({ className, tags, setTag, tag: filterTag }) => {
  console.log('Filter -> filterTag', filterTag)
  return (
    <div className={className}>
      {tags.map(tag => (
        <Button
          className="filter-button"
          key={tag._id}
          onClick={() => setTag(tag.title.toLowerCase().trim())}
          modifiers={tag.title.toLowerCase() === filterTag && 'active'}
        >
          {tag.title}
        </Button>
      ))}
    </div>
  )
}

export default styled(Filter)(
  ({ theme }) => css`
    .filter-button {
      ${spacing.sm('mx,mb')};
    }
  `
)
