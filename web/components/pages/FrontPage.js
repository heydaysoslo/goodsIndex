import React from 'react'
import styled, { css } from 'styled-components'

import Pagebuilder from '../pagebuilder/Pagebuilder'

const FrontPage = ({ className, pagebuilder, tags, glossary }) => {
  return (
    <div className={className}>
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
    </div>
  )
}

export default styled(FrontPage)(
  ({ theme }) => css`
    .Page__header {
      ${theme.spacing.sm('mt')}
    }
    .Page__content {
    }

    p {
      margin-bottom: 0;
    }
  `
)
