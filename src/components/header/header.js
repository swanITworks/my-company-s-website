import React from "react"
import classes from "./header.module.css"
import NavigationItems from "./navigationItems/navigationItems"
import Logo from "./logo/logo"

const Header = () => (
  <header className={classes.header}>
    <div className={classes.items}>
      <Logo/>
      <NavigationItems/>
    </div>
  </header>
)

export default Header
