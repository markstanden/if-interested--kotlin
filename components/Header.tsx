import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState } from 'react'
import SearchBar from './SearchBar'

type HeaderProps = {
  language: string
}

const Header: React.FC<HeaderProps> = ({ children, language }) => {
  const upperThreshold = 0

  const [downPage, setDownPage] = useState(false)

  // Find scroll position of page report if down the page (not at the top)
  useScrollPosition(
    ({ currPos }) => {
      setDownPage(currPos.y < upperThreshold)
      console.log(currPos)
    },
    [downPage],
    this,
    false,
    300,
  )

  return (
    <>
      <header className="header">
        ko
        <div className="text main_title">
          <h1 className={`main_title__top left ${downPage ? ' small' : ''}`}>
            if (interested){language == 'python' ? ':' : '{'}
          </h1>
          {/* <p className={`main_title__top right ${downPage ? ' small' : ''}`}>
            <SearchBar />
          </p> */}
          <p className="main_title__bottom">
            {language == 'python' ? '' : '}'}
          </p>{' '}
        </div>
      </header>

      <style jsx>
        {`
          .FUTURE-main_title {
            width: 100%;
            margin-bottom: calc(var(--header-size) * 2.5);
            border-bottom: 1px solid black;
            height: calc( 1.5 * var(--header-size));
             position fixed;
          }

          .left {
            left: 0;
            text-align: left;
          }

          .right {
            right: 0;
            text-align: right;
          }

          .main_title__top {
            width: 100%;
            white-space: nowrap;

            position: fixed;
            display: block;
            top: 0;

            margin-top: 0;
            padding: var(--padding-header);

            font-family: var(--font-primary);
            font-size: var(--header-size);
            font-weight: 300;

            color: var(--color-primary);
            background-color: var(--color-background);

            border-bottom: var(--border-size) solid var(--color-primary);

            transition: font-size 0.15s;
          }

          .small {
            font-size: calc(var(--header-size) * 0.5);
            padding: 0.4rem 0.4rem 0.4rem 0.4rem;
            width: auto;

            box-shadow: 1px 1px 12px var(--color-shadow);

            transition: all 0.2s;
          }

          .small.left {
            border-bottom-right-radius: 1rem;
            border-right: var(--border-size) solid var(--color-primary);
          }

          .small.right {
            border-bottom-left-radius: 1rem;
            border-left: var(--border-size) solid var(--color-primary);
          }

          @media only screen and (min-width: 56.25em) {
            .main_title__top {
              left: var(--padding-header);
            }
          }
        `}
      </style>
    </>
  )
}

export default Header
