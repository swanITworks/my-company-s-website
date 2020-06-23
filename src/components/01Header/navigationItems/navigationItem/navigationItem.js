import React from "react"
import { Link } from "gatsby"
import classes from "./navigationItem.module.css"

const navItem = (props) => {
  const scroll = props.isScroll
  const classesArray = [classes.Link]
  if (scroll){
    classesArray.push(classes.scroll)
  }

  return (
    <Link to={props.url} className={classesArray.join(' ')} scroll={scroll}>{props.text} </Link>
  )
}

export default navItem