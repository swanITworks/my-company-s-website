import React from "react"
import classes from "./sideDrawer.module.css"
import NavItem from "../navigationItems/navigationItem/navigationItem"

const SideDrawer = (props) => {
  let classesArray
  if (props.isscroll) {
    classesArray = [classes.sideDrawerScroll]

  } else {
    classesArray = [classes.sideDrawer]
  }
  return (
    <div className={classesArray.join(" ")}>
      <ul className={classes.listItems}>
        <li>
          <NavItem key={1} url='/' text='HOME' isscroll={false} mobile={true}/>
        </li>
        <li>
          <NavItem key={2} url='/about' text='ABOUT' isscroll={false} mobile={true}/>
        </li>
        <li>
          <NavItem key={3} url='/whatwedo' text='WHAT WE DO' isscroll={false} mobile={true}/>
        </li>
        <li>
          <NavItem key={4} url='/contact' text='CONTACT' isscroll={false} mobile={true}/>
        </li>
      </ul>
    </div>
  )
}

export default SideDrawer