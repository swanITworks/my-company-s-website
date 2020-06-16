import React from "react"
import NavItem from "./navigationItem/navigationItem"
import classes from './navigationItems.module.css'

const navigationItems = ( props ) => {

  const scroll = props.isScroll

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavItem key={1} url='/' text='HOME' isScroll={scroll}/>
        </li>
        <li>
          <NavItem key={2} url='/about' text='ABOUT' isScroll={scroll}/>
        </li>
        <li>
          <NavItem key={3} url='/whatwedo' text='WHAT WE DO' isScroll={scroll}/>
        </li>
        <li>
          <NavItem key={4} url='/contact' text='CONTACT' isScroll={scroll}/>
        </li>
      </ul>
    </nav>
  )
}

export default navigationItems