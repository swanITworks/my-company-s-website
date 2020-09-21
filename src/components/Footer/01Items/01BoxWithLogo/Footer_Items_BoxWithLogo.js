import React from "react"
import classes from "./Footer_Items_BoxWithLogo.module.css"


const BoxWithLogo = ({ data: { description, adressTitle, phoneTitle, emailTitle } }) => {

  return (
    <article className={classes.Box}>
      <p className={classes.logo}>Swan IT Works.</p>
      <p className={classes.info}>{ description }</p>
      <p className={classes.businessAddressTitle}>{ adressTitle }</p>
      <p className={classes.businessAddress}><span>WM SWAN LTD</span><br/>Wrotham Road 126, NW1 9SU London, United Kingdom.</p>
      <div className={classes.businessPhoneEmail}>
        <div>
          <p className={classes.businessAddressTitle}>{ phoneTitle }</p>
          <p className={classes.businessAddress}>+44 7551 784266</p>
        </div>
        <div>
          <p className={classes.businessAddressTitle}>{ emailTitle }</p>
          <p className={classes.businessAddress}>&#104;&#101;&#108;&#108;&#111;&#032;&#097;&#116;&#032;&#115;&#119;&#097;&#110;&#105;&#116;&#119;&#111;&#114;&#107;&#115;&#032;&#100;&#111;&#116;&#032;&#099;&#111;&#109;</p>
        </div>
      </div>
    </article>
  )
}

export default BoxWithLogo