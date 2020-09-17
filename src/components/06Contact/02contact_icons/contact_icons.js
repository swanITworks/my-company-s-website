import React from "react"
import Icon from "./01contact_icons_icon/contact_icons_icon"
import '../../../utils/fontawesome'
import classes from "./contact_icons.module.css"

const phones = ["+44 7551 784266","+44 7902 474888 "];
const address = ["Wrotham Road 126","London NW1 9SU"];
const email = ["hello at swanitworks dot com"];
const Icons = ( { icons }) => {
  return (
    <article className={classes.icons}>
      <Icon title={ icons.phone } info={phones} icon={"phone"}/>
      <Icon title={ icons.address} info={address} icon={"map-marked-alt"}/>
      <Icon title={ icons.email } info={email} icon={"envelope"}/>
    </article>
  )
}

export default Icons