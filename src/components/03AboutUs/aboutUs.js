import React from "react"
import classes from "./aboutUs.module.css"
import OurBestItems from "./ourBestItems/ourBestItems"

const AboutUs = () => {

  return (
    <section id={'about'} className={classes.aboutUs}>
      <article className={classes.aboutBox}>
        <div className={classes.leftSide}>
          <p className={classes.title}>ABOUT US</p>
          <p>We are the best software house Company and innovation marketing.</p>
        </div>
        <div className={classes.rightSide}>
          <p>Probably already had a chance to cooperate with people from the <span>IT industry. </span>
            We in the past also and know that mutual understanding can be difficult.
             We are <span>business practitioners</span> Thanks that, we will take care of your needs best.</p>
          <p className={classes.additionalText}>We are a software house but our employees also have experience in industry branches such as production, services, hotel, trade and management. Our organization employ specialists from all over the world, use modern working methods, mainly work remotely, but we can also meet at your office or in central London. Every client is welcome, works with small start ups and big enterprises.
          </p>
        </div>
      </article>
      <OurBestItems/>
    </section>
  )
}

export default AboutUs