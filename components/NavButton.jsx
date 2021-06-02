function NavButton() {
  return (
    <button className="navButton">
      <div className="navButton__icon" />
      <style jsx>{`
        .navButton {
          position: fixed;
          bottom: var(--navButton-position);
          right: var(--navButton-position);
          height: var(--navButton-size);
          width: var(--navButton-size);
          border-radius: 50%;
          z-index: 105;
          overflow: hidden;

          border: 4px solid var(--color-primary);
          box-shadow: 0.5px 0.5px 8px var(--color-shadow);
          background-color: var(--color-background);
        }

        .navButton__icon {
          position: relative;
          transform: translate(0%, -200%);
        }
        .navButton__icon,
        .navButton__icon::before,
        .navButton__icon::after {
          width: calc(var(--navButton-size) * 0.5);
          height: calc(var(--size-border) * 0.5);
          background-color: var(--color-primary);
          display: inline-block;
          transition: all 0.1s;
        }

        .navButton__icon::before,
        .navButton__icon::after {
          content: '';
          position: absolute;
          left: 0;
        }

        .navButton__icon::before {
          top: -1rem;
        }
        .navButton__icon::after {
          top: 1rem;
        }

        .navButton:hover .navButton__icon::before {
          top: -0.85rem;
        }
        .navButton:hover .navButton__icon::after {
          top: 0.85rem;
        }
      `}</style>
    </button>
  )
}

export default NavButton
