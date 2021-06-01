// import styles from './NavButton.module.css'

function NavButton() {
  return (
    <button className="navButtonContainer">
      <div className="navButton">
        <div className="navButtonText">Menu</div>
      </div>

      <style jsx>{`
        --navButton-size: calc(var(--navHeight) * 0.8);

        .navButtonContainer {
          border: none;
          position: fixed;
          bottom: calc(var(--navButton-size) / 2);
          transform: translate(0%, 50%);
          right: var(--navButton-position-right);
          background-color: transparent;
          z-index: 103;
          height: var(--navButton-size);
          width: var(--navButton-size));
          cursor: pointer;
        }

        .navButton {
          position: relative;
          top: 0;
          right: 0;
          height: var(--navButton-size);
          width: var(--navButton-size);
          border-radius: 50%;
          z-index: 105;
          overflow: hidden;
          background-color: var(--color-secondary);
        }

        .navButtonText {
          position: relative;
          top: calc(var(--navButton-size) /4);
          width: var(--navButton-size);
          padding-top: 0.25rem;
          font-family: var(font-hero);
          font-size: 1.3rem;
          text-align: center;
          color: red;
          text-shadow: 1px 1px 4px black;
        }
      `}</style>
    </button>
  )
}

export default NavButton
