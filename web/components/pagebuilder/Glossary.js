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
  const [hitsInTags, setHitsInTags] = useState({})

  useEffect(() => {
    setHitsInTags(
      glossary.reduce(
        (res, item) => {
          if (Array.isArray(item.tags)) {
            item.tags.forEach(tag => {
              if (res[tag.title.toLowerCase()]) {
                res[tag.title.toLowerCase()] += 1
              } else {
                res[tag.title.toLowerCase()] = 1
              }
            })
          }
          return res
        },
        { all: glossary.length }
      )
    )
  }, [])

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
        <Sticky className="navigation" from="md" top="var(--header-height)">
          <Stack space="sm" spaceEndsStart>
            <Filter
              tags={tags}
              setTag={setTag}
              tag={tag}
              hitsInTags={hitsInTags}
            />
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
                <header className="content-header">
                  <H2 className="title">{item.title}</H2>

                  {item?.tags?.map(tag => (
                    <Button
                      className="filter-button"
                      key={tag._id}
                      modifiers={['small', 'disabled']}
                    >
                      {tag.title}
                      {/* <sup>
                        {findIndex(tags, o => o.title === tag.title) + 1}
                      </sup> */}
                    </Button>
                  ))}
                </header>
                <div className="content">
                  <Editor blocks={item.content} />
                </div>
              </li>
            ))}
        </Stagger>
      </div>
    </Container>
  )
}

export default styled(Glossary)(
  ({ theme }) => css`
    .navigation {
      background: ${theme.colors.background};
      z-index: 999;
      ${theme.spacing.sm('pb')};
    }
    .item {
      list-style: none;
      ${theme.spacing.md('py')};
      border-bottom: ${theme.border.small};
      width: 100%;

      .content {
        max-width: 100%;

        ${theme.bp.lg} {
          max-width: 1300px;
        }
      }

      .content-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        flex-wrap: nowrap;
        ${theme.spacing.md('mb')};
        ${theme.bp.sm} {
          align-items: center;
        }
      }

      .title {
        flex-grow: 1;
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
