import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import Stagger from '@heydays/animation/Stagger'

const sectionTypes = {
  section: 'pagebuilder/Section.js',
  cardSection: 'pagebuilder/CardSection.js',
  textSection: 'pagebuilder/TextSection.js',
  imageSection: 'pagebuilder/FullImageSection.js',
  textImageSplit: 'pagebuilder/TextImageSplit.js',
  carousel: 'pagebuilder/TextImageSplit.js',
  tabs: 'elements/Tabs.js',
  videoSection: 'pagebuilder/VideoSection',
  glossary: 'pagebuilder/Glossary'
}

const StyledPageBuilder = styled.div(
  ({ theme }) => css`
    .PageBuilder__item:not(:first-of-type) {
      ${theme.spacing.section('mt')};
    }
  `
)

const PageBuilder = ({ sections, ...props }) => {
  return (
    <StyledPageBuilder>
      <Stagger>
        {sections?.map((section, index) => (
          <PageBuilderResolver
            key={section._key}
            section={section}
            {...section}
            {...props}
            prevComp={sections[index - 1] ? sections[index - 1] : null}
            nextComp={sections[index + 1] ? sections[index + 1] : null}
          />
        ))}
      </Stagger>
    </StyledPageBuilder>
  )
}

const PageBuilderResolver = ({ section, ...props }) => {
  const [Component, setComponent] = useState(null)

  useEffect(() => {
    if (sectionTypes[section._type]) {
      // Dynamically import template
      import(`../../components/${sectionTypes[section._type]}`)
        .then(comp => setComponent(() => comp.default))
        .catch(err => console.log(err))
    }
  }, [section])

  return Component ? (
    <Component className="PageBuilder__item" section={section} {...props} />
  ) : null
}

export default PageBuilder
