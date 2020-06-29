import React from "react"
import classes from "./Footer_Items_BoxWithLogo.module.css"

const BoxWithLogo = () => {
  return (
    <article className={classes.Box}>
      <p className={classes.logo}>Swan It Works.</p>
      <p className={classes.info}>Software house with strong understanding of business processes. We produce bespoke websites, mobile apps, web apps, desktop software, etc.</p>
      <p className={classes.businessAddressTitle}>BUSINESS ADDRESS:</p>
      <p className={classes.businessAddress}><span>WM SWAN LTD</span><br/>Wrotham Road 126, NW1 9SU London, United Kingdom.</p>
      <div className={classes.businessPhoneEmail}>
        <div>
          <p className={classes.businessAddressTitle}>BUSINESS PHONE:</p>
          <p className={classes.businessAddress}>+44 7551 784266</p>
        </div>
        <div>
          <p className={classes.businessAddressTitle}>BUSINNESS EMAIL:</p>
          <p className={classes.businessAddress}>contact@swanitworks.com</p>
        </div>
      </div>
    </article>
  )
}

export default BoxWithLogo