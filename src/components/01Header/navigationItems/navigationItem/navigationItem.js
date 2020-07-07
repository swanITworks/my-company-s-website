import React from "react"
import { Link } from "gatsby"
import classes from "./navigationItem.module.css"

const navItem = (props) => {
  const scroll = props.isScroll
  let classesArray = [classes.Link]
  if (scroll){
    classesArray.push(classes.scroll)
  } else {
    classesArray = [classes.Link]
  }

  return (
    <Link to={props.url} className={classesArray.join(' ')} >{props.text} </Link>
  )
}

export default navItem