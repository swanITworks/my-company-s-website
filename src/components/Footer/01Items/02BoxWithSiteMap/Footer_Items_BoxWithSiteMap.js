import React from "react"
import classes from "./Footer_Items_BoxWithSiteMap.module.css"
import { Link } from "gatsby"
import locales from "../../../../../config/i18n"
import { LocaleContext } from "../../../../layouts/layout.js"

const BoxWithSiteMap = ( { data: { title, home, aboutUs, whatWeDo, contact  } } ) => {
  
  const { locale } = React.useContext(LocaleContext)
  const path = locales[locale].default
     ? ''
     : `/${locales[locale].path}`

  return (
    <article className={classes.Box}>
      <h4 className={classes.title}>{ title }</h4>
      <div className={classes.items}>
        <Link to={path}>{ home }</Link>
        <Link to={path + '/about'}>{ aboutUs }</Link>
        <Link to={path + '/whatwedo'}><span>{ whatWeDo }</span></Link>
        <Link to={path + '/contact'}>{ contact }</Link>
      </div>
    </article>
  )
}

export default BoxWithSiteMap