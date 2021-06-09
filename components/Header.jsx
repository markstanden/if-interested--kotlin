import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState } from 'react'

function Header(props) {
  const upperThreshold = 0

  const [downPage, setDownPage] = useState(false)

  useScrollPosition(
    ({ currPos }) => {
      setDownPage(currPos.y < upperThreshold)
      console.log(currPos)
    },
    [downPage],
    false,
    false,
    300
  )
  return (
    <header className="header">
      <h1 className={`text main_title main_title__top ${downPage ? ' small' : ''}`}>
        if (interested){props.language == 'python' ? ':' : '{'}
      </h1>

      {props.children}

      <p className="main_title">{props.language == 'python' ? '' : '}'}</p>

      <style jsx>
        {`
          .main_title {
            width: 100%;
            margin-bottom: calc(var(--header-size) * 2.5);
          }

          .main_title__top {
            white-space: nowrap;

            position: fixed;
            display: block;
            top: 0;
            left: 0;
            margin-top: 0;
            padding: var(--padding-header);

            border-bottom: var(--border-size) solid var(--color-primary);

            transition: font-size 0.15s;
          }

          .main_title {
            font-family: var(--font-primary);
            font-size: var(--header-size);
            font-weight: 300;

            text-align: left;
            color: var(--color-primary);
            background-color: var(--color-background);
          }

          .small {
            font-size: calc(var(--header-size) * 0.5);
            padding: 0.4rem 0.4rem 0.4rem 0.4rem;
            width: auto;
            border-bottom-right-radius: 1rem;
            border-right: var(--border-size) solid var(--color-primary);
            box-shadow: 1px 1px 12px var(--color-shadow);

            transition: all 0.2s;
          }

          @media only screen and (min-width: 56.25em) {
            .main_title__top {
              left: var(--padding-header);
            }
          }
        `}
      </style>
    </header>
  )
}

export default Header
