import React from "react"
import classes from "./contact_icons_icon.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = (props) => {

  const showItems = (props) => {
    const toShow = []
    if (props.info) {
      props.info.map(item => {
        toShow.push(<p className={classes.info}>{item}</p>)
      })
    }
    return toShow
  }

  return (
    <div className={classes.iconBox}>
      <FontAwesomeIcon size='3x' icon={props.icon} className={classes.logo}/>
      <div className={classes.description}>
        <p className={classes.title}>{props.title}</p>
        <>
          {
            showItems(props)
          }
        </>
      </div>
    </div>
  )
}

export default Icon