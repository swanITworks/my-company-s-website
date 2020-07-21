import React from "react"
import classes from "./aboutUs.module.css"
import OurBestItems from "./ourBestItems/ourBestItems"

const AboutUs = () => {

  return (
    <section id={'about'} className={classes.aboutUs}>
      <article className={classes.aboutBox}>
        <div className={classes.leftSide}>
          <p className={classes.title}>ABOUT US</p>
          <p>We are a leading innovation marketing and software house company.</p>
        </div>
        <div className={classes.rightSide}>
          <p>We at Swan IT Works know it can be tedious when cooperating gaining an agreement within the IT industry. Our diverse global team of business practitioners and specialists put <span>your</span> needs as our core <span>focus.</span> Yes, we’re a software house; however, we have diversified experience in production, services, hotel and trade management.
          </p>
          <p className={classes.additionalText}>
            All of us at Swan IT Works are happy to serve your business, whether it’s a small start-up or a large enterprise.
            Most of us are remote, although, if required we can come to you or meet in Central London. We work around you.
          </p>
        </div>
      </article>
      <OurBestItems/>
    </section>
  )
}

export default AboutUs