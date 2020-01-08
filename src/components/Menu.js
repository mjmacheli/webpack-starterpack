import React from 'react'
import {Link} from 'react-router-dom'

import './Menu.scss'

const Menu = () => {
  return(
    <nav>
      <Link to='/'><span>Home</span></Link>
      <Link to='/about'><span>About</span></Link>
    </nav>
  )
}

export default Menu
