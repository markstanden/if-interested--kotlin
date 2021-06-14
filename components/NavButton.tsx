type NavButtonProps = {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
  navVisible: boolean
}

const NavButton: React.FC<NavButtonProps> = ({ clickHandler, navVisible }) => {
  return (
    <>
      <button onClick={clickHandler} className="navButton">
        <div
          className={`navButton_icon ${
            navVisible ? 'navButton_icon__navVisible' : ''
          }`}
        />
      </button>

      <style jsx>{`
        .navButton {
          position: fixed;
          bottom: var(--navButton-position);
          right: var(--navButton-position);
          height: var(--navButton-size);
          width: var(--navButton-size);
          border-top-left-radius: 50%;
          z-index: 105;
          overflow: hidden;

          border: var(--border-size) solid var(--color-primary);
          box-shadow: 0.5px 0.5px 18px var(--color-shadow);
          background-color: var(--color-background);
        }

        @media only screen and (min-width: 56.25em) {
          .navButton {
            border-radius: 25%;
          }
        }

        .navButton_icon {
          position: relative;
          transform: translate(0%, -4px);
        }

        .navButton_icon,
        .navButton_icon::before,
        .navButton_icon::after {
          width: calc(var(--navButton-size) * 0.5);
          height: 1px;
          background-color: var(--color-primary);
          display: inline-block;
          transition: all 0.1s;
        }

        .navButton_icon::before,
        .navButton_icon::after {
          content: '';
          position: absolute;
          left: 0;
        }

        .navButton_icon::before {
          top: calc(var(--navButton-size) * -0.15);
        }
        .navButton_icon::after {
          top: calc(var(--navButton-size) * 0.15);
        }

        .navButton_icon__navVisible {
          background-color: transparent;
          transition: background-color 0.1s;
        }
        .navButton_icon__navVisible::before {
          top: calc(var(--navButton-size) / 50%);
          transform: rotate(45deg);
        }
        .navButton_icon__navVisible::after {
          top: calc(var(--navButton-size) / 50%);
          transform: rotate(-45deg);
        }
      `}</style>
    </>
  )
}

export default NavButton
