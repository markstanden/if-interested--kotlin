import React, { useEffect } from 'react'

import NavButton from './NavButton'
import NavMenu from './NavMenu'

function NavSystem(props) {
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
    <>
      <div onClick={clickHandler}>
        <NavButton />
      </div>
      <NavMenu visible={navVisible} />
    </>
  )
}

export default NavSystem
