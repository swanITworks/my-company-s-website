import React, { useEffect, useState } from "react"
import classes from "./header.module.css"
import NavigationItems from "./navigationItems/navigationItems"
import Logo from "./logo/logo"

const Header = () => {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const offset  =() =>  {
      if (window.pageYOffset === 0) {
        setScroll(false)
      } else {
        setScroll(true)
      }
    }
    window.addEventListener("scroll",offset);
    return ()=>window.removeEventListener("scroll",offset);
  },[])

  const classesArray = [classes.header]

  if (scroll) {
    classesArray.push(classes.scroll)
  }

  return (
    <header id={'home'} className={classesArray.join(" ")}>
      <div className={classes.items}>
        <Logo isScroll={scroll}/>
        <NavigationItems isScroll={scroll}/>
      </div>
    </header>
  )
}

export default Header
