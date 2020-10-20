import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { formatDistanceToNow } from 'date-fns'

import Button from '@heydays/Button'
import Spacer from '@heydays/Spacer'
import Sticky from '@heydays/Sticky'
import { H2 } from '@heydays/Typography'
import Editor from 'components/editor'
import Filter from 'components/Filter'
import Search from 'components/Search'
import Sort from 'components/Sort'
import TagCategory from 'components/TagCategory'
import Stack from '@heydays/Stack'

const Glossary = ({ className, glossary, tags }) => {
  const [tag, setTag] = useState(null)
  const [sort, setSort] = useState(null)
  const [searchTerm, setSearchTerm] = useState(null)
  const [items, setItems] = useState(glossary)

  useEffect(() => {
    let newItems = [...glossary]
    if (searchTerm) {
      newItems = newItems.filter(item => {
        return item.title.toLowerCase().includes(searchTerm)
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
    <div className={className}>
      <Spacer size="sm" />
      <Sticky top="var(--header-height)">
        <Stack size="sm">
          <Filter tags={tags} setTag={setTag} tag={tag} />
          <Sort
            sortOptions={['Newest first', 'Alphabetical', 'Oldest first']}
            setSort={setSort}
            sort={sort}
          />
          <Search items={glossary} setSearchTerm={setSearchTerm} />
        </Stack>
      </Sticky>
      <Spacer />
      {tag && <TagCategory tag={tag} />}
      {items &&
        items.map(item => (
          <li key={item._id} className="item">
            <div className="content">
              <H2>{item.title}</H2>
              <p className="small">
                {formatDistanceToNow(new Date(item._updatedAt), {
                  addSuffix: true,
                  includeSeconds: true
                })}
              </p>
              <Spacer size="sm" />
              <Editor blocks={item.content} />
            </div>
            <div>
              {item?.tags?.map(tag => (
                <Button key={tag._id} modifiers="small">
                  {tag.title}
                </Button>
              ))}
            </div>
          </li>
        ))}
    </div>
  )
}

export default styled(Glossary)(({ theme }) => css``)
