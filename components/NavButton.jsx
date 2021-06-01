// import styles from './NavButton.module.css'

function NavButton() {
  return (
    <button className="navButton">
      {/* <div className="navButton"> */}
      <div className="navButtonText">Menu</div>
      {/* </div> */}

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

        .navButtonText {
          position: relative;
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
