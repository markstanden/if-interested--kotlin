function NavButton(props) {
  return (
    <button className="navButton">
      <div className={`navButton_icon ${props.navVisible ? 'navButton_icon__navVisible' : ''}`} />
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

        .navButton_icon {
          position: relative;
          transform: translate(0%, -100%);
        }
        .navButton_icon,
        .navButton_icon::before,
        .navButton_icon::after {
          width: calc(var(--navButton-size) * 0.5);
          height: calc(var(--size-border) * 0.5);
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
          top: -1rem;
        }
        .navButton_icon::after {
          top: 1rem;
        }

        //.navButton:hover .navButton_icon::before {top: -0.85rem;}
        //.navButton:hover .navButton_icon::after {top: 0.85rem; }

        .navButton_icon__navVisible {
          background-color: transparent;
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
    </button>
  )
}

export default NavButton
