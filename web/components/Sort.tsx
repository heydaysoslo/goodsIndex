import Button from '@heydays/Button'
import Stack from '@heydays/Stack'
import React from 'react'
import styled, { css } from 'styled-components'

type Sort = {
  className?: string
  sort: string
  sortOptions: string[]
  setSort: () => void
}

const Sort = ({ className, sortOptions, sort: currentSort, setSort }) => {
  return (
    <div className={className}>
      <Stack size="xs" direction="row">
        {sortOptions.map(sort => (
          <Button
            className="sort-button"
            key={`${sort}`}
            onClick={() =>
              currentSort === sort ? setSort('Newest first') : setSort(sort)
            }
            modifiers={sort === currentSort ? ['small', 'active'] : 'small'}
          >
            {sort}
          </Button>
        ))}
      </Stack>
    </div>
  )
}

export default styled(Sort)(({ theme }) => css``)
