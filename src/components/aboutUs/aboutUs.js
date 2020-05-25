import React from "react"
import classes from "./aboutUs.module.css"
import OurBestItems from "./ourBestItems/ourBestItems"

const aboutUs = () => {
  return (
    <section className={classes.aboutUs}>
      <article className={classes.aboutBox}>
        <div className={classes.leftSide}>
          <p className={classes.title}>ABOUT US</p>
          <p>We are the best consulting Company business and innovation marketing</p>
        </div>
        <div className={classes.rightSide}>
          <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            ipsam voluptatem quia voluptas sit aspernatur aut tortor nec commodo ultricies, vitae viverra urna nulla sed
            turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt</p>
          <p className={classes.additionalText}>Sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula ,hendrerit ac nisi
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </article>
      <OurBestItems/>
    </section>
  )
}

export default aboutUs