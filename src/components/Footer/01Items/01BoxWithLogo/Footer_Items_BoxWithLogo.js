import React from "react"
import classes from "./Footer_Items_BoxWithLogo.module.css"

const BoxWithLogo = () => {
  return (
    <article className={classes.Box}>
      <p className={classes.logo}>Swan It Works.</p>
      <p className={classes.info}>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo.</p>
      <p className={classes.businessAddressTitle}>BUSINESS ADDRESS:</p>
      <p className={classes.businessAddress}><span>WM SWAN LTD</span><br/>London Oxford Street, 012 United Kingdom.</p>
      <div className={classes.businessPhoneEmail}>
        <div>
          <p className={classes.businessAddressTitle}>BUSINESS PHONE:</p>
          <p className={classes.businessAddress}>+44 15146343120</p>
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