import React from 'react'
import styled, { css } from 'styled-components'

const Filter = ({ className, tags }) => {
  return (
    <div className={className}>
      {tags.map(tag => (
        <button key={tag._id}>{tag.title}</button>
      ))}
    </div>
  )
}

export default styled(Filter)(({ theme }) => css``)
