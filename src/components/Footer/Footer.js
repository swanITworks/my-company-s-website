import React from "react"
import classes from "./footer.module.css"
import BoxWithLogo from "./01Items/01BoxWithLogo/Footer_Items_BoxWithLogo"
import BoxWithSiteMap from "./01Items/02BoxWithSiteMap/Footer_Items_BoxWithSiteMap"
import BoxWithHours from "./01Items/04BoxWithHours/Footer_Items_BoxWithHours"
import BoxWithSubscribe from "./01Items/05BoxWithSubscribe/Footer_Items_BoxWithSubscribe"
import Copyright from "./01Items/06Copyright/Footer_Items_Copyright"
import useTranslations from "../useTranslations.js"

const Footer = () => {

  const { footer: { boxWithLogo, boxWithSiteMap, boxWithHours, subscribe } } = useTranslations();

  return (
    <section id={'footer'} className={classes.footer}>
      <div className={classes.footerBoxes}>
        <BoxWithLogo data={ boxWithLogo }/>
        <BoxWithSiteMap data={ boxWithSiteMap }/>
        <BoxWithHours data={ boxWithHours }/>
        <BoxWithSubscribe data={ subscribe }/>
      </div>
      <Copyright/>
    </section>
  )
}

export default Footer