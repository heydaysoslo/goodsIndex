import React from 'react'
import styled, { css } from 'styled-components'

const Filter = ({ className, tags }) => {
  return (
    <div className={className}>
      {tags.map(tag => (
        <button>{tag.title}</button>
      ))}
    </div>
  )
}

export default styled(Filter)(({ theme }) => css``)
