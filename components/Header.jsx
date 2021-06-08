import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState } from 'react'

function Header(props) {
  const upperThreshold = 100

  const [downPage, setDownPage] = useState(true)

  useScrollPosition(
    ({ currPos }) => {
      setDownPage(currPos.y < upperThreshold)
    },
    [downPage],
    false,
    false,
    300
  )
  return (
    <header className="header">
      <div className="title_block">
        <span>
          <h1 className={`main_title main_title__top ${downPage ? ' small' : ''}`}>
            if (interested){props.language == 'python' ? ':' : '{'}
          </h1>
        </span>
        <span>
          <h2 className="sub_title"></h2>
        </span>
      </div>

      {props.children}

      <p className="main_title">{props.language == 'python' ? '' : '}'}</p>

      <style jsx>
        {`
          .title_block {
            margin-top: 1rem;
            padding-left: 1rem;
            margin-bottom: 8rem;
          }

          .main_title__top {
            position: fixed;
            display: inline;
            top: 0;
            left: 0;
            margin-top: 0;
            width: max-content;
            padding: 1rem;

            border-bottom-right-radius: 1rem;
            border: var(--border-size) solid var(--color-primary);
            border-left: none;
            border-top: none;
            box-shadow: 1px 1px 12px var(--color-primary);
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
            padding: 0.4rem 0.8rem 0.4rem 0.8rem;
          }

          @media only screen and (min-width: 56.25em) {
            .main_title__top {
              padding: var(--padding-base);
              border: var(--border-size) solid var(--color-primary);
              border-top: none;
              border-bottom-left-radius: 1rem;
              left: var(--padding-base);
            }
          }
        `}
      </style>
    </header>
  )
}

export default Header
