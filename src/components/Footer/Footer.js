import React from "react"
import classes from "./footer.module.css"
import BoxWithLogo from "./01Items/01BoxWithLogo/Footer_Items_BoxWithLogo"
import BoxWithSiteMap from "./01Items/02BoxWithSiteMap/Footer_Items_BoxWithSiteMap"
import BoxWithTwitter from "./01Items/03BoxWithTwitter/Footer_Items_BoxWithTwitter"
import BoxWithHours from "./01Items/04BoxWithHours/Footer_Items_BoxWithHours"
import BoxWithSubscribe from "./01Items/05BoxWithSubscribe/Footer_Items_BoxWithSubscribe"
import Copyright from "./01Items/06Copyright/Footer_Items_Copyright"

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.footerBoxes}>
        <BoxWithLogo/>
        <BoxWithSiteMap/>
        <BoxWithTwitter/>
        <BoxWithHours/>
        <BoxWithSubscribe/>
      </div>
      <Copyright/>
    </section>
  )
}

export default Footer