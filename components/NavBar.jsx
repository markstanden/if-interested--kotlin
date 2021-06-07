import React, { useEffect } from 'react'

import Link from 'next/link'

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
        <Link href="/">Home</Link>
        <Link href="/latest">Blog</Link>
        <Link href="#">Stack</Link>
        <Link href="#">Markdown</Link>
        <a href="https://www.github.com/markstanden">Github</a>
        <Link href="#">Author</Link>
      </NavMenu>
    </nav>
  )
}

export default NavBar
