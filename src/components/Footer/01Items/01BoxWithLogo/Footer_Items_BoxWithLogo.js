import React from "react"
import classes from "./Footer_Items_BoxWithLogo.module.css"

const BoxWithLogo = () => {
  return (
    <article className={classes.Box}>
      <p className={classes.logo}>Swan IT Works.</p>
      <p className={classes.info}>Software house with strong understanding of business processes. We produce bespoke websites, mobile apps, web apps, desktop software, etc.</p>
      <p className={classes.businessAddressTitle}>BUSINESS ADDRESS:</p>
      <p className={classes.businessAddress}><span>WM SWAN LTD</span><br/>Wrotham Road 126, NW1 9SU London, United Kingdom.</p>
      <div className={classes.businessPhoneEmail}>
        <div>
          <p className={classes.businessAddressTitle}>BUSINESS PHONE:</p>
          <p className={classes.businessAddress}>+44 7551 784266</p>
        </div>
        <div>
          <p className={classes.businessAddressTitle}>BUSINESS EMAIL:</p>
          <p className={classes.businessAddress}>&#104;&#101;&#108;&#108;&#111;&#032;&#097;&#116;&#032;&#115;&#119;&#097;&#110;&#105;&#116;&#119;&#111;&#114;&#107;&#115;&#032;&#100;&#111;&#116;&#032;&#099;&#111;&#109;</p>
        </div>
      </div>
    </article>
  )
}

export default BoxWithLogo