import React, { useEffect } from 'react'

import NavButton from './NavButton'
import NavMenu from './NavMenu'

function NavBar(props) {
  const [navVisible, setNavVisible] = React.useState(false)

  function clickHandler(e) {
    e.preventDefault()
    if (navVisible) {
      setNavVisible(false)
    } else {
      setNavVisible(true)
    }
  }

  return (
    <nav>
      <div onClick={clickHandler}>
        <NavButton navVisible={navVisible} />
      </div>
      <NavMenu navVisible={navVisible}></NavMenu>
    </nav>
  )
}

export default NavBar
