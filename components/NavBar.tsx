import React, { useEffect } from 'react'

import NavButton from './NavButton'
import NavMenu from './NavMenu'

const NavBar: React.FC = () => {
  const [navVisible, setNavVisible] = React.useState(false)

  useEffect(() => {
    if (navVisible) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [navVisible])

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (navVisible) {
      setNavVisible(false)
    } else {
      setNavVisible(true)
    }
  }

  return (
    <nav>
      <NavButton clickHandler={clickHandler} navVisible={navVisible} />
      <NavMenu navVisible={navVisible} />
    </nav>
  )
}

export default NavBar
