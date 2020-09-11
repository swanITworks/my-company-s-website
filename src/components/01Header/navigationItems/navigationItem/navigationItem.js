import React from "react"
import { Link } from "gatsby"
import { LocaleContext } from "../../../../layouts/layout.js"
import classes from "./navigationItem.module.css"
import locales from "../../../../../config/i18n.js"

const NavItem = ({to,...props}) => {
  
  const { locale } = React.useContext(LocaleContext)
  const scroll = props.isScroll
  let classesArray = [classes.link]

  if (scroll){
    classesArray.push(classes.scroll)
  } else {
    classesArray = [classes.link]
  }

  const isIndex = to === `/`

 const path = locales[locale].default
    ? to
    : `/${locales[locale].path}${isIndex ? `` : `${to}`}`

  return (
    <Link {...props} to={path} className={classesArray.join(' ')} style={props.mobile ? {paddingBottom: '0.5rem'} : null}>{props.text} </Link>
  )
}

export default NavItem