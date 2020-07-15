import React from "react"
import { Link } from "gatsby"
import classes from "./navigationItem.module.css"

const navItem = (props) => {
  const scroll = props.isScroll
  let classesArray = [classes.link]

  if (scroll){
    classesArray.push(classes.scroll)
  } else {
    classesArray = [classes.link]
  }
  return (
    <Link to={props.url} className={classesArray.join(' ')} style={props.mobile ? {paddingBottom: '0.5rem'} : null}>{props.text} </Link>
  )
}

export default navItem