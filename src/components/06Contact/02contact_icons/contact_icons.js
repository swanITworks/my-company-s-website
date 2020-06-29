import React from "react"
import Icon from "./01contact_icons_icon/contact_icons_icon"
import '../../../utils/fontawesome'
import classes from "./contact_icons.module.css"

const phones = ["+44 7551 784266","+44 7902 474888 "];
const address = ["Wrotham Road 126","London NW1 9SU"];
const email = ["cs@swanitworks.com"];

const Icons = () => {
  return (
    <article className={classes.icons}>
      <Icon title={"Phone"} info={phones} icon={"phone"}/>
      <Icon title={"Address"} info={address} icon={"map-marked-alt"}/>
      <Icon title={"Email"} info={email} icon={"envelope"}/>
    </article>
  )
}

export default Icons