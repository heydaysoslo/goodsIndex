import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

import Pagebuilder from '../pagebuilder/Pagebuilder'
import { H1, P } from '@heydays/Typography'
import Container from '@heydays/Container'
import { spacing } from '../../styles/utilities'
import Search from '../Search'
import Editor from '../editor'
import Filter from '../Filter'
import Button from '@heydays/Button'

const FrontPage = ({
  className,
  title,
  content,
  pagebuilder,
  glossary,
  tags,
  ...props
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
            .includes(tag.toLowerCase())
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
        <header className="Page__header">
          <P>FrontPage</P>
          {title && <H1>{title}</H1>}
        </header>
        <Search items={glossary} setSearchTerm={setSearchTerm} />
        <Filter tags={tags} setTag={setTag} tag={tag} />
        {searchTerm ||
          (tag && (
            <Button
              onClick={() => {
                setTag(null)
                setSearchTerm(null)
              }}
            >
              Reset
            </Button>
          ))}
        {items.map(item => (
          <li key={item._id}>
            <p>{item.title}</p>
            <Editor blocks={item.content} />
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
      ${spacing.sm('mt')}
    }
    .Page__content {
      ${spacing.sm('mt')}
    }
  `
)
