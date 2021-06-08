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

            color: var(--color-primary);
            background: var(--nav-gradient);

            border-top: var(--nav-border) solid;
            opacity: 1;
            z-index: -1;

            transform: scaleY(0);
            transform-origin: bottom;

            transition: transform 0.45s, z-index 1s, opacity 0.1s;
          }

          .navMenu___isVisible {
            box-shadow: -1px -1px 8px var(--color-primary);
            transform: scaleY(1);
            opacity: 1;
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
            padding-top: 1.5vh;
            font-family: inherit;
            font-size: var(--nav-font-size);
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
              padding: 0;
            }

            .navMenu_list {
              padding: var(--padding-base);
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
      <ul className="navMenu_list">
        <li className="navMenu_list_items">
          <Link href="/">Home</Link>
        </li>
        <li className="navMenu_list_items">
          <Link href="/latest">Blog</Link>
        </li>
        <li className="navMenu_list_items">
          <Link href="#">Stack</Link>
        </li>
        <li className="navMenu_list_items">
          <Link href="#">Markdown</Link>
        </li>
        <li className="navMenu_list_items">
          <a href="https://www.github.com/markstanden">Github</a>
        </li>
        <li className="navMenu_list_items">
          <Link href="#">Author</Link>
        </li>
      </ul>
    </div>
  )
}
export default NavMenu
