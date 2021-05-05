import React, { useEffect, useRef, useState } from 'react'
import styled, { css, useTheme } from 'styled-components'
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  animate
} from 'framer-motion'
import Link from 'next/link'

import Container from './elements/Container'
import Logo from './Logo'
import useWindowSize from '@heydays/useWindowSize'
import Button from '@heydays/Button'
import useSanity from '@heydays/useSanity'
import PageBuilder from '@heydays/Pagebuilder'
import Spacer from '@heydays/Spacer'
import Stack from '@heydays/Stack'

type Props = {
  className?: string
  isDark: boolean
  setIsDark: (cb: (prevState: boolean) => void) => void
}

const ThemeIcon = ({ isOn }) => {
  const theme = useTheme()
  return (
    <svg
      className="button-icon"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={isOn ? { rotate: 180 } : { rotate: 0 }}
        d="M14.9492 27.4922C21.4883 27.4922 26.9023 22.0664 26.9023 15.5391C26.9023 9 21.4766 3.58594 14.9492 3.58594C8.41016 3.58594 2.99609 9 2.99609 15.5391C2.99609 22.0664 8.42188 27.4922 14.9492 27.4922ZM14.9492 25.5V5.57812C20.4688 5.57812 24.8984 10.0078 24.9102 15.5391C24.9219 21.0703 20.4805 25.5 14.9492 25.5Z"
        fill={theme.colors.text}
      />
    </svg>
  )
}

