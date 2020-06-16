import React from "react"
import Icon from "./01contact_icons_icon/contact_icons_icon"
import '../../../utils/fontawesome'
import classes from "./contact_icons.module.css"

const phones = ["Phone 01: (+032) 3456 7890","Phone 01: (+032) 3456 7890"];
const address = ["Oxford Street","London"];
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