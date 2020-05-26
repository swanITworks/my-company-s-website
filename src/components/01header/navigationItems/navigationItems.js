import React from "react"
import NavItem from "./navigationItem/navigationItem"
import classes from './navigationItems.module.css'

const navigationItems = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavItem url='/' text='HOME'/>
        </li>
        <li>
          <NavItem url='/about' text='ABOUT'/>
        </li>
        <li>
          <NavItem url='/whatwedo' text='WHAT WE DO'/>
        </li>
        <li>
          <NavItem url='/portfolio' text='PORTFOLIO'/>
        </li>
        <li>
          <NavItem url='/contact' text='CONTACT'/>
        </li>
      </ul>
    </nav>
  )
}

export default navigationItems