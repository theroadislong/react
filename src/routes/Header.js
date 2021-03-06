import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/table'>Table</Link></li>
        <li><Link to='/slider'>Slider</Link></li>
        <li><Link to='/elements'>Elements</Link></li>
        <li><Link to='/select'>Select</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;