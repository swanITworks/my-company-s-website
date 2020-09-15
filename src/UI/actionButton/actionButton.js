import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import classes from "./actionButton.module.css"
import { LocaleContext } from "../../layouts/layout"
import locales from "../../../config/i18n"

const ActionButton = ({to,...props}) => {

  const { locale } = React.useContext(LocaleContext);

  const isIndex = to === `/`

 const path = locales[locale].default
    ? to
    : `/${locales[locale].path}${isIndex ? `` : `${to}`}`

  if (props.type === "transparent") {
    return (
      <AnchorLink to={props.onClick} className={classes.actionButtonTransparency} stripHash>{props.text}</AnchorLink>
    )
  } else if (props.type === "orange") {
    return (
      <AnchorLink to={"/contact#contact"} className={classes.orange} stripHash>{props.text}</AnchorLink>
    )
  } else if (props.type === "form") {
    return (
      <button type={"submit"} onClick={props.onClick} className={classes.orange}>{props.text}</button>
    )
  } else {
    return (
      <AnchorLink to={path} className={classes.actionButton} stripHash>{props.text}</AnchorLink>
    )
  }
}

export default ActionButton