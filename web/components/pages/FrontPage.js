import React from 'react'
import styled, { css } from 'styled-components'

import Pagebuilder from '../pagebuilder/Pagebuilder'
import Container from '@heydays/Container'

const FrontPage = ({ className, pagebuilder, tags, glossary }) => {
  return (
    <div className={className}>
      <Container className="Page__container">
        {pagebuilder && (
          <div className="Page__content">
            {pagebuilder?.sections && (
              <Pagebuilder
                sections={pagebuilder.sections}
                tags={tags}
                glossary={glossary}
              />
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
  `
)
