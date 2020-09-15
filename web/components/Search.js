import React from 'react'
import styled, { css } from 'styled-components'
import Button from '@heydays/Button'
import { spacing } from '../styles/utilities'

const Search = ({ className, setSearchTerm }) => {
  const handleSearch = e => {
    const searchTerm = e.target.value.toLowerCase()
    setSearchTerm(searchTerm)
  }
  return (
    <div className={className}>
      <Button
        className="searchBox"
        as="input"
        type="search"
        onChange={handleSearch}
      />
    </div>
  )
}

export default styled(Search)(
  ({ theme }) => css`
    .searchBox {
      width: 100%;
      ${spacing.lg('mb')};
    }
  `
)
