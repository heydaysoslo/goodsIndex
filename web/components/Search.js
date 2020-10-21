import React from 'react'
import styled, { css, useTheme } from 'styled-components'
import Button from '@heydays/Button'

const Search = ({ className, setSearchTerm }) => {
  const handleSearch = e => {
    const searchTerm = e.target.value.toLowerCase()
    setSearchTerm(searchTerm)
  }
  const theme = useTheme()
  return (
    <label for="search-input" className={className}>
      <svg
        className="icon"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11"
          cy="11"
          r="10"
          stroke={theme.colors.primary}
          strokeWidth="2"
        />
        <path d="M18 18L24 24" stroke={theme.colors.primary} strokeWidth="2" />
      </svg>

      <input
        id="search-input"
        className="searchBox"
        type="search"
        placeholder="Search"
        onChange={handleSearch}
      />
    </label>
  )
}

export default styled(Search)(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    border: ${theme.border.small};
    ${theme.spacing.xs(['py', 'pl'])};

    &:hover {
      border-style: dashed;
    }

    .icon {
      width: 0.6em;
      height: 0.6em;
      ${theme.spacing.xs('mr')};
    }

    .searchBox {
      width: 100%;
      border: none;
      ${theme.fonts.small()};
      background: none;
      color: ${theme.colors.text};

      &::placeholder {
        color: ${theme.color.rgba(theme.colors.text, 0.8)};
      }

      &:focus {
        outline: none;
      }
    }
  `
)
