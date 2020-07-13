import React from "react"
import NavigationItems from "../navigationItems/navigationItems"
import classes from "./sideDrawer.module.css"
import NavItem from "../navigationItems/navigationItem/navigationItem"

const sideDrawer = () => {
  return (
    <div className={classes.sideDrawer}>
      <ul>
        <li>
          <NavItem key={1} url='/' text='HOME' isScroll={false}/>
        </li>
        <li>
          <NavItem key={2} url='/about' text='ABOUT' isScroll={false}/>
        </li>
        <li>
          <NavItem key={3} url='/whatwedo' text='WHAT WE DO' isScroll={false}/>
        </li>
        <li>
          <NavItem key={4} url='/contact' text='CONTACT' isScroll={false}/>
        </li>
      </ul>
    </div>
  )
}

export default sideDrawer;