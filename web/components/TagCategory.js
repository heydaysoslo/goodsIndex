import React from 'react'
import styled, { css } from 'styled-components'
import Editor from './editor'

const TagCategory = ({ className, tag }) => {
  return (
    <div className={className}>
      <h1>{tag?.title}</h1>
      {tag?.description && <Editor blocks={tag.description} />}
    </div>
  )
}

export default styled(TagCategory)(
  ({ theme }) => css`
    border: 1px solid black;
    ${theme.spacing.md('mb,p, mt')};
  `
)
