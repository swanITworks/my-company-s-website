import React from "react";
import classes from "./DrawerToggle.module.css"

const DrawerToggle = (props) => {

  let classesArray = [classes.DrawerToggle]

  if (props.isscroll) {
    classesArray.push(classes.scroll)
  } else { classesArray = [classes.DrawerToggle] }

  return (
    <div onClick={props.onClick} className={classesArray.join(" ")}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};

export default DrawerToggle;