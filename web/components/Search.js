import React from 'react'
import styled, { css } from 'styled-components'

const Search = ({ className, items, setItems }) => {
  const handleSearch = e => {
    const searchTerm = e.target.value.toLowerCase()
    console.log(items)
    const newItems = items.filter(item => {
      return item.title.toLowerCase().includes(searchTerm)
    })
    setItems(newItems)
  }
  return (
    <div className={className}>
      <input type="search" onChange={handleSearch} />
    </div>
  )
}

export default styled(Search)(({ theme }) => css``)
