import styles from './NavButton.module.css'

function NavButton() {
  return (
    <>
      <div className={styles.navButtonContainer}>
        <div className={styles.navButtonClip}>
          <div className={styles.navButton}>
            <div className={`${styles.navButton} ${styles.navButton___Red}`}></div>
          </div>
        </div>
        <div className={styles.navButtonText}>Menu</div>
      </div>
    </>
  )
}

export default NavButton
