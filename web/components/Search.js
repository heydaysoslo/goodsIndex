import React from 'react'
import styled, { css, useTheme } from 'styled-components'
import debounce from 'lodash/debounce'

const Search = ({ className, setSearchTerm }) => {
  const handleSearch = debounce(e => {
    const searchTerm = e.target.value.toLowerCase()
    setSearchTerm(searchTerm)
  }, 300)

  const theme = useTheme()

  return (
    <label htmlFor="search-input" className={className}>
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
          stroke={theme.color.rgba(theme.colors.text, 0.8)}
          strokeWidth="2"
        />
        <path
          d="M18 18L24 24"
          stroke={theme.color.rgba(theme.colors.text, 0.8)}
          strokeWidth="2"
        />
      </svg>

      <input
        id="search-input"
        className="searchBox"
        type="search"
        placeholder="Search"
        onChange={e => {
          e.persist()
          handleSearch(e)
        }}
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

    .icon {
      width: 1em;
      height: 1em;
      margin-right: ${theme.spacingUnit.xs};

      ${theme.bp.sm} {
        width: 0.7em;
        height: 0.7em;
      }
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
