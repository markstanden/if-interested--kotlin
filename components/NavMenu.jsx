import Link from 'next/link'

const NavMenu = props => {
  return (
    <div className={`navMenu ${props.navVisible ? `navMenu___isVisible` : ''}`}>
      <style jsx>
        {`
          .navMenu {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: -1;

            background: var(--color-primary);
            border-top: var(--nav-border) solid var(--color-primary);

            transform: scaleY(0);
            transform-origin: bottom;
            transition: transform 0.45s, z-index 1s, opacity 0.1s;
          }

          .navMenu___isVisible {
            box-shadow: -1px -1px 8px var(--color-primary);
            transform: scaleY(1);
            z-index: 10;
            transition: transform 0.25s, z-index 0.3s, opacity 0.3s;
          }

          .navMenu_list {
            margin: var(--margin-base);
            padding: var(--padding-base);

            list-style-type: none;
            opacity: 0;
            transition: opacity 0.25s;

            display: flex;
            flex-flow: row wrap;
            flex-direction: column;
            align-items: flex-start;
          }

          .navMenu_list_items {
            padding: 1.5vh;
            margin: var(--margin-base);
            font-size: var(--nav-font-size);
            font-weight: 600;
            color: white;
            border-radius: 0.8rem;

            display: flex;
            justify-content: center;
            align-items: center;
          }
          .navMenu {
          }

          .navMenu_list_items :hover {
            transform: translate(0, -3px);
            box-shadow: 0.5px 1.5px 15px var(--color-shadow);
          }

          .navMenu_list_items :active {
            transform: translate(0, 0.5px);
            box-shadow: 0.5px 0px 10px var(--color-shadow);
          }

          .navMenu___isVisible .navMenu_list {
            opacity: 1;
            transition: opacity 0.3s ease-in-out 0.3s;
          }

          @media only screen and (min-width: 900px) {
            .navMenu {
              background: var(--color-primary);
            }

            .navMenu_list_items {
              border: none;
              background: none;
              box-shadow: none;

              margin: 0;
              padding: 0;

              display: flex;
              justify-content: center;
              align-items: center;
            }

            .navMenu_list {
              padding: var(--padding-base);
              margin: 0;
              opacity: 0;
              transition: opacity 0.5s ease-in-out;
              max-width: calc(100% - var(--navButton-size) - 2 * (var(--navButton-position) + var(--border-size)));
              height: var(--nav-height);
              flex-flow: row nowrap;
              flex: 1 0 auto;
              justify-content: space-around;
              align-items: center;
              text-align: center;
            }
          }
        `}
      </style>
      {/* iterates the passed children, and adds them to the navbar as unordered list items */}
      <ul className="navMenu_list">
        <li className="navMenu_list_items">
          <Link href="/">Home</Link>
        </li>
        <li className="navMenu_list_items">
          <Link href="/latest">Blog</Link>
        </li>
        <li className="navMenu_list_items">
          <Link href="#">Markdown</Link>
        </li>
        <li className="navMenu_list_items">
          <a href="https://www.github.com/markstanden/">Github</a>
        </li>
        <li className="navMenu_list_items">
          <Link href="#">Author</Link>
        </li>
      </ul>
    </div>
  )
}
export default NavMenu
