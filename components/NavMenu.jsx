// import styles from './NavMenu.module.css'

function NavMenu(props) {
  return (
    <div className={`navMenu ${props.navVisible ? `navMenu___isVisible` : ''}`}>
      <style jsx>
        {`
          .navMenu {
            height: 0;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;

            color: var(--color-primary);
            background: white;

            border-top: var(--nav-border) solid;

            opacity: 0;
            z-index: -1;

            transition: height 0.75s ease-in-out 0.4s, z-index 1s ease-in-out 1s, opacity 1s ease-in-out 1s;
          }

          .navMenu___isVisible {
            height: var(--nav-height);
            opacity: 1;
            z-index: 10;
            transition: height 0.75s ease-in-out 0.2s, z-index 1s ease-in-out, opacity 1s;
          }

          .navMenu_list {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 2rem;
            display: list-item;
            list-style-type: none;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;

            display: flex;
            flex-flow: row wrap;
            flex-direction: column;
            align-items: flex-start;
          }

          .navMenu_list_items {
            padding-top: 1.5vh;
            font-size: 1.5rem;
            font-weight: 300;
            text-shadow: 0.5px 0.5px 10px var(--color-shadow);
          }
          .navMenu_list_items :hover {
            transform: translate(0, -1px);
            text-shadow: 0.5px 1.5px 10px var(--color-shadow);
          }

          .navMenu_list_items :active {
            transform: translate(0, 0.5px);
            text-shadow: 0.5px 0px 10px var(--color-shadow);
          }

          .navMenu___isVisible .navMenu_list {
            opacity: 1;
            transition: opacity 0.5s ease-in-out 0.3s;
          }

          @media only screen and (min-width: 900px) {
            .navMenu___isVisible {
              height: var(--nav-height);
            }

            .navMenu_list_items {
              font-size: 1.5rem;
              font-weight: 300;
              padding-top: 0.4rem;
            }

            .navMenu_list {
              opacity: 0;
              transition: opacity 0.5s ease-in-out;
              max-width: calc(100% - var(--navButton-size) - 2 * var(--navButton-position));
              padding-right: var(--navButton-size);
              transform: translate(0, 50%);
              flex-flow: row nowrap;
              justify-content: space-around;
            }
          }
        `}
      </style>

      <ul className="navMenu_list">
        <li className="navMenu_list_items">Home</li>
        <li className="navMenu_list_items">Blog</li>
        <li className="navMenu_list_items">Stack</li>
        <li className="navMenu_list_items">Markdown</li>
        <li className="navMenu_list_items">Github</li>
        <li className="navMenu_list_items">Author</li>
      </ul>
    </div>
  )
}
export default NavMenu
