// import styles from './NavMenu.module.css'

function NavMenu(props) {
  return (
    <nav className={`navMenu ${props.navVisible ? `navMenu___isVisible` : ''}`}>
      <style jsx>
        {`
          .navMenu {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;

            font-size: 2rem;
            color: var(--color-primary);
            background: var(--nav-gradient);

            border-top: var(--nav-border) solid;

            height: 0;
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
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            max-width: calc(100% - var(--navButton-size) - 2 * var(--navButton-position));
            margin-top: 2.2rem;
            margin-bottom: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
            display: flex;
            flex-basis: content;
            justify-content: space-around;
            align-items: center;
            list-style-type: none;
          }

          .navMenu_list_items {
            font-size: 1.5rem;
            font-weight: 300;
            text-shadow: 0.5px 0.5px 8px black;
          }

          .navMenu___isVisible .navMenu_list {
            opacity: 1;
            transition: opacity 0.5s ease-in-out 0.3s;
          }

          .navMenu_list :not(:last-child) {
            padding-right: $item-spacing;
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
    </nav>
  )
}
export default NavMenu
