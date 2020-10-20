import React, { ReactNode, useLayoutEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import Switch from '@heydays/Switch'
import Container from './elements/Container'
import Logo from './Logo'
import Emoji from '@heydays/Emoji'
import useWindowSize from '@heydays/useWindowSize'

const Header = ({ className, isDark, setIsDark }) => {
  const header = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize({ debounce: 200 })

  useLayoutEffect(() => {
    const height = header?.current?.getBoundingClientRect()?.height
    document.documentElement.style.setProperty('--header-height', height + 'px')
  }, [header, windowSize])

  return (
    <div className={className} ref={header}>
      <Container className="inner">
        <h1 className="Logo">
          <Logo />
          <span className="sans">&nbsp;↳Index</span>
        </h1>
        <div className="menu">
          <button className="item">About</button>
          <button className="item">
            <Emoji label="sunshine emoji">􀆮</Emoji>
            0.12g of CO2
          </button>
          <button
            className="item"
            onClick={() => setIsDark(prevState => !prevState)}
          >
            <Emoji label="half circle emoji">􀀂</Emoji>{' '}
            {isDark ? 'Dark' : 'Light'}
          </button>
        </div>
      </Container>
    </div>
  )
}

export default styled(Header)(
  ({ theme }) => css`
    position: sticky;
    top: 0;
    ${theme.spacing.sm('py')};
    ${theme.spacing.container('px')}
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
      justify-content: space-between;
      align-items: center;
    }

    .item {
      ${theme.spacing.md('mr')};
    }
  `
)
