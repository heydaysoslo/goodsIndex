import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

import Pagebuilder from '../pagebuilder/Pagebuilder'
import { H1, H2, P } from '@heydays/Typography'
import Container from '@heydays/Container'
import Search from '../Search'
import Editor from '../editor'
import Filter from '../Filter'
import Button from '@heydays/Button'
import TagCategory from 'components/TagCategory'
import Spacer from '@heydays/Spacer'

const FrontPage = ({
  className,
  title,
  content,
  pagebuilder,
  glossary,
  tags
}) => {
  const [tag, setTag] = useState(null)
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
    setItems(newItems)
  }, [tag, searchTerm])

  return (
    <div className={className}>
      <Container className="Page__container">
        <Filter tags={tags} setTag={setTag} tag={tag} />
        <Search items={glossary} setSearchTerm={setSearchTerm} />
        {tag && <TagCategory tag={tag} />}
        {items.map(item => (
          <li key={item._id} className="item">
            <div className="content">
              <H2>{item.title}</H2>
              <Spacer size="sm" />
              <Editor blocks={item.content} />
            </div>
            <div>
              {item?.tags?.map(tag => (
                <Button modifiers="small">{tag.title}</Button>
              ))}
            </div>
          </li>
        ))}
        {pagebuilder && (
          <div className="Page__content">
            {pagebuilder?.sections && (
              <Pagebuilder sections={pagebuilder.sections} />
            )}
          </div>
        )}
      </Container>
    </div>
  )
}

export default styled(FrontPage)(
  ({ theme }) => css`
    .Page__header {
      ${theme.spacing.sm('mt')}
    }
    .Page__content {
      ${theme.spacing.sm('mt')}
    }

    p {
      margin-bottom: 0;
    }

    .item {
      list-style: none;
      ${theme.spacing.md('py')};
      border-bottom: ${theme.border.small};
      display: flex;
      justify-content: space-between;

      .content {
        max-width: 50ch;
      }
    }
  `
)
