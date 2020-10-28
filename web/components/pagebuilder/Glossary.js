import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import findIndex from 'lodash/findIndex'

import Button from '@heydays/Button'
import Spacer from '@heydays/Spacer'
import Sticky from '@heydays/Sticky'
import { H2 } from '@heydays/Typography'
import Editor from 'components/editor'
import Filter from 'components/Filter'
import Search from 'components/Search'
import Sort from 'components/Sort'
import Stack from '@heydays/Stack'
import Stagger from '@heydays/animation/Stagger'
import Container from '@heydays/Container'
import { blocksToText } from 'utils/sanityHelpers'

const Glossary = ({ className, glossary, tags }) => {
  const [tag, setTag] = useState(null)
  const [sort, setSort] = useState('Newest first')
  const [searchTerm, setSearchTerm] = useState(null)
  const [items, setItems] = useState(glossary)

  /**
   * @note Search, filtering and sorting
   */
  useEffect(() => {
    let newItems = [...glossary]
    if (searchTerm) {
      newItems = newItems.filter(item => {
        const content = blocksToText(item.content)
        return (
          item.title.toLowerCase().includes(searchTerm) ||
          content.includes(searchTerm)
        )
      })
    }
    if (tag) {
      newItems = newItems
        .filter(item => item?.tags?.length > 0)
        .reduce((res, item) => {
          const hasTag = item.tags
            .map(t => t.title.toLowerCase())
            .includes(tag.title.toLowerCase().trim())
          if (hasTag) {
            res.push(item)
          }
          return res
        }, [])
    }
    if (sort === 'Newest first') {
      newItems = newItems.sort((a, b) => (a._updatedAt < b._updatedAt ? 1 : -1))
    } else if (sort === 'Alphabetical') {
      newItems = newItems.sort((a, b) => (a.title < b.title ? -1 : 1))
    } else if (sort === 'OldestFirst') {
      newItems = newItems.sort((a, b) => (b.title < a.title ? -1 : 1))
    }
    setItems(newItems)
  }, [tag, searchTerm, sort])
  return (
    <Container>
      <div className={className}>
        <Sticky from="md" top="var(--header-height)">
          <Stack space="sm" spaceEndsStart className="filter-container">
            <Filter tags={tags} setTag={setTag} tag={tag} />
            <Sort
              sortOptions={['Newest first', 'Alphabetical']}
              setSort={setSort}
              sort={sort}
            />
            <Search items={glossary} setSearchTerm={setSearchTerm} />
          </Stack>
        </Sticky>
        <Spacer />
        {/* {tag && <TagCategory tag={tag} />} */}
        <Stagger as="ul">
          {items &&
            items.map(item => (
              <li key={item._id} className="item">
                <Stack space="sm" className="content">
                  <H2>{item.title}</H2>
                  <Editor blocks={item.content} />
                </Stack>
                <Stack space="xs">
                  {item?.tags?.map(tag => (
                    <Button
                      className="filter-button"
                      key={tag._id}
                      modifiers={['small', 'disabled']}
                    >
                      {tag.title}
                      <sup>
                        {findIndex(tags, o => o.title === tag.title) + 1}
                      </sup>
                    </Button>
                  ))}
                </Stack>
              </li>
            ))}
        </Stagger>
      </div>
    </Container>
  )
}

export default styled(Glossary)(
  ({ theme }) => css`
    .filter-container {
      background: ${theme.colors.background};
    }
    .item {
      list-style: none;
      ${theme.spacing.md('py')};
      border-bottom: ${theme.border.small};

      ${theme.bp.md} {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .content {
        max-width: 50ch;
      }

      .filter-button:first-of-type {
        margin-top: ${theme.spacingUnit.md};

        ${theme.bp.md} {
          margin-top: 0;
        }
      }
    }
  `
)
