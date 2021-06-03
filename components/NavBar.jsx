import React, { useEffect } from 'react'

import NavButton from './NavButton'
import NavMenu from './NavMenu'

function NavBar(props) {
  const [navVisible, setNavVisible] = React.useState(false)

  function clickHandler(e) {
    e.preventDefault()
    console.log('button Clicked', navVisible)
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
      <NavMenu navVisible={navVisible}>
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Stack</a>
        <a href="#">Markdown</a>
        <a href="#">Github</a>
        <a href="#">Author</a>
      </NavMenu>
    </nav>
  )
}

export default NavBar
