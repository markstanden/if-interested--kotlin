// Creates a nav menu item from the passed props.children
const createNavItem = (navItem, index) => (
  <li className="navMenu_list_items" id={index}>
    {navItem}
  </li>
)

function NavMenu(props) {
  return (
    <div className={`navMenu ${props.navVisible ? `navMenu___isVisible` : ''}`}>
      <style jsx>
        {`
          .table {
            display: table; /* Allow the centering to work */
            margin: 0 auto;
          }

          .navMenu {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;

            color: var(--color-primary);
            background: white;

            border-top: var(--nav-border) solid;

            opacity: 1;
            z-index: -1;

            transform: scaleY(0);
            transform-origin: bottom;

            transition: transform 0.45s, z-index 1s, opacity 0.1s;
          }

          .navMenu___isVisible {
            transform: scaleY(1);
            opacity: 1;
            z-index: 10;
            transition: transform 0.25s, z-index 0.3s, opacity 0.3s;
          }

          .navMenu_list {
            margin: 0;
            padding: 0.5rem 0 1rem 2rem;

            list-style-type: none;
            opacity: 0;
            transition: opacity 0.25s;

            display: flex;
            flex-flow: row wrap;
            flex-direction: column;
            align-items: flex-start;
          }

          .navMenu_list_items,
          .navMenu_list_items ::child {
            padding-top: 1.5vh;
            font-family: inherit;
            font-size: 2rem;
            font-weight: 600;
            text-shadow: 0.5px 0.5px 10px var(--color-shadow);
          }
          .navMenu_list_items :hover {
            transform: translate(0, -1px);
            text-shadow: 0.5px 1.5px 15px var(--color-shadow);
          }

          .navMenu_list_items :active {
            transform: translate(0, 0.5px);
            text-shadow: 0.5px 0px 10px var(--color-shadow);
          }

          .navMenu___isVisible .navMenu_list {
            opacity: 1;
            transition: opacity 0.3s ease-in-out 0.3s;
          }

          @media only screen and (min-width: 900px) {
            .navMenu___isVisible {
            }

            .navMenu_list_items {
              height: 100%;
              font-size: 3.8rem;
              padding: 0;
            }

            .navMenu_list {
              padding: 2.5rem 0 0rem 0;
              opacity: 0;
              transition: opacity 0.5s ease-in-out;
              max-width: calc(100% - var(--navButton-size) - 2 * var(--navButton-position));

              height: var(--nav-height);
              flex-flow: row nowrap;
              flex: 1 0 auto;
              justify-content: space-around;
            }
          }
        `}
      </style>
      {/* iterates the passed children, and adds them to the navbar as unordered list items */}
      <ul className="navMenu_list">{props.children ? props.children.map(createNavItem) : ''}</ul>
    </div>
  )
}
export default NavMenu
