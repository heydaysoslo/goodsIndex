import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Pagebuilder from '../pagebuilder/Pagebuilder'
import { H1, P } from '@heydays/Typography'
import Container from '@heydays/Container'
import { spacing } from '../../styles/utilities'
import Search from '../Search'
import Editor from '../editor'
import Filter from '../Filter'

const FrontPage = ({
  className,
  title,
  content,
  pagebuilder,
  glossary,
  tags,
  ...props
}) => {
  const [items, setItems] = useState(glossary)
  return (
    <div className={className}>
      <Container className="Page__container">
        <header className="Page__header">
          <P>FrontPage</P>
          {title && <H1>{title}</H1>}
        </header>
        <Search items={glossary} setItems={setItems} />
        <Filter tags={tags} />
        {items.map(item => (
          <li key={item._key}>
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
