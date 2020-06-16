import React from "react"
import Dot from "./Dot/dot"
import classes from "./dots.module.css"

const dots = (props) => {
  const dotsQuantity = props.dotsQuantity
  const isShowing = props.isShowing - 1

  const showDots = (quantity, isShowing) => {
    const dots = []
    for (let i = 0; i < quantity; i++) {
      if (i === isShowing) {
        dots.push(<Dot key={i} selected={true}/>)
      } else {
        dots.push(<Dot key={i}/>)
      }
    }
    return dots
  }

  return (
    <div className={classes.dots}>
      {showDots(dotsQuantity, isShowing)}
    </div>
  )
}

export default dots