import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import Switch from '@heydays/Switch'
import Container from './elements/Container'
import Logo from './Logo'
import Emoji from '@heydays/Emoji'
import useWindowSize from '@heydays/useWindowSize'
import Button from '@heydays/Button'
import useSanity from '@heydays/useSanity'
import Editor from './editor'
import PageBuilder from '@heydays/Pagebuilder'
import Spacer from '@heydays/Spacer'

const Header = ({ className, isDark, setIsDark }) => {
  const header = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize({ debounce: 200 })
  const sanity = useSanity()
  const [showAbout, setShowAbout] = useState(false)

  useLayoutEffect(() => {
    const height = header?.current?.getBoundingClientRect()?.height
    document.documentElement.style.setProperty('--header-height', height + 'px')
  }, [header, windowSize])

  return (
    <Container>
      <div className={className} ref={header}>
        <div className="inner">
          <h1 className="Logo">
            <Logo />
            <span className="sans">&nbsp;↳Index</span>
          </h1>
          <div className="menu">
            <Button
              modifiers={['small', 'noButton']}
              className="item"
              onClick={() => setShowAbout(!showAbout)}
            >
              🌐 About
            </Button>
            <Button modifiers={['small', 'noButton']} className="item">
              <Emoji label="sunshine emoji">☀</Emoji>
              0.12g of CO2
            </Button>
            <Button
              modifiers={['small', 'noButton']}
              className="item"
              onClick={() => setIsDark(prevState => !prevState)}
            >
              <Emoji label="half circle emoji">◐</Emoji>{' '}
              {isDark ? 'Dark' : 'Light'}
            </Button>
          </div>
        </div>
        {showAbout && (
          <div>
            <Spacer size="md" />
            <PageBuilder sections={sanity.about[0].pagebuilder.sections} />
            <Spacer />
          </div>
        )}
      </div>
    </Container>
  )
}

export default styled(Header)(
  ({ theme }) => css`
    position: sticky;
    top: 0;
    ${theme.spacing.sm('py')};
    border-bottom: ${theme.border.small};
    background: ${theme.colors.background};

    .inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .Logo {
      display: flex;
      svg {
        height: 1em;
      }
    }

    .menu {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .item:not(:last-of-type) {
      ${theme.spacing.md('mr')};
    }
  `
)