const AboutIcon = ({ isOn }) => {
  const theme = useTheme()
  return (
    <svg
      className="button-icon"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={isOn ? { rotate: 180 } : { rotate: 0 }}
        d="M15.2773 27.1758C21.6406 27.1758 26.9023 21.9023 26.9023 15.5391C26.9023 9.1875 21.6289 3.90234 15.2656 3.90234C8.90234 3.90234 3.62891 9.1875 3.62891 15.5391C3.62891 21.9023 8.91406 27.1758 15.2773 27.1758ZM11.9023 9.46875C12.5938 7.72266 13.5547 6.46875 14.5977 6.08203V9.73828C13.625 9.71484 12.7344 9.62109 11.9023 9.46875ZM15.9453 6.08203C16.9766 6.46875 17.9375 7.72266 18.6289 9.46875C17.8086 9.62109 16.9062 9.71484 15.9453 9.73828V6.08203ZM18.4062 6.41016C19.6602 6.84375 20.7969 7.51172 21.7578 8.39062C21.2305 8.68359 20.6328 8.92969 19.9648 9.14062C19.543 8.05078 19.0156 7.125 18.4062 6.41016ZM8.77344 8.39062C9.73438 7.52344 10.8711 6.84375 12.125 6.41016C11.5273 7.125 10.9883 8.05078 10.5664 9.14062C9.89844 8.92969 9.30078 8.68359 8.77344 8.39062ZM21.0781 14.8594C21.0195 13.2305 20.7852 11.7188 20.3867 10.3828C21.2656 10.1133 22.0508 9.77344 22.6953 9.375C23.9492 10.875 24.7461 12.7734 24.8867 14.8594H21.0781ZM5.65625 14.8594C5.79688 12.7734 6.59375 10.875 7.83594 9.375C8.49219 9.77344 9.26562 10.1133 10.1445 10.3828C9.75781 11.7188 9.51172 13.2305 9.45312 14.8594H5.65625ZM15.9453 14.8594V11.0859C17.0352 11.0508 18.0781 10.9219 19.0508 10.7227C19.4141 11.9766 19.6367 13.3828 19.6953 14.8594H15.9453ZM10.8359 14.8594C10.8945 13.3828 11.1289 11.9766 11.4805 10.7227C12.4531 10.9219 13.4961 11.0508 14.5977 11.0859V14.8594H10.8359ZM5.64453 16.207H9.45312C9.5 17.8594 9.74609 19.4062 10.1445 20.7539C9.27734 21.0234 8.51562 21.3516 7.87109 21.75C6.60547 20.2266 5.79688 18.3164 5.64453 16.207ZM10.8359 16.207H14.5977V20.0508C13.4961 20.0859 12.4531 20.2031 11.4805 20.4141C11.1172 19.1484 10.8828 17.707 10.8359 16.207ZM15.9453 20.0508V16.207H19.6953C19.6484 17.707 19.4141 19.1484 19.0508 20.4141C18.0781 20.2031 17.0352 20.0859 15.9453 20.0508ZM20.3867 20.7539C20.7852 19.4062 21.0312 17.8594 21.0781 16.207H24.8984C24.7578 18.3164 23.9492 20.2383 22.6836 21.75C22.0273 21.3633 21.2539 21.0234 20.3867 20.7539ZM11.9023 21.668C12.7344 21.5156 13.625 21.4219 14.5977 21.3984V25.0547C13.5547 24.668 12.5938 23.4141 11.9023 21.668ZM15.9453 21.3984C16.9062 21.4219 17.8086 21.5156 18.6289 21.668C17.9375 23.4141 16.9766 24.668 15.9453 25.0547V21.3984ZM8.82031 22.7227C9.33594 22.4414 9.91016 22.1953 10.5664 21.9961C10.9766 23.0508 11.4922 23.9414 12.0664 24.6562C10.8477 24.2344 9.74609 23.5664 8.82031 22.7227ZM19.9648 21.9961C20.6211 22.1953 21.207 22.4414 21.7344 22.7344C20.7852 23.5781 19.6836 24.2461 18.4531 24.668C19.0391 23.9531 19.5547 23.0508 19.9648 21.9961Z"
        fill={theme.colors.text}
      />
    </svg>
  )
}
const EnergyIcon = ({ isOn }) => {
  const theme = useTheme()
  return (
    <svg
      className="button-icon"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M16.2305 3.79688C16.2305 3.24609 15.7617 2.77734 15.1992 2.77734C14.6484 2.77734 14.1797 3.24609 14.1797 3.79688V6.25781C14.1797 6.80859 14.6484 7.27734 15.1992 7.27734C15.7617 7.27734 16.2305 6.80859 16.2305 6.25781V3.79688ZM20.9883 8.26172C20.6016 8.66016 20.6016 9.31641 20.9883 9.70312C21.3867 10.1016 22.043 10.1133 22.4414 9.70312L24.1875 7.95703C24.5859 7.55859 24.5859 6.90234 24.1875 6.50391C23.8008 6.11719 23.1445 6.11719 22.7578 6.50391L20.9883 8.26172ZM7.95703 9.70312C8.35547 10.1016 9.01172 10.1016 9.39844 9.70312C9.79688 9.32812 9.79688 8.64844 9.41016 8.26172L7.66406 6.50391C7.28906 6.12891 6.62109 6.11719 6.22266 6.50391C5.83594 6.89062 5.83594 7.55859 6.21094 7.94531L7.95703 9.70312ZM15.1992 9.51562C11.9297 9.51562 9.22266 12.2227 9.22266 15.4922C9.22266 18.7617 11.9297 21.4805 15.1992 21.4805C18.457 21.4805 21.1641 18.7617 21.1641 15.4922C21.1641 12.2227 18.457 9.51562 15.1992 9.51562ZM26.8594 16.5117C27.4219 16.5117 27.8906 16.043 27.8906 15.4922C27.8906 14.9414 27.4219 14.4727 26.8594 14.4727H24.4102C23.8594 14.4727 23.3906 14.9414 23.3906 15.4922C23.3906 16.043 23.8594 16.5117 24.4102 16.5117H26.8594ZM3.53906 14.4727C2.98828 14.4727 2.51953 14.9414 2.51953 15.4922C2.51953 16.043 2.98828 16.5117 3.53906 16.5117H5.98828C6.55078 16.5117 7.01953 16.043 7.01953 15.4922C7.01953 14.9414 6.55078 14.4727 5.98828 14.4727H3.53906ZM22.4297 21.293C22.043 20.9062 21.3867 20.9062 20.9883 21.293C20.6016 21.6797 20.6016 22.3359 20.9883 22.7344L22.7578 24.4922C23.1445 24.8789 23.8008 24.8672 24.1875 24.4805C24.5859 24.0938 24.5859 23.4375 24.1875 23.0391L22.4297 21.293ZM6.21094 23.0273C5.82422 23.4141 5.82422 24.082 6.19922 24.4688C6.58594 24.8555 7.25391 24.8672 7.65234 24.4805L9.39844 22.7344C9.79688 22.3477 9.79688 21.6914 9.41016 21.293C9.02344 20.9062 8.35547 20.9062 7.95703 21.293L6.21094 23.0273ZM16.2305 24.7266C16.2305 24.1758 15.7617 23.707 15.1992 23.707C14.6484 23.707 14.1797 24.1758 14.1797 24.7266V27.1875C14.1797 27.7383 14.6484 28.207 15.1992 28.207C15.7617 28.207 16.2305 27.7383 16.2305 27.1875V24.7266Z"
        fill={theme.colors.text}
        animate={isOn ? { rotate: 180 } : { rotate: 0 }}
      />
    </svg>
  )
}

