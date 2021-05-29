import styles from './NavMenu.module.scss'

function NavMenu(props) {
  return (
      <nav className={`${styles.navMenu} ${props.visible ? styles.navMenu___isVisible : ''}`}>
        <ul className={styles.navMenu_list}>
          <li className={styles.navMenu_list_items}>Home</li>
          <li className={styles.navMenu_list_items}>Blog</li>
          <li className={styles.navMenu_list_items}>Stack</li>
          <li className={styles.navMenu_list_items}>Markdown</li>
          <li className={styles.navMenu_list_items}>Github</li>
          <li className={styles.navMenu_list_items}>Author</li>
        </ul>
      </nav>
  )
}
export default NavMenu