const Header: React.FC<Props> = ({ className, isDark, setIsDark }) => {
  const header = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize({ debounce: 200 })
  const sanity = useSanity()
  const [showInfo, setShowInfo] = useState<'energy' | 'about' | undefined>(
    undefined
  )
  const [amount, setAmount] = useState('')

  useEffect(() => {
    if (header?.current) {
      const height = header?.current?.getBoundingClientRect()?.height
      document.documentElement.style.setProperty(
        '--header-height',
        height + 'px'
      )
    }
  }, [header, windowSize])

  useEffect(() => {
    animate(0, 0.13, {
      duration: 2,
      onUpdate(value) {
        setAmount(value.toFixed(2))
      }
    })
  }, [])

  return (
    <div className={className} ref={header}>
      <Container>
        <div className="inner">
          <h1 className="Logo">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </h1>
          <Stack className="menu" direction="row" space="sm">
            <Button
              modifiers={
                showInfo === 'about'
                  ? ['small', 'noButton', 'noButtonActive']
                  : ['small', 'noButton']
              }
              className="item"
              onClick={() => {
                if (showInfo !== 'about') {
                  setShowInfo('about')
                } else {
                  setShowInfo(undefined)
                }
              }}
            >
              <AboutIcon isOn={showInfo === 'about'} />
              About
            </Button>
            <Button
              onClick={() => {
                if (showInfo !== 'energy') {
                  setShowInfo('energy')
                } else {
                  setShowInfo(undefined)
                }
              }}
              modifiers={
                showInfo === 'energy'
                  ? ['small', 'noButton', 'noButtonActive']
                  : ['small', 'noButton']
              }
              className="item"
            >
              <EnergyIcon isOn={showInfo === 'energy'} />
              {amount}g
            </Button>
            <Button
              modifiers={['small', 'noButton']}
              className="item"
              onClick={() => setIsDark(prevState => !prevState)}
            >
              <ThemeIcon isOn={isDark} />
              {isDark ? 'Dark' : 'Light'}
            </Button>
          </Stack>
        </div>
        <AnimatePresence>
          {showInfo !== undefined && (
            <motion.div
              initial={{ maxHeight: 0 }}
              exit={{ maxHeight: 0 }}
              animate={{ maxHeight: 999 }}
              transition={{ duration: 1 }}
              className="energy-container"
            >
              <Spacer />
              {showInfo === 'about' && (
                <PageBuilder
                  sections={sanity?.about?.[0]?.pagebuilder?.sections}
                />
              )}
              {showInfo === 'energy' && (
                <PageBuilder
                  sections={sanity?.energy?.[0]?.pagebuilder?.sections}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  )
}

export default styled(Header)(
  ({ theme }) => css`
    ${theme.spacing.sm('py')};
    border-bottom: ${theme.border.small};
    background: ${theme.colors.background};

    ${theme.bp.md} {
      position: sticky;
      top: 0;
      z-index: ${theme.elevation[4]};
    }

    .inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .Logo {
      svg {
        height: 1em;
      }
    }

    .menu {
      margin-left: -0.5em;

      ${theme.bp.md} {
        margin-left: 0;
        transform: translateX(0.5em);
      }
    }

    .item {
      display: flex;
      align-items: center;

      &:hover {
        background-color: ${theme.color.rgba(theme.colors.text, 0.1)};
      }
    }

    .button-icon {
      width: 1em;
      height: 1em;
      margin-right: 0.2em;
    }

    .about-container,
    .energy-container {
      overflow: hidden;
    }
  `
)